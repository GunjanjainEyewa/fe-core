import { useState } from 'react';
import { noop } from '../../constant';
import {
  ADDING_TO_BAG_TEXT,
  ADD_TO_BAG_TEXT,
} from '../../constant/addToCart';
import { CartParams, CartWrapperProps } from '../../types/addToCart';
import { addToCartTracking } from '../../utils/addToCart/trackingEvents';


function CartWrapper({
  product,
  pageLocation,
  isPro,
  showShades,
  addToCartCallback,
  handleCallback = noop,
  children,
  journeyData,
  videoId,
}: CartWrapperProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { childId, buttonText } = product || {};
  const addButtonText = buttonText || ADD_TO_BAG_TEXT;
  const text = isLoading ? ADDING_TO_BAG_TEXT : addButtonText;
  const stripClass = isLoading ? 'progress-striped' : '';
  const handleAddToCart = async () => {
    if (!addToCartCallback) {
      return;
    }
    const params: CartParams = { productId: childId, pro: isPro };
    if (!isLoading) {
      setIsLoading(true);
      const { cartData } = await addToCartCallback(params);
      handleCallback(Boolean(cartData));
      setIsLoading(false);
      if (cartData) {
        addToCartTracking({
          product, pageLocation, showShades, cartData, journeyData, videoId,
        });
      }
    }
  };
  return children ? children({
    handleAddToCart,
    text,
    stripClass,
  }) : null;
}

export default CartWrapper;
