import { transformListingFilters } from '../../transformer/filter';
import { transformListingProducts } from '../../transformer/product';
import { stripScriptTags } from './helpers';
import {
  CategoryListingData,
} from './types';


export const transformProductListingData = (data: any): CategoryListingData | {} => {
  if (!data) {
    return {};
  }
  const {
    category_name: categoryName = '',
    meta_description: metaDescription = '',
    meta_keywords: metaKeywords = '',
    meta_title: metaTitle = '',
    products = '',
    filters = '',
    sort = '',
    total_found: totalFound = 0,
    stop_further_call: stopFurtherCall = 0,
    canonical = '',
    type = '',
    url = '',
    product_count: productCount = 0,
    art_title: artTitle = '',
    art_url: artURL = '',
    art_link_text: linkText = '',
    art_pos: artPos = 0,
    banner_image: artImage = '',
    banner_video_image: artVideoImage = '',
    banner_video: artBannerVideo = '',

  } = data || {};
  const transformedFilters = transformListingFilters(filters);
  const artContent = stripScriptTags(data.art_content);
  const transformedData: CategoryListingData = {
    categoryName,
    metaDescription,
    metaKeywords,
    canonical,
    metaTitle,
    sort,
    totalFound,
    filters: transformedFilters,
    stopFurtherCall: !!stopFurtherCall,
    listingType: type,
    count: productCount,
    url,
    products: transformListingProducts(products) || [],
    artTitle,
    artContent,
    artURL,
    linkText,
    artImage,
    artVideoImage,
    artBannerVideo,
    artPos,
  };
  return transformedData;
};

export const transformPriceListBestSellers = (list: any) => (
  list.map((item: any) => (
    {
      inStock: item.in_stock,
      mrp: item.mrp,
      productName: item.product_name,
      productUrl: item.product_url,
      quantity: item.quantity,
    }
  ))
);


export const transformPriceList = (data : any) => {
  if (!data) {
    return { };
  }
  return {
    bestSellers: transformPriceListBestSellers(data.best_sellers || []),
    title: data.title,
    lastUpdated: data.last_updated,
  };
};


export const transformPlpWidget = (data: any) => {
  const categoryIds = (data?.result?.category_ids) || [];
  return categoryIds;
};
