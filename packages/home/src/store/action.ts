import { Dispatch } from 'redux';

import { statusCodes } from '@nykaa/utils/network/constants';
import { actionForSSRDataLayer } from '@nykaa/data-layer/store/action';
import { pushData } from '@nykaa/data-layer/utils';
import appEventTypes from '@nykaa/app/store/actionTypes';

import { FetchHomePageParams } from './types';
import actionTypes from './actionTypes';
import { getHomePageWidgets } from './service';
import { getDataLayer, getMetaData } from './helper';


export const fetchHomePageWidgets = (params: FetchHomePageParams) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FETCH_HOME_PAGE_DATA_PROGRESS,
  });
  return getHomePageWidgets(params)
    .then((widgets) => {
      if (widgets && widgets.length > 0) {
        dispatch({
          type: actionTypes.FETCH_HOME_PAGE_DATA_SUCCESS,
          payload: widgets,
          metaData: getMetaData(widgets),
        });
      }

      return {
        errorCode: null,
      };
    })
    .catch((err) => {
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response?.status) {
        status = err.response.status;
      }

      dispatch({
        type: actionTypes.FETCH_HOME_PAGE_DATA_FAILED,
      });

      dispatch({
        type: appEventTypes.APP_REDUCER_STATUS_CODE,
        payload: status,
      });

      return {
        errorCode: status,
      };
    })
    .then(({ errorCode }) => {
      const dataLayer = getDataLayer(errorCode);
      if (__SERVER__) {
        dispatch(
          actionForSSRDataLayer(dataLayer),
        );
      } else {
        pushData(dataLayer);
      }
    });
};

export const dummy = () => {};
