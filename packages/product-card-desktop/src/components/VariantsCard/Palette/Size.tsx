import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { SizeProps } from '@nykaa/product-card-shared/types/variants';

const Item = styled.li`
  padding: ${({ theme }) => theme.spacing.spacing60};  
  border-bottom: 1px solid ${({ theme }) => hexToRgb(theme.colors.surface30, 0.8)};
  display: flex;
  width: 100%;
  &.oos {
    opacity: 0.5;
  }
  input {
    z-index: -1;
    opacity: 0;
    position: absolute;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  &.oos {
    position: relative;
  }
`;
// border-radius 100% , was theme.borders.radius500
const Round = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-radius: ${({ theme }) => theme.borders.radiusFull};
  border-color: ${({ theme }) => hexToRgb(theme.colors.green500, 0.62)};
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .fill {
    ${({ theme }) => theme.borders.border100};
    border-color: ${({ theme }) => hexToRgb(theme.colors.green500, 0.2)};
    background: ${({ theme }) => hexToRgb(theme.colors.green500, 0.62)};
    border-radius: 100%;
    width: 14px;
    height: 14px;
  }
`;

const PackSize = styled.span`
  margin-left: ${({ theme }) => theme.spacing.spacing40};
  color: ${({ theme }) => theme.colors.primary};
`;

const Size = ({
  variant,
  selectedVariant,
  changeVariant,
  index,
}: SizeProps) => {
  const {
    variantName, quantity, childId,
  } = variant || {};
  const isVariantSelected = (childId === selectedVariant?.childId);
  const isVariantOutOfStock = (quantity === 0);
  let additionalClass = isVariantSelected ? 'active' : '';
  if (isVariantOutOfStock) {
    additionalClass += ' oos';
  }
  const handleVariant = () => {
    changeVariant(variant);
  };
  const activeClass = isVariantSelected ? 'fill' : '';
  return (
    <Item
      className={additionalClass}
      key={`all-size-${index}`}
      onClick={handleVariant}
    >
      <input id={`${index}-${childId}-size`} type="radio" checked={isVariantSelected} />
      <Label className={`${additionalClass} control`} htmlFor={`${index}-${childId}-size`}>
        <Round>
          <span className={activeClass} />
        </Round>
        <PackSize>{variantName}</PackSize>
      </Label>
    </Item>
  );
};
export default Size;
