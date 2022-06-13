import { BrandInfo } from '../../types/transformer';
import { ApiResponse, WidgetsData } from '../../types/api';

const getBrandInfo = ({ wData = [] }: ApiResponse): BrandInfo | null => {
  const brandInfo: WidgetsData = wData.find(
    (widget) => widget.wType === 'PRODUCT_BRAND_INFO',
  );

  // return if no brand Information Available
  if (!brandInfo || Object.keys(brandInfo.data).length === 0) {
    return null;
  }

  const productInfo: WidgetsData = wData.find(
    (widget) => widget.wType === 'PRODUCT_PRIMARY_INFO',
  );

  const brandActionUrl = productInfo?.data?.brandActionUrl;

  return { ...brandInfo.data, actionUrl: brandActionUrl };
};

export default getBrandInfo;
