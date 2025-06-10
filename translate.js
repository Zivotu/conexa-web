/**
 * Translate English locale files to German, Croatian and Spanish using the
 * Google Cloud Translation API. Set GOOGLE_API_KEY in a .env file and then run
 * `node translate.js`.
 * Locale JSON files are read from and written to `src/locales`.
 */
import fs from 'fs/promises';
import { config } from 'dotenv';

config();

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  console.error('GOOGLE_API_KEY not set in .env');
  process.exit(1);
}

const MAX_CHARS = 5000;
const BASE_PATH = 'src/locales';
const BASE_LANG = 'en';
const TARGET_LANGS = ['de', 'hr', 'es'];

function flatten(obj, prefix = '') {
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object') {
      Object.assign(res, flatten(value, newKey));
    } else {
      res[newKey] = String(value);
    }
  }
  return res;
}

function unflatten(obj) {
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const parts = key.split('.');
    let curr = res;
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      if (i === parts.length - 1) {
        curr[p] = value;
      } else {
        curr[p] = curr[p] || {};
        curr = curr[p];
      }
    }
  }
  return res;
}

async function translateText(texts, target) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  const body = {
    q: texts,
    target,
    source: 'en',
    format: 'text',
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Translation API error: ${res.status}`);
  }
  const data = await res.json();
  return data.data.translations.map((t) => t.translatedText);
}

async function main() {
  const baseFile = `${BASE_PATH}/${BASE_LANG}/translation.json`;
  const enContent = JSON.parse(await fs.readFile(baseFile, 'utf8'));
  const flat = flatten(enContent);
  const entries = Object.entries(flat);

  // Split into batches respecting MAX_CHARS
  const batches = [];
  let current = [];
  let size = 0;
  for (const [k, v] of entries) {
    const len = v.length;
    if (size + len > MAX_CHARS && current.length) {
      batches.push(current);
      current = [];
      size = 0;
    }
    current.push([k, v]);
    size += len;
  }
  if (current.length) batches.push(current);

  for (const lang of TARGET_LANGS) {
    const translated = {};
    for (const batch of batches) {
      const texts = batch.map(([, v]) => v);
      const result = await translateText(texts, lang);
      batch.forEach(([key], idx) => {
        translated[key] = result[idx];
      });
    }
    const output = unflatten(translated);
    const destDir = `${BASE_PATH}/${lang}`;
    await fs.mkdir(destDir, { recursive: true });
    const dest = `${destDir}/translation.json`;
    await fs.writeFile(dest, JSON.stringify(output, null, 2));
    console.log(`Saved ${dest}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
