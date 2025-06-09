import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../public/locales/en/translation.json';
import deTranslation from '../../public/locales/de/translation.json';
import hrTranslation from '../../public/locales/hr/translation.json';
import esTranslation from '../../public/locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
      hr: {
        translation: hrTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
