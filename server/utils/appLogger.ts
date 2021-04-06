import pino, { LoggerOptions } from 'pino';
import expressPino from 'express-pino-logger';

const devConfig: LoggerOptions = {
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: { colorize: true },
  customLevels: {
    db: 35,
  },
};

export const logger = pino(devConfig);
export const expressLoggerMiddleware = expressPino({ logger });
