import React from 'react';
import { styled } from '@eyewa/ui-components';

interface Props {
  message: string;
  color?: string;
}

const Wrapper = styled.p`
  color: ${({ theme, color }) => color || theme.colors?.primary};
  ${({ theme }) => theme.typography?.subTitleSmall};
`;

function Offer({ message = '', color = '' }: Props) {
  const isValidColor = (typeof color === 'string' && color.length);

  return (
    <Wrapper color={isValidColor && color}>
      {message}
    </Wrapper>
  );
}

export default Offer;
