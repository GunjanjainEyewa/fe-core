import { PageRootTypes, PageSource } from '@eyewa/data-layer/constants';
import { PageLocationProps, PageLocationType } from '../type';

export const SEARCH_QUERY_WHITELIST = /[^\w-'&. ]/g;
export const MULTIPLE_WHITE_SPACES = /  +/g;

export const getPageLocation = (props: PageLocationProps): PageLocationType => {
  const { root = '', categoryId = '', suggestionType = '' } = props || {};
  let pageLocation = {};
  if (root?.indexOf(PageRootTypes.SEARCH) > -1) {
    pageLocation = {
      pageType: PageSource.SEARCH,
      listingPageType: suggestionType || PageSource.QUERY,
      id: categoryId,
    };
    return pageLocation;
  }
  if (root?.indexOf(PageRootTypes.OFFER_PDP) > -1) {
    pageLocation = {
      pageType: PageSource.OFFER_PAGE,
      listingPageType: suggestionType,
      id: categoryId,
    };
    return pageLocation;
  }
  pageLocation = {
    pageType: PageSource.CATEGORY,
    listingPageType: suggestionType,
    id: categoryId,
  };
  return pageLocation;
};
