import { ApiResponse } from '../../types/api';
import { ProductInfo } from '../../types/transformer';

const getPdpInfo = ({ wData = [] }: ApiResponse): ProductInfo => {
  const extractedData = wData.find(
    (widget) => widget.wType === 'PRODUCT_PRIMARY_INFO',
  ).data;

  const {
    id,
    sku,
    tags,
    title,
    subTitle,
    price,
    discountedPrice,
    discount,
    categoryName,
    imageUrl,
    shipsIn,
    isOutOfStock,
    showWishlistButton,
    options,
    currency,
  } = extractedData;

  return {
    id,
    sku,
    tags,
    title,
    subTitle,
    price,
    discountedPrice,
    discount,
    categoryName,
    imageUrl,
    shipsIn,
    isOutOfStock,
    showWishlistButton,
    sizes: options?.child?.sizes,
    siblingColors: options?.siblings?.colors,
    childColors: options?.child?.colors,
    currency: currency || 'INR',
  };
};


export default getPdpInfo;
