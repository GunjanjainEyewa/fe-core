import React from 'react';
import { getOfferTrackingData } from '@eyewa/product-card-shared/utils';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { OutOfStockProps } from '@eyewa/product-card-shared/types/notifyMe';
import NotifyMe from './NotifyMe';


const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing80};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Stock = styled.span`
  ${({ theme }) => theme.typography.subTitleLarge};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.8)};
  background-color: ${({ theme }) => theme.colors.surface30};
  border-radius: ${({ theme }) => theme.borders.radius20};
  margin: ${({ theme }) => theme.spacing.spacing160} 0;
  padding: ${({ theme }) => `${theme.spacing.spacing20} ${theme.spacing.spacing60}`};
  text-transform: uppercase;
`;

const OutOfStock = ({
  user,
  product,
  closeNotifyMe,
  isRegisteredViaMobile,
  sendNotifyMe,
}: OutOfStockProps) => {
  const { showOffer, offer, offerId: id } = product;
  const { offerMessage, offerId } = getOfferTrackingData({ showOffer, offer, offerId: id });
  return (
    <Wrapper>
      <Stock>OUT OF STOCK</Stock>
      <NotifyMe
        user={user}
        brandName={product?.brandName || ''}
        productId={product?.childId}
        offerPrice={product?.offerPrice || 0}
        productName={product?.variantName}
        onClose={closeNotifyMe}
        sendNotifyMe={sendNotifyMe}
        isRegisteredViaMobile={isRegisteredViaMobile}
        primaryCategories={product?.primaryCategories}
        offerMessage={offerMessage}
        offerId={offerId}
      />
    </Wrapper>
  );
};

export default OutOfStock;
