import { Request, Response, NextFunction } from 'express';
import {
  PHPSESSID_COOKIE_KEY,
} from '../../constants';


const addPhpSessionIdToResLocals = (req: Request, res: Response, next: NextFunction) => {
  const {
    cookies,
  } = req;
  // Doing this because if customerId is no there
  // need to use old get reviews api for nps
  // for which phpsessionId is needed
  const { npsStore } = res.locals;
  const customerId = npsStore.getState()?.npsAppReducer?.customerId;
  if (!customerId) {
    const sessionId = cookies[PHPSESSID_COOKIE_KEY];
    res.locals[PHPSESSID_COOKIE_KEY] = sessionId;
  }
  next();
};

export default addPhpSessionIdToResLocals;
