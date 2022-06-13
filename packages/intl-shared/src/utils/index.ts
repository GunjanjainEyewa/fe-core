import { logger } from '@nykaa/logger';

import {
  Template, QueryParamsObject, KeyStringObj, GetTranslationWithoutHook, DynamicStringConfigs,
} from '../types';
import defaultStrings from '../constants/lang.data.json';
import {
  LN_EXPERIMENT,
  DEFAULT_LANGUAGE,
} from '../constants';


interface Params {
  queryArray: string[];
  availableLanguages: string[];
  cookieValue: string;
}

// This function converts normal string into dynamic string
export const injectDynamicValues = (
  str: string,
  values: Template | undefined,
): string => {
  let paramString = str;
  // Regex to get all static values which would be replaced by dynamic values
  const reg = /{((\s*?)?[A-Za-z]*(\s*?)?)}/g;
  const dynamicStrings: string[] | null = str?.match(reg);
  if (dynamicStrings && values && Object?.keys(values).length) {
    let arr = [...dynamicStrings];
    arr = arr?.map((item:string) => item.replace(/[{}]/g, ''));
    for (let i = 0; i < dynamicStrings.length; i += 1) {
      const value = values[arr[i]];
      const stringsValue = (typeof value === 'string') ? value : String(value);
      paramString = paramString.replace(
        dynamicStrings[i],
        stringsValue || dynamicStrings[i],
      );
    }
  }

  return paramString;
};

export const handleDynamicValues = (props: DynamicStringConfigs) => {
  const {
    id, translationStrings = {}, defaultTranslationString = '', values = {},
  } = props;

  if (!id) {
    if (defaultTranslationString) {
      logger.info(`Please provide an id ' ${id} ' for ' ${defaultTranslationString} '`);
    }
    return '';
  }
  const hasString = translationStrings?.[id];
  if (!hasString && defaultTranslationString) {
    logger.info(`Please Pass a value for id ' ${id} ' in messages`);
    return injectDynamicValues(defaultTranslationString, values);
  }

  if (values && Object.keys(values).length) {
    return injectDynamicValues(hasString, values);
  }

  return injectDynamicValues(hasString, values);
};

export const getTranslationWithoutHook = (parameters: GetTranslationWithoutHook) => {
  const {
    id = '', translationStrings = {}, defaultTranslationString = '', values,
  } = parameters;
  const props = {
    id, translationStrings, defaultTranslationString, values,
  };
  let msg: string = handleDynamicValues(props);
  if (!msg) {
    const localTranslationStrings: KeyStringObj = defaultStrings[DEFAULT_LANGUAGE];
    msg = localTranslationStrings[id] || '';
  }
  return msg;
};

export const removeURLParameter = (url: string, parameter: string) => {
  const urlparts = url?.split('?');
  let finalURL = url;
  if (urlparts.length > 1) {
    const prefix = `${encodeURIComponent(parameter)}=`;
    const Params = urlparts[1]?.split(/[&;]/g);
    const res = [];
    for (let i = 0; i < Params.length; i += 1) {
      const param = Params[i];
      if (!param.startsWith(prefix)) {
        res.push(param);
      }
    }
    finalURL = urlparts[0] + (res.length > 0 ? `?${res.join('&')}` : '');
  }
  return finalURL;
};

// This function removes language from the given path / strings
export const removeLangFromPath = (path: string, languages: string[] = []): string => {
  let finalURL = path;
  const splittedURL = path.split('/');
  const pathLang = splittedURL[1];
  if (languages.includes(pathLang)) {
    finalURL = splittedURL.join('/').replace(`/${pathLang}`, '');
  }
  return finalURL;
};

export const getCookieLang = (cookieLang: string, languages: string[]): string | undefined => {
  let res;
  if (
    cookieLang
    && languages
    && Array.isArray(languages)
    && (languages.indexOf(cookieLang) > -1)
  ) {
    res = cookieLang;
  }
  return res;
};

export const containsLnExp = (queryArray:string[]) => queryArray?.includes(LN_EXPERIMENT);

export const checkStatus = (params: Params) => {
  const {
    queryArray, availableLanguages, cookieValue,
  } = params;
  return containsLnExp(queryArray) || availableLanguages.includes(cookieValue);
};

export const getPathLang = (url: string, languages: string[]): string => {
  const splittedURL = url.split('/');
  const urlLang = splittedURL[1];
  return languages.indexOf(urlLang) > -1 ? urlLang : '';
};

export const getLang = (url: string,
  languages: string[],
  queryValue: string,
  cookieLang: string) => {
  let selectedLang: string | undefined = getPathLang(url, languages);
  if (selectedLang) {
    return selectedLang;
  }
  if (queryValue && (typeof queryValue === 'string') && languages.includes(queryValue)) {
    return queryValue;
  }
  selectedLang = getCookieLang(cookieLang, languages);
  return selectedLang;
};

export const queryStringObjectFromUrl = (url: string = '') => {
  const queryString = url.split('?')[1];
  const params = new URLSearchParams(queryString);
  const result: QueryParamsObject = {};
  params.forEach((val, key) => {
    result[key] = val;
  });
  return result;
};
