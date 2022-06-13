import React from 'react';
import { styled } from '@nykaa/ui-components';
import { getAllVariantLabel } from '@nykaa/product-card-shared/utils/variants';
import { VariantActionProps } from '@nykaa/product-card-shared/types/variants';

const LabelWrapper = styled.button` 
  ${({ theme }) => theme.typography.buttonLarge};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
`;


const Variant = ({ variantType, handleVariant }: VariantActionProps) => {
  const text = getAllVariantLabel(variantType);
  return (
    <LabelWrapper type="button" onClick={handleVariant}>
      {text}
    </LabelWrapper>
  );
};

export default Variant;
