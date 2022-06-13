import { ListingProduct, TipTile } from '../../type/product';
import { ActiveFilter, ListingFilter } from '../../type/filter';

export interface SeoData {
  footerContent: string;
  h1Title: string;
  metaDescription: string;
  metaKeywords: string;
  metaTitle: string;
}

export interface RedirectionData {
  redirect: boolean;
  redirectUrl: string;
}


export interface ListingData {
  recommendedSearch: string;
  messageForApproxResults: string;
  offset: number;
  seoData: SeoData;
  showingApproximateResults: boolean;
  stopFurtherCall: boolean;
  totalFound: number;
  sort: string;
  filters: ListingFilter[];
  count: number,
  products: (ListingProduct| TipTile)[];
  widgets: any[];
  queryExpansion?: {
    [key: string]: string | null;
  },
  didYouMean: {
    didYouMean: string,
    searchTerm: string,
  },
}


export interface SearchListingState {
  activeFilters: { [key: string]: ActiveFilter | string };
  error: boolean;
  errorFetchingPage: boolean; // for pagination
  isFilterChanged: boolean;
  isPageChanged: boolean;
  loading: boolean;
  loadingPage: boolean; // for pagination
  pageNumber: number;
  searchTerm: string;
  listingData?: ListingData;
}

export interface DataLayerParams {
  error?: number;
  params: any;
  transformedListingData?: ListingData;
  suggestionType?: string
}
