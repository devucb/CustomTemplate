import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './languages/en.json';
import tr from './languages/tr.json';
import de from './languages/de.json';

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
  de: {
    translation: de,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});
