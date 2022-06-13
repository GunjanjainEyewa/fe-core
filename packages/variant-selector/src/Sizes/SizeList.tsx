import React from 'react';
import { styled } from '@eyewa/ui-components';
import { Variant } from '@eyewa/variant-selector-shared/types';
import Size from './Size';

interface SizeListingProps {
  variants: Variant[];
  currentVariant: Variant;
  onClick: Function;
  isBackorder?: boolean;
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  padding-top: ${({ theme }) => theme.spacing.spacing60};
  padding-bottom: ${({ theme }) => theme.spacing.spacing40};
`;

const SizeList = ({
  variants,
  currentVariant,
  onClick,
  isBackorder,
}: SizeListingProps) => (
  <List>
    {
    variants?.map((variant) => {
      const isSelected = (variant?.childId === currentVariant?.childId);
      return (
        <Size
          key={variant.childId}
          variant={variant}
          isSelected={isSelected}
          onClick={onClick}
          isBackorder={isBackorder}
        />
      );
    })
    }
  </List>
);

export default SizeList;
