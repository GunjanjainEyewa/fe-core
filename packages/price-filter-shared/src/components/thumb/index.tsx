import React from 'react';
import { styled } from '@eyewa/ui-components';


interface ThumbProps {
  className: string;
  left?: number;
  right?: number;
}

const Wrapper = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: visible;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.surface};
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  box-sizing: initial;
  z-index: 3;
  transition: background .3s ease-in-out, box-shadow .3s ease-in-out;
  &.min {
    left: ${({ left }: ThumbProps) => `${left}%`};
    transform: translateX(-${({ left }: ThumbProps) => `${left}%`});
  }
  &.max {
    left: ${({ right }: ThumbProps) => `${right}%`};
    right: auto;
    transform: translateX(${({ right }: ThumbProps) => `-${right}%`});
  }
  &.hover {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 0px 7px ${({ theme }) => theme.colors.primary10};
  }
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const Thumb = ({ className, ...args }: ThumbProps) => <Wrapper className={className} {...args} />;

export default Thumb;
