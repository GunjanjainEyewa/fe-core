import { Dispatch } from 'redux';
import appEventTypes from '@eyewa/app/store/actionTypes';
import { defaultDataLayer } from '@eyewa/data-layer/constants';
import { statusCodes } from '@eyewa/utils/network/constants';
import { pushData } from '@eyewa/data-layer/utils';
import { pageTypes } from '@eyewa/data-layer/constants';
import { actionForSSRDataLayer } from '@eyewa/data-layer/store/action';
import logErrors from '@eyewa/logger/logErrors';
import { getWidgets } from '@eyewa/app/store/service';
import { ActiveFilter } from '../../type/filter';
import { getCategoryListing, getOfferProductListing, getPlpWidgets } from './service';
import { getDataLayer, getOfferListingDataLayer } from './helpers';
import { FetchCategoryListingParams, GetDataLayer } from './types';
import actionTypes from './actionTypes';
import { ERROR_PLP_WIDGETS } from './constant';

const defaultData = defaultDataLayer();

export const fetchCategoryListing = (params: FetchCategoryListingParams) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.FETCH_CATEGORY_DATA_PROGRESS,
  });
  const pageNumber = params?.pageNumber || 1;
  const isFirstFetch = params?.isFirstFetch || false;
  return getCategoryListing(params)
    .then((listingData) => {
      dispatch({
        type: actionTypes.FETCH_CATEGORY_DATA_SUCCESS,
        payload: {
          listingData,
          pageNumber,
        },
      });
      if (isFirstFetch) {
        dispatch({
          type: appEventTypes.APP_REDUCER_SET_PAGE,
          payload: pageTypes.CATEGORY,
        });
      }
      return listingData;
    })
    .catch((err) => {
      logErrors(err, 'Error in Fetch Product List action');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response?.status) {
        status = err.response.status;
      }
      dispatch({
        type: appEventTypes.APP_REDUCER_STATUS_CODE,
        payload: status,
      });
      dispatch({
        type: actionTypes.FETCH_CATEGORY_DATA_FAILED,
      });
      return {
        listingData: null,
        errorCode: status,
      };
    });
};

export const fetchNextPage = (params: FetchCategoryListingParams) => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.FETCH_PAGE_START,
  });
  try {
    const transformedPageData = await getCategoryListing(params);
    dispatch({
      type: actionTypes.FETCH_PAGE_SUCCESS,
      payload: transformedPageData,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_PAGE_ERROR,
      payload: error,
    });
  }
};

export const changeFilter = (newFilter: {
  [key: string]: ActiveFilter | string;
}) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FILTER_CHANGE,
    payload: newFilter,
  });
};

export const setActiveFilters = (filters: {
  [key: string]: ActiveFilter | string;
}) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.SET_ACTIVE_FILTERS,
    payload: filters,
  });
};

export const changeSort = (newSort: string) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.SORT_CHANGE,
    payload: newSort,
  });
};

export const changePage = (pageNumber: number) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.PAGE_CHANGE,
    payload: pageNumber,
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

export const fetchCategoryListingWidgets = (params: any) => (
  dispatch: Dispatch,
) => getWidgets(params)
  .then((transFormedWidgets: any) => {
    dispatch({
      type: actionTypes.FETCH_WIDGETS,
      payload: transFormedWidgets,
    });
  })
  .catch((err: any) => {
    logErrors(err, 'Error in Fetch Widgets action');
  });
export const fetchOfferProductListing = (
  params: FetchCategoryListingParams,
) => (dispatch: Dispatch) => {
  const fetchParams = params;
  dispatch({
    type: actionTypes.FETCH_CATEGORY_DATA_PROGRESS,
  });
  dispatch({
    type: actionTypes.RESET_WIDGETS,
  });
  const { pageNumber, concat } = fetchParams;
  if (fetchParams.categoryId) {
    fetchParams.productsOfferId = fetchParams.categoryId;
    delete fetchParams.categoryId;
  }
  return getOfferProductListing(fetchParams)
    .then((listingData) => {
      dispatch({
        type: actionTypes.FETCH_CATEGORY_DATA_SUCCESS,
        payload: {
          listingData,
          pageNumber: pageNumber || 1,
          concat,
        },
      });
      return listingData;
    })
    .catch((err) => {
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response?.status) {
        status = err.response.status;
      }

      dispatch({
        type: appEventTypes.APP_REDUCER_STATUS_CODE,
        payload: status,
      });
      dispatch({
        type: actionTypes.FETCH_CATEGORY_DATA_FAILED,
      });

      return {
        listingData: null,
        errorCode: status,
      };
    });
};

export const setOfferListingDataLayer = (root: string) => (
  dispatch: Dispatch,
) => {
  const dataLayer = getOfferListingDataLayer(root);
  if (__SERVER__) {
    dispatch(actionForSSRDataLayer(dataLayer));
  } else {
    pushData(
      {
        ...defaultData,
        ...dataLayer,
        spaPageView: Date.now(),
        event: 'spaCategoryPageView',
      },
      true,
    );
  }
};

export const setDataLayer = ({
  id,
  level = 0,
  listingType,
  params,
  pathname,
  totalFound,
  name,
}: GetDataLayer) => (dispatch: Dispatch) => {
  const dataLayer = getDataLayer({
    errorCode: 200,
    id,
    listingType,
    pageLevel: level,
    params,
    pathname,
    totalFound,
    name,
  });
  if (__SERVER__) {
    dispatch(actionForSSRDataLayer({ ...dataLayer }));
  } else {
    pushData(
      {
        ...defaultData,
        ...dataLayer,
        spaPageView: Date.now(),
        event: 'spaCategoryPageView',
      },
      true,
    );
  }
};

export const fetchPlpWidgets = (
  categoryId: string,
  isPro: boolean,
  platform: string,
) => async (dispatch: Dispatch) => {
  try {
    const ids = await getPlpWidgets(categoryId);
    const data = await Promise.all(
      ids.map(async (id: string) => {
        if (!id) {
          return [];
        }
        const listingData = await getCategoryListing({
          categoryId: id,
          isPro,
          platform,
        });
        return (listingData || []);
      }),
    );
    dispatch({
      type: actionTypes.PLP_WIDGETS,
      payload: { ids, data },
    });
  } catch (err) {
    logErrors(err, ERROR_PLP_WIDGETS);
  }
};
