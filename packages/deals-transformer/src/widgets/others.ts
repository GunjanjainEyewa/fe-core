import transformBasicData from './basic';
import {
  getTrackingParams,
  getUrlWithTrackingParams,
  getImageUrl,
  getRoundedDiscount,
  getVariantType,
} from '../helper';


export const ColumnGrid = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { parameters } = widgetData || {};
  transformed.params = {
    theme: parameters.theme,
    title: parameters.title,
    imageUrl: isDesktop
      ? (parameters.desktop_image_url || parameters.mweb_image_url)
      : parameters.mweb_image_url,
    isFullWidth: (parameters.is_full_width && parameters.is_full_width === 'true'),
    viewAllUrl: parameters.web_view_all_url,
    subTitle: parameters.sub_title,
    columnsInRow: isDesktop ? parameters.no_of_cols_desktop : parameters.no_of_cols,
    titleAlign: isDesktop ? parameters.title_align_desktop : parameters.title_align,
    backGroundColor: parameters.background_color,
  };
  transformed.inheritParams = {
    textAreaOpacity: parameters.text_area_opacity,
    textPosition: parameters.text_area_position,
    columnsInRow: isDesktop ? parameters.no_of_cols_desktop : parameters.no_of_cols,
  };

  return transformed;
};

export const ColumnGridV2 = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { parameters } = widgetData || {};
  transformed.params = {
    theme: parameters.theme,
    title: parameters.title,
    imageUrl: parameters.mweb_image_url,
    subTitle: parameters.sub_title,
    columnsInRow: isDesktop ? parameters.no_of_cols_desktop : parameters.no_of_cols,
    titleAlign: isDesktop ? parameters.title_align_desktop : parameters.title_align,
    description: parameters.description,
    backGroundColor: parameters.background_color,
    spacingStyle: parameters.spacing_style,
    titleStyle: parameters.title_style,
    descriptionStyle: parameters.description_style,
    styles: parameters.styles,
    bkgColor: parameters.bkg_color,
  };
  transformed.inheritParams = {
    textAreaOpacity: parameters.text_area_opacity,
    textPosition: parameters.text_area_position,
    columnsInRow: isDesktop ? parameters.no_of_cols_desktop : parameters.no_of_cols,
  };

  return transformed;
};

export const Banner = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const {
    parameters,
    inventoryName,
    positionInParent,
  } = widgetData || {};
  const {
    tile_id: trackingParameters,
    web_action_url: url,
    app_link_type: appLinkType,
    app_link_data: appLinkData,
  } = parameters;

  const trackingParams = getTrackingParams(inventoryName, positionInParent, trackingParameters);
  transformed.params = {
    url: getUrlWithTrackingParams(url, trackingParams),
    title: parameters.title_plain,
    discountTitle: parameters.title_discount,
    description: parameters.description,
    subDescription: parameters.sub_description,
    titleOrder: parameters.title_order,
    actionType: parameters.web_action_type,
    trackingParameters,
    section: parameters.section,
    randomize: parameters.randomize,
    youtubeVideoViews: parameters.youtube_video_views,
    youtubeVideoLikes: parameters.youtube_video_likes,
    appLinkData,
    appLinkType,
  };

  return transformed;
};

export const BannerV2 = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const {
    parameters,
    inventoryName,
    positionInParent,
  } = widgetData || {};
  const {
    tile_id: trackingParameters,
    web_action_url: url,
    app_link_type: appLinkType,
    app_link_data: appLinkData,
  } = parameters;
  const trackingParams = getTrackingParams(inventoryName, positionInParent, trackingParameters);
  transformed.params = {
    appLinkType,
    appLinkData,
    trackingParams,
    url: getUrlWithTrackingParams(url, trackingParams),
    title: parameters.title,
    discountTitle: parameters.title_discount,
    callOut: parameters.callout,
    tagType: parameters.tag_type,
    tagText: parameters.tag_text,
    tagTimerEnd: parameters.tag_timer_end,
    timerEndText: parameters.timer_end_text,
    description: parameters.description,
    subDescription: parameters.sub_description,
    titleOrder: parameters.title_order,
    actionType: parameters.web_action_type,
    trackingParameters,
    section: parameters.section,
    randomize: parameters.randomize,
    childWidth: (isDesktop && parameters.child_width_desktop)
      ? parameters.child_width_desktop
      : parameters.child_width,
    bkgColor: parameters.bkg_color,
    childWidthDesktop: parameters.child_width_desktop,
    spacingStyle: parameters.spacing_style,
    titleStyle: parameters.title_style,
    descriptionStyle: parameters.description_style,
    styles: parameters.styles,
    callOut2: parameters.callout_2,
    callOut3: parameters.callout_3,
  };

  return transformed;
};

export const Image = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { source } = widgetData || {};
  transformed.params = {
    src: isDesktop
      ? (source.Web || source.Mobile)
      : (source.Mobile || source.Web),
    aspectRatio: isDesktop
      ? (source.Web_aspect_ratio || source.Mobile_aspect_ratio)
      : ((source.Mobile_aspect_ratio || source.Web_aspect_ratio)),
  };

  return transformed;
};

export const TextGrid = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    theme: parameters.theme,
    title: parameters.title,
    titleAlign: parameters.title_align,
  };

  return transformed;
};

// TODO: handle tracking parameters
export const TextOnly = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  const {
    app_link_type: appLinkType,
    app_link_data: appLinkData,
    description,
    title,
    web_action_url: webActionUrl,
  } = parameters;

  transformed.params = {
    appLinkType,
    appLinkData,
    title,
    webActionUrl,
    description,
  };
  return transformed;
};

