import React from 'react';
import { styled } from '@eyewa/ui-components';

// Replace with new token
const SkipButton = styled.button`
  ${({ theme }) => theme.typography.titleSmall};
  letter-spacing: 0.25px;
  background: inherit;
  color: inherit;
  border: 0;
`;

interface SkipProps {
  handleInteraction: () => void;
  isDisabled?: boolean;
  text: string;
}

const Skip = ({
  handleInteraction,
  text,
  isDisabled = false,
}: SkipProps) => (
  <SkipButton
    onClick={() => handleInteraction()}
    disabled={isDisabled}
  >
    {text}
  </SkipButton>
);

export default Skip;
