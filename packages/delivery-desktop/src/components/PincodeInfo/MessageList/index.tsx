import React from 'react';
import { styled } from '@nykaa/ui-components';
import CrossIcon from '@nykaa/delivery-shared/Icons/CrossIcon';
import { createMessageList } from '@nykaa/delivery-shared/utils';
import DeliveryMessage from './Message';


interface DeliveryMessageListProps {
  deliveryInfoNotFound: boolean;
  codMessage?: string;
  city?: string;
  statusDate?: string;
  statusMessage?: string;
  selectedCountry?: string;
  defaultErrorMessage: string;
}

const DeliveryMessages = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing40} 0;
`;
const DeliveryNotFound = styled.span`
  display: flex;
`;
const DeliveryNotText = styled.span`
  ${({ theme }) => theme.typography.bodyMedium};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;
const Wrapper = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
`;
const CityText = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
`;
const MessageList = styled.div`
  padding-top: ${({ theme }) => theme.spacing.spacing40};
`;
const DeliveryMessageList = ({
  deliveryInfoNotFound,
  codMessage,
  city,
  statusDate,
  statusMessage,
  selectedCountry,
  defaultErrorMessage,
}: DeliveryMessageListProps) => {
  const messageList = createMessageList(statusMessage, statusDate, codMessage);
  if (deliveryInfoNotFound) {
    return (
      <DeliveryMessages>
        <DeliveryNotFound>
          <CrossIcon />
          <DeliveryNotText>
            {defaultErrorMessage}
          </DeliveryNotText>
        </DeliveryNotFound>
      </DeliveryMessages>
    );
  }
  return (
    <DeliveryMessages>
      <Wrapper>
        Shipping to:
        <CityText>
          &nbsp;
          {city}
          {(selectedCountry ? `, ${selectedCountry}` : (', India'))}
        </CityText>
        {(codMessage && statusDate && statusMessage) && (
          <MessageList>
            {
              messageList?.map((message: string) => (
                <DeliveryMessage key={message} message={message} />
              ))
            }
          </MessageList>
        )}
      </Wrapper>
    </DeliveryMessages>
  );
};

export default DeliveryMessageList;
