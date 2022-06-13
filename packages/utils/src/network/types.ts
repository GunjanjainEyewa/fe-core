import { AxiosRequestConfig } from 'axios';


export interface AdditionalRequestOptions {
  CSRF?: boolean;
  STORE?: boolean;
  CATALOG_TAG_FILTER?: boolean;
}

export type InterceptorFunction = (requestConfig: AxiosRequestConfig) => AxiosRequestConfig;
