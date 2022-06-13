import React, { RefObject } from 'react';
import { styled } from '@eyewa/ui-components';
import { keyframes, css } from '@emotion/core';
import { TAP_TO_SELECT, SIZE_CHART, SIZE_ERROR_MSG } from '@eyewa/variant-selector-shared/constant';
import { Variant } from '@eyewa/variant-selector-shared/types';
import { Error } from '@eyewa/variant-selector-shared';
import Header from '../components/Header';
import SizeList from './SizeList';

interface VariantsProps {
  variants: Variant[];
  currentVariant: (Variant|undefined);
  onVariantClick: (param: any) => void;
  isVariantChart?: boolean;
  onVariantChartClick?: Function;
  isError?: boolean;
  closeError?: Function;
  isAnimation?: boolean;
  closeAnimation?: Function;
  variantRef?: RefObject<HTMLDivElement>;
  isBackorder?: boolean;
}

const SizeSelector = styled.div`
  background:${({ theme }) => theme.colors.surface};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  padding: ${({ theme }) => `${theme.spacing.spacing80} ${theme.spacing.spacing40} ${theme.spacing.spacing20}`};
  ${({ theme }) => theme.typography.bodyMedium};
`;

const animationKeyframe = keyframes`
  20%, 45% {transform: translate3d(2px, 0, 0)}
  25% {transform: translate3d(4px, 0, 0)}
  50% {transform: translate3d(0, 0, 0)}
  70%, 95% {transform: translate3d(-2px, 0, 0)}
  75% {transform: translate3d(-4px, 0, 0)}
`;

const cssAnimation = css`
  animation: ${animationKeyframe} 0.2s;
  animation-iteration-count: infinite;
`;

const SizesWidget = styled.div<{isAnimation: boolean}>`
  ${({ isAnimation }) => isAnimation && cssAnimation};
`;

const Sizes = ({
  variants,
  currentVariant,
  onVariantClick,
  isVariantChart,
  onVariantChartClick,
  isError,
  closeError,
  isAnimation,
  closeAnimation,
  variantRef,
  isBackorder,
}: VariantsProps) => {
  const handleVariantClick = (id: string) => {
    if (isError) {
      closeError();
    }
    if (isAnimation) {
      closeAnimation();
    }
    onVariantClick(id);
  };

  const optionalHeaderProps: any = {};
  if (isVariantChart) {
    optionalHeaderProps.chartTitle = SIZE_CHART;
    optionalHeaderProps.onClick = onVariantChartClick;
  }

  return (
    <SizeSelector ref={variantRef}>
      {isError && <Error message={SIZE_ERROR_MSG} />}
      <SizesWidget isAnimation={isAnimation}>
        <Header title={TAP_TO_SELECT} {...optionalHeaderProps} />
        <SizeList
          variants={variants}
          currentVariant={currentVariant}
          onClick={handleVariantClick}
          isBackorder={isBackorder}
        />
      </SizesWidget>
    </SizeSelector>
  );
};
export default Sizes;