export const CarouselChild = (widgetData : any) => {
  const transformed = transformBasicData(widgetData);
  const {
    parameters,
    inventoryName,
    positionInParent,
  } = widgetData || {};
  const {
    app_link_type: appLinkType,
    app_link_data: appLinkData,
    tile_id: trackingParameters,
    web_action_url: url,
  } = parameters;

  const trackingParams = getTrackingParams(inventoryName, positionInParent, trackingParameters);
  transformed.params = {
    appLinkType,
    appLinkData,
    url: getUrlWithTrackingParams(url, trackingParams),
    title: parameters.banner_title,
    section: parameters.section,
    actionType: parameters.web_action_type,
    delayTimer: parameters.delay_timer,
    randomize: parameters.randomize,
    filterData: parameters.filter_data,
    tileId: parameters.tile_id,
    segments: parameters.segments,
    offerData: parameters.offer_data,
    brandId: parameters.brand_id,
    fundingType: parameters.funding_type,
    brands: parameters.brands,
    trackingParams,
  };
  return transformed;
};

export const SeoData = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    title: parameters.title,
    description: parameters.description,
    keywords: parameters.keywords,
  };
  return transformed;
};

export const AppConfig = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    hpBkgType: parameters.hp_bkg_type,
    hpBkgColor: parameters.hp_bkg_color,
    hpBkgImageUrl: parameters.hp_bkg_image_url,
  };
  return transformed;
};

export const FitcodeProfile = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};

  const {
    app_link_type: appLinkType,
    app_link_data: appLinkData,
  } = parameters;
  transformed.params = {
    appLinkType,
    appLinkData,
    profileSizeTitle: parameters.profile_size_title,
    profileSize: parameters.profile_size,
    profileTitle: parameters.profile_title,
    profileImage: parameters.profile_image,
    profileImageAspectRatio: parameters.profile_image_aspect_ratio,
    profileShape: parameters.profile_shape,
    profileDescription: parameters.profile_description,
    profileActionTitle: parameters.profile_action_title,
    webActionType: parameters.web_action_type,
    webActionUrl: parameters.web_action_url,
  };
  return transformed;
};

export const ButtonGrid = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    title: parameters.title,
  };
  return transformed;
};

// TODO: need to handle tracking params in the future
export const Button = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters = {} } = widgetData || {};
  const {
    app_link_type: appLinkType,
    app_link_data: appLinkData,
    web_action_type: webActionType,
  } = parameters;

  transformed.params = {
    appLinkType,
    appLinkData,
    label: parameters.label,
    titleId: parameters.title_id,
    source: parameters.source,
    opacity: parameters.opacity,
    bkgColor: parameters.bkg_color,
    titleColor: parameters.title_color,
    borderColor: parameters.border_color,
    buttonType: parameters.button_type,
    webActionUrl: parameters.web_action_url,
    webActionType,
  };
  return transformed;
};

export const SectionWrapper = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    bkgType: parameters.bkg_type,
    bkgColor: parameters.bkg_color,
    bkgImageUrl: parameters.bkg_image_url,
    bkgColorDegree: parameters.bkg_color_degree,
    spacingStyle: parameters.spacing_style,
    scrollBar: parameters.scrollbar,
    scrollbarDesktop: parameters.scrollbar_desktop,
    widgetMaxChildren: parameters.widget_max_children,
    imageHorizontalPercentage: parameters.image_horizontal_percentage,
    imageVerticalRepeat: parameters.image_vertical_repeat,
  };
  return transformed;
};

export const Recommendation = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    theme: parameters.theme,
    title: parameters.title,
    recommendationType: parameters.recommendation_type,
    addToBugEnabled: parameters.add_to_bag_button,
  };

  widgetData.children.forEach((child: any, index: number) => {
    const newChild = child;
    newChild.positionInParent = index + 1;
    newChild.parentWidgetId = widgetData.wid;
  });

  return transformed;
};

export const Product = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const {
    inventoryName,
    positionInParent,
    tile_id: trackingParameters,
    web_action_url: url,
    parentWidgetId,
    app_link_type: appLinkType,
    app_link_data: appLinkData,
  } = widgetData || {};
  const trackingParams = getTrackingParams(inventoryName, positionInParent, trackingParameters);
  transformed.params = {
    appLinkType,
    appLinkData,
    trackingParams,
    url: getUrlWithTrackingParams(url, trackingParams),
    title: widgetData.title,
    name: widgetData.title,
    inStock: widgetData.is_saleable,
    id: widgetData.id,
    productId: widgetData.id,
    slug: widgetData.slug,
    parentId: widgetData.parent_id,
    rating: widgetData.star_rating || 0,
    offersCount: widgetData.offer_count,
    dynamicTags: widgetData.dynamic_tags,
    quantity: widgetData.quantity,
    variantType: getVariantType(widgetData.variant_type),
    variantCount: widgetData.option_count || widgetData.pack_size,
    mrp: widgetData.price,
    price: widgetData.final_price,
    discount: getRoundedDiscount(widgetData.discount),
    ratingCount: widgetData.star_rating_count,
    imageUrl: getImageUrl(widgetData.media),
    proFlag: widgetData.pro_flag,
    childId: widgetData.id,
    categoryIds: widgetData.category_ids,
    brandIds: widgetData.brand_ids,
    type: widgetData.type,
    onlyWishlistButton: widgetData.show_wishlist_button,
    primaryCategories: widgetData.primary_categories || {},
    isBackorder: false,
    parentWidgetId,
  };
  return transformed;
};
