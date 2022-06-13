import { ApiHelper } from '@nykaa/utils/network';
import { ROUTES, getUrl } from '@nykaa/utils/network/urls';
import logErrors from '@nykaa/logger/logErrors';
import { queryStringFromParams } from '@nykaa/utils/urls';
import { transformRequest } from './helpers';
import { FetchCategoryListingParams } from './types';
import { transformProductListingData, transformPriceList, transformPlpWidget } from './transformer';
import {
  CUSTOM_OFFER_PRODUCT_API_ERROR,
  CUSTOM_OFFER_PRODUCT_ERROR,
  CUSTOM_PRODUCT_API_ERROR,
  CUSTOM_PRODUCT_ERROR,
  ERROR_PLP_WIDGETS,
  mandatoryRequestParams,
} from './constant';

export const getCategoryListing = async (
  params: FetchCategoryListingParams,
) => {
  const url = getUrl(ROUTES.PRODUCT_LIST);

  const { pageNumber, sort } = params;
  const requestParams = {
    ...mandatoryRequestParams,
    ...(pageNumber && { pageNumber }),
    ...(sort && { sort }),
    ...params,
  };
  const filteredParams = transformRequest(requestParams);
  const queryString = queryStringFromParams(filteredParams);
  try {
    const {
      data: { response },
    } = await ApiHelper(`${url}${queryString}`);

    if (!response) {
      throw new Error(CUSTOM_PRODUCT_API_ERROR);
    }
    const transformedProductListing = transformProductListingData(response);
    return transformedProductListing;
  } catch (e) {
    logErrors(e, `${CUSTOM_PRODUCT_ERROR} : URL= ${url}`);
    throw e;
  }
};

export const getCategoryPriceList = async (params: any) => {
  const url = getUrl(ROUTES.CATEGORY_PRICE_LIST);
  const queryString = queryStringFromParams(params);
  try {
    const {
      data: { response },
    } = await ApiHelper(`${url}${queryString}`, 'get');
    return transformPriceList(response);
  } catch (e) {
    logErrors(e, `${CUSTOM_OFFER_PRODUCT_ERROR} : URL= ${url}`);
    throw e;
  }
};

export const getOfferProductListing = async (
  params: FetchCategoryListingParams,
) => {
  const url = getUrl(ROUTES.OFFER_PRODUCT_LIST);
  const { pageNumber, sort } = params;
  const requestParams = {
    ...mandatoryRequestParams,
    ...(pageNumber && { pageNumber }),
    ...(sort && { sort }),
    ...params,
  };
  const filteredParams = transformRequest(requestParams);
  const queryString = queryStringFromParams(filteredParams);
  try {
    const {
      data: { response },
    } = await ApiHelper(`${url}${queryString}`, 'get');
    if (!response) {
      throw new Error(CUSTOM_OFFER_PRODUCT_API_ERROR);
    }
    const transformedProductListing = transformProductListingData(response);
    return transformedProductListing;
  } catch (e) {
    logErrors(e, `${CUSTOM_OFFER_PRODUCT_ERROR} : URL= ${url}`);
    throw e;
  }
};


export const getPlpWidgets = async (id: string) => {
  const url = getUrl(ROUTES.PLP_WIDGETS);
  try {
    const { data } = await ApiHelper(`${url}?category_id=${id}`, 'get');
    return transformPlpWidget(data);
  } catch (error) {
    logErrors(error, `${ERROR_PLP_WIDGETS}: URL: ${url}`);
    return null;
  }
};
