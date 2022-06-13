import logErrors from '@eyewa/logger/logErrors';
import { ApiHelper } from '@eyewa/utils/network';
import { ROUTES, getUrl } from '@eyewa/utils/network/urls';
import { HttpMethods } from '@eyewa/utils/network/constants';
import transformcomboProductData from './transformer';
import { ERROR_IN_FETCHING_COMBO_PRODUCT_API } from '../constants';


const getComboProduct = async (id: number) => {
  const url = `${getUrl(ROUTES.COMBO_PRODUCT)}?id=${id}`;
  try {
    const { data: { data } } = await ApiHelper(`${url}`, HttpMethods.GET);
    const { products, title } = data;
    const transformData = transformcomboProductData(products);
    return {
      productList: transformData,
      title,
    };
  } catch (error) {
    logErrors(error, `${ERROR_IN_FETCHING_COMBO_PRODUCT_API} :url=${url}`);
    return null;
  }
};

export default getComboProduct;
