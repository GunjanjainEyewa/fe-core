import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';

const ItemsWrapper = styled.p`
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.36)};
  margin: 10px 0;
`;

interface Props {
  count: number;
}

function ResultCount({ count = 0 }: Props) {
  return (
    <ItemsWrapper>
      { count }
      {' '}
      items
    </ItemsWrapper>
  );
}

export default ResultCount;
