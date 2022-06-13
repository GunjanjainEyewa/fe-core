import React from 'react';
import { styled } from '@nykaa/ui-components';

// Replace with new token
const Button = styled.button`
  border: 1px solid rgba(0, 19, 37, 0.16);
  border-radius: 8px;
  ${({ theme }) => theme.typography.titleSmall};
  text-align: center;
  letter-spacing: 0.25px;
  color: inherit;
  background-color: inherit;
  width: 100%;
  padding: 4px 0;
`;

interface NextProps {
  handleInteraction: () => void;
  isDisabled?: boolean;
  text: string;
}

const RoundedButton = ({ handleInteraction, text, isDisabled = false }: NextProps) => (
  <Button onClick={() => handleInteraction()} disabled={isDisabled}>
    {text}
  </Button>
);

export default RoundedButton;
