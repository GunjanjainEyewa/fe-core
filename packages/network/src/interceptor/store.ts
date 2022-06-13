import { AxiosRequestConfig } from 'axios';

import { STORE_KEY_IN_QUERY } from '@eyewa/utils/store/constants';
import { appendQueryStringToUrl } from '@eyewa/utils/urls';
import { HttpMethods } from '../constants';

import { RequestConfig } from '..';


export const dummy = true;
export const storeParam = (requestConfig: AxiosRequestConfig) => {
  const {
    headers, method, url, data,
  } = requestConfig;

  if (headers.STORE) {
    const storeId = RequestConfig.getStoreId();

    if (storeId) {
      const lowerCaseMethod = (method && method.toLocaleLowerCase());
      if (url && (lowerCaseMethod === HttpMethods.GET)) {
        const modifiedUrl = appendQueryStringToUrl(url, `${STORE_KEY_IN_QUERY}=${storeId}`);
        // eslint-disable-next-line no-param-reassign
        requestConfig.url = modifiedUrl;
      } else if (lowerCaseMethod === HttpMethods.POST) {
        if (data instanceof FormData) {
          data.append(STORE_KEY_IN_QUERY, storeId);
        } else {
          // eslint-disable-next-line no-param-reassign
          requestConfig.data = {
            ...data,
            [STORE_KEY_IN_QUERY]: storeId,
          };
        }
      }
    }
  }
  delete headers.STORE;

  return requestConfig;
};
