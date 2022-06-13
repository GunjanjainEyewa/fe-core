import { logger } from '@nykaa/logger';
import { NotifyMeParams } from '../../types/notifyMe';
import { NOTIFY_ME_API_ERROR } from './constants';
import { notifyMe } from './service';

export const sendNotifyMe = (params: NotifyMeParams) => async (
) => notifyMe(params)
  .then((response) => response)
  .catch((error) => {
    logger.error(error, NOTIFY_ME_API_ERROR);
    return false;
  });

export const dummy = () => {};
