import { Action } from '../../type';
import actionTypes from './actionTypes';
import { CategoryListState } from './types';


const defaultState: CategoryListState = {
  errorFetchingPage: false,
  loading: false,
  isFetchingError: false,
  isNotFound: false,
  pageNumber: 1,
  activeFilters: {},
  isFilterChanged: false,
  isPageChanged: false,
  serverError: false,
  widgets: [],
  activeSort: '',
  loadingPage: false,
};

const categoryListing = (state = defaultState, action: Action): CategoryListState => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_CATEGORY_DATA_PROGRESS:
      return {
        ...state,
        loading: true,
        isNotFound: false,
        isFetchingError: false,
        isFilterChanged: false,
        isPageChanged: false,
        loadingPage: false,
        errorFetchingPage: false,
      };

    case actionTypes.FETCH_CATEGORY_DATA_FAILED: {
      const activeFilters = state?.activeFilters;
      const { page_no: page = 1 } = activeFilters;
      const pageNo = Number(page) - 1 || 1;
      const isServer = Boolean(__SERVER__);
      return {
        ...state,
        activeFilters: {
          ...activeFilters,
          page_no: pageNo,
        },
        loading: false,
        isNotFound: false,
        isFetchingError: true,
        serverError: isServer,
        loadingPage: false,
        errorFetchingPage: false,
      };
    }
    case actionTypes.FETCH_CATEGORY_DATA_SUCCESS: {
      const { listingData, pageNumber } = payload || {};
      if (!listingData) {
        return { ...defaultState, isFetchingError: true };
      }
      const { activeFilters } = state;
      return {
        ...state,
        loading: false,
        errorFetchingPage: false,
        pageNumber,
        activeFilters: {
          ...activeFilters,
          page_no: pageNumber,
          sort: listingData.sort,
        },
        listingData: {
          ...listingData,
          products: listingData.products,
        },
      };
    }

    case actionTypes.FILTER_CHANGE: {
      const { activeFilters: activeFiltersSate } = state;
      return {
        ...state,
        activeFilters: {
          ...payload,
          page_no: 1,
          sort: activeFiltersSate.sort,
        },
        isFilterChanged: true,
      };
    }

    case actionTypes.SET_ACTIVE_FILTERS: {
      const { activeFilters: activeFiltersSate } = state;
      return {
        ...state,
        activeFilters: {
          ...activeFiltersSate,
          ...payload,
        },
        isFilterChanged: false,
      };
    }
    case actionTypes.RESET_FILTERS:
      return {
        ...state,
        activeFilters: payload,
      };
    case actionTypes.SORT_CHANGE: {
      const { activeFilters: activeFiltersSate } = state;
      const pageNo = activeFiltersSate?.page_no || 1;
      return {
        ...state,
        activeFilters: {
          ...activeFiltersSate,
          page_no: pageNo,
          sort: payload,
        },
        isFilterChanged: true,
      };
    }
    case actionTypes.PAGE_CHANGE: {
      const { activeFilters: activeFiltersSate } = state;
      return {
        ...state,
        activeFilters: {
          ...activeFiltersSate,
          page_no: payload,
        },
        isPageChanged: true,
      };
    }
    case actionTypes.FETCH_PAGE_START:
      return {
        ...state,
        errorFetchingPage: false,
        isPageChanged: false,
        loadingPage: true,
      };
    case actionTypes.FETCH_PAGE_SUCCESS: {
      const activeFilters = state?.activeFilters;
      const page = activeFilters?.page_no || 1;
      const newListingData = {
        ...state.listingData,
        products: [...payload.products],
        stopFurtherCall: payload.stopFurtherCall,
      };
      return {
        ...state,
        loadingPage: false,
        listingData: newListingData,
        pageNumber: Number(page),
      };
    }

    case actionTypes.FETCH_PAGE_ERROR:
      return {
        ...state,
        errorFetchingPage: true,
        loadingPage: false,
      };

    case actionTypes.FETCH_WIDGETS: {
      return {
        ...state,
        widgets: payload,
      };
    }

    case actionTypes.RESET_WIDGETS: {
      return {
        ...state,
        widgets: [],
      };
    }
    case actionTypes.PLP_WIDGETS: {
      return {
        ...state,
        plpWidgets: payload,
      };
    }

    default:
      return state;
  }
};

export default categoryListing;
