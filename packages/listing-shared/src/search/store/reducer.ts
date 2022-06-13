import { Action } from '../../type';
import actionTypes from './actionTypes';
import { SearchListingState } from './types';


const defaultState: SearchListingState = {
  activeFilters: {},
  error: false,
  errorFetchingPage: false,
  isFilterChanged: false,
  isPageChanged: false,
  loading: false,
  loadingPage: false,
  pageNumber: 0,
  searchTerm: '',
};

const REDUCER_NAME = (state = defaultState, action: Action): SearchListingState => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_PROGRESS:
      return {
        ...state,
        error: false,
        errorFetchingPage: false,
        isFilterChanged: false,
        loading: true,
        loadingPage: false,
      };

    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        pageNumber: 1,
        listingData: payload.listingData,
        searchTerm: payload.searchTerm,
        activeFilters: payload.activeFilters,
      };

    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case actionTypes.FETCHING_ERROR_CLIENT:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.FILTER_CHANGE: {
      const { activeFilters: activeFiltersSate } = state;
      return {
        ...state,
        activeFilters: {
          ...payload,
          sort: activeFiltersSate.sort,
        },
        isFilterChanged: true,
      };
    }

    case actionTypes.RESET_FILTERS:
      return {
        ...state,
        activeFilters: payload,
      };

    case actionTypes.SORT_CHANGE: {
      const { activeFilters: activeFiltersSate } = state;

      return {
        ...state,
        activeFilters: {
          ...activeFiltersSate,
          sort: payload,
        },
        isFilterChanged: true,
      };
    }

    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        isPageChanged: true,
      };
    case actionTypes.FETCH_PAGE_START:
      return {
        ...state,
        errorFetchingPage: false,
        isPageChanged: false,
        loadingPage: true,
      };

    case actionTypes.FETCH_PAGE_SUCCESS: {
      const currentListingProducts = state.listingData?.products || [];
      const newListingData = {
        ...state.listingData,
        products: [
          ...currentListingProducts,
          ...payload.products,
        ],
        stopFurtherCall: payload.stopFurtherCall,
      };

      return {
        ...state,
        loadingPage: false,
        listingData: newListingData,
        pageNumber: state.pageNumber + 1,
      };
    }

    case actionTypes.FETCH_PAGE_ERROR:
      return {
        ...state,
        errorFetchingPage: true,
        loadingPage: false,
      };

    default:
      return state;
  }
};

export default REDUCER_NAME;
