import { Response, Request, NextFunction } from 'express';
import { checkStatus, containsLnExp, getLang } from '../../utils';
import { checkRegionalizationABStatus } from '../../utils/region';
import { getLanguageConfigGivenCache } from '../utils/cache';
import {
  LANG,
  LANG_CONFIG,
  LN_EXPERIMENT,
  DEFAULT_LANGUAGE,
  HIDE_MODALS_PATHS,
  VRN_REGION_ELIGIBILITY,
  VRN_REGION_ELIGIBILITY_LEVELS,
  VRN_SOURCE,
  EXP_USER,
} from '../../constants';
import { DEFAULT_CONFIG } from '../../store/constants';
import {
  MAX_COOKIE_AGE,
  LANGUAGE_COOKIE,
} from '../../constants/cookies';
import { LangState } from '../../types';

const addLanguageConfigToLocals = (req: Request, res: Response, next: NextFunction) => {
  const cachedStrings = getLanguageConfigGivenCache(res.locals.cache);
  const availableLanguages = Object.keys(cachedStrings);
  const { cookies, query, originalUrl } = req;
  const lnExpValue = String(query[LN_EXPERIMENT]);
  const queryArray = Object.keys(query);
  // If req has the lang cookie, then set cookieValue to lang value, otherwise set it to null.
  const cookieValue = cookies[LANGUAGE_COOKIE];

  let isExperimentEnabled = checkStatus({
    queryArray, availableLanguages, cookieValue,
  });

  if (isExperimentEnabled) {
    // Trackings
    if (containsLnExp(queryArray)) {
      res.cookie(
        VRN_SOURCE,
        EXP_USER,
        {
          httpOnly: false,
          secure: false,
          maxAge: MAX_COOKIE_AGE,
        },
      );
    }
    res.locals[VRN_REGION_ELIGIBILITY] = VRN_REGION_ELIGIBILITY_LEVELS.ALREADY_ON_EXPERIMENT;
  } else {
    isExperimentEnabled = checkRegionalizationABStatus(req, res);
  }

  res.locals[LN_EXPERIMENT] = isExperimentEnabled;
  if (isExperimentEnabled) {
    const REMOTE_DEFAULT_LANG = res.locals.defaultLang;
    // Get language from path>query>Cookie
    const selectedLang:string = getLang(
      originalUrl,
      availableLanguages,
      lnExpValue,
      cookieValue,
    );
    res.locals[LANG] = selectedLang || REMOTE_DEFAULT_LANG || DEFAULT_LANGUAGE;
    res.cookie(
      LANGUAGE_COOKIE,
      res.locals[LANG],
      {
        httpOnly: false,
        secure: false,
        maxAge: MAX_COOKIE_AGE,
      },
    );
    const serverLangStore: LangState = {
      ...DEFAULT_CONFIG,
      isExperimentEnabled,
      [LANG]: res.locals[LANG],
      [HIDE_MODALS_PATHS]: res.locals.hideModalPaths || [],
    };
    if (Object.keys(cachedStrings).length) {
      serverLangStore.strings = { ...cachedStrings };
    }
    // res.locals[LANG_CONFIG] should be added in redux store
    res.locals[LANG_CONFIG] = serverLangStore;
  }
  // Continue on Next Stack
  next();
};

export default addLanguageConfigToLocals;
