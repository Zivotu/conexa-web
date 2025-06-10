const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: node remap-translations.cjs <lang>');
  process.exit(1);
}

const lang = process.argv[2];
const filePath = path.join(__dirname, 'public', 'locales', lang, 'translation.json');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

function flatten(obj, prefix = '') {
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(res, flatten(value, newKey));
    } else {
      res[newKey] = value;
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

const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const flat = flatten(raw);
const remapped = {};
const patterns = [
  ['nav_', 'nav.'],
  ['pricing_page_', 'pricing_page.'],
  ['about_page_', 'about_page.'],
  ['footer_', 'footer.'],
  ['module_alarm_', 'module_alarm.'],
];

for (const [key, value] of Object.entries(flat)) {
  if (!key.startsWith('index.')) {
    if (remapped[key] === undefined) remapped[key] = value;
    continue;
  }
  let rest = key.slice(6); // after 'index.'
  if (rest.startsWith('index_')) {
    const newKey = 'index.' + rest.slice(6);
    if (remapped[newKey] === undefined) remapped[newKey] = value;
    continue;
  }
  let matched = false;
  for (const [pre, rep] of patterns) {
    if (rest.startsWith(pre)) {
      const newKey = rep + rest.slice(pre.length);
      if (remapped[newKey] === undefined) remapped[newKey] = value;
      matched = true;
      break;
    }
  }
  if (!matched) {
    const newKey = 'index.' + rest;
    if (remapped[newKey] === undefined) remapped[newKey] = value;
  }
}

const output = unflatten(remapped);
fs.writeFileSync(filePath, JSON.stringify(output, null, 2), 'utf8');
console.log(`Remapped ${lang} translation saved to ${filePath}`);
