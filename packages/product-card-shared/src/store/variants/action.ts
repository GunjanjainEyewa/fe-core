import { Dispatch } from 'redux';
import { FetchProductParams } from '../../types/variants';
import EVENTS from './actionTypes';
import { getVariants } from './service';


export const fetchVariants = (params: FetchProductParams) => async (dispatch: Dispatch) => {
  dispatch({
    type: EVENTS.FETCH_VARIANTS_PROGRESS,
    loadingProductId: params.id,
  });
  return getVariants(params)
    .then((variants) => {
      dispatch({
        type: EVENTS.FETCH_VARIANTS_SUCCESS,
        payload: variants,
        productId: params.id,
      });
      return variants;
    })
    .catch((err) => {
      if (err.status === 404) {
        dispatch({
          type: EVENTS.FETCH_VARIANTS_NOT_FOUND,
        });
      } else {
        dispatch({
          type: EVENTS.FETCH_VARIANTS_FAILED,
        });
      }

      return Promise.reject(err);
    });
};

export const dummy = () => {};
