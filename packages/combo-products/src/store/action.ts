import { logger } from '@eyewa/logger';
import { statusCodes } from '@eyewa/utils/network/constants';
import { ERROR_IN_FETCHING_COMBO_PRODUCT_API } from '../constants';
import getComboProduct from './service';


const getComboProductData = (id: number) => (
  getComboProduct(id)
    .then((data) => (
      {
        comboProductData: data,
        errorCode: null,
      }
    ))
    .catch((error) => {
      logger.error(error, ERROR_IN_FETCHING_COMBO_PRODUCT_API);
      const status = statusCodes.ERROR;
      return {
        comboProductData: null,
        errorCode: status,
      };
    })
);

export default getComboProductData;
