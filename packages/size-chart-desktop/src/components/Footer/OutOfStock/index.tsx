import React from 'react';
import NotifyMeWrapper from '@eyewa/product-card-shared/components/NotifyMe';
import { styled } from '@eyewa/ui-components';
import { NotifyMeProps, NotifyMeRenderProps } from '@eyewa/product-card-shared/types/notifyMe';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import EmailForm from './Form';


const NOTIFY_ME_TEXT = 'Notify me when the product is available';
const FormWrapper = styled.div`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};
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
        </>
      )}
    </NotifyMeWrapper>
  );
}

export default NotifyMe;
