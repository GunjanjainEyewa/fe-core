import { Dispatch } from 'redux';

import { statusCodes } from '@nykaa/utils/network/constants';
import ReviewImagesEvents from './actionTypes';
import getReviewImages from './service';
import { FetchReviewParams } from '../types';


const fetchReviewImages = ({
  id,
  pageKey,
  productName,
  newProduct = false,
}: FetchReviewParams) => (dispatch: Dispatch) => {
  dispatch({
    type: ReviewImagesEvents.REVIEW_IMAGES_FETCHING,
    payload: {
      newProduct,
    },
  });
  return getReviewImages({ id, pageKey })
    .then((reviewImagesData) => {
      dispatch({
        type: ReviewImagesEvents.REVIEW_IMAGES_SUCCESS,
        payload: {
          ...reviewImagesData,
          id,
          productName,
        },
      });
    })
    .catch((err) => {
      if (err.status === statusCodes.NOT_FOUND) {
        dispatch({
          type: ReviewImagesEvents.REVIEW_IMAGES_NOT_FOUND,
        });
      } else {
        dispatch({
          type: ReviewImagesEvents.REVIEW_IMAGES_FAILED,
        });
      }
      throw (err);
    });
};

export default fetchReviewImages;
