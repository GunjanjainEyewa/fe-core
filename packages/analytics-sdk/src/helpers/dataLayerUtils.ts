const commonData = {
  event_type: 'load',
};

const getDataForProductView = (
  data: Record<string, any> = {},
) => {
  const product = data.product || {};
  return {
    ...commonData,
    page_type: 'product',
    page_name: product.name,
    page_id: product.id,
    page_url: window?.location?.href,
    product_id: product.childId || product.id,
    product_sku: product.sku,
    product_name: product.name,
    product_brand: product.brandName,
    product_mrp: product.mrp,
    product_dp: product.offerPrice,
    product_currency: product.currency,
    page_frequency: 1,
  };
};

const getDataForCategoryView = (
  data: Record<string, any> = {},
) => {
  const { category = {}, listingPageType = '' } = data;
  return {
    ...commonData,
    page_frequency: 1,
    page_id: category.id,
    page_type: `${listingPageType}_listing`,
    page_name: category.name,
    page_url: window?.location?.href,
  };
};

const getDataForHomeView = (
  data: Record<string, any> = {},
) => {
  const { widgetsPageType = '' } = data;
  return {
    ...commonData,
    page_frequency: 1,
    page_id: widgetsPageType,
    page_type: 'landing',
    page_name: 'home',
    page_url: window?.location?.href,
  };
};

const getDataForNLPView = (
  data: Record<string, any> = {},
) => {
  const { widgetsPageType = '', pageName = '' } = data;
  return {
    ...commonData,
    page_frequency: 1,
    page_id: widgetsPageType,
    page_type: 'landing',
    page_name: pageName,
    page_url: window?.location?.href,
  };
};

const getDataForCMSView = (
  data: Record<string, any> = {},
) => {
  const { pageName = '', pageType = '' } = data;
  return {
    ...commonData,
    page_frequency: 1,
    page_id: pageName,
    page_type: 'landing',
    page_name: pageType,
    page_url: window?.location?.href,
  };
};

const getDataForSearchView = (
  data: Record<string, any> = {},
) => {
  const { searchListing = {} } = data;
  return {
    ...commonData,
    page_frequency: 1,
    ppage_id: searchListing.searchTerm,
    page_type: 'search_listing',
    page_name: searchListing.searchTerm,
    page_url: window?.location?.href,
  };
};

const dataLayerUtils = {
  getDataForProductView,
  getDataForCategoryView,
  getDataForHomeView,
  getDataForCMSView,
  getDataForNLPView,
  getDataForSearchView,
};

export default dataLayerUtils;
