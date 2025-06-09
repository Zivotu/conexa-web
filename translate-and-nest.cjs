/* eslint-env node */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const axios = require('axios');
require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const srcDir = path.resolve(__dirname, 'src');
const localesDir = path.resolve(__dirname, 'public/locales');
const baseLang = 'en';
const targetLangs = ['hr', 'de', 'es', 'fr', 'pt', 'nl', 'ru', 'ja', 'ar', 'bn'];

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

async function translateText(text, targetLang) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a translation engine. Return only the translated version of the input.',
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

  for (const lang of targetLangs) {
    const existing = loadExistingTranslations(lang);
    const updated = { ...existing };

    for (const key in newKeys) {
      if (!updated[key]) {
        try {
          const translated = await translateText(newKeys[key], lang);
          updated[key] = translated;
          console.log(`📝 ${lang}: ${key} → ${translated}`);
          await new Promise((r) => setTimeout(r, 1000)); // Prevent rate limit
        } catch (e) {
          console.warn(`⚠️ Failed: ${key} to ${lang}:`, e.message);
          updated[key] = newKeys[key]; // fallback
        }
      }
    }

    const filePath = path.join(localesDir, lang, 'translation.json');
    const nested = unflattenObject(updated);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(nested, null, 2), 'utf-8');
    console.log(`🌍 Saved: ${filePath}`);
  }

  console.log('🎉 All translations complete.');
})();
