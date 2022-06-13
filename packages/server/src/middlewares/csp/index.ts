import { Response, Request, NextFunction } from 'express';
import { REMOTE_CONFIG_KEY_IN_LOCALS } from '../../constants';


const CONTENT_SECURITY_POLICY = 'Content-Security-Policy-Report-Only';

const cspHeaders = (req: Request, res: Response, next: NextFunction) => {
  const remoteConfig = res.locals[REMOTE_CONFIG_KEY_IN_LOCALS];

  const { configs } = remoteConfig || {};
  const { contentPolicy = {} } = configs || {};
  if (contentPolicy.status) {
    const userPercentage = contentPolicy.userPercentage || 0;
    const assignedNumber = res.locals.ran;
    if (assignedNumber <= userPercentage) {
      const { value = '', headerKey = CONTENT_SECURITY_POLICY } = contentPolicy;
      res.header(headerKey, value);
    }
  }

  next();
};

export default cspHeaders;
