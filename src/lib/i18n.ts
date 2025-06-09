import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Load locale files from the src directory so they can be imported by Vite
const modules = import.meta.glob('../locales/*/translation.json', { eager: true });

type Resources = Record<string, { translation: any }>;

const resources: Resources = {};
export const supportedLanguages: string[] = [];

for (const path in modules) {
  const match = path.match(/locales\/([^/]+)\/translation\.json$/);
  if (match) {
    const lang = match[1];
    supportedLanguages.push(lang);
    resources[lang] = { translation: (modules[path] as any).default };
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'querystring'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;
