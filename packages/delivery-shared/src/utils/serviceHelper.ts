import { setCookie } from '@nykaa/utils/cookies';
import { PIN_CODE_FOR_DELIVERY, PINCODE_COOKIE_EXPIRY } from '../constants';
import { DeliveryInfo } from '../types';
import checkDelivery from '../store/service';


const setDeliveryDetails = (
  pinCode: number,
  productId: string,
  countryCode: string,
  handleInfo: (value: DeliveryInfo) => void,
  handleDetailsLoading: (value: boolean) => void,
  handleErrorInDelivery: (value: boolean) => void,
) => {
  checkDelivery({
    pinCode,
    productId,
    countryCode,
  })
    .then((deliveryDetails: DeliveryInfo) => {
      handleInfo(deliveryDetails);
      handleDetailsLoading(false);
      setCookie(PIN_CODE_FOR_DELIVERY, pinCode, PINCODE_COOKIE_EXPIRY);
    })
    .catch(() => {
      handleErrorInDelivery(true);
      handleDetailsLoading(false);
      setCookie(PIN_CODE_FOR_DELIVERY, pinCode, PINCODE_COOKIE_EXPIRY);
    });
};

export default setDeliveryDetails;
