import { AdditionalRequestOptions } from '../types';

const NYKAA = 'nykaa';

export const defaultRequestOptions: AdditionalRequestOptions = {
  CSRF: true,
  STORE: true,
  CATALOG_TAG_FILTER: __PLATFORM__ !== NYKAA,
};

export enum HttpMethods {
  GET = 'get',
  POST = 'post'
}

export const statusCodes = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  ERROR: 500,
};

export const statusMessages = {
  SUCCESS: 'success',
};

export const EU_CONTINENT_CODE = 'eu';
export const CONTINENT_CODE = 'continentCode';
export const COUNTRY_CODE = 'countryCode';
