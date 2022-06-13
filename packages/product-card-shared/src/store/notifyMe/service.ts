import { ApiHelper } from '@nykaa/utils/network';
import logErrors from '@nykaa/logger/logErrors';
import { NOTIFY_ME_API_ERROR, NOTIFY_ME_URL } from './constants';
import { NotifyMeParams } from '../../types/notifyMe';

export const contentTypes = {
  URL_ENCODED: 'application/x-www-form-urlencoded',
};

export const notifyMe = async (params: NotifyMeParams) => {
  const formData = new FormData();
  const validParams = (params && (params.email) && (params.productId));
  if (validParams) {
    formData.append('isAjax', '1');
    formData.append('subscription_email', params.email);
    formData.append('variantName', params.variantName);
    formData.append('offerPrice', `${params.offerPrice}`);
    formData.append('product', `${params.productId}`);

    try {
      const { data: { error, message } } = await ApiHelper(`${NOTIFY_ME_URL}`, 'post', formData, { 'Content-Type': contentTypes.URL_ENCODED });
      if (error) {
        return Promise.reject(
          message,
        );
      }

      return true;
    } catch (e) {
      logErrors(e, `${NOTIFY_ME_API_ERROR}: url = ${NOTIFY_ME_URL}`);
      throw e;
    }
  }
  return false;
};
