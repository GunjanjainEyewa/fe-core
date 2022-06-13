/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import { ROUTES, urls } from '@nykaa/utils/network/urls';
import checkValidHost from '../../utils';
import {
  NATIVE_PAGE, WHITELISTED_DOMAINS, NATIVE_PAGE_TYPE,
} from '../../constants';


const nativeLandingPage = (req: Request, res: Response, next: NextFunction) => {
  const whiteListedDomains = res.locals[WHITELISTED_DOMAINS];
  const { query } = req;
  const {
    dl_type: dlType, url, pagedata, pagetype,
  } = query || {};
  if (dlType && (dlType === NATIVE_PAGE)) {
    if (url) {
      const redirectUrl = checkValidHost(url, whiteListedDomains);
      if (redirectUrl) {
        return res.redirect(307, redirectUrl);
      }
    }
    const reqPageData = pagedata || '';
    const reqPageType = pagetype || NATIVE_PAGE_TYPE;
    return res.redirect(307, `${urls[ROUTES.SP]}/${reqPageType}/${reqPageData}`);
  }
  next();
};

export default nativeLandingPage;
