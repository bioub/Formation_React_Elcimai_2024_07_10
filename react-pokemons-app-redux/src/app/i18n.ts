import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextHttpBackend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(i18nextHttpBackend)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // react echappe déjà
    },
  });