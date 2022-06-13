import React from 'react';
import { styled } from '@nykaa/ui-components';
import { Variant, PaletteProps } from '@nykaa/product-card-shared/types/variants';
import Shades from './Shades';
import Size from './Size';

const ShadeWrapper = styled.div`
  display: flex;
  height: 225px;
  flex-wrap: wrap;
  align-content: start;
  overflow-y: overlay;
`;
const Palette = ({
  variantData,
  selectedVariant,
  handleVariantChange,
  isSize,
}: PaletteProps) => (
  <ShadeWrapper id="custom-scroll">
    {variantData?.map((variant: Variant, idx: number) => (
      <>
        {isSize && (
          <Size
            key={`${variant?.childId}-size`}
            index={idx}
            variant={variant}
            selectedVariant={selectedVariant}
            changeVariant={handleVariantChange}
          />
        )}
        {!isSize && (
          <Shades
            key={`shades-${variant?.childId}`}
            index={idx}
            variant={variant}
            selectedVariant={selectedVariant}
            changeVariant={handleVariantChange}
          />
        )}
      </>
    ))}
  </ShadeWrapper>
);

export default Palette;
