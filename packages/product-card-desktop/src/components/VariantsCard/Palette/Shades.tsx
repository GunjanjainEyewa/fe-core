import React from 'react';
import { styled } from '@eyewa/ui-components';
import { ShadesProps } from '@eyewa/product-card-shared/types/variants';


const ShadeImg = styled.span`
  border-radius:  ${({ theme }) => theme.borders.radius20};
  margin: ${({ theme }) => theme.spacing.spacing40};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 32px;
  height: 32px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  &.active, &.active-oos {
    ${({ theme }) => theme.borders.border100};
    border-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.7),
      0 -2px 4px 0 rgba(0, 0, 0, 0.5);
  }
  &.active {
    //for tick
    &:after {
      content: "";
      width: 4px;
      height: 10px;
      position: absolute;
      top: 7px;
      left: 12px;
      border: solid ${({ theme }) => theme.colors.white};;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  &.oos {
    //for cross
    &::before,
    &::after {
        position: absolute;
        content: '';
        width: 80%;
        height: 2px; /* cross thickness */
        background-color: ${({ theme }) => theme.colors.white};
        top: 13px;
        right: 10px;
        left: 3px;
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
  }
`;

const Shades = ({
  variant, selectedVariant, changeVariant, index,
}: ShadesProps) => {
  const {
    shadeImage, variantName, quantity, childId,
  } = variant;
  const isVariantSelected = (childId === selectedVariant?.childId);
  const isVariantOutOfStock = (quantity === 0);
  let additionalClassForShade = isVariantSelected ? 'active' : '';
  additionalClassForShade = isVariantSelected && isVariantOutOfStock ? 'active-oos' : additionalClassForShade;
  if (isVariantOutOfStock) {
    additionalClassForShade += ' oos';
  }
  const handleVariant = () => {
    changeVariant(variant);
  };
  return (
    <ShadeImg
      key={`allshade-${index}`}
      onClick={handleVariant}
      className={additionalClassForShade}
    >
      <img src={`${shadeImage}?tr=w-32,h-32`} alt={`${variantName}-shade`} />
    </ShadeImg>
  );
};

export default Shades;
