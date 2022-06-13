import React from 'react';
import { styled } from '@eyewa/ui-components';


interface ChangeButtonProps {
  handleClick: () => void;
}

const ChangePinCodeButton = styled.button`
  ${({ theme }) => theme.typography.buttonMedium};
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 3px 0 rgb(0 0 0 / 10%);
  border-radius: ${({ theme }) => theme.borders.radius10};
  color: ${({ theme }) => theme.colors.primary};
  margin-left: ${({ theme }) => theme.spacing.spacing40};
  padding: ${({ theme }) => theme.spacing.spacing10} ${({ theme }) => theme.spacing.spacing20};
  cursor: pointer;
`;


const ChangeButton = ({
  handleClick,
}: ChangeButtonProps) => (
  <ChangePinCodeButton type="button" onClick={() => handleClick()}>
    Change
  </ChangePinCodeButton>
);

export default ChangeButton;
