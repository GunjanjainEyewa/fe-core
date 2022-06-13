import { ALL_WIDGETS_NAME } from '../../constants';
// widgets transformers
import getMetaInfo from './metaInfo';
import getProductInfo from './productInfo';
import getBrandInfo from './brandInfo';
import getColorsInfo from './colorsInfo';
import getSizesInfo from './sizesInfo';
import getShadesInfo from './shadesInfo';
import getCTAInfo from './ctaInfo';
import getDescriptionAttributesInfo from './discriptionAttributesInfo';
import getMediaInfo from './mediaInfo';
import getTopReviewsInfo from './topReviewsInfo';
import getPdpInfo from './pdpInfo';

// types
import { Product } from '../../types/transformer';
import { ApiResponse } from '../../types/api';

const FuncNames = {
  [ALL_WIDGETS_NAME.META_INFO]: getMetaInfo,
  [ALL_WIDGETS_NAME.PRIMARY_INFO]: getProductInfo,
  [ALL_WIDGETS_NAME.BRAND_INFO]: getBrandInfo,
  [ALL_WIDGETS_NAME.COLORS]: getColorsInfo,
  [ALL_WIDGETS_NAME.SIZES]: getSizesInfo,
  [ALL_WIDGETS_NAME.SHADES]: getShadesInfo,
  [ALL_WIDGETS_NAME.CTA]: getCTAInfo,
  [ALL_WIDGETS_NAME.DESCRIPTION_ATTRIBUTES]: getDescriptionAttributesInfo,
  [ALL_WIDGETS_NAME.MEDIA]: getMediaInfo,
  [ALL_WIDGETS_NAME.TOP_REVIEW]: getTopReviewsInfo,
};

const transformWidgetsData = (props: ApiResponse): Product => {
  const widgets = props.widgetsEnabled.map((widgetName) => ({
    type: widgetName,
    data: FuncNames[widgetName](props),
  }));

  // @ts-ignore
  return { data: getPdpInfo(props), widgets };
};

export default transformWidgetsData;
