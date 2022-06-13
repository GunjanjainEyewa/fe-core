import React, { RefObject } from 'react';
import { styled } from '@eyewa/ui-components';
import { keyframes, css } from '@emotion/core';
import { Variant } from '@eyewa/variant-selector-shared/types';
import { ALL_SHADES, SELECT_SHADE, SHADE_ERROR_MSG } from '@eyewa/variant-selector-shared/constant';
import { Error } from '@eyewa/variant-selector-shared';
import Header from '../components/Header';
import ShadeList from './ShadeList';


interface VariantsProps {
  variants: Variant[];
  currentVariant: (Variant|undefined);
  onVariantClick: Function;
  isVariantChart?: boolean;
  onVariantChartClick?: Function;
  isError?: boolean;
  closeError?: Function;
  isAnimation?: boolean;
  closeAnimation?: Function;
  variantRef?: RefObject<HTMLDivElement>;
  isBackorder?: boolean;
}

const ShadeSelector = styled.div`
  padding: ${({ theme }) => `${theme.spacing.spacing80} ${theme.spacing.spacing40} ${theme.spacing.spacing20}`};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  background:${({ theme }) => theme.colors.surface};
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

const ShadesWidget = styled.div<{isAnimation: boolean}>`
  ${({ isAnimation }) => isAnimation && cssAnimation};
`;

const VariantInfo = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.surfaceInverse};
`;

const Shades = ({
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

  const numberOfVariants = variants?.length;

  let title:(string|JSX.Element) = currentVariant?.variantName;
  if (!title) {
    title = (
      <Title>
        {SELECT_SHADE}
        <VariantInfo>
          {` (${numberOfVariants})`}
        </VariantInfo>
      </Title>
    );
  }

  const optionalHeaderProps: any = {};
  if (isVariantChart) {
    optionalHeaderProps.chartTitle = ALL_SHADES;
    optionalHeaderProps.onClick = onVariantChartClick;
  }

  return (
    <ShadeSelector ref={variantRef}>
      {isError && <Error message={SHADE_ERROR_MSG} />}
      <ShadesWidget isAnimation={isAnimation}>
        <Header title={title} {...optionalHeaderProps} />
        <ShadeList
          variants={variants}
          currentVariant={currentVariant}
          onClick={handleVariantClick}
          isBackorder={isBackorder}
        />
      </ShadesWidget>
    </ShadeSelector>
  );
};

export default Shades;
