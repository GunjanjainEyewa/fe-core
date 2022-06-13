import { PageSource } from '@nykaa/data-layer/constants';
import { PageSourceProps } from '../types';
import {
  FEATURED,
  NOT_FEATURED,
  NO_OFFER_ID,
  NO_OFFER_MESSAGE,
} from '../constant';
import { IN_STOCK, OUT_OF_STOCK } from '../constant/addToWishlist';


export const getPageSource = ({
  pageLocation = {},
  variantType,
  productId,
  isPreview,
}: PageSourceProps) => {
  let pageSource = '';
  const platform = __PLATFORM__;
  const pageType = pageLocation?.pageType || '';
  const listingPageType = pageLocation?.listingPageType || '';
  const categoryId = pageLocation?.id || '';

  switch (pageType) {
    case PageSource.CAB_WIDGET:
    case PageSource.CAV_WIDGET:
      if (isPreview) {
        pageSource = `${platform}:${pageType}:${variantType}:${productId}`;
        return pageSource;
      }
      pageSource = `${platform}:${pageType}:${productId}`;
      return pageSource;

    case PageSource.Product:
      if (isPreview) {
        pageSource = `${platform}: pdp: ProductDetailPage: ${variantType}`;
        return pageSource;
      }
      pageSource = `${platform}: pdp: ProductDetailPage`;
      return pageSource;

    case PageSource.SEARCH:
    case PageSource.CATEGORY:
      if (isPreview) {
        pageSource = `${platform}:${pageType}:${variantType}:${listingPageType}:${categoryId}`;
        return pageSource;
      }
      pageSource = `${platform}:${pageType}:${listingPageType}:${categoryId}`;
      return pageSource;
    case PageSource.IMAGE_POPUP:
      pageSource = `Nykaa:ProductDetailPage:${PageSource.IMAGE_POPUP}`;
      return pageSource;
    case PageSource.VIDEO_POPUP:
      pageSource = `Nykaa:ProductDetailPage:${PageSource.VIDEO_POPUP}`;
      return pageSource;
    default:
      return '';
  }
};

export const getFeaturedString = (featured: boolean) => {
  if (featured) {
    return FEATURED;
  }
  return NOT_FEATURED;
};


export const getStockString = (inStock: boolean) => {
  if (inStock) {
    return IN_STOCK;
  }
  return OUT_OF_STOCK;
};

export interface OfferData {
  showOffer: boolean;
  offerId: string;
  offer: string;
}

export const getOfferTrackingData = (data: OfferData) => {
  const { showOffer = false, offerId, offer } = data;
  if (showOffer) {
    return {
      offerMessage: offer || NO_OFFER_MESSAGE,
      offerId: offerId || NO_OFFER_ID,
    };
  }
  return {};
};
