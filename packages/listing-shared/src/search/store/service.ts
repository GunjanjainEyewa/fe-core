import { ApiHelper } from '@nykaa/utils/network';
import { ROUTES, urls, getUrlPrefixed } from '@nykaa/utils/network/urls';
import { statusMessages } from '@nykaa/utils/network/constants';
import logErrors from '@nykaa/logger/logErrors';
import { queryStringFromParams } from '@nykaa/utils/urls';
import { SEARCH_PROXY_PREFIX } from './constants';
import { transformSearchListingData, transformPageData } from './transformer';
import {
  ERROR_MESSAGE_TEMPLATE,
  MANDATORY_REQUEST_PARAMS,
  SEARCH_INTERNAL_DOMAIN,
} from './constants';

export const getSearchProducts = async (
  params: { [key: string]: string | number },
  pageFetch: boolean = false,
) => {
  const url = getUrlPrefixed(
    urls[ROUTES.SEARCH_LISTING],
    SEARCH_PROXY_PREFIX,
    SEARCH_INTERNAL_DOMAIN,
  );

  const requestParams = {
    ...MANDATORY_REQUEST_PARAMS,
    ...params,
  };
  const queryString = queryStringFromParams(requestParams);
  try {
    const requestUrl = `${url}${queryString}`;
    const {
      data: { response, status },
    } = await ApiHelper(requestUrl);
    if (status === statusMessages.SUCCESS) {
      if (pageFetch) {
        return transformPageData(response);
      }
      return await transformSearchListingData(response);
    }
    throw new Error(`${status}: ${ERROR_MESSAGE_TEMPLATE}: ${requestUrl}`);
  } catch (error) {
    const errorMessage = ERROR_MESSAGE_TEMPLATE;
    logErrors(error, `${errorMessage}: URL = ${url}`);
    throw error;
  }
};

export const dummy = () => {};
