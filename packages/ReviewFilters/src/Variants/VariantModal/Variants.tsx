/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { styled } from '@nykaa/ui-components';
import { useThemeContext } from '../context';
import { Option, ThemeProps, VariantBodyProps } from '../../types';

const ModalBody = styled.div`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }: ThemeProps) => theme.secondaryTextColor};
  padding-bottom: 50px;
  strong {
    margin-left: 10px;
  }
`;
const CheckMark = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  width: 25px;
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
  &.active {
    background-color: transparent;
    &:after {
      display: block;
      right: 32px;
      top: 12px;
      width: 6px;
      height: 15px;
      border: solid ${({ theme }: ThemeProps) => theme.primaryColor};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;
const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
const CheckBoxWrap = styled.label`
  display: flex;
  position: relative;
  padding: 12px 42px 12px 16px;
  margin: 0;
  cursor: pointer;
  strong {
    ${({ theme }) => theme.typography.bodyMedium};
  }
  &.active{
    background-color: ${({ theme }: ThemeProps) => theme.lightBorder};
    strong {
      ${({ theme }) => theme.typography.subTitleMedium};
    }
  }
`;
const VariantImage = styled.img`
  height: 20px;
  width: 20px;
`;

const Variants: React.FC<VariantBodyProps> = (
  { options, isSelected, handleClick }: VariantBodyProps,
) => {
  const theme = useThemeContext();
  return (
    <ModalBody theme={theme}>
      {options && (options.map((option: Option) => (
        <CheckBoxWrap
          theme={theme}
          htmlFor={option.variantName}
          className={`${isSelected(option.productId) ? 'active' : ''}`}
          key={option.productId}
          onClick={() => handleClick(option.productId)}
        >
          <VariantImage
            src={option.variantIcon}
            alt={option.variantName}
          />
          <strong>
            {option.variantName}
          </strong>
          <CheckBox
            type="checkbox"
            className={`${isSelected(option.productId) ? 'active' : ''}`}
          />
          <CheckMark
            theme={theme}
            className={`${isSelected(option.productId) ? 'active' : ''}`}
          />
        </CheckBoxWrap>
      )))}
    </ModalBody>
  );
};

export default Variants;
