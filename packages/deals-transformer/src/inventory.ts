import randomizeChildren from '@nykaa/deals-utils/randomize';

import widgetTypes from './constants/widgetTypes';
import {
  ColumnGrid,
  Banner,
  Image,
  TextGrid,
  TextOnly,
  Carousel,
  CarouselChild,
  SeoData,
  SlidingWidget,
  InFocus,
  AppConfig,
  FitcodeProfile,
  ButtonGrid,
  Button,
  SlidingWidgetV2,
  BannerV2,
  ColumnGridV2,
  CarouselV2,
  SectionWrapper,
  Recommendation,
  Product,
} from './widgets';

interface WidgetDataType {
  id?: string;
  positionInParent?: number;
  children?: JSX.Element[];
  params?: any;
  transactionId?: string;
  inheritParams?: {};
}

export const widgetTransformer = (widgetData:any, inheritParams: any): WidgetDataType => {
  const { wtype } = widgetData;
  const newWidgetData = { ...widgetData, ...inheritParams };
  const widgetType = wtype;
  let transformed: WidgetDataType = {};

  switch (widgetType) {
    case widgetTypes.BANNER: {
      transformed = Banner(newWidgetData);
      break;
    }
    case widgetTypes.COLUMN_GRID: {
      transformed = ColumnGrid(newWidgetData);
      break;
    }
    case widgetTypes.IMAGE: {
      transformed = Image(newWidgetData);
      break;
    }
    case widgetTypes.TEXT_GRID: {
      transformed = TextGrid(newWidgetData);
      break;
    }
    case widgetTypes.TEXT_ONLY: {
      transformed = TextOnly(newWidgetData);
      break;
    }
    case widgetTypes.CAROUSEL: {
      transformed = Carousel(newWidgetData);
      break;
    }
    case widgetTypes.CAROUSEL_CHILD: {
      transformed = CarouselChild(newWidgetData);
      break;
    }
    case widgetTypes.SLIDING_WIDGET: {
      transformed = SlidingWidget(newWidgetData);
      break;
    }
    case widgetTypes.SEO_DATA: {
      transformed = SeoData(newWidgetData);
      break;
    }
    case widgetTypes.IN_FOCUS: {
      transformed = InFocus(newWidgetData);
      break;
    }
    case widgetTypes.APP_CONFIG: {
      transformed = AppConfig(newWidgetData);
      break;
    }
    case widgetTypes.FITCODE_PROFILE: {
      transformed = FitcodeProfile(newWidgetData);
      break;
    }
    case widgetTypes.BUTTON_GRID: {
      transformed = ButtonGrid(newWidgetData);
      break;
    }
    case widgetTypes.BUTTON: {
      transformed = Button(newWidgetData);
      break;
    }
    case widgetTypes.SLIDING_WIDGET_V2: {
      transformed = SlidingWidgetV2(newWidgetData);
      break;
    }
    case widgetTypes.BANNER_V2: {
      transformed = BannerV2(newWidgetData);
      break;
    }
    case widgetTypes.COLUMN_GRID_V2: {
      transformed = ColumnGridV2(newWidgetData);
      break;
    }
    case widgetTypes.CAROUSEL_V2: {
      transformed = CarouselV2(newWidgetData);
      break;
    }
    case widgetTypes.SECTION: {
      transformed = SectionWrapper(newWidgetData);
      break;
    }
    case widgetTypes.RECOMMENDATION_WIDGET: {
      transformed = Recommendation(newWidgetData);
      break;
    }
    case widgetTypes.PRODUCT_WIDGET: {
      transformed = Product(newWidgetData);
      break;
    }
    default: {
      return {};
    }
  }

  if (inheritParams) {
    const { params }: any = transformed;
    transformed.params = { ...params, ...inheritParams };
  }
  return transformed;
};

export const widgetsTransformer = (widgets:any, addedParams: any = {}) => {
  const parentData = widgetTransformer(widgets, addedParams);
  const { children, inventoryName, trackingData } = widgets;
  const { inheritParams } = parentData;
  const transformedChilds = children && children.map((child: any) => {
    const childWidget = { ...child, inventoryName, trackingData };

    if (childWidget.children) {
      return widgetsTransformer(childWidget, { ...inheritParams, ...addedParams });
    }
    return widgetTransformer(childWidget, { ...inheritParams, ...addedParams });
  });
  parentData.children = randomizeChildren(transformedChilds);
  return parentData;
};

export const inventoryTransformer = (data: any, isDesktop: boolean) => {
  const {
    widget_data: widgetData,
    inventory_name: inventoryName,
    inventory_page_section: inventoryPageSection,
    position,
    inventory_id: inventoryId,
    inventory_page_type: inventoryPageType,
    inventory_page_data: inventoryPageData,
    inventory_lang: inventoryLang,
    api_page_data: apiPageData,
    visibility,
    personalization,
    isDataPersonalized,
  } = data;

  widgetData.inventoryName = inventoryName;

  const trackingData = {
    namespace0: inventoryPageType,
    namespace1: inventoryPageSection,
    lang: inventoryLang || 'en',
    position1: position,
    pageData1: apiPageData || '',
    pageData2: inventoryPageData || '',
  };
  widgetData.trackingData = trackingData;

  return {
    inventoryName,
    inventoryId,
    inventoryPageType,
    inventoryPageSection,
    inventoryPageData,
    apiPageData,
    visibility,
    position,
    personalization,
    isDataPersonalized,
    widgetData: widgetsTransformer(widgetData, { isDesktop }),
  };
};
