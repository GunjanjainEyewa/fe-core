import widgetTransformer from '@eyewa/deals-transformer';
import { transformListingProducts } from '../../transformer/product';
import { transformListingFilters } from '../../transformer/filter';
import { sanitizeQuery } from './helpers';
import { ListingData, RedirectionData } from './types';

export const transformSearchListingData = async (
  rawData: any,
): Promise<ListingData | RedirectionData | {}> => {
  if (!rawData) {
    return {};
  }
  const { redirect } = rawData || {};
  if (redirect && redirect?.value) {
    /**
     * 💡 Any of the other fields do not come in case of redirect
     * So, we just return with necessary data and avoid
     * trying to process the other information that just isn't there
     */
    return {
      redirect: true,
      redirectUrl: redirect.value,
    };
  }

  // Handling suggestions
  let recommendedSearch = '';
  if (rawData?.suggestions) {
    const suggestedSearch = rawData.suggestions?.suggestion_word || '';
    if (suggestedSearch && suggestedSearch.trim() !== '') {
      recommendedSearch = sanitizeQuery(suggestedSearch);
    }
  }

  const searchTerm = rawData?.did_you_mean?.original_word || '';
  const didYouMean = rawData?.did_you_mean?.dym_word || '';

  // Handling "Top banners"
  let widgets = [];
  const topOffersFromRawData = rawData?.top_offers || [];
  if (topOffersFromRawData && topOffersFromRawData.length > 0) {
    const transformedData = await widgetTransformer(topOffersFromRawData, true);
    widgets = transformedData.widgets;
  }
  // Handling of SEO data
  const seoData = {
    footerContent: rawData?.footer_content || '',
    h1Title: rawData?.h1 || '',
    metaDescription: rawData?.meta_description || '',
    metaKeywords: rawData?.meta_keywords || '',
    metaTitle: rawData?.title || '',
  };
  const transformedFilters = transformListingFilters(rawData?.filters) || [];
  return {
    recommendedSearch,
    seoData,
    sort: rawData?.sort || '',
    filters: transformedFilters,
    messageForApproxResults: rawData?.ui_message || '',
    offset: rawData.offset || 0,
    showingApproximateResults:
      rawData?.no_results_found__showing_approximate_results || false,
    stopFurtherCall: !!rawData?.stop_further_call || false, // convert to boolean
    totalFound: rawData?.total_found || 0,
    count: rawData?.product_count || 0,
    widgets,
    products: transformListingProducts(rawData?.products),
    queryExpansion: {
      term: rawData?.query_expansion_term,
      type: rawData?.query_expansion_type,
    },
    didYouMean: {
      didYouMean,
      searchTerm,
    },
  };
};

export const transformPageData = (rawData: any) => ({
  products: transformListingProducts(rawData.products),
  stopFurtherCall: !!rawData.stop_further_call,
});
