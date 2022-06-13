import { MetaWidgetInfo } from '../../types/transformer';
import { ApiResponse } from '../../types/api';

const getMetaInfo = ({ wData = [], metadata }: ApiResponse): MetaWidgetInfo => {
  const primaryInfo = wData.find((widget) => widget.wType === 'PRODUCT_PRIMARY_INFO')?.data || {};
  const topReviews = wData.find((widget) => widget.wType === 'TOP_REVIEW')?.data || {};
  const {
    discount,
    discountedPrice,
    price,
    currency,
    isOutOfStock,
    sku,
    title,
    subTitle,
  } = primaryInfo;

  const { helpfulReview, rating, reviewCount } = topReviews;

  return {
    discount,
    discountedPrice,
    price,
    currency,
    isOutOfStock,
    sku,
    title,
    subTitle,
    helpfulReview,
    rating,
    reviewCount,
    ...metadata,
  };
};

export default getMetaInfo;
