import platformNames from '@eyewa/utils/platform/constants';
import {
  pageTypes,
  pageNamePrefix,
  listingPageTypes,
  PageRootTypes,
  SiteNavigation,
  PageSource,
  PLP_SUB_NAV_SUFFIX,
  siteSubNavigationPrefix,
} from '@eyewa/data-layer/constants';
import { getErrorString } from '@eyewa/data-layer/store/helpers';
import { PageJourney } from '@eyewa/data-layer/store/action';
import { getSubPaths } from '@eyewa/utils/urls';
import { logger } from '@eyewa/logger';
import {
  GetDataLayer,
  OfferListingRoot,
  OfferRootValue,
  ParamsTypes,
} from './types';
import { HIDDEN_UNDERSCORE, IS_FILTERED_URL } from '../../constants';


export const transformRequest = (params: any) => {
  if (!params) {
    return {};
  }
  const transformedParams: ParamsTypes = {
    // app_version: params.app_version,
    client: params?.client || '',
    filter_format: params?.filter_format || '',
  };
  if (params?.isPro) {
    transformedParams.pro = !!params.isPro;
  }
  if (params?.categoryId) {
    transformedParams.category_id = params.categoryId;
  }
  if (params?.productsOfferId) {
    transformedParams.products_offer_id = params.productsOfferId;
  }

  if (params?.customer_group_id) {
    transformedParams.customer_group_id = params.customer_group_id;
  }

  if (params?.pageNumber) {
    transformedParams.page_no = params.pageNumber;
  }
  if (params?.store) {
    transformedParams.store = params.store;
  }
  if (params?.platform) {
    transformedParams.platform = params.platform;
  }

  if (params?.sort) {
    transformedParams.sort = params.sort;
  }

  Object.keys(params)
    .filter((key) => (key?.startsWith(HIDDEN_UNDERSCORE)) || (key === IS_FILTERED_URL) || (key.match(/_filter$/)))
    .forEach((key) => {
      transformedParams[key] = params[key];
    });

  // We do not want to send catalog_tag_filter when it is nykaa
  if (__PLATFORM__ !== platformNames.NYKAA) {
    transformedParams.catalog_tag_filter = __PLATFORM__;
  } else {
    delete transformedParams.catalog_tag_filter;
  }

  return transformedParams;
};

export const getDataLayer = ({
  errorCode,
  id,
  listingType,
  pageLevel = 0,
  params,
  pathname,
  name,
  totalFound,
}: GetDataLayer) => {
  if (errorCode && errorCode > 200) {
    return {
      pageName: getErrorString(errorCode),
      pageType: `${pageTypes.CATEGORY} L${pageLevel}`,
    };
  }
  const subPaths = getSubPaths(pathname);
  const subNavigation = `${SiteNavigation.CATEGORY} : ${subPaths.join(
    ' : ',
  )} : ${PLP_SUB_NAV_SUFFIX}`;
  const journeyData: PageJourney = {
    siteNavigation: SiteNavigation.CATEGORY,
    siteSubNavigation: subNavigation,
  };
  let searchListing = {};
  let listingOpenedFrom = `${PageSource.OTHERS}:${listingType}:${id}`;
  if (params?.root?.indexOf(PageRootTypes.SEARCH) > -1) {
    journeyData.siteNavigation = SiteNavigation.SEARCH;
    journeyData.siteSubNavigation = `${siteSubNavigationPrefix.SEARCH}${decodeURI(params?.searchItem || '')}`;
    searchListing = {
      resultCount: totalFound || 0,
    };
    const pageTypeValue = (listingType) || (PageSource.QUERY);
    listingOpenedFrom = `${PageSource.SEARCH}:${pageTypeValue}:${id}`;
  }
  if (params?.root?.indexOf(PageRootTypes.NAV) > -1) {
    listingOpenedFrom = `${PageSource.MEGA_MENU}:${listingType}:${id}`;
  }
  if (params?.intcmp) {
    listingOpenedFrom = `${PageSource.BANNER}:${listingType}:${id}`;
  }
  return {
    ...journeyData,
    pageName: pageNamePrefix.CATEGORY,
    pageType: `${pageTypes.CATEGORY} L${pageLevel}`,
    pageTitle: name,
    listingPageType: listingType || listingPageTypes.CATEGORY,
    category: {
      id,
    },
    searchListing,
    listingOpenedFrom,
  };
};


export const getOfferListingType = (root: string) => {
  if (root === OfferListingRoot.PDP) {
    return OfferRootValue.PRODUCT_DETAIL_VIEW_OFFER;
  }
  if (root === OfferListingRoot.CART) {
    return OfferRootValue.CART_VIEW_OFFER;
  }
  return '';
};

export const getOfferListingDataLayer = (root: string) => ({
  pageName: `mweb:${pageNamePrefix.OFFER_PAGE}`,
  pageType: listingPageTypes.OFFER_LISTING,
  offerListingType: getOfferListingType(root),
});

export const stripScriptTags = (str = {}) => {
  try {
    const stringifiedStr = JSON.stringify(str);
    return JSON.parse(stringifiedStr.replace(/<script>.*<\/script>/gi, ''));
  } catch (e) {
    logger.error('stripScriptTags error', e);
    return str;
  }
};
