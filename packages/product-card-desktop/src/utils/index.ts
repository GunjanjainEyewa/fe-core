import { VariantsState } from '@nykaa/product-card-shared/types/variants';
import { isConfigurable } from '@nykaa/product-card-shared/utils/variants';

export const getAction = (
  onlyAddToBag: boolean,
  onlyWishlistButton: boolean,
  showProductAdded: boolean,
  inStock: boolean,
  type: string,
  showShades: boolean,
) => {
  const action = {
    showNotifyMe: false,
    showVariants: false,
    showAddToBag: false,
    showViewDetailBtn: false,
    showWishlist: false,
  };
  if (showProductAdded) {
    return action;
  }
  if (onlyAddToBag) {
    action.showAddToBag = inStock;
    return action;
  }
  if (onlyWishlistButton) {
    action.showWishlist = true;
    return action;
  }
  action.showNotifyMe = !inStock;
  action.showVariants = (!showShades) && (isConfigurable(type)) && (!action.showNotifyMe);
  action.showAddToBag = (!action.showVariants) && (inStock);
  action.showViewDetailBtn = showShades;
  action.showWishlist = !showShades;
  return action;
};

export const getVariants = (variantsData: VariantsState, productId: string) => {
  const variantMap = variantsData?.data;
  const variants = (!Array.isArray(variantMap)) && (variantMap?.[productId]);
  return variants;
};
