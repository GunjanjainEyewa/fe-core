import { ApiHelper } from '@nykaa/utils/network';
import logErrors from '@nykaa/logger/logErrors';
import {
  ADD_TO_WISHLIST_API,
  ADD_CUSTOM_ERROR_MSG,
  ERROR_MSG_WISHLIST_API,
  REMOVE_CUSTOM_ERROR_MSG,
  REMOVE_FROM_WISHLIST_API,
} from './constant';
import { AddToWishlist, RemoveFromWishlist } from '../../types/addToWishlist';

export const wishlistAdd = async (params: AddToWishlist) => {
  const { formKey, productId } = params;
  const url = `${ADD_TO_WISHLIST_API}/${productId}/form_key${formKey}/`;
  const postData = {
    product: productId,
  };

  try {
    const {
      data: { error, gamoogaList },
    } = await ApiHelper(`${url}`, 'post', postData);

    if (error) {
      return Promise.reject(
        ERROR_MSG_WISHLIST_API,
      );
    }

    return { gamoogaList };
  } catch (e) {
    const customMessage = ADD_CUSTOM_ERROR_MSG;
    logErrors(e, `${customMessage}: url = ${url}`);
    throw e;
  }
};

export const wishlistRemove = async (params: RemoveFromWishlist) => {
  const { productId } = params;
  const url = `${REMOVE_FROM_WISHLIST_API}/${productId}`;
  const postData = {
    product: productId,
  };

  try {
    const {
      data: { error },
    } = await ApiHelper(`${url}`, 'post', postData);

    if (error) {
      return Promise.reject(
        ERROR_MSG_WISHLIST_API,
      );
    }

    return true;
  } catch (error) {
    const customMessage = REMOVE_CUSTOM_ERROR_MSG;
    logErrors(error, `${customMessage}: url = ${url}`);
    throw error;
  }
};
