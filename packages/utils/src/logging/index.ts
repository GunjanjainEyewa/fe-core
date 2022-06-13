import ravenInstance from './raven';

const getLogger = () => {
  if (__SERVER__) {
    // eslint-disable-next-line global-require
    const ServerLogger = require('./server');
    return ServerLogger.default;
  }
  return ravenInstance;
};

export function initLogger(logDir: string) {
  if (__SERVER__) {
    // eslint-disable-next-line global-require
    const createLogger = require('./server/winston').default;
    createLogger(logDir);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const logger = getLogger();
