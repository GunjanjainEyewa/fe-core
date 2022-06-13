const categoryListingEvents = {
  FETCH_CATEGORY_DATA_PROGRESS: 'categoryList/fetch_data_progress',
  FETCH_CATEGORY_DATA_SUCCESS: 'categoryList/fetch_data_success',
  FETCH_CATEGORY_DATA_NOT_FOUND: 'categoryList/fetch_data_not_found',
  FETCH_CATEGORY_DATA_FAILED: 'categoryList/fetch_data_failed',
  FILTER_CHANGE: 'categoryList/filter_change',
  SET_ACTIVE_FILTERS: 'categoryList/set_active_filters',
  RESET_FILTERS: 'searchList/resetFilters',
  FETCH_PAGE_START: 'searchList/fetchPageStart',
  FETCH_PAGE_SUCCESS: 'searchList/fetchPageSuccess',
  FETCH_PAGE_ERROR: 'searchList/fetchPageError',
  SORT_CHANGE: 'category/sort_change',
  PAGE_CHANGE: 'category/page_change',
  FETCH_WIDGETS: 'category/widgets',
  RESET_WIDGETS: 'category/reset_widgets',
  PLP_WIDGETS: 'category/PLP_widgets',
};

export default categoryListingEvents;
