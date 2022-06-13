import actionTypes from './actionTypes';
import { Action } from '../types';
import { defaultState } from '../constants';

const ReviewImages = (
  state = defaultState,
  action: Action,
) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.REVIEW_IMAGES_FETCHING:
      if (payload?.newProduct) {
        return {
          ...defaultState,
          loading: true,
          isNotFound: false,
          isFetchingError: false,
        };
      }
      return {
        ...state,
        loading: true,
        isNotFound: false,
        isFetchingError: false,
      };

    case actionTypes.REVIEW_IMAGES_SUCCESS:
      return {
        ...state,
        totalImagesAvailable: payload?.totalImagesAvailable || state.totalImagesAvailable,
        loading: false,
        isNotFound: false,
        isFetchingError: false,
        nextPageKey: payload?.nextPageKey,
        images: [
          ...state.images,
          ...payload?.images,
        ],
        imagesWithInfo: [
          ...state.imagesWithInfo,
          ...payload?.imagesWithInfo,
        ],
        productId: payload?.productId,
      };

    case actionTypes.REVIEW_IMAGES_NOT_FOUND:
      return {
        ...state,
        loading: false,
        isNotFound: true,
        isFetchingError: false,
      };

    case actionTypes.REVIEW_IMAGES_FAILED:
      return {
        ...state,
        loading: false,
        isNotFound: false,
        isFetchingError: true,
      };

    default:
      return state;
  }
};


export default ReviewImages;
