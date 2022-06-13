import React from 'react';
import { styled } from '@nykaa/ui-components';
import Price from '@nykaa/product-card-desktop/components/CardInfo/Price';
import { ListingProduct, User } from '@nykaa/product-card-shared/types';
import { CartParams } from '@nykaa/product-card-shared/types/addToCart';
import { AddToWishlist, RemoveFromWishlist } from '@nykaa/product-card-shared/types/addToWishlist';
import { NotifyMeParams } from '@nykaa/product-card-shared/types/notifyMe';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import Action from './Action';
import NotifyMe from './OutOfStock';


interface FooterProps {
  product: ListingProduct;
  user: User;
  wishlistCallback: (params: AddToWishlist | RemoveFromWishlist, isAdd: boolean) => Promise<any>;
  redirectAuthPage: () => void;
  pageLocation: string;
  isPro: boolean;
  addToCartCallback: (params: CartParams) => Promise<any>;
  handleSliderAction: () => void;
  notifyClose: () => void;
  sendNotifyMe: (e: NotifyMeParams) => Promise<any>;
  isRegisteredViaMobile: (e: string) => boolean;
  selectedSize?: string;
}
const Wrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.spacing80} ${({ theme }) => theme.spacing.spacing120};
  margin-top: ${({ theme }) => theme.spacing.spacing20};
  border-top: 1px solid ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Size = styled.span`
  ${({ theme }) => theme.typography.subTitleLarge};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
const Footer = (props: FooterProps) => {
  const {
    product,
    user,
    wishlistCallback,
    redirectAuthPage,
    pageLocation,
    isPro,
    addToCartCallback,
    handleSliderAction,
    notifyClose,
    sendNotifyMe,
    isRegisteredViaMobile,
    selectedSize,
  } = props;
  if (product?.inStock) {
    return (
      <Wrapper>
        <ProductInfo>
          <Size>
            Size:
            {selectedSize}
          </Size>
          <Price
            mrp={product?.mrp}
            price={product?.price}
            discount={product?.discount}
            size="small"
          />
        </ProductInfo>
        <Action
          product={product}
          user={user}
          wishlistCallback={wishlistCallback}
          redirectAuthPage={redirectAuthPage}
          pageLocation={pageLocation}
          isPro={isPro}
          addToCartCallback={addToCartCallback}
          handleSliderAction={handleSliderAction}
        />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <NotifyMe
        offerPrice={product?.offerPrice}
        brandName={product?.brandName}
        productId={product?.productId}
        productName={product?.name}
        primaryCategories={product?.primaryCategories}
        user={user}
        onClose={notifyClose}
        sendNotifyMe={sendNotifyMe}
        isRegisteredViaMobile={isRegisteredViaMobile}
      />
    </Wrapper>
  );
};

export default Footer;
