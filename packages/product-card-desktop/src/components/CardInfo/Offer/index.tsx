import React from 'react';
import { styled } from '@nykaa/ui-components';

interface Props {
  message: string;
  color?: string;
}

const Wrapper = styled.p`
  ${({ theme }) => theme.typography?.bodyMedium};
  color: ${({ theme, color }) => color || theme.colors?.primary};
  margin-bottom: ${({ theme }) => `${theme.spacing?.spacing40}`};
`;

function Offer({ message = '', color = '' }: Props) {
  const isValidColor = (typeof color === 'string' && color.length);

  return (
    <Wrapper color={isValidColor && color}>
      { message }
    </Wrapper>
  );
}

export default Offer;
