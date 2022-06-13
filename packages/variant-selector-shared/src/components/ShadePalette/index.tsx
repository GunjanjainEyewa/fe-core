/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';

interface ShadeProps {
  name: string;
  image: string;
  isLazyLoad: boolean;
  onClick: () => void;
  isSelected?: boolean;
  isOutOfStock?: boolean;
}

const Palette = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: ${({ theme }) => theme.borders.radius20};
  box-shadow: 0 1px 2px 0 ${({ theme }) => theme.colors.surface50};
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};

  img {
    width: 100%;
    height: 100%;
  }

  &.active {
    border-color: ${({ theme }) => theme.colors.surface};
    ${({ theme }) => theme.borders.border100};
    box-shadow: 
      0 1px 2px 0 ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.5)},
      0 2px 4px 0 ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.7)},
      0 -2px 4px 0 ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.5)};

    &:after {
      content: "";
      width: 7px;
      height: 15px;
      position: absolute;
      top: 12px;
      left: 20px;
      transform: rotate(45deg);
      border: solid ${({ theme }) => theme.colors.surface};
      border-width: 0 ${({ theme }) => `${theme.spacing.spacing10} ${theme.spacing.spacing10}`} 0;
    }
  }

  &.oos {
    &:after {
      content: "";
      width: 44px;
      height: 2px;
      transform: rotate(45deg);
      position: absolute;
      top: 25px;
      left: 4px;
      background-color: ${({ theme }) => theme.colors.surface};
      border-radius: ${({ theme }) => theme.borders.radius20};
      box-shadow: 0 0 4px 0 ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.5)};
    }
  }
`;
Palette.displayName = 'Palette';

const ShadePalette = ({
  name,
  image,
  isLazyLoad,
  onClick,
  isSelected = false,
  isOutOfStock = false,
}: ShadeProps) => {
  let classesForShade = (isSelected ? 'active' : '');
  classesForShade += (isOutOfStock ? ' oos' : '');

  const imageProps: any = {};
  if (isLazyLoad) {
    imageProps.loading = 'lazy';
  }

  return (
    <Palette className={classesForShade} onClick={onClick}>
      <img
        src={`${image}?tr=w-50,h-50`}
        alt={`${name}-shade`}
        {...imageProps}
      />
    </Palette>
  );
};

export default ShadePalette;
