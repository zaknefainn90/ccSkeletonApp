import i18next from 'i18next';
import i18nextBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export function initTranslations() {
  i18next
    .use(i18nextBackend) // passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
      debug: true,
      lng: 'en',
      fallbackLng: 'en',
      preload: ['en'],
      ns: ['translation'],
      defaultNS: 'translation',
      backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
    });
}
