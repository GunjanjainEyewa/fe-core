import React from 'react';
import { styled } from '@eyewa/ui-components';
import CheckIcon from '@eyewa/delivery-shared/Icons/CheckIcon';


interface DeliveryMessageProps {
  message: string;
}
const Wrapper = styled.span`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.spacing20};
`;
const Text = styled.span`
  ${({ theme }) => theme.typography.bodyMedium};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;
const DeliveryMessage = ({ message }: DeliveryMessageProps) => (
  <Wrapper>
    <CheckIcon />
    <Text>{message}</Text>
  </Wrapper>
);

export default DeliveryMessage;
