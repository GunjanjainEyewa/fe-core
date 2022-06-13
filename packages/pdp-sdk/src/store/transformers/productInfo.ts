/* eslint-disable import/prefer-default-export */
import { ApiResponse } from '../../types/api';
import { PrimaryInfo } from '../../types/transformer';
import { PLATFORM } from '../../constants';

const getProductInfo = ({ wData = [], platform }: ApiResponse): PrimaryInfo => {
  const productInfo = wData.find((widget) => widget.wType === 'PRODUCT_PRIMARY_INFO')?.data;
  const topReviews = wData.find((widget) => widget.wType === 'TOP_REVIEW')?.data;

  const {
    tags,
    title,
    subTitle,
    price,
    discountedPrice,
    discount,
    categoryName,
    brandActionUrl,
    currency,
    badge,
  } = productInfo;

  const { rating, reviewCount, ratingCount } = topReviews;

  return {
    tags,
    title,
    subTitle,
    price,
    discountedPrice,
    discount,
    categoryName,
    brandActionUrl,
    currency: currency || 'INR',
    rating,
    reviewCount,
    ratingCount,
    badge,
    showStarActive: platform !== PLATFORM.FASHION,
  };
};

export default getProductInfo;
