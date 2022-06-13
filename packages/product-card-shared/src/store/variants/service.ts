import logErrors from '@eyewa/logger/logErrors';
import { getUrl, ROUTES } from '@eyewa/utils/network/urls';
import { ApiHelper } from '@eyewa/utils/network';
import { queryStringFromParams } from '@eyewa/utils/urls';
import { transformVariants } from './transformer';
import { mandatoryRequestParams, NOT_FOUND_ERROR, VARIANT_API_ERROR } from './constants';
import { FetchProductParams } from '../../types/variants';


export const getVariants = async (params: FetchProductParams) => {
  const url = getUrl(ROUTES.PRODUCT);
  const queryParams = {
    ...mandatoryRequestParams,
    product_id: params.id,
  };

  const queryString = queryStringFromParams(queryParams);

  try {
    const { data: { response } } = await ApiHelper(`${url}${queryString}`, 'get');
    if (!response) {
      return Promise.reject(NOT_FOUND_ERROR);
    }
    return transformVariants(response.options, response.default_pid);
  } catch (e) {
    logErrors(e, `${VARIANT_API_ERROR}: url= ${url}`);
    throw e;
  }
};

export const dummy = () => {};
