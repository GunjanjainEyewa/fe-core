import React from 'react';
import { styled } from '@eyewa/ui-components';


interface ArrowIconProps {
  inactive: boolean;
  forwardArrow: boolean;
  handleArrowButton: () => void;
}
const Wrapper = styled.div<{ inactive: boolean; forwardArrow: boolean; }>`
  position: absolute;
  cursor: pointer;
  top: 45%;
  right: ${({ forwardArrow }) => (forwardArrow ? '31px' : '')};
  left: ${({ forwardArrow }) => (forwardArrow ? '' : '31px')};
  z-index: 1;
  width: 48px;
  height: 48px;
  padding: 12px 18px 14px 13px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 34px;
  ${({ forwardArrow }) => (forwardArrow && 'transform: rotate(180deg)')};
  ${({ inactive }) => (inactive && 'cursor: auto; opacity: .4')};
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const ArrowIcon = ({ inactive, forwardArrow, handleArrowButton }: ArrowIconProps) => (
  <Wrapper
    onClick={(!inactive) && handleArrowButton}
    inactive={inactive}
    forwardArrow={forwardArrow}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
      <path fill="#FC2779" d="M20.37 10.33l-.16.13-7.73 7.43a1.55 1.55 0 0 0-.48 1.03v.14l.03.21v.07l.02.04c0 .04.02.07.03.1l.01.04.04.1.02.05.04.06.04.08.03.05.05.07.03.03.01.02.02.02.1.1 7.74 7.44c.64.61 1.67.61 2.31 0 .59-.56.64-1.45.14-2.07l-.14-.15L15.94 19l6.58-6.32c.64-.61.64-1.6 0-2.22a1.68 1.68 0 0 0-2.15-.13z" opacity=".92" />
    </svg>
  </Wrapper>
);

export default ArrowIcon;
