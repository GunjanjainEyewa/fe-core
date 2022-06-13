import logErrors from '@eyewa/logger/logErrors';
import { ApiHelper } from '@eyewa/utils/network';
import { ROUTES, getUrl } from '@eyewa/utils/network/urls';
import { HttpMethods } from '@eyewa/utils/network/constants';
import { queryStringFromParams } from '@eyewa/utils/urls';
import { ERROR_MESSAGE, DELIVERY_NOT_FOUND } from '../constants';
import { DeliveryInfo } from '../types';


interface CheckDeliveryParams {
  productId: string,
  pinCode: number,
  countryCode?: string,
}

interface QueryParams {
  pincode: string;
  prod_id: string;
  countryCode?: string;
}


const checkDelivery = async ({ pinCode, productId, countryCode }: CheckDeliveryParams) => {
  const url = getUrl(ROUTES.CHECK_DELIVERY);
  const queryParams: QueryParams = {
    pincode: encodeURIComponent(pinCode),
    prod_id: productId,
  };
  if (countryCode) {
    queryParams.countryCode = countryCode;
  }

  const queryString = queryStringFromParams(queryParams);


  try {
    const {
      data: {
        status,
        message: statusDate,
        message_status: statusMessage,
        cod_message: codMessage,
        city,
        shippingMessage,
      },
    } = await ApiHelper(`${url}${queryString}`, HttpMethods.GET);

    if ((status !== 1) || (statusDate === 0)) {
      return Promise.reject(new Error(DELIVERY_NOT_FOUND));
    }

    const deliveryInfo: DeliveryInfo = {
      statusDate,
      statusMessage,
      codMessage,
      city,
      shippingMessage,
    };
    return deliveryInfo;
  } catch (e) {
    logErrors(e, `${ERROR_MESSAGE} url:${url}`);
    throw e;
  }
};

export default checkDelivery;
