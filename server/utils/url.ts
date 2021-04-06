import { EnvironmentNames } from '@dataTypes/common';

export const getCurrentHostname = (): string => {
  switch (process.env.NODE_ENV) {
    case EnvironmentNames.PRODUCTION:
      return `${process.env.PROD_HOSTNAME}:${process.env.PROD_PORT}`;
    case EnvironmentNames.DEVELOPMENT:
      return `${process.env.DEV_HOSTNAME}:${process.env.DEV_PORT}`;
    default:
      return '';
  }
};
