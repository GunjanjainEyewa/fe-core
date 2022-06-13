import React from 'react';
import { styled } from '@eyewa/ui-components';

const Button = styled.button`
  border: 1px solid rgba(0, 19, 37, 0.16);
  box-sizing: border-box;
  border-radius: 20px;
  ${({ theme }) => theme.typography.bodyMedium};
  color: rgb(0, 15, 29, 0.92);//TODO: color can be passed via prop if required
  padding: 10px 16px;
  margin: 4px;
  background-color: #fff;
  text-transform: capitalize;
  &.selected {
    background: #FDEBF4;
    color: #D7006C;
    border: solid 1px #F55D9C;
  }
`;

export interface Option {
  value: string;
  image?: string;
  optionId: string;
}

export interface ButtonProps {
  option: Option;
  handleClick: (option: Option) => void;
  isSelected: boolean;
}

const PillButton = ({ option, isSelected, handleClick }: ButtonProps) => (
  <Button
    className={isSelected ? 'selected' : ''}
    onClick={() => handleClick(option)}
  >
    {option.value}
  </Button>
);

export default PillButton;
