import {
  pageTypes,
  SiteNavigation,
  siteSubNavigationPrefix,
  PageSource,
} from '@eyewa/data-layer/constants';
import { getErrorString } from '@eyewa/data-layer/store/helpers';
import { PageJourney } from '@eyewa/data-layer/store/action';
import {
  MULTIPLE_WHITE_SPACES,
  SEARCH_QUERY_WHITELIST,
} from '../../utils';
import { ListingData } from './types';
import { HIDDEN_UNDERSCORE, IS_FILTERED_URL } from '../../constants';

export const sanitizeQuery = (
  str: string,
  replaceWith: string = '',
): string => {
  if (!str || str === '') {
    return str;
  }
  try {
    // * Search API allows the following special characters "-" "&" "." "'"
    return str.replace(SEARCH_QUERY_WHITELIST, replaceWith);
  } catch (e) {
    return str;
  }
};

export const filterParamsForSearch = (
  params: any,
  isPro: boolean,
  groupId: string,
  platform: string,
) => {
  if (!(params && typeof params === 'object')) {
    throw new Error(`params has to be of type object... passed: ${params}`);
  }
  const { sort = '', q: query = '' } = params;
  const sanitizedQuery = sanitizeQuery(decodeURIComponent(query), ' ');
  // ? "red  lipstick" => "red lipstick" transformation is done by logic below
  const sanitizeQueryWithExtraSpacesRemoved = sanitizedQuery
    .replace(MULTIPLE_WHITE_SPACES, ' ')
    .trim();
  const searchParams: any = {
    ...(sanitizeQueryWithExtraSpacesRemoved && {
      search: sanitizeQueryWithExtraSpacesRemoved,
    }),
    ...(sort && { sort }),
  };
  const parameterKeys = Object.keys(params);
  parameterKeys.forEach((parameterKey: string) => {
    const isOptionalParam = (
      (parameterKey?.startsWith(HIDDEN_UNDERSCORE))
      || (parameterKey === IS_FILTERED_URL)
    );
    if (isOptionalParam || parameterKey.indexOf('_filter') >= 1) {
      searchParams[parameterKey] = params[parameterKey];
    }
  });

  if (isPro) {
    searchParams.pro = true;
  }
  if (groupId) {
    searchParams.customer_group_id = groupId;
  }
  if (platform) {
    searchParams.platform = platform;
  }
  return searchParams;
};

export function getDataLayer(
  errorCode: number | null,
  params: any,
  listingData?: ListingData,
  suggestionType?: string,
) {
  if (errorCode && errorCode > 200) {
    return {
      pageName: getErrorString(errorCode),
      pageType: pageTypes.SEARCH_LISTING,
    };
  }
  const journeyData: PageJourney = {};
  journeyData.siteNavigation = SiteNavigation.SEARCH;
  journeyData.siteSubNavigation = `${siteSubNavigationPrefix.SEARCH} ${params.search}`;
  const suggestionTypeValue = suggestionType || PageSource.QUERY;
  const listingOpenedFrom = `${PageSource.SEARCH}:${suggestionTypeValue}:${params.search}`;
  const { totalFound, recommendedSearch, messageForApproxResults } = listingData || {};
  let searchType = 'null';
  if (totalFound > 0 && (recommendedSearch || messageForApproxResults)) {
    searchType = 'alternate';
  }
  if (totalFound > 0 && !(recommendedSearch || messageForApproxResults)) {
    searchType = 'query';
  }
  return {
    ...journeyData,
    pageName: 'Search',
    pageType: pageTypes.SEARCH_LISTING,
    searchType,
    pageTitle: params.search,
    listingPageType: 'search',
    searchListing: {
      resultCount: listingData?.totalFound || 0,
      searchTerm: params.search,
      alternateSearch: listingData?.recommendedSearch || '',
    },
    listingOpenedFrom,
  };
}
