/* eslint-env node */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const axios = require('axios');
require('dotenv').config(); // Učitava varijable iz .env datoteke

// --- Konfiguracija ---
const googleTranslationApiKey = process.env.GOOGLE_TRANSLATION_API_KEY;
const srcDir = path.resolve(__dirname, 'src');
const localesDir = path.resolve(__dirname, 'public/locales');
const baseLang = 'en';
const targetLang = process.argv[2] || 'hr'; // koristi prvi CLI argument ili default 'hr'
const delayBetweenRequests = 100;

// --- Provjera API ključa ---
if (!googleTranslationApiKey) {
    console.error("❌ GOOGLE_TRANSLATION_API_KEY nije postavljen u .env.");
    process.exit(1);
}

// --- Ekstrakcija stringova ---
function extractStringsFromFile(content) {
    const matches = new Set();

    const classAttrRegex = /(class(Name)?\s*=\s*["'`])([^"'`]+)(["'`])/gi;
    const classWords = new Set();

    let classMatch;
    while ((classMatch = classAttrRegex.exec(content)) !== null) {
        const classValue = classMatch[3].trim();
        const words = classValue.split(/\s+/);
        words.forEach(word => {
            if (/^[a-z0-9-_:/.%]+$/.test(word)) {
                classWords.add(word);
            }
        });
    }

    const stringLiteralRegex = /(['"`])((?:[A-Za-z0-9][^"'`\n\r{<>]+?))\1/g;
    let literalMatch;
    while ((literalMatch = stringLiteralRegex.exec(content)) !== null) {
        const str = literalMatch[2].trim();
        if (shouldSkip(str, classWords)) continue;
        matches.add(str);
    }

    const jsxTextRegex = />\s*([^<>{}"']{4,}?)\s*</g;
    let jsxMatch;
    while ((jsxMatch = jsxTextRegex.exec(content)) !== null) {
        const str = jsxMatch[1].trim();
        if (shouldSkip(str, classWords)) continue;
        matches.add(str);
    }

    return Array.from(matches);
}

function shouldSkip(str, classWords) {
    if (
        str.length <= 3 ||
        str.startsWith('http') ||
        str.match(/^\.?\.?\//) || // ./path
        str.includes('/') || str.includes('\\') ||
        !isNaN(str) ||
        /^[a-z0-9_-]+$/i.test(str)
    ) {
        return true;
    }

    const words = str.split(/\s+/);
    if (words.length > 1 && words.every(w => /^[a-z0-9-_:/.%]+$/.test(w))) return true;
    if (words.every(w => classWords.has(w))) return true;

    return false;
}

function generateKey(str, prefix = 'index') {
    return `${prefix}.${str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 60)}`;
}

function loadExistingTranslations(lang) {
    const file = path.join(localesDir, lang, 'translation.json');
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : {};
}

function unflattenObject(data) {
    const result = {};
    for (const key in data) {
        const keys = key.split('.');
        keys.reduce((acc, part, i) => {
            if (i === keys.length - 1) {
                acc[part] = data[key];
            } else {
                acc[part] = acc[part] || {};
            }
            return acc[part];
        }, result);
    }
    return result;
}

async function translateText(text, targetLang) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${googleTranslationApiKey}`;
    try {
        const response = await axios.post(url, {
            q: text,
            target: targetLang,
            format: 'text',
            source: baseLang
        });
        return response.data.data.translations[0].translatedText.trim();
    } catch (error) {
        console.warn(`⚠️ Greška za "${text}" → ${targetLang}:`, error.message);
        return text;
    }
}

// --- Glavna logika ---
(async () => {
    console.log(`🚀 Prevođenje samo za jezik: ${targetLang.toUpperCase()}`);

    const files = glob.sync(`${srcDir}/**/*.{tsx,jsx,html}`);
    if (files.length === 0) {
        console.error('❌ Nema pronađenih fajlova.');
        return;
    }

    const allStrings = new Set();
    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        extractStringsFromFile(content).forEach((s) => allStrings.add(s));
    }

    const enJson = loadExistingTranslations(baseLang);
    const newKeys = {};

    for (const str of allStrings) {
        const key = generateKey(str, 'index');
        if (!enJson[key]) {
            enJson[key] = str;
            newKeys[key] = str;
        }
    }

    const enPath = path.join(localesDir, baseLang, 'translation.json');
    const nestedEn = unflattenObject(enJson);
    fs.mkdirSync(path.dirname(enPath), { recursive: true });
    fs.writeFileSync(enPath, JSON.stringify(nestedEn, null, 2), 'utf-8');
    console.log(`✅ Ažuriran EN (${Object.keys(newKeys).length} novih stringova)`);

    const existing = loadExistingTranslations(targetLang);
    const updated = { ...existing };
    let count = 0;

    for (const key in newKeys) {
        if (!updated[key]) {
            const original = newKeys[key];
            const translated = await translateText(original, targetLang);
            updated[key] = translated;
            count++;
            console.log(`📝 ${targetLang}: ${key} = "${translated}"`);
            await new Promise((r) => setTimeout(r, delayBetweenRequests));
        }
    }

    const filePath = path.join(localesDir, targetLang, 'translation.json');
    const nested = unflattenObject(updated);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(nested, null, 2), 'utf-8');
    console.log(`✅ Spremljeno: ${filePath} (${count} novih prijevoda)`);

    console.log('🎉 Gotovo.');
})();
