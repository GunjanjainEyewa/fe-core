import React from 'react';
import { styled } from '@nykaa/ui-components';
import { SoldOut, FewLeft, ShadePalette } from '@nykaa/variant-selector-shared';
import { Variant } from '@nykaa/variant-selector-shared/types';

interface ShadeProps {
  variant: Variant,
  isSelected: boolean
  isLazyLoad: boolean;
  onClick: Function;
  isBackorder?: boolean;
}

const ShadeVariant = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
`;

const Shade = ({
  variant,
  isLazyLoad,
  isSelected,
  onClick,
  isBackorder,
}: ShadeProps) => {
  const {
    shadeImage, variantName, quantity, childId,
  } = variant;
  let isOutOfStock = (quantity === 0);
  let isFewLeft = (!isOutOfStock && (quantity < 100));
  if (isBackorder) {
    isOutOfStock = false;
    isFewLeft = false;
  }
  return (
    <ShadeVariant>
      <ShadePalette
        name={variantName}
        image={shadeImage}
        isSelected={isSelected}
        isOutOfStock={isOutOfStock}
        isLazyLoad={isLazyLoad}
        onClick={() => onClick(childId)}
      />
      {isOutOfStock && <SoldOut />}
      {isFewLeft && <FewLeft />}
    </ShadeVariant>
  );
};

export default Shade;
