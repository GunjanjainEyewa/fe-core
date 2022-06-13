import { info, error } from './winston';


const errorWrapper = (message: any, extra = '') => {
  let errorString = message;
  if (message instanceof Error) {
    errorString = message.stack;
  }
  return error(`LOCATION -${extra} \n ${errorString}`);
};

const infoWrapper = (message: any) => (info(message));

const ServerLogger = {
  error: errorWrapper,
  info: infoWrapper,
};

export default ServerLogger;
