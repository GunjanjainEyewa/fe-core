import { useState, useEffect } from 'react';
import {
  ADDED_TO_WISHLIST_TEXT,
  ADD_TO_WISHLIST_TEXT,
} from '../../constant/addToWishlist';
import { WishlistWrapperProps } from '../../types/addToWishlist';
import { getOfferTrackingData, OfferData } from '../../utils';
import { addToWishlistTracking, removeFromWishlistTracking } from '../../utils/addToWishlist/trackingEvents';


function WishlistWrapper({
  pageLocation,
  user,
  product,
  wishlistCallback,
  redirectAuthPage,
  videoId,
  children,
}: WishlistWrapperProps) {
  const childId = product?.childId;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const {
    email, formKey, id: userId, wishlist,
  } = user || {};
  const buttonText = isInWishlist ? ADDED_TO_WISHLIST_TEXT : ADD_TO_WISHLIST_TEXT;
  const isProductInWishlist = wishlist?.some((id) => id === childId);
  useEffect(() => {
    if (isProductInWishlist) {
      setIsInWishlist(true);
      return;
    }
    setIsInWishlist(false);
  }, [childId, isProductInWishlist, userId]);

  const wishlistAdd = async ({ showOffer, offer, offerId }: OfferData) => {
    setIsInWishlist(true);
    const { wishlistData } = await wishlistCallback({
      productId: childId,
      formKey,
    }, true);
    if (wishlistData) {
      const offerData = getOfferTrackingData({ showOffer, offer, offerId });
      addToWishlistTracking({
        product, pageLocation, wishlistData, videoId, ...offerData,
      });
      return;
    }

    setIsInWishlist(false);
  };

  const wishlistRemove = async ({ showOffer, offer, offerId }: OfferData) => {
    setIsInWishlist(false);
    const { wishlistData } = await wishlistCallback({
      productId: childId,
    }, false);
    if (wishlistData) {
      const offerData = getOfferTrackingData({ showOffer, offer, offerId });
      removeFromWishlistTracking({ product, ...offerData });
      return;
    }
    setIsInWishlist(true);
  };
  const { showOffer, offer, offerId } = product;
  const handleClick = () => {
    if ((!redirectAuthPage) || (!wishlistCallback)) {
      return;
    }
    if (!email) {
      redirectAuthPage();
      return;
    }
    const inWishList = childId && isInWishlist;
    if (inWishList) {
      wishlistRemove({ showOffer, offer, offerId });
      return;
    }
    const notInWishList = childId && !isInWishlist;
    if (notInWishList) {
      wishlistAdd({ showOffer, offer, offerId });
    }
  };

  return children ? children({
    handleClick,
    isInWishlist,
    buttonText,
  }) : null;
}

export default WishlistWrapper;
