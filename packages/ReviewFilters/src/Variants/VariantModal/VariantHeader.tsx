/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { styled } from '@nykaa/ui-components';
import Close from './CloseIcon';
import { useThemeContext } from '../context';
import { Option, ThemeProps, VariantHeaderProps } from '../../types';


const VariantSelect = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }: ThemeProps) => theme.lightGrey};
  padding: 2px 4px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const Title = styled.span`
  padding: 0 10px;
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }: ThemeProps) => theme.colors.textSecondary};

`;
const Image = styled.img`
  height: 20px;
  width: 20px;
`;
const Header: React.FC<VariantHeaderProps> = (
  { selectedVariants, handleClose }: VariantHeaderProps,
) => {
  const theme = useThemeContext();
  return (
    <>
      {selectedVariants && selectedVariants.map((variant: Option) => (
        <VariantSelect
          theme={theme}
          key={variant.productId}
        >
          <span>
            <Image
              src={variant.variantIcon}
              alt={variant.variantName}
            />
          </span>
          <Title>
            {variant.variantName}
          </Title>
          <span
            onClick={() => handleClose(variant.productId)}
          >
            <Close />
          </span>
        </VariantSelect>
      ))}
    </>
  );
};

export default Header;
