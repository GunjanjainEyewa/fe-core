import logErrors from '@nykaa/logger/logErrors';
import { ApiHelper } from '@nykaa/utils/network';
import { ROUTES, getUrl } from '@nykaa/utils/network/urls';
import { queryStringFromParams } from '@nykaa/utils/urls';

import {
  REVIEW_PHOTOS_REQUEST_PATH,
  PAGE_SIZE,
  REVIEW_DATA_FETCH_ERROR,
} from '../constants';
import transformReviewImagesResponse from './transformer';
import { FetchReviewParams } from '../types';


interface QueryParams {
  source: string;
  size: number;
  pageKey?: string;
}

const mandatoryRequestParams = {
  source: 'react',
};

const ERROR_REVIEW_IMAGE_API = 'Error in Review images API';

const getReviewImages = async ({ id, pageKey = '' }: FetchReviewParams) => {
  let url = `${getUrl(ROUTES.GATEWAY)}/${REVIEW_PHOTOS_REQUEST_PATH}`;
  url = url.replace('@{productId}', id);
  const queryParams: QueryParams = {
    ...mandatoryRequestParams,
    size: PAGE_SIZE,
  };

  if (pageKey) {
    queryParams.pageKey = pageKey;
  }

  const queryString = queryStringFromParams(queryParams);


  try {
    const { data: { response: apiResponse, status } } = await ApiHelper(`${url}${queryString}`, 'get');
    if (!apiResponse || !status) {
      throw new Error(`${REVIEW_DATA_FETCH_ERROR}`);
    }
    return transformReviewImagesResponse(apiResponse);
  } catch (e) {
    logErrors(e, `${ERROR_REVIEW_IMAGE_API} :url=${url}`);
    throw e;
  }
};

export default getReviewImages;
