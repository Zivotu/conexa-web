/* eslint-env node */
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const targetLang = process.argv[2]; // primjer: "hr"

if (!targetLang) {
  console.error('❌ Molimo navedi jezik: node translate-one-language.js hr');
  process.exit(1);
}

const localesDir = path.resolve(__dirname, 'public/locales');
const baseLang = 'en';

function loadTranslation(lang) {
  const file = path.join(localesDir, lang, 'translation.json');
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : {};
}

function looksLikeCssClass(str) {
  return (
    /^[a-z0-9_-]+$/.test(str) && // sve mala slova, brojevi, underscore/crtica
    (str.includes('-') || str.includes('_')) &&
    !str.includes(' ') && str.length <= 80
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
        console.warn(`⏳ Rate limited. Waiting 10 seconds before retrying...`);
        await new Promise(res => setTimeout(res, 10000));
      } else {
        throw err;
      }
    }
  }
  throw new Error(`⚠️ Failed to translate after ${retries} attempts`);
}

(async () => {
  const enTranslations = loadTranslation(baseLang);
  const targetTranslations = loadTranslation(targetLang);
  const updated = { ...targetTranslations };

  let translated = 0;
  let skipped = 0;
  let counter = 0;

  for (const key in enTranslations) {
    const text = enTranslations[key];

    if (updated[key]) {
      skipped++;
      continue;
    }

    if (looksLikeCssClass(text)) {
      updated[key] = text; // skip translating Tailwind or CSS-like content
      skipped++;
      continue;
    }

    try {
      const translatedText = await translateWithRetry(text, targetLang);
      updated[key] = translatedText;
      translated++;
      console.log(`📝 ${key} → ${translatedText}`);
      counter++;

      if (counter % 10 === 0) {
        console.log('⏸️ Pausing for 5 seconds...');
        await new Promise(res => setTimeout(res, 5000));
      } else {
        await new Promise(res => setTimeout(res, 500)); // throttle requests
      }
    } catch (e) {
      console.warn(`⚠️ Error translating "${key}":`, e.message);
      updated[key] = text; // fallback to English
    }
  }

  const outPath = path.join(localesDir, targetLang, 'translation.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(updated, null, 2), 'utf-8');

  console.log(`✅ ${targetLang} done. New: ${translated}, Skipped: ${skipped}`);
})();
