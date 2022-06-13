import { Dispatch } from 'redux';
import appEventTypes from '@nykaa/app/store/actionTypes';
import { defaultDataLayer } from '@nykaa/data-layer/constants';
import { statusCodes } from '@nykaa/utils/network/constants';
import { pushData } from '@nykaa/data-layer/utils';
import { pageTypes } from '@nykaa/data-layer/constants';
import logErrors from '@nykaa/logger/logErrors';

import { actionForSSRDataLayer } from '@nykaa/data-layer/store/action';
import { ActiveFilter } from '../../type/filter';
import { createActiveFilterObjectFromURL } from '../../utils/filter';
import { RedirectionData } from './types';
import actionTypes from './actionTypes';
import { getSearchProducts } from './service';
import { ERROR_MESSAGE_TEMPLATE } from './constants';

import { getDataLayer } from './helpers';
import { ListingData } from './types';

const defaultData = defaultDataLayer();


export const fetchSearchProducts = (
  params: { [key: string]: string | number },
  queryString: string,
  isFilterOrSortUpdate: boolean = false,
) => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FETCH_PROGRESS,
  });
  const { search } = params;
  return getSearchProducts(params).then((transformedListingData) => {
    if ((transformedListingData as RedirectionData).redirect) {
      return transformedListingData;
    }
    const activeFilters = createActiveFilterObjectFromURL(
      (transformedListingData as ListingData).filters,
      queryString,
    );
    dispatch({
      type: actionTypes.FETCH_SUCCESS,
      payload: {
        listingData: transformedListingData,
        pageNumber: 1,
        searchTerm: search,
        activeFilters,
      },
    });
    const suggestionType = activeFilters?.suggestionType;
    const data = transformedListingData as ListingData;
    if (!isFilterOrSortUpdate) {
      const dataLayer = getDataLayer(
        null,
        params,
        data,
        suggestionType,
      );
      if (__SERVER__) {
        dispatch(actionForSSRDataLayer(dataLayer));
      } else {
        pushData(
          {
            ...defaultData,
            ...dataLayer,
            spaPageView: Date.now(),
          },
          true,
        );
      }
      dispatch({
        type: appEventTypes.APP_REDUCER_SET_PAGE,
        payload: pageTypes.SEARCH_LISTING,
      });
    }
    return transformedListingData;
  }).catch((error) => {
    let statusCode = statusCodes.ERROR;
    if (error.isAxiosError && error.response?.status) {
      statusCode = error.response.status;
    }
    logErrors(error, `${statusCode}: ${ERROR_MESSAGE_TEMPLATE}`);
    const dataLayer = getDataLayer(
      error,
      params,
    );
    dispatch({
      type: appEventTypes.APP_REDUCER_STATUS_CODE,
      payload: statusCode,
    });
    if (__SERVER__) {
      dispatch({
        type: actionTypes.FETCH_ERROR,
      });
      dispatch(actionForSSRDataLayer(dataLayer));
    } else {
      dispatch({
        type: actionTypes.FETCHING_ERROR_CLIENT,
      });
      pushData(dataLayer);
    }
  });
};


export const changeFilter = (newFilter: {
  [key: string]: ActiveFilter | string;
}) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FILTER_CHANGE,
    payload: newFilter,
  });
};

export const resetFilters = (newFilters: {
  [key: string]: ActiveFilter | string;
}) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.RESET_FILTERS,
    payload: newFilters,
  });
};

export const changeSort = (newSort: string) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.SORT_CHANGE,
    payload: newSort,
  });
};

export const changePage = () => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_PAGE,
  });
};

export const fetchNextPage = (params: {
  [key: string]: string | number;
}) => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FETCH_PAGE_START,
  });
  try {
    const transformedPageData = await getSearchProducts(params, true);
    dispatch({
      type: actionTypes.FETCH_PAGE_SUCCESS,
      payload: transformedPageData,
    });
  } catch (error) {
    setTimeout(() => {
      dispatch({
        type: actionTypes.FETCH_PAGE_ERROR,
        payload: error,
      });
    }, 200);
  }
};
