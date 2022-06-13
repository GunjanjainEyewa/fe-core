import React from 'react';
import { styled } from '@nykaa/ui-components';
import NotifyMeWrapper from '@nykaa/product-card-shared/components/NotifyMe';
import { NOTIFY_ME_TEXT } from '@nykaa/product-card-shared/constant/notifyMe';
import { NotifyMeProps, NotifyMeRenderProps } from '@nykaa/product-card-shared/types/notifyMe';
import { CrossIcon } from '../../icons';
import EmailForm from './EmailForm';

const FormWrapper = styled.div`
  ${({ theme }) => theme.typography.bodyLarge};
  padding: ${({ theme }) => theme.spacing.spacing120};
  color: ${({ theme }) => theme.colors.state};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.span`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing160};
`;


const Icon = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Error = styled.span`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => theme.colors.negative};
`;

function NotifyMe({
  offerPrice,
  brandName,
  productId,
  productName,
  primaryCategories,
  user,
  onClose,
  sendNotifyMe,
  isRegisteredViaMobile,
  offerId,
  offerMessage,
}: NotifyMeProps) {
  return (
    <NotifyMeWrapper
      offerPrice={offerPrice}
      brandName={brandName}
      productId={productId}
      productName={productName}
      primaryCategories={primaryCategories}
      user={user}
      sendNotifyMe={sendNotifyMe}
      handleCallback={onClose}
      isRegisteredViaMobile={isRegisteredViaMobile}
      offerId={offerId}
      offerMessage={offerMessage}
    >
      {({
        handleChange, handleFormSubmit, error, email,
      }: NotifyMeRenderProps) => (
        <>
          <FormWrapper>
            <Text>
              {NOTIFY_ME_TEXT}
            </Text>
            <EmailForm
              error={error}
              email={email}
              handleChange={handleChange}
              handleFormSubmit={handleFormSubmit}
            />
            <Error>{error}</Error>
          </FormWrapper>
          <Icon onClick={onClose}>
            <CrossIcon />
          </Icon>
        </>
      )}
    </NotifyMeWrapper>
  );
}

export default NotifyMe;
