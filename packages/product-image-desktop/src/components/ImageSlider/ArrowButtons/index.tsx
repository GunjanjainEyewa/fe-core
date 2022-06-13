import React from 'react';
import { styled } from '@eyewa/ui-components';
import {
  onSwipeUp,
  onSwipeDown,
} from '../../../utils/videoSlider';
import ArrowIcon from '../../../Icons/ArrowIcon';
import { ArrowButtonProps } from '../../../types';
import { BUTTON } from '../../../constants';


const Arrow = styled.button<{ disabled: boolean ;}>`
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: none;
  position: absolute;
  padding: 0;
  z-index: 2;
  ${({ disabled }) => (disabled) && `
    opacity: 0.4;
    cursor: not-allowed;
  `};
`;

const UpArrow = styled(Arrow)`
  left: 0;
  bottom: -25px;
  svg {
    transform: rotate(180deg);
  }
`;

const DownArrow = styled(Arrow)`
  right: 0;
  bottom: -25px;
`;

const ArrowButtons = (props: ArrowButtonProps) => {
  const {
    activeSlide, isBackDisabled,
    isFwdDisabled, imagesLength, changeSlide,
  } = props;
  return (
    <>
      <UpArrow
        type={BUTTON}
        onClick={() => changeSlide(onSwipeUp(activeSlide, imagesLength))}
        disabled={isBackDisabled}
      >
        <ArrowIcon />
      </UpArrow>
      <DownArrow
        type={BUTTON}
        onClick={() => changeSlide(onSwipeDown(activeSlide, imagesLength))}
        disabled={isFwdDisabled}
      >
        <ArrowIcon />
      </DownArrow>
    </>
  );
};

export default ArrowButtons;
