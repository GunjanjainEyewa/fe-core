import winston from 'winston';

import {
  APPLICATION_FOLDER_PATH,
} from '../constants';


let winstonConfiguration: any = null;
function createLogger(logDir: string) {
  if (!logDir) {
    throw new Error('logDir param is needed. It is used to specify the path to log files');
  }
  winstonConfiguration = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
    transports: [
      new winston.transports.File({
        filename: logDir + APPLICATION_FOLDER_PATH,
        // datePattern: DATE_PATTERN_FOR_LOG_FILE,
        maxsize: 20 * 1000 * 1000,
        maxFiles: 20,
        tailable: true,
        // prepend: true,
        level: 'info',
        // colorize: true,
      }),
    ],
  });
}

function winstonConfigurationStatus() {
  if (!winstonConfiguration) {
    throw new Error('initialize the logger first by using `initLogger`');
  }
}
export const info = (message: string) => {
  winstonConfigurationStatus();
  winstonConfiguration.info(message);
};

export const error = (message: string) => {
  winstonConfigurationStatus();
  winstonConfiguration.error(message);
};

export const debug = (message: string) => {
  winstonConfigurationStatus();
  winstonConfiguration.debug(message);
};

export default createLogger;
