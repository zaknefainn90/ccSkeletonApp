import i18next from 'i18next';
import i18nextBackend from 'i18next-http-backend';
import { logger } from '@utils/appLogger';
import { getCurrentHostname } from '@utils/url';

const config = {
  lng: 'en',
  fallbackLng: 'en',
  preload: ['en'],
  ns: ['translation'],
  defaultNS: 'translation',
  backend: {
    loadPath: `${getCurrentHostname()}/locales/{{lng}}/{{ns}}.json`,
  },
};

export default function translationsRoute(): void {
  i18next.use(i18nextBackend).init(config, (err) => {
    if (err) {
      logger.error(`i18next error: ${err}`);
    }
  });
}
