import {
  CONFIGURE_TYPE,
  PREVIEW_SHADES,
  PREVIEW_SIZES,
  variantTypes,
} from '../constant/variants';

export const isConfigurable = (type: string) => type
  && type.toUpperCase() !== variantTypes.SIMPLE
  && type.toUpperCase() !== variantTypes.BUNDLE;

export const getVariantType = (variantType: string = '') => {
  if (variantType) {
    switch (variantType.toLowerCase()) {
      case CONFIGURE_TYPE.SHADE.toLowerCase():
        return variantTypes.SHADE;

      case CONFIGURE_TYPE.WEIGHT_CONFIGURE.toLowerCase():
      case CONFIGURE_TYPE.SIZE.toLowerCase():
        return variantTypes.SIZE;

      default:
        return '';
    }
  }
  return '';
};

export const getAllVariantLabel = (variantType: string) => {
  const type = getVariantType(variantType) || '';
  const label = type.toLowerCase() === variantTypes.SHADE.toLowerCase()
    ? PREVIEW_SHADES
    : PREVIEW_SIZES;
  return label;
};

export const isShade = (variantType = '') => variantType?.toLowerCase() === variantTypes.SHADE.toLocaleLowerCase();
