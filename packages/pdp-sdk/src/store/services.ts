import ApiHelper from '@nykaa/network';
import { PLATFORM } from '../constants';

export type DEVICE_TYPE = 'MSITE' | 'WEBSITE';

interface AddToCart {
  productId: string;
  quantity?: number;
  deviceType: DEVICE_TYPE;
  domain: string;
}

interface AddToCartResponse {
  data: {
    quantity?: number;
  };
  message: string;
}

export const callAddToCart = ({
  productId,
  quantity = 1,
  deviceType = 'MSITE',
  domain,
}: AddToCart): Promise<AddToCartResponse> => {
  const url = '/gateway-api/cartapi/v1/item/add';
  const body = { items: [{ productId, quantity }], deviceType, domain };
  return ApiHelper(url, {
    url,
    method: 'post',
    data: body,
    headers: {
      CSRF: true,
      STORE: true,
      CATALOG_TAG_FILTER: domain === PLATFORM.MEN,
    },
  }).then((res) => {
    if (res.statusText !== 'OK' || res.data.success === false) {
      return Promise.reject(res.data);
    }

    return res.data;
  });
};
