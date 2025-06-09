// translate-one-language.js
/* eslint-env node */
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;

// CONFIG: odredi jezik koji se sada prevodi (npr. 'ja' ili 'hr')
const targetLang = process.argv[2]; // npr. pokreni s: `node translate-one-language.js hr`

const localesDir = path.resolve(__dirname, 'public/locales');
const baseLang = 'en';

function loadTranslation(lang) {
  const file = path.join(localesDir, lang, 'translation.json');
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : {};
}

async function translateText(text, targetLang) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional translation engine. Return ONLY the translated version, no explanation.',
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
}

(async () => {
  const enTranslations = loadTranslation(baseLang);
  const targetTranslations = loadTranslation(targetLang);
  const updated = { ...targetTranslations };

  let translatedCount = 0;
  let skippedCount = 0;

  for (const key in enTranslations) {
    if (!updated[key]) {
      try {
        const translated = await translateText(enTranslations[key], targetLang);
        updated[key] = translated;
        translatedCount++;
        console.log(`📝 ${key} → ${translated}`);
        // Pauza od 500 ms između prijevoda da izbjegnemo throttling
        await new Promise((res) => setTimeout(res, 500));
      } catch (e) {
        console.warn(`⚠️ Error translating "${key}" to ${targetLang}:`, e.message);
      }
    } else {
      skippedCount++;
    }
  }

  const outPath = path.join(localesDir, targetLang, 'translation.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(updated, null, 2), 'utf-8');

  console.log(`🎉 Finished ${targetLang}! New: ${translatedCount}, Skipped: ${skippedCount}`);
})();
