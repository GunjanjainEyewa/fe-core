import logErrors from '@eyewa/logger/logErrors';
import { wishlistAdd, wishlistRemove } from './service';
import { ADD_CUSTOM_ERROR_MSG, REMOVE_CUSTOM_ERROR_MSG } from './constant';
import { AddToWishlist, RemoveFromWishlist } from '../../types/addToWishlist';


export const addToWishlist = (params: AddToWishlist) => () => (
  wishlistAdd(params)
    .then((wishlistData) => wishlistData)
    .catch((error) => {
      logErrors(error, ADD_CUSTOM_ERROR_MSG);
      throw error;
    })
);


export const removeFromWishlist = (params: RemoveFromWishlist) => () => (
  wishlistRemove(params)
    .then((data) => data)
    .catch((error) => {
      logErrors(error, REMOVE_CUSTOM_ERROR_MSG);
      throw error;
    })
);
// dispatch(removeFromAuthWishlist(params.productId));
