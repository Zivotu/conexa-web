import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    backend: {
      // Use BASE_URL to resolve the translations relative to the Vite base
      // path so that they load correctly regardless of the deployment
      // subfolder
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
  });

export default i18n;
