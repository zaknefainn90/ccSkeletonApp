import { connectToDatabase } from '@utils/mongodbConnect';
import { EnvironmentNames } from '@dataTypes/common';
import app from '@server/app';
import { logger } from '@utils/appLogger';

const envPort = process.env.NODE_ENV === EnvironmentNames.PRODUCTION ? process.env.PROD_PORT : process.env.DEV_PORT;

(async () => {
  if (process.env.DB_NAME) {
    await connectToDatabase(process.env.DB_NAME);
  }

  app().listen(envPort, () => {
    logger.info(`Server started at http://localhost:${envPort} on ENV: ${process.env.NODE_ENV}`);
  });
})();
