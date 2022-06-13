import { CONFIGURE_TYPE, variantTypes } from '../../constants/product';
import { ListingProduct, TipTile } from '../../type/product';

export const isListingItemTipTile = (
  listingItem: ListingProduct | TipTile,
): listingItem is TipTile => {
  if (!listingItem) {
    return false;
  }
  return (listingItem as TipTile).imageSrc !== undefined;
};

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

export const isConfigurable = (type: string) => (
  type
    && (type.toUpperCase() !== variantTypes.SIMPLE)
    && (type.toUpperCase() !== variantTypes.BUNDLE)
);

export const toShowProTag = (isProUser: boolean, proFlagOfProduct: number): boolean => {
  if (
    isProUser
    && (
      (proFlagOfProduct === 1)
      || (proFlagOfProduct === 2)
    )
  ) {
    return true;
  }

  return false;
};
