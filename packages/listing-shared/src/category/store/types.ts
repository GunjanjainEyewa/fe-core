import { ActiveFilter, ListingFilter } from '../../type/filter';
import { ListingProduct, TipTile } from '../../type/product';


export interface MatchProps {
  slug: string;
  id: string;
}

export interface CategoryListingData {
  listingType: string;
  categoryName: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonical?: string;
  metaTitle?: string;
  totalFound: number;
  stopFurtherCall: boolean;
  products: (ListingProduct | TipTile)[];
  sort: string;
  count: number;
  url: string;
  filters: ListingFilter[];
  artTitle?: string;
  artContent?: string;
  artURL?: string;
  artPos?: number,
  linkText?: string;
  artImage?: string;
  artVideoImage?: string;
  artBannerVideo?: string;
}

export interface CategoryListState {
  loading: boolean;
  isNotFound: boolean;
  serverError: boolean;
  widgets: any[];
  plpWidgets?: PlpWidgets;
  isFetchingError: boolean;
  loadingPage: boolean;
  errorFetchingPage: boolean;
  pageNumber: number;
  isFilterChanged: boolean;
  isPageChanged: boolean;
  activeSort: string;
  listingData?: CategoryListingData;
  activeFilters: {[key: string]: number | string | ActiveFilter},
}

export interface PlpWidgets {
  ids: string[];
  data: (ListingProduct | TipTile)[]
}
export interface FetchCategoryListingParams {
  categoryId: string;
  pageNumber?: number;
  isPro: boolean;
  sort?: string;
  [key: string]: any;
  isFirstFetch?: boolean;
  platform: string;
}

export interface GetDataLayer {
  errorCode: (number | null);
  id: string | number;
  pageLevel: number;
  level?: number;
  listingType: string;
  params: any;
  pathname: string;
  totalFound: number;
  name: string;
}


export enum OfferListingRoot {
  PDP = 'pdp',
  CART= 'cart',
}

export enum OfferRootValue {
  PRODUCT_DETAIL_VIEW_OFFER = 'ProductDetailViewOffer',
  CART_VIEW_OFFER= 'CartViewOffer',
}

export interface ParamsTypes {
  [key: string]: string | boolean;
}
