import Cache from '@eyewa/cache';
import { ApiHelper } from '@eyewa/utils/network';
import { logger } from '@eyewa/logger';
import langData from '../../constants/lang.data.json';

import {
  CACHE_KEY,
  GET_LANG_CONFIG_URL,
} from '../../constants';

export const getLanguageConfigGivenCache = (cache: Cache) => {
  try {
    const config = cache.get(CACHE_KEY);
    if (config) {
      return config;
    }
    throw new Error('Language Config could not be extracted');
  } catch (err) {
    logger.error(err, err.message);
    return langData;
  }
};

export const setLanguageConfigGivenCache = (cache: Cache, data: any) => {
  try {
    cache.set(CACHE_KEY, data);
  } catch (error) {
    logger.error(error, 'Unable to set Language config');
  }
};

export const langConfigInitiator = async (cache: Cache) => {
  const langConfigUrl: string = GET_LANG_CONFIG_URL();
  if (langConfigUrl) {
    try {
      const res = await ApiHelper(langConfigUrl);
      setLanguageConfigGivenCache(cache, res.data);
    } catch (error) {
      setLanguageConfigGivenCache(cache, langData);
      logger.error(error, error.message);
    }
  } else {
    setLanguageConfigGivenCache(cache, langData);
    logger.info('Language config S3 url is not provided.');
  }
};

export const languageConfigWatcher = (cache: Cache, key: string, value: any) => {
  if (key === CACHE_KEY) {
    try {
      langConfigInitiator(cache);
    } catch (err) {
      logger.error(err, err.message);
      setLanguageConfigGivenCache(cache, value);
    }
  }
};
