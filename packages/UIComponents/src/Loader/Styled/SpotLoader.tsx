/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '../../styles/styled';

import { SpotHelperProps as Props } from '../types';
import {
  SPOT_LOADER_TIME,
  SPOT_LOADER_JUMP_HEIGHT,
} from '../constants';
import { getSpotSize } from './helpers';

const Container = styled.div`
  display: flex;
`;

const Dot = styled.div<Props>`
  border-radius: ${({ theme }) => theme.borders.radiusFull};
  position: relative;

  ${({ theme, size }) => {
    const spot = getSpotSize({ theme, size });
    return {
      ...spot,
    };
  }}

  animation: jumps ${SPOT_LOADER_TIME}s linear infinite normal;
  animation-delay: ${({ delay }) => `${delay}s`};
  @keyframes jumps {
    0% { top: -${SPOT_LOADER_JUMP_HEIGHT}px; }
    30% { top: 0px; }
    70% { top: 0px; }
    100% { top: -${SPOT_LOADER_JUMP_HEIGHT}px; }
  }
`;

const SpotLoader = (props: Props) => {
  const secondDotDelay = SPOT_LOADER_TIME / 3;
  const thirdDotDelay = (SPOT_LOADER_TIME / 3) * 2;
  return (
    <Container {...props}>
      <Dot {...props} delay={0} />
      <Dot {...props} delay={secondDotDelay} />
      <Dot {...props} delay={thirdDotDelay} />
    </Container>
  );
};

export default SpotLoader;
