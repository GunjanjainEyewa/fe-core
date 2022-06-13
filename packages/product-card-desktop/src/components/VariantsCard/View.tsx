import React, { useState, useEffect } from 'react';
import { styled } from '@nykaa/ui-components';
import {
  VariantProps,
  Variant,
} from '@nykaa/product-card-shared/types/variants';
import {
  SHADE_LOADER_COUNT,
  SIZE_LOADER_COUNT,
} from '@nykaa/product-card-shared/constant/variants';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import VariantLoader from './Loader';
import Palette from './Palette';
import Info from './VariantInfo';
import Header from './Header';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing60};
  #custom-scroll::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.borders.radius60};
    background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.02)};
  }
  #custom-scroll::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.2)};
  }
  #custom-scroll::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.borders.radius60};
    background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.2)};
  }
`;

const AllVariant = ({
  variantData,
  loading,
  isSize,
  handleSelectedVariant,
  handleVariantCross,
}: VariantProps) => {
  const [selectedVariant, setSelectedVariant] = useState(variantData?.[0]);
  useEffect(() => {
    const defaultVariant = variantData?.find((item) => (item?.childId === (item?.defaultPid)));
    setSelectedVariant(defaultVariant || variantData?.[0]);
    if (variantData?.[0]) {
      handleSelectedVariant(variantData[0]);
    }
  }, [variantData, handleSelectedVariant]);

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    handleSelectedVariant(variant);
  };
  const {
    quantity, variantName, mrp, offerPrice: price, discount,
  } = selectedVariant || {};
  const isVariantOutOfStock = quantity === 0;
  const totalShade: number = variantData?.length || 0;
  const type = (isSize) ? 'Size' : 'Shade';
  const title = `Select a ${type}(${totalShade})`;
  return (
    <Wrapper>
      <Header title={title} handleVariantCross={handleVariantCross} />
      {loading && (
        <VariantLoader
          isSize={isSize}
          shadeCount={SHADE_LOADER_COUNT}
          sizeCount={SIZE_LOADER_COUNT}
        />
      )}
      {!loading && totalShade > 0 && (
        <>
          <Palette
            isSize={isSize}
            variantData={variantData}
            selectedVariant={selectedVariant}
            handleVariantChange={handleVariantChange}
          />
          <Info
            isVariantOutOfStock={isVariantOutOfStock}
            variantName={variantName}
            mrp={mrp}
            price={price}
            discount={discount}
          />
        </>
      )}
    </Wrapper>
  );
};

export default AllVariant;
