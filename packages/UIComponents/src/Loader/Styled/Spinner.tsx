/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '../../styles/styled';
import { hexToRgb } from '../../styles/utils';

import {
  SpinnerProps as Props,
} from '../types';
import NykaaLogo from './Icons/NykaaLogoColored';
import {
  SIZE,
  SPINNER_WIDTH,
  SPINNER_INDETERMINATE_TIME,
} from '../constants';
import {
  getSpinnerSizeStyle,
  getSpinnerLogoSize,
  getSpinnerRadius,
  getFontStyle,
  getDasharray,
  getDashoffset,
} from './helpers';

const Container = styled.div<Props>`
  position: relative;
  ${(props) => {
    const { size } = props;
    const dimensions = getSpinnerSizeStyle({ size });
    return {
      ...dimensions,
    };
  }}
`;

const SpinnerSvg = styled.svg<Props>`
  display: flex;
  position: absolute;
  ${(props) => {
    const { size } = props;
    const dimensions = getSpinnerSizeStyle({ size });
    return {
      ...dimensions,
    };
  }}

  animation-name: ${({ isDeterminate }) => !isDeterminate && 'spin'};
  animation-timing-function: linear;
  animation-duration: ${({ indeterminateTime }) => (
    `${indeterminateTime || SPINNER_INDETERMINATE_TIME}s`
  )};
  animation-iteration-count: infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SpinnerBorder = styled.circle<Props>`
  cx: 50%;
  cy: 50%;
  fill: none;
  stroke: ${({ theme }) => `${hexToRgb(theme.colors.primary, 0.08)}`};
  stroke-width: ${SPINNER_WIDTH}px;

  ${(props) => {
    const { size } = props;
    const dimensions = getSpinnerRadius({ size });
    const strokeDasharray = getDasharray({ size });
    return {
      ...dimensions,
      strokeDasharray,
    };
  }}
`;

const SpinnerProgress = styled.circle<Props>`
  cx: 50%;
  cy: 50%;
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: ${SPINNER_WIDTH}px;
  transform: rotate(-90deg) translate(-100%, 0);
  transition: stroke-dashoffset 0.5s linear;

  ${(props) => {
    const { size, value } = props;
    const dimensions = getSpinnerRadius({ size });
    const strokeDasharray = getDasharray({ size });
    const strokeDashoffset = getDashoffset({ value, size });
    return {
      ...dimensions,
      strokeDasharray,
      strokeDashoffset,
    };
  }}
`;

const GradientSpotInit = styled.stop`
  stop-color: ${({ theme }) => theme.colors.primary};
`;

const GradientSpotEnd = styled.stop`
  stop-color: ${({ theme }) => `${hexToRgb(theme.colors.primary, 0.08)}`};
`;

const SpinnerIndeterminate = styled.circle<Props>`
  cx: 50%;
  cy: 50%;
  fill: none;
  stroke: url(#indeteminateGradient);
  stroke-width: ${SPINNER_WIDTH}px;

  ${(props) => {
    const { size } = props;
    const dimensions = getSpinnerRadius({ size });
    const strokeDasharray = getDasharray({ size });
    const strokeDashoffset = getDashoffset({ value: 25, size });
    return {
      ...dimensions,
      strokeDasharray,
      strokeDashoffset,
    };
  }}
`;

const SpinnerCenter = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => {
    const { size, theme } = props;
    const fontSize = getFontStyle({ size, theme });
    return {
      ...fontSize,
    };
  }}
`;

const Logo = styled.div<Props>`
  display: flex;
  svg {
    ${({ size }) => {
    const dimensions = getSpinnerLogoSize({ size });
    return {
      ...dimensions,
    };
  }}
  };
`;

const Spinner = (props: Props) => {
  const {
    isDeterminate, showLogo, size, value,
    showValue, indeterminateTime,
  } = props;

  const DeterminateSpinner = (
    <SpinnerProgress
      value={value}
      size={size}
    />
  );

  const IndeterminateSpinner = (
    <>
      <defs>
        <linearGradient id="indeteminateGradient" x1="0" y1="1" x2="1" y2="1">
          <GradientSpotInit offset="75%" />
          <GradientSpotEnd offset="100%" />
        </linearGradient>
      </defs>
      <SpinnerIndeterminate
        value={value}
        size={size}
      />
    </>
  );

  const LogoT = (
    <Logo size={size}><NykaaLogo /></Logo>
  );

  const valuePer = `${value}%`;

  return (
    <Container {...props}>
      <SpinnerSvg
        isDeterminate={isDeterminate}
        size={size}
        indeterminateTime={indeterminateTime}
      >
        <SpinnerBorder size={size} />
        {isDeterminate ? DeterminateSpinner : IndeterminateSpinner}
      </SpinnerSvg>
      {showLogo && <SpinnerCenter>{LogoT}</SpinnerCenter>}
      {showValue && !showLogo && (size !== SIZE.small) && isDeterminate && (
        <SpinnerCenter {...props}>{valuePer}</SpinnerCenter>
      )}
    </Container>
  );
};

export default Spinner;
