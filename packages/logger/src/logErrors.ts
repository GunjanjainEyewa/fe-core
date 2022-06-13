import { logger } from './index';

interface ErrorProps extends Error {
  response?: any;
}
const logErrors = (error: ErrorProps, customMessage: string) => {
  let statusCode;
  if (error && error.response && error.response.status) {
    statusCode = error.response.status;
  }
  const errorMessage = error.message;
  if (statusCode) {
    logger.error({ error, message: `${statusCode}: ${customMessage}` });
    // logger.error(`${statusCode}: ${customMessage}`);
  } else {
    logger.error({ error, message: errorMessage });
    // logger.error(error, errorMessage);
  }
};

export default logErrors;
