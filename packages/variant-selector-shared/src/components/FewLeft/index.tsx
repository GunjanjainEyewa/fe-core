import React from 'react';
import { styled } from '@nykaa/ui-components';
import { FEW_LEFT } from '../../constant';

const FewLeftInfo = styled.span`
  display: inline-block;
  background: transparent;
  color: ${({ theme }) => theme.colors.warning};
  padding: ${({ theme }) => `${theme.spacing.spacing10} ${theme.spacing.spacing20}`};
  border-radius: ${({ theme }) => theme.borders.radius20};
  ${({ theme }) => theme.typography.subTitleSmall};
`;

const FewLeft = () => (
  <FewLeftInfo>
    {FEW_LEFT}
  </FewLeftInfo>
);

export default FewLeft;
