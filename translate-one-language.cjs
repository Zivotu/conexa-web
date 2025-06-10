/* eslint-env node */
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const targetLang = process.argv[2]; // npr. "hr"

if (!targetLang) {
  console.error('❌ Molimo navedi jezik: node translate-one-language.cjs hr');
  process.exit(1);
}

const localesDir = path.resolve(__dirname, 'public/locales');
const baseLang = 'en';

// --- Helpers za flatten / unflatten ---
function flattenTranslations(obj, prefix = '') {
  const result = {};
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenTranslations(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

function unflattenTranslations(flat) {
  const result = {};
  for (const key in flat) {
    const keys = key.split('.');
    keys.reduce((acc, part, i) => {
      if (i === keys.length - 1) {
        acc[part] = flat[key];
      } else {
        acc[part] = acc[part] || {};
      }
      return acc[part];
    }, result);
  }
  return result;
}

function loadTranslation(lang) {
  const file = path.join(localesDir, lang, 'translation.json');
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : {};
}

function looksLikeCssClass(str) {
  const words = str.trim().split(/\s+/);
  return (
    words.length &&
     words.every(w => /^[a-z0-9_:/.\-]+$/.test(w)) && // ispravljen regex
    str.length <= 80
  );
}

async function translateWithRetry(text, targetLang, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a professional translation engine. Return ONLY the translated version.',
            },
            {
              role: 'user',
              content: `Translate this to ${targetLang}: ${text}`,
            },
          ],
          temperature: 0.2,
        },
        {
          headers: {
            Authorization: `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.choices[0].message.content.trim();
    } catch (err) {
      if (err.response?.status === 429) {
        console.warn(`⏳ Rate limited. Waiting 10 seconds...`);
        await new Promise(res => setTimeout(res, 10000));
      } else {
        throw err;
      }
    }
  }
  throw new Error(`⚠️ Failed after ${retries} retries`);
}

// --- Glavna logika ---
(async () => {
  const enNested = loadTranslation(baseLang);
  const targetNested = loadTranslation(targetLang);

  const enFlat = flattenTranslations(enNested);
  const targetFlat = flattenTranslations(targetNested);
  const updated = { ...targetFlat };

  let translated = 0;
  let skipped = 0;
  let count = 0;

  for (const key in enFlat) {
    const text = enFlat[key];

    if (updated[key]) {
      skipped++;
      continue;
    }

    if (looksLikeCssClass(text)) {
      updated[key] = text; // skip
      skipped++;
      continue;
    }

    try {
      const translatedText = await translateWithRetry(text, targetLang);
      updated[key] = translatedText;
      translated++;
      console.log(`📝 ${key} → ${translatedText}`);
      count++;

      if (count % 10 === 0) {
        console.log('⏸️ Pauza 5 sekundi...');
        await new Promise(res => setTimeout(res, 5000));
      } else {
        await new Promise(res => setTimeout(res, 500)); // throttle
      }
    } catch (e) {
      console.warn(`⚠️ Greška kod "${key}":`, e.message);
      updated[key] = text; // fallback to English
    }
  }

  const outPath = path.join(localesDir, targetLang, 'translation.json');
  const nestedOut = unflattenTranslations(updated);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(nestedOut, null, 2), 'utf-8');

  console.log(`\n✅ ${targetLang} gotov. Novi: ${translated}, Preskočeno: ${skipped}`);
})();
