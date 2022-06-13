import transformBasicData from './basic';

export const Carousel = (widgetData : any) => {
  const transformed = transformBasicData(widgetData);
  const { parameters } = widgetData || {};
  transformed.params = {
    title: parameters.title,
    aspectRatio: parameters.aspect_ratio,
    delayTimer: parameters.delay_timer ? Number(parameters.delay_timer) : 0,
    childBkgColor: parameters.child_bkg_color,
  };
  return transformed;
};
export const CarouselV2 = (widgetData : any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { parameters } = widgetData || {};
  const childWidth = (isDesktop && parameters.child_width_desktop)
    ? parameters.child_width_desktop
    : parameters.child_width;

  transformed.params = {
    title: parameters.title,
    aspectRatio: parameters.aspect_ratio,
    delayTimer: parameters.delay_timer ? Number(parameters.delay_timer) : 0,
    autoScroll: parameters.auto_scroll,
    childBkgColor: parameters.child_bkg_color,
    bkgColor: parameters.bkg_color,
    childWidthDesktop: parameters.child_width_desktop,
    carouselType: parameters.carousel_type,
    spacingStyle: parameters.spacing_style,
    titleStyle: parameters.title_style,
    titleAlign: (isDesktop && parameters.title_align_desktop)
      ? parameters.title_align_desktop
      : parameters.title_align,
    childWidth,
    description: parameters.description,
    descriptionStyle: parameters.description_style,
    positionindicatorStyle: parameters.position_indicator_style,
    positionIndicatorFlag: parameters.position_indicator,
    styles: parameters.styles,
  };
  transformed.inheritParams = {
    textAreaOpacity: parameters.text_area_opacity,
    textPosition: parameters.text_area_position,
    childWidth,
  };
  return transformed;
};

export const SlidingWidget = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { parameters } = widgetData || {};
  let childWidth = (isDesktop && parameters.child_width_desktop)
    ? parameters.child_width_desktop
    : parameters.child_width;

  if (!childWidth) {
    childWidth = isDesktop ? '33.33' : '50';
  }

  transformed.params = {
    title: parameters.title,
    titleAlign: (isDesktop && parameters.title_align_desktop)
      ? parameters.title_align_desktop
      : parameters.title_align,
    textAreaPosition: parameters.text_area_position,
    childWidth,
    scrollbar: (isDesktop && parameters.scrollbar_desktop)
      ? parameters.scrollbar_desktop
      : parameters.scrollbar,
    bkgColor: parameters.bkg_color,
    columnsInRow: Math.floor(100 / Number(childWidth)),
  };
  transformed.inheritParams = {
    textAreaOpacity: parameters.text_area_opacity,
    textPosition: parameters.text_area_position,
    childWidth,
    columnsInRow: Math.floor(100 / Number(childWidth)),
  };
  return transformed;
};

export const SlidingWidgetV2 = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { parameters } = widgetData || {};
  let childWidth = (isDesktop && parameters.child_width_desktop)
    ? parameters.child_width_desktop
    : parameters.child_width;

  if (!childWidth) {
    childWidth = isDesktop ? '33.33' : '50';
  }

  transformed.params = {
    title: parameters.title,
    titleAlign: (isDesktop && parameters.title_align_desktop)
      ? parameters.title_align_desktop
      : parameters.title_align,
    textAreaPosition: parameters.text_area_position,
    childWidth,
    scrollbar: (isDesktop && parameters.scrollbar_desktop)
      ? parameters.scrollbar_desktop
      : parameters.scrollbar,
    bkgColor: parameters.bkg_color,
    columnsInRow: Math.floor(100 / Number(childWidth)),
    childWidthDesktop: parameters.child_width_desktop,
    spacingStyle: parameters.spacing_style,
    titleStyle: parameters.title_style,
    description: parameters.description,
    descriptionStyle: parameters.description_style,
    styles: parameters.styles,
  };
  transformed.inheritParams = {
    textAreaOpacity: parameters.text_area_opacity,
    textPosition: parameters.text_area_position,
    childWidth,
    columnsInRow: Math.floor(100 / Number(childWidth)),
  };
  return transformed;
};

export const InFocus = (widgetData: any) => {
  const transformed = transformBasicData(widgetData);
  const { isDesktop } = transformed;
  const { parameters } = widgetData || {};
  transformed.params = {
    title: parameters.title,
    titleAlign: (isDesktop && parameters.title_align_desktop)
      ? parameters.title_align_desktop
      : parameters.title_align,
    textAreaPosition: parameters.text_area_position,
    mwebLayout: parameters.mweb_layout,
    noOfCols: parameters.no_of_cols,
    childWidth: parameters.child_width,
    bkgColor: parameters.bkg_color,
    designVersion: parameters.design_version || 'v1',
    desktopColumnsKey: parameters.desktop_columns_key,
  };
  transformed.inheritParams = {
    textAreaOpacity: parameters.text_area_opacity,
    textPosition: parameters.text_area_position,
    childWidth: parameters.child_width || 1,
  };
  return transformed;
};
