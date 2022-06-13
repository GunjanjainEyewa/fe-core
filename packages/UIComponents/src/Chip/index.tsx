import React from 'react';
import styled from '../styles/styled';

const Button = styled.button`
  ${({ theme }) => theme.borders.border100};
  box-sizing: border-box;
  border-radius: 20px;
  ${({ theme }) => theme.typography.bodyMedium};
  letter-spacing: 0.5px;
  color: rgb(0, 15, 29, 0.92);//TODO: color can be passed via prop if required
  padding: 10px 16px;
  margin: 4px;
  background-color: #fff;
  &.selected {
    background: #FDEBF4;
    color: #D7006C;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.chipActivatedColor};
    background: ${({ theme }) => theme.colors.chipActivatedBackground};
  }
`;

export interface ButtonProps {
  value: string;
  image?: string;
  handleClick?: (value: string) => void;
  isSelected: boolean;
}

const Chip = ({ value, isSelected, handleClick }: ButtonProps) => (
  <Button
    className={isSelected ? 'selected' : ''}
    onClick={() => handleClick(value)}
  >
    {value}
  </Button>
);

export default Chip;
