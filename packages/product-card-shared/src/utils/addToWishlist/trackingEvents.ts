import { pushEvent } from '@nykaa/data-layer/utils';
import { events } from '@nykaa/data-layer/constants';
import {
  RemoveWishlistTrackingData,
  RemoveWishlistDataLayer,
  TrackingFuncData,
  WishlistForDataLayer,
  WishlistTrackingData,
} from '../../types/addToWishlist';
import { getFeaturedString, getPageSource, getStockString } from '..';

const pushWishlist = (data: WishlistForDataLayer) => {
  const { offerId, offerMessage } = data;
  pushEvent(events.ADD_TO_WISHLIST_SUCCESS, {
    wishlistAddition: data,
    ...(offerId && { offerId }),
    ...(offerMessage && { offerMessage }),
  });
};

const pushWishlistRemove = (data: RemoveWishlistDataLayer) => {
  const { offerId, offerMessage } = data;
  pushEvent(events.REMOVE_ROM_WISHLIST, {
    wishlistRemove: data,
    ...(offerId && { offerId }),
    ...(offerMessage && { offerMessage }),
  });
};

export const trackAddToWishlist = (
  wishlistData: WishlistTrackingData,
  trackData?: any,
) => {
  const {
    gamooga, product, pageSource, videoId,
  } = wishlistData;
  pushWishlist({
    gamoogaData: gamooga,
    productId: product.id,
    brandName: product.brandName,
    mrp: product.mrp,
    productName: product.name,
    offerPrice: product.offerPrice,
    categoryLevel: product.primaryCategories,
    isLux: product.isLux,
    featured: getFeaturedString(product?.featured),
    inStock: getStockString(product.inStock),
    pageSource,
    videoId,
    ...trackData,
  });
};

export const trackRemoveFromWishlist = (
  wishlistData: RemoveWishlistTrackingData,
  trackData?: any,
) => {
  const { product } = wishlistData;
  pushWishlistRemove({
    productId: product.id,
    featured: getFeaturedString(product.featured),
    inStock: getStockString(product.inStock),
    ...trackData,
  });
};

export const addToWishlistTracking = ({
  product,
  pageLocation,
  wishlistData,
  videoId,
  offerId,
  offerMessage,
}: TrackingFuncData) => {
  const pageSource = getPageSource({
    pageLocation,
    productId: product?.childId,
  });
  const offerData = {
    ...(offerId && { offerId }),
    ...(offerMessage && { offerMessage }),
  };
  trackAddToWishlist({
    ...wishlistData,
    product,
    pageSource,
    videoId,
  }, offerData);
};

export const removeFromWishlistTracking = ({
  product,
  offerId,
  offerMessage,
}: TrackingFuncData) => {
  const offerData = {
    ...(offerId && { offerId }),
    ...(offerMessage && { offerMessage }),
  };
  trackRemoveFromWishlist({
    product: {
      id: product?.childId,
      featured: product?.featured || false,
      inStock: product?.inStock || false,
    },
  }, offerData);
};
