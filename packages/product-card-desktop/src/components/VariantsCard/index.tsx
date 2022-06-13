import React, { useEffect } from 'react';
import { VariantCardProps } from '@nykaa/product-card-shared/types/variants';
import View from './View';
import { getVariants } from '../../utils';


const VariantCard = ({
  product,
  isSize,
  variantsData,
  handleSelectedVariant,
  handleVariantCross,
  fetchVariants,
}: VariantCardProps) => {
  const loading = variantsData?.loading;
  const loadingProductId = variantsData?.loadingProductId;
  const productId = product?.id || '';
  const variants = getVariants(variantsData, productId);
  const isFetch = !variants;
  useEffect(() => {
    if ((isFetch) && (fetchVariants)) {
      fetchVariants({ id: productId });
    }
  }, [productId, isFetch]);

  if ((!variants) || (!Array.isArray(variants)) || (variants.length <= 0)) {
    return null;
  }
  return (
    <View
      loading={loading && loadingProductId === productId}
      variantData={variants || []}
      isSize={isSize}
      handleSelectedVariant={handleSelectedVariant}
      handleVariantCross={handleVariantCross}
    />
  );
};

export default VariantCard;
