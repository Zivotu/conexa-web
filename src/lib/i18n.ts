import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en/translation.json';
import hr from '@/locales/hr/translation.json';
import de from '@/locales/de/translation.json';
import fr from '@/locales/fr/translation.json';
import tr from '@/locales/tr/translation.json';
import no from '@/locales/no/translation.json';
import pt from '@/locales/pt/translation.json';
import fi from '@/locales/fi/translation.json';
import el from '@/locales/el/translation.json';
import es from '@/locales/es/translation.json';
import it from '@/locales/it/translation.json';
import ru from '@/locales/ru/translation.json';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hr: { translation: hr },
      de: { translation: de },
      fr: { translation: fr },
      tr: { translation: tr },
      no: { translation: no },
      pt: { translation: pt },
      fi: { translation: fi },
      el: { translation: el },
      es: { translation: es },
      it: { translation: it },
      ru: { translation: ru },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
