import express, { Express } from 'express';
import path from 'path';
import getRoutes from '@routes/index';
import { EnvironmentNames } from '@dataTypes/common';
import { expressLoggerMiddleware } from '@utils/appLogger';

const getProdPath = (): string => path.join(__dirname, '..', '..', 'public');
const getDevelopPath = (): string => path.join(__dirname, '..', '..', 'build', 'web');

const runApp = (): Express => {
  const app = express();
  const appPath = process.env.NODE_ENV === EnvironmentNames.PRODUCTION ? getProdPath() : getDevelopPath();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(appPath));
  app.use('/locales', express.static(path.join(__dirname, '..', '..', 'build', 'server', 'locales')));
  app.use(expressLoggerMiddleware);
  app.use('/', getRoutes());

  return app;
};

export default runApp;
