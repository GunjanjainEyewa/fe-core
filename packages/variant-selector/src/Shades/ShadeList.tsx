import React from 'react';
import { styled } from '@eyewa/ui-components';
import { Variant } from '@eyewa/variant-selector-shared/types';
import Shade from './Shade';

interface ShadesListProps {
  variants: Variant[];
  currentVariant: Variant;
  onClick: Function;
  isBackorder?: boolean;
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  padding: ${({ theme }) => {
    const { spacing } = theme;
    return `${spacing.spacing80} 0px ${spacing.spacing40} ${spacing.spacing20}`;
  }};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ShadeList = ({
  variants,
  currentVariant,
  onClick,
  isBackorder,
}: ShadesListProps) => (
  <List>
    {
      variants?.map((variant, index) => {
        const isSelected = (variant?.childId === currentVariant?.childId);
        const isLazyLoad = (index > 4);
        return (
          <Shade
            key={variant?.childId}
            variant={variant}
            isLazyLoad={isLazyLoad}
            isSelected={isSelected}
            onClick={onClick}
            isBackorder={isBackorder}
          />
        );
      })
    }
  </List>
);

export default ShadeList;
