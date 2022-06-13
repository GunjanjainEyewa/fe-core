import axios, { Method } from 'axios';

import { logger } from '@nykaa/logger';
import { defaultRequestOptions } from './constants';
import { AdditionalRequestOptions, InterceptorFunction } from './types';


export class RequestConfig {
  private static formKey: string;

  private static storeId: string;

  public static setFormKey(formKey: string) {
    RequestConfig.formKey = formKey;
  }

  public static getFormKey() {
    return RequestConfig.formKey;
  }

  public static setStoreId(storeId: string) {
    RequestConfig.storeId = storeId;
  }

  public static getStoreId() {
    return RequestConfig.storeId;
  }
}


// FIXME: rename me ASAP!!
export const ApiHelper = (
  url: string,
  method: Method = 'get',
  params?: ({ [key: string]: any }|FormData),
  headers?: { [key: string]: string },
  additionalOptions: AdditionalRequestOptions = defaultRequestOptions,
  timeout: number = 10000,
) => {
  if (!url) {
    throw new Error('"url" cannot be empty!');
  }

  const customRequestHeaders = {
    ...(headers && { ...headers }),
    ...{
      ...defaultRequestOptions,
      ...additionalOptions,
    },
  };

  const axiosParams = {
    url,
    method,
    timeout,
    headers: customRequestHeaders,
    ...(params && { data: params }),
  };

  return axios(axiosParams);
};


export const addRequestInterceptor = (interceptorFunction: InterceptorFunction) => {
  try {
    axios.interceptors.request.use(interceptorFunction);
  } catch (e) {
    logger.error(e, 'Error adding request Interceptor');
  }
};
