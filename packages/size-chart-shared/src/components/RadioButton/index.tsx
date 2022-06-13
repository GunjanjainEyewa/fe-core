import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';


const Wrapper = styled.div`
  border:none;
  padding-left: ${({ theme }) => theme.spacing.spacing120};
  input {
    position: absolute;
    opacity: 0;
  }
`;
const SoldOutText = styled.div`
  ${({ theme }) => theme.typography.labelSmall};
  color: ${({ theme }) => theme.colors.orange500};
  text-transform: capitalize;
`;

const TextWrapper = styled.label`
  ${({ theme }) => theme.typography.bodyMedium};
  display: block;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.spacing160};
  margin-bottom: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  span {
    ${({ theme }) => theme.typography.bodyMedium};
  }
`;

const RadioSelector = styled.div`
  ${({ theme }) => theme.borders.border150};
  border-radius: 50%;
  border-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.32)};
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    &::after {
      content: "";
      ${({ theme }) => theme.borders.border150};
      border-radius: ${({ theme }) => theme.borders.radius20};
      position: absolute;
      left: 8px;
      top: 4px;
      width: 5px;
      height: 9px;
      border-image: initial;
      border-width: 0 2 2 0;
      transform: rotate(45deg);
    }
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    &::after {
      content: "";
      ${({ theme }) => theme.borders.border100};
      border-radius: ${({ theme }) => theme.borders.radius10};
      border-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      left: 8px;
      top: 4px;
      width: 3px;
      height: 7px;
      border-image: initial;
      border-width: 0px 2px 2px 0px;
      transform: rotate(45deg);
    }
  }
  &:focus {
    background: linear-gradient(0deg, rgba(101, 119, 134, 0.08), rgba(101, 119, 134, 0.08)), #FFFFFF;
    border-radius: 10px;
  }
}
`;

interface ButtonProps {
  id: string;
  isSelected: boolean;
  packSize: string;
  inStock: boolean;
}
const Radio = (props: ButtonProps) => {
  const {
    id,
    isSelected,
    packSize,
    inStock = true,
  } = props;
  const controlIndicatorClass = `${isSelected ? 'active' : ''}`;
  return (
    <Wrapper>
      <input
        id={`radio_${id}`}
        type="radio"
        name="radio-name"
        checked={isSelected}
      />
      <TextWrapper
        className="control"
        htmlFor={`radio_${id}`}
      >
        <span>
          {packSize}
        </span>
        {!inStock && (
          <SoldOutText>
            Sold Out
          </SoldOutText>
        )}
        <RadioSelector className={controlIndicatorClass} />
      </TextWrapper>
    </Wrapper>
  );
};

export default Radio;
