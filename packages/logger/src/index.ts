import { initSentry } from './sentry';
import * as SentryInstance from './sentry';

interface SentryOptionsProps {
  sampleRate?: number;
}

const getLogger = () => {
  if (__SERVER__) {
    // eslint-disable-next-line global-require
    const ServerLogger = require('./server');
    return ServerLogger.default;
  }
  return SentryInstance;
};

export function initLogger(logDir: string, options: SentryOptionsProps = { sampleRate: 0.5 }) {
  if (__SERVER__) {
    // eslint-disable-next-line global-require
    const createLogger = require('./server/winston').default;
    createLogger(logDir);
  }
  initSentry(options);
}
// eslint-disable-next-line import/prefer-default-export
export const logger = getLogger();
