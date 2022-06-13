import axios, { AxiosRequestConfig } from 'axios';
import { logger } from '@nykaa/logger';

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

interface Options extends AxiosRequestConfig {
  additionalOptions?: AdditionalRequestOptions,
}

export default (
  url: string, options: Options,
) => {
  if (!url) {
    throw new Error('"url" cannot be empty!');
  }

  const axiosParams = {
    url,
    ...options,
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
