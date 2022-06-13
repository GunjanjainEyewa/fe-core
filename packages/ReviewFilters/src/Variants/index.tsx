import React from 'react';
import { styled } from '@eyewa/ui-components';
import { ThemeContext } from './context';
import ArrowIcon from './ArrowIcon';
import { VariantProps, ThemeProps } from '../types';


const Wrapper = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
const Icon = styled.i`
  float: right;
  svg path {
    fill: ${({ theme }: ThemeProps) => theme.brandPrimary};
  }
`;
const VariantCount = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }: ThemeProps) => theme.brandPrimary};
  color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  ${({ theme }) => theme.typography.bodyXSmall};
  margin:0 0 0 4px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
`;
const Variants: React.FC<VariantProps> = ({
  variantsLength,
  handleVariantModal,
  variantType,
  theme,
}: VariantProps) => (
  <ThemeContext.Provider value={theme}>
    <Wrapper
      onClick={handleVariantModal}
    >
      <span className="text">
        {`Filter ${variantType}`}
      </span>
      { (variantsLength > 0) && (
        <VariantCount
          theme={theme}
          className="variant-count"
        >
          {variantsLength}
        </VariantCount>
      )}
      <Icon
        theme={theme}
        className="icon"
      >
        <ArrowIcon />
      </Icon>
    </Wrapper>
  </ThemeContext.Provider>
);
export default Variants;
