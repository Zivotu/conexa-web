import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const modules = import.meta.glob('../../public/locales/*/translation.json', { eager: true });

type Resources = Record<string, { translation: any }>;

const resources: Resources = {};
export const supportedLanguages: string[] = [];

for (const path in modules) {
  const match = path.match(/public\/locales\/([^/]+)\/translation\.json$/);
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
    interpolation: {
      escapeValue: false,
    },
    detection: {
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;
