import { logger } from '@nykaa/logger';
import { ApiHelper } from '@nykaa/utils/network';
import Cache from '@nykaa/cache';

import { DEFAULT_CONFIG, CACHE_KEY, GET_REMOTE_CONFIG_URL } from './constants';
import { parseConfig } from './parser';


export const setRemoteConfigGivenCache = (cache: Cache, value: any) => {
  try {
    cache.set(CACHE_KEY, value);
  } catch (err) {
    throw new Error('Unable to instantiate config');
  }
};


export const getRemoteConfigGivenCache = (cache: Cache) => {
  try {
    const config = cache.get(CACHE_KEY);
    if (config) {
      return config;
    }

    throw new Error('Remote Config could not be extracted');
  } catch (err) {
    logger.error(err.message);
    return DEFAULT_CONFIG;
  }
};

export const remoteConfigInitiator = async (cache: Cache) => {
  try {
    const remoteConfigUrl = GET_REMOTE_CONFIG_URL();
    const config = await ApiHelper(remoteConfigUrl);
    const transformedConfig = parseConfig(config.data);
    setRemoteConfigGivenCache(cache, transformedConfig);
  } catch (err) {
    logger.error(err.message);
    setRemoteConfigGivenCache(cache, DEFAULT_CONFIG);
  }
};

export const remoteConfigWatcher = (cache: Cache, key: string, value: any) => {
  if (key === CACHE_KEY) {
    try {
      remoteConfigInitiator(cache);
    } catch (err) {
      // TODO: LOG the error
      setRemoteConfigGivenCache(cache, value);
    }
  }
};
