/* eslint-env node */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const axios = require('axios');
require('dotenv').config(); // Učitava varijable iz .env datoteke

// --- Konfiguracijske varijable ---
// Ovdje ćeš unijeti svoj Google Cloud Translation API ključ
const googleTranslationApiKey = process.env.GOOGLE_TRANSLATION_API_KEY; 

const srcDir = path.resolve(__dirname, 'src');
const localesDir = path.resolve(__dirname, 'public/locales');
const baseLang = 'en';
// Google Translation API koristi BCP-47 kodove jezika.
// Provjeri listu podržanih kodova ako imaš problema:
// https://cloud.google.com/translate/docs/languages
const targetLangs = ['hr', 'de', 'es', 'fr', 'pt', 'nl', 'ru', 'ja', 'ar', 'bn']; 
const delayBetweenRequests = 100; // Manja pauza (100ms) je dovoljna za Google Translation API

// Provjera je li Google Translation API ključ postavljen
if (!googleTranslationApiKey) {
    console.error("Greška: GOOGLE_TRANSLATION_API_KEY nije postavljen u .env datoteci.");
    console.error("Molimo dodajte GOOGLE_TRANSLATION_API_KEY='vaš_ključ_ovdje' u vašu .env datoteku.");
    process.exit(1); // Prekida izvršavanje skripte
}

// --- Funkcije za ekstrakciju i generiranje ključeva (nepromijenjene) ---
function extractStringsFromFile(content) {
    const regex = /(['"`])((?:[A-Za-z0-9][^"'`\n\r{<>]+?))\1/g;
    const matches = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        const str = match[2].trim();
        if (
            str.length > 3 &&
            !str.startsWith('http') &&
            !str.includes('{') &&
            !str.includes('<') &&
            isNaN(str) &&
            !/^([a-z0-9_]+)$/.test(str)
        ) {
            matches.push(str);
        }
    }
    return matches;
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

// --- Izmijenjena funkcija za prevođenje pomoću Google Cloud Translation API-ja ---
async function translateText(text, targetLang) {
    const googleTranslateUrl = `https://translation.googleapis.com/language/translate/v2?key=${googleTranslationApiKey}`;
    
    try {
        const response = await axios.post(googleTranslateUrl, {
            q: text,             // Tekst za prevođenje
            target: targetLang,  // Ciljani jezik
            format: 'text',      // Format ulaznog teksta
            source: baseLang     // Eksplicitno navedi izvorni jezik (npr. 'en')
        });

        // Google Translate vraća rezultat unutar response.data.data.translations[0].translatedText
        return response.data.data.translations[0].translatedText.trim();

    } catch (error) {
        // Detaljnije logiranje grešaka za Google Translate API
        if (error.response) {
            console.warn(`⚠️ Greška Google Translate API za "${text}" na ${targetLang} (Status: ${error.response.status}): ${error.response.data.error.message}`);
            // Google Translate obično vraća grešku 400 (Bad Request) ili 403 (Forbidden) za probleme s API ključem ili kvotama
            // 429 je manje vjerojatan ovdje, ali ako se pojavi, to bi bio problem s kvotom
        } else if (error.request) {
            console.warn(`⚠️ Nema odgovora od Google Translate servera za "${text}":`, error.request);
        } else {
            console.warn(`⚠️ Greška pri postavljanju zahtjeva za Google Translate "${text}":`, error.message);
        }
        // U slučaju greške, baci je dalje kako bi se uhvatila u glavnoj petlji
        throw new Error(`Nije uspjelo prevođenje "${text}" na ${targetLang} pomoću Google Translate.`);
    }
}

// --- Glavna izvršna logika ---
(async () => {
    console.log('Početak prevođenja...');
    const files = glob.sync(`${srcDir}/**/*.{tsx,jsx,html}`);
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
    console.log(`✅ English base updated (${Object.keys(newKeys).length} new strings)`);

    // Prevedi nove ključeve na ciljane jezike
    for (const lang of targetLangs) {
        console.log(`\n▶️ Pokrećem prevođenje za jezik: ${lang.toUpperCase()}`);
        const existing = loadExistingTranslations(lang);
        const updated = { ...existing };
        let translationsCount = 0;

        for (const key in newKeys) {
            // Prevedi samo ako prijevod već ne postoji u postojećim prijevodima za taj jezik
            if (!updated[key]) {
                try {
                    const originalText = newKeys[key];
                    const translated = await translateText(originalText, lang);
                    updated[key] = translated;
                    translationsCount++;
                    console.log(`📝 ${lang}: ${key} ("${originalText}") → "${translated}"`);
                    // Mala pauza između zahtjeva da se izbjegnu potencijalni problemi (iako rjeđi s Google Translate)
                    await new Promise((r) => setTimeout(r, delayBetweenRequests)); 
                } catch (e) {
                    console.warn(`⚠️ Nije uspjelo prevođenje "${key}" na ${lang}. Postavljen fallback na engleski:`, e.message);
                    updated[key] = newKeys[key]; // Fallback na engleski tekst
                }
            }
        }

        const filePath = path.join(localesDir, lang, 'translation.json');
        const nested = unflattenObject(updated);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(nested, null, 2), 'utf-8');
        console.log(`🌍 Spremljeno: ${filePath} (${translationsCount} novih prijevoda)`);
    }

    console.log('\n🎉 Svi prijevodi su završeni.');
})();