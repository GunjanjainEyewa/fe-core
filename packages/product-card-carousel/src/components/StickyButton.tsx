import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';


interface ButtonStyleProps {
  transformRight: boolean;
  active: boolean;
}
interface StickyButtonProps {
  transformRight: boolean;
  handleClick: () => void;
  title: string;
  active: boolean;
  hideArrows?: boolean;
}

const Button = styled.button<ButtonStyleProps>`
  position: absolute;
  right: ${({ transformRight }) => (transformRight ? '6px' : 'none')};
  left: ${({ transformRight }) => (transformRight ? 'none' : '6px')};
  top: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  width: 32px;
  text-align: center;
  height: 32px;
  line-height: 32px;
  z-index: 2;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  transform: ${({ transformRight }) => (transformRight ? 'rotate(180deg)' : 'none')};
  text-indent: -150px;
  &::before {
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 8px;
    border-color: transparent;
    position: absolute;
    border-right-color: ${({ theme, active }) => hexToRgb(theme.colors.textPrimary, (active) ? 0.92 : 0.22)};
    left: 3px;
    top: 9px;
  }
  &::after {
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 8px;
    border-color: transparent;
    position: absolute;
    border-right-color: ${({ theme }) => theme.colors.white};
    left: 5px;
    top: 9px;
  }
`;
const StickyButton = ({
  transformRight, handleClick, title, active, hideArrows = false,
}: StickyButtonProps) => {
  if (hideArrows) {
    return null;
  }
  return (
    <Button
      onClick={handleClick}
      transformRight={transformRight}
      active={active}
    >
      {title}
    </Button>
  );
};

export default StickyButton;
