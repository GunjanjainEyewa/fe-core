import logErrors from '@eyewa/logger/logErrors';
// import { setAuthCartCount } from 'shared/store/auth/action';
import { addToCart } from './service';
import { CUSTOM_ERROR_MSG_ADD_TO_CART } from './constants';
import { CartParams } from '../../types/addToCart';


export const doAddToCart = (params: CartParams) => async (
) => addToCart(params)
  .then((cartData) => cartData)
  .catch((error) => {
    logErrors(error, CUSTOM_ERROR_MSG_ADD_TO_CART);
    throw error;
  });

export const dummy = () => {};
//  dispatch cart count here when store in package
