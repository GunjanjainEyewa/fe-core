import React from 'react';
import { styled } from '@eyewa/ui-components';

interface ErrorProps {
  message: string;
}

const ErrorMsg = styled.span`
  color: ${({ theme }) => theme.colors.negative};
  ${({ theme }) => theme.typography.subTitleMedium};
`;

const Error = ({ message }: ErrorProps) => (
  <ErrorMsg>
    {message}
  </ErrorMsg>
);
export default Error;
