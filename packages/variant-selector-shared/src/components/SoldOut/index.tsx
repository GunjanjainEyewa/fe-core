import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { SOLD_OUT } from '../../constant';

const SoldOutInfo = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.spacing10} ${theme.spacing.spacing20}`};
  border-radius: ${({ theme }) => theme.borders.radius20};
  color: ${({ theme }) => theme.colors.surface};
  background: ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.3)};
  ${({ theme }) => theme.typography.subTitleSmall};
`;

const SoldOut = () => (
  <SoldOutInfo>
    {SOLD_OUT}
  </SoldOutInfo>
);

export default SoldOut;
