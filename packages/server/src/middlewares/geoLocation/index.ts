import { Response, Request, NextFunction } from 'express';

import {
  COUNTRY_CODE,
  CONTINENT_CODE,
  EU_CONTINENT_CODE,
} from '@nykaa/utils/network/constants';
import customHeaders from '@nykaa/utils/network/constants/headers';

import { COOKIE_MAX_AGE, euCountryCodeCollection } from '../../constants/geoLocation';

const geoLocation = (req: Request, res: Response, next: NextFunction) => {
  const { cookies } = req;
  const countryCodeInHeader = req.headers?.[customHeaders.X_COUNTRY_CODE];

  if (countryCodeInHeader) {
    const countryCodeInCookie = cookies?.[COUNTRY_CODE];
    if (countryCodeInCookie !== countryCodeInHeader) {
      res.cookie(
        COUNTRY_CODE,
        countryCodeInHeader,
        {
          httpOnly: false,
          secure: false,
          maxAge: COOKIE_MAX_AGE,
        },
      );
    }

    const isEuCountry = Object.prototype.hasOwnProperty.call(
      euCountryCodeCollection,
      countryCodeInHeader as string,
    );

    res.cookie(
      CONTINENT_CODE,
      EU_CONTINENT_CODE,
      {
        httpOnly: false,
        secure: false,
        maxAge: isEuCountry ? COOKIE_MAX_AGE : 0,
      },
    );
  }

  next();
};

export default geoLocation;
