import React from 'react';
import { styled } from '@eyewa/ui-components';
import { SoldOut, FewLeft, SizeChip } from '@eyewa/variant-selector-shared';
import { Variant } from '@eyewa/variant-selector-shared/types';

interface SizeProps {
  variant: Variant;
  isSelected: boolean;
  onClick: Function;
  isBackorder?: boolean;
}

const SizeVariant = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  margin:  ${({ theme }) => `${theme.spacing.spacing20} ${theme.spacing.spacing40}`};
`;

const Size = ({
  variant,
  isSelected,
  onClick,
  isBackorder,
}: SizeProps) => {
  const { quantity, childId } = variant;
  let isOutOfStock = (quantity === 0);
  let isFewLeft = (!isOutOfStock && (quantity < 100));
  if (isBackorder) {
    isOutOfStock = false;
    isFewLeft = false;
  }

  return (
    <SizeVariant>
      <SizeChip
        label={variant.packSize}
        isSelected={isSelected}
        isOutOfStock={isOutOfStock}
        onClick={() => onClick(childId)}
      />
      {isOutOfStock && <SoldOut />}
      {isFewLeft && <FewLeft />}
    </SizeVariant>
  );
};

export default Size;
