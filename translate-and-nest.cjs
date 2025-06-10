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
const targetLangs = ['hr', 'de', 'es', 'fr', 'pt', 'nl', 'ru', 'ja', 'ar', 'bn'];
const delayBetweenRequests = 100;

// --- Provjera API ključa ---
if (!googleTranslationApiKey) {
    console.error("❌ GOOGLE_TRANSLATION_API_KEY nije postavljen u .env.");
    process.exit(1);
}

// --- Ekstrakcija stringova ---
function extractStringsFromFile(content) {
    const matches = [];
    const regex = /(['"`])((?:[A-Za-z0-9][^"'`\n\r{<>]+?))\1/g;

    const classAttrRegex = /(class(Name)?\s*=\s*["'`])([^"'`]+)(["'`])/gi;
    const classWords = new Set();

    // Pronađi sve className i class stringove
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

    let match;
    while ((match = regex.exec(content)) !== null) {
        const str = match[2].trim();

        // ❌ Filtar 1: prekratko ili brojka
        if (str.length <= 3 || !isNaN(str)) continue;

        // ❌ Filtar 2: URL ili path (npr. 'https://...', './some/file', 'react-dom/client')
        if (str.match(/^\.?\.?\//) || str.includes('node_modules') || str.includes('/') || str.includes('\\')) continue;

        // ❌ Filtar 3: čisti naziv paketa (react, react-dom, lucide-react, itd.)
        if (str.match(/^[a-z0-9_-]+\/?[a-z0-9_-]*$/i)) continue;

        // ❌ Filtar 4: niz CSS/Tailwind klasa
        const words = str.split(/\s+/);
        const looksLikeCss = words.length > 1 && words.every(w => /^[a-z0-9-_:/.%]+$/.test(w));
        if (looksLikeCss) continue;

        // ❌ Filtar 5: sve riječi su iz class atributa
        if (words.every(word => classWords.has(word))) continue;

        // ✅ Inače: korisnički tekst
        matches.push(str);
    }

    return matches;
}

// --- Generiranje ključeva ---
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
        if (error.response) {
            console.warn(`⚠️ API Greška (${error.response.status}) "${text}" → ${targetLang}:`, error.response.data.error.message);
        } else {
            console.warn(`⚠️ Zahtjev nije uspio:`, error.message);
        }
        throw new Error(`Neuspješno prevođenje: ${text} → ${targetLang}`);
    }
}

// --- Glavna logika ---
(async () => {
    console.log('🚀 Pokrećem skriptu za prevođenje...');

    if (!fs.existsSync(srcDir)) {
        console.error(`❌ Folder src ne postoji: ${srcDir}`);
        return;
    }

    const files = glob.sync(`${srcDir}/**/*.{tsx,jsx,html}`);
    console.log(`📁 Pronađeno ${files.length} datoteka za skeniranje.`);

    if (files.length === 0) {
        console.log('❌ Nema pronađenih .tsx/.jsx/.html fajlova.');
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
    console.log(`✅ Ažuriran engleski prijevod (${Object.keys(newKeys).length} novih stringova)`);

    for (const lang of targetLangs) {
        console.log(`🌍 Prevođenje za: ${lang.toUpperCase()}`);
        const existing = loadExistingTranslations(lang);
        const updated = { ...existing };
        let count = 0;

        for (const key in newKeys) {
            if (!updated[key]) {
                try {
                    const original = newKeys[key];
                    const translated = await translateText(original, lang);
                    updated[key] = translated;
                    count++;
                    console.log(`📝 ${lang}: ${key} = "${translated}"`);
                    await new Promise((r) => setTimeout(r, delayBetweenRequests));
                } catch (e) {
                    console.warn(`⚠️ Greška u prijevodu (${lang}) za ključ "${key}":`, e.message);
                    updated[key] = newKeys[key]; // fallback
                }
            }
        }

        const filePath = path.join(localesDir, lang, 'translation.json');
        const nested = unflattenObject(updated);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(nested, null, 2), 'utf-8');
        console.log(`✅ Spremljeno: ${filePath} (${count} novih prijevoda)`);
    }

    console.log('\n🎉 Svi prijevodi su završeni.');
})();
