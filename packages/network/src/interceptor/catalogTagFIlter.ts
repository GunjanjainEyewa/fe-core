import { AxiosRequestConfig } from 'axios';

import { appendQueryStringToUrl } from '@nykaa/utils/urls';


export const catalogTagFilter = (requestConfig: AxiosRequestConfig) => {
  const { headers, url } = requestConfig;

  if (headers.CATALOG_TAG_FILTER && url) {
    const modifiedUrl = appendQueryStringToUrl(url, `catalog_tag_filter=${__PLATFORM__}`);
    // eslint-disable-next-line no-param-reassign
    requestConfig.url = modifiedUrl;
  }
  delete headers.CATALOG_TAG_FILTER;
  return requestConfig;
};

export const dummy = true;
