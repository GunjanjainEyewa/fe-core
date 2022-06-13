import { Response, Request, NextFunction } from 'express';
import { RemoteConfig } from '@eyewa/remote-config/types';
import {
  STORE_KEY,
  STORE_COOKIE,
  STORE_KEY_IN_QUERY,
  storeCookieMaxAge,
} from '@eyewa/utils/store/constants';

import { REMOTE_CONFIG_KEY_IN_LOCALS } from '../../constants';


const disableStoreStatusInRemoteConfig = (remoteConfig: RemoteConfig) => {
  const { configs, switches } = remoteConfig;

  const { storeOptions } = configs;

  const updatedRemoteConfig = {
    switches,
    configs: {
      ...configs,
      storeOptions: {
        ...storeOptions,
        status: false, // ! This is the kill switch for store feature in remoteConfig
      },
    },
  };

  return updatedRemoteConfig;
};

const storeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { cookies, query } = req;
  const {
    locals: {
      ran: randomNumberCookie = 0,
    },
    locals,
  } = res;

  const remoteConfigInLocals = locals[REMOTE_CONFIG_KEY_IN_LOCALS];
  const {
    configs: {
      storeOptions: {
        status,
        stores: storesAvailable,
        userPercentage = 0,
        rememberLastStore,
      },
    },
  }: RemoteConfig = remoteConfigInLocals;
  const platform = __PLATFORM__;

  let selectedStore: any = '';
  const isStoreEnabledForRequest = (randomNumberCookie <= userPercentage);

  if (!isStoreEnabledForRequest) {
    /**
     * ? When the userBucket is not qualified for storePercentage
     * * we would want to update the store status for the current request
     * * we do this
     */
    const updatedRemoteConfig = disableStoreStatusInRemoteConfig(remoteConfigInLocals);
    res.locals[REMOTE_CONFIG_KEY_IN_LOCALS] = updatedRemoteConfig;
  }

  if (status && isStoreEnabledForRequest) {
    // * the store in query has higher priority than the store in cookie
    // ? This is useful in navigation via ad campaigns where store can be added in query
    if (query?.[STORE_KEY_IN_QUERY]) {
      selectedStore = query[STORE_KEY_IN_QUERY];
    } else if (cookies[STORE_COOKIE]) {
      selectedStore = cookies[STORE_COOKIE];
    }

    if (selectedStore) {
      const isStoreEnabled = storesAvailable
      && storesAvailable.some((store) => store.storeId === selectedStore);

      if (!isStoreEnabled) {
        selectedStore = '';
      }
    }
  }

  if (!selectedStore) {
    selectedStore = platform;
  }

  // RequestConfig.setStoreId(selectedStore); // ? TEMPORARILY NOT NEEDED
  res.cookie(
    STORE_COOKIE,
    selectedStore,
    {
      httpOnly: false,
      secure: false,
      maxAge: rememberLastStore ? storeCookieMaxAge.REMEMBER : storeCookieMaxAge.DO_NOT_REMEMBER,
    },
  );

  if (status && isStoreEnabledForRequest) {
    res.locals[STORE_KEY] = selectedStore;
  }
  next();
};

export default storeMiddleware;
