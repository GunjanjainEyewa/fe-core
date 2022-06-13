import { getUrl, ROUTES } from '@nykaa/utils/network/urls';
import { ApiHelper } from '@nykaa/utils/network';
import logErrors from '@nykaa/logger/logErrors';
import platformNames from '@nykaa/utils/platform/constants';
import { standardErrorMessages } from '@nykaa/utils/logging/constants';
import { ADD_TO_CART_REQUEST_PATH, CUSTOM_ERROR_MSG_ADD_TO_CART } from './constants';
import { transformAddToCart } from './transformers';
import { CartParams } from '../../types/addToCart';

const platform = __PLATFORM__;
// const platform = 'nykaa';
export const addToCart = async (params: CartParams) => {
  const url = `${getUrl(ROUTES.GATEWAY)}${ADD_TO_CART_REQUEST_PATH}`;
  const postData = {
    deviceType: 'WEBSITE',
    domain: platform,
    pro: !!params.pro,
    items: [
      {
        productId: params.productId,
        quantity: 1,
      },
    ],
  };
  let catalogParams = {};
  if (platform === platformNames.MEN) {
    catalogParams = { catalog_tag_filter: platform };
  }
  try {
    const {
      data: { success, data: apiData, message },
    } = await ApiHelper(`${url}`, 'post', { ...postData, ...catalogParams });

    if (!success) {
      const error = {
        errorInApi: true,
        message: message || standardErrorMessages.SOMETHING_WRONG,
      };
      return Promise.reject(
        error,
      );
    }
    return transformAddToCart(apiData);
  } catch (e) {
    const customMessage = CUSTOM_ERROR_MSG_ADD_TO_CART;
    logErrors(e, `${customMessage} :url = ${url}`);
    throw e;
  }
};

export const dummy = () => {};
