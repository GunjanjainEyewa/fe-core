import { Response, Request, NextFunction } from 'express';

import { getRemoteConfigGivenCache } from '@eyewa/remote-config';
import { REMOTE_CONFIG_KEY_IN_LOCALS } from '../../constants';


export const addRemoteConfigToResLocals = (req: Request, res: Response, next: NextFunction) => {
  const remoteConfig = getRemoteConfigGivenCache(res.locals.cache);

  res.locals[REMOTE_CONFIG_KEY_IN_LOCALS] = remoteConfig;

  next();
};

export const dummy = true;
