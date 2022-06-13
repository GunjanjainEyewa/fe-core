// components
import ProductInfo from '../components/ProductInfo';
import Meta from '../components/Meta';
import AboutDesigner from '../components/AboutDesigner';
import Colors from '../components/Colors';
import Sizes from '../components/Sizes';
import Shades from '../components/Shades';
import CTA from '../components/CTA';
import Media from '../components/Media';
import Description from '../components/Description';
import TopReviews from '../components/TopReviews';

// constants
import { ALL_WIDGETS_NAME } from './index';

export const WIDGET_COMPONENTS = {
  [ALL_WIDGETS_NAME.META_INFO]: Meta,
  [ALL_WIDGETS_NAME.PRIMARY_INFO]: ProductInfo,
  [ALL_WIDGETS_NAME.BRAND_INFO]: AboutDesigner,
  [ALL_WIDGETS_NAME.COLORS]: Colors,
  [ALL_WIDGETS_NAME.SIZES]: Sizes,
  [ALL_WIDGETS_NAME.SHADES]: Shades,
  [ALL_WIDGETS_NAME.CTA]: CTA,
  [ALL_WIDGETS_NAME.DESCRIPTION_ATTRIBUTES]: Description,
  [ALL_WIDGETS_NAME.MEDIA]: Media,
  [ALL_WIDGETS_NAME.TOP_REVIEW]: TopReviews,
};

export const DUMMY = {};
