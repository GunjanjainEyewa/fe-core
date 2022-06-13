/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '../../styles/styled';
import { hexToRgb } from '../../styles/utils';

import { BarLoaderProps as Props } from '../types';
import {
  BAR_LOADER_INDETERMINATE_TIME,
  BAR_LOADER_HEIGHT,
} from '../constants';
import { getBarLoaderWidth } from './helpers';

const Container = styled.div<Props>`
  position: relative;
  overflow: hidden;
  ${(props) => {
    const { fullScreen, width: barWidth } = props;
    const width = getBarLoaderWidth({ fullScreen, width: barWidth });

    return {
      width,
    };
  }}
`;

const Text = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.spacing80};
`;

const BarLoaderContainer = styled.div<Props>`
  height: ${BAR_LOADER_HEIGHT}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borders.radius40};
  z-index: 0;
  position: absolute;
  background-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.08)};
`;

const BarLoaderInnerDeterminate = styled.div<Props>`
  height: ${BAR_LOADER_HEIGHT}px;
  width: ${(props) => `${props.value}%`};
  border-radius: ${({ theme }) => theme.borders.radius40};
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width 0.5s linear;
`;

const BarLoaderInnerIndeterminate = styled.div<Props>`
  height: ${BAR_LOADER_HEIGHT}px;
  width: 30%;
  border-radius: ${({ theme }) => theme.borders.radius40};
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  animation-name: indeterminate;
  animation-timing-function: linear;
  animation-duration: ${({ indeterminateTime }) => (
    `${indeterminateTime || BAR_LOADER_INDETERMINATE_TIME}s`
  )};
  animation-iteration-count: infinite;

  @keyframes indeterminate {
    0%   { left: -30%; }
    100% { left: 100%; }
  }
`;

const BarLoader = (props: Props) => {
  const {
    value,
    text,
    isDeterminate,
    indeterminateTime,
  } = props;

  const DeterminateBar = (
    <BarLoaderInnerDeterminate value={value} />
  );

  const IndeterminateBar = (
    <BarLoaderInnerIndeterminate indeterminateTime={indeterminateTime} />
  );

  return (
    <Container {...props}>
      {text && <Text>{text}</Text>}
      <BarLoaderContainer />
      {isDeterminate ? DeterminateBar : IndeterminateBar}
    </Container>
  );
};

export default BarLoader;
