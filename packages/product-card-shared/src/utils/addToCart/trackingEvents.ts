
import { pushEvent } from '@nykaa/data-layer/utils';
import { events } from '@nykaa/data-layer/constants';
import { PageJourney } from '@nykaa/data-layer/store/action';
import {
  CartDataLayerData, CartEvent, CartTrackingData, TrackingFuncData,
} from '../../types/addToCart';
import { getPageSource, getFeaturedString, getOfferTrackingData } from '..';

export interface OfferData {
  offerId: string;
  offerMessage: string;
}

const pushAddToCart = (data: CartDataLayerData, journeyData?: PageJourney): void => {
  const cardEventData: CartEvent = {
    cartAddition: data,
  };
  if (journeyData) {
    cardEventData.siteNavigation = journeyData.siteNavigation;
    cardEventData.siteSubNavigation = journeyData.siteSubNavigation;
  }
  pushEvent(
    events.ADD_TO_CART_CLICK,
    cardEventData,
  );
};

export const pushAddToCartSuccess = (data: any, offerData?: OfferData) => {
  pushEvent(
    events.ADD_TO_CART_SUCCESS,
    { cartAdditionSuccess: data, ...offerData },
  );
};

export const trackAddToCart = ({
  product, cartData, journeyData, pageSource, videoId,
}: CartTrackingData, addTrackingData?: any) => {
  const { showOffer, offer, offerId: id } = product;
  const { offerMessage, offerId } = getOfferTrackingData({ showOffer, offer, offerId: id });
  pushAddToCart({
    brandName: product?.brandName,
    variantName: product?.name,
    productId: product?.childId,
    offerPrice: product?.offerPrice || product?.price,
    mrp: product?.mrp,
    quantity: 1,
    productImageUrl: product?.media?.filter(({ mediaType }) => mediaType === 'image')[0]?.url,
    categoryNames: [null, 'p'],
    featured: getFeaturedString(product?.featured || false),
    categoryLevel: product?.primaryCategories,
    isLux: product?.isLux,
    isFreeSample: product?.isFreeSample,
    pageSource,
    videoId,
    ...addTrackingData,
  }, journeyData);

  pushAddToCartSuccess({
    grandTotal: cartData?.grandTotal,
    cartItems: cartData?.items.map((cartItem) => ({
      productId: cartItem?.productId,
      quantity: cartItem?.quantity,
      sku: cartItem?.sku,
      parentId: product?.parentId,
      offerPrice: cartItem?.offerPrice,
      productName: cartItem?.name,
    })),
  }, {
    ...(offerId && { offerId }),
    ...(offerMessage && { offerMessage }),
  });
};

export const addToCartTracking = ({
  product, pageLocation, showShades, cartData, journeyData, videoId,
}: TrackingFuncData) => {
  if (!product) {
    return;
  }
  const pageSource = getPageSource({
    pageLocation,
    variantType: product?.variantType,
    productId: product?.childId,
    isPreview: showShades,
  });
  trackAddToCart({
    product,
    cartData,
    pageSource,
    journeyData,
    videoId,
  });
};
