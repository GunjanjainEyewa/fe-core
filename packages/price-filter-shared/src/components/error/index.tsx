import React from 'react';
import { styled } from '@eyewa/ui-components';


const ErrorWrapper = styled.p`
  color: ${({ theme }) => theme.colors.negative};
`;

interface Props {
  message?: string;
}

function Error({ message = '' }: Props) {
  if (!message) {
    return null;
  }
  return (
    <ErrorWrapper>
      { message }
    </ErrorWrapper>
  );
}

export default Error;
