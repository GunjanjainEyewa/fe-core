import React from 'react';
import { styled } from '@nykaa/ui-components';
import { ListingProduct, User } from '@nykaa/product-card-shared/types';
import { CartParams } from '@nykaa/product-card-shared/types/addToCart';
import { AddToWishlist, RemoveFromWishlist } from '@nykaa/product-card-shared/types/addToWishlist';
import AddToCartButton from './AddToBag';
import WishlistIcon from './Wishlist';


interface ActionProps {
  product: ListingProduct;
  user: User;
  wishlistCallback: (params: AddToWishlist | RemoveFromWishlist, isAdd: boolean) => Promise<any>;
  redirectAuthPage: () => void;
  pageLocation: string;
  isPro: boolean;
  addToCartCallback: (params: CartParams) => Promise<any>;
  handleSliderAction: () => void;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Action = (props: ActionProps) => {
  const {
    pageLocation,
    product,
    user,
    wishlistCallback,
    redirectAuthPage,
    isPro,
    addToCartCallback,
    handleSliderAction,
  } = props;
  return (
    <Wrapper>
      <WishlistIcon
        pageLocation={pageLocation}
        product={product}
        user={user}
        wishlistCallback={wishlistCallback}
        redirectAuthPage={redirectAuthPage}
      />
      <AddToCartButton
        pageLocation={pageLocation}
        product={product}
        isPro={isPro}
        addToCartCallback={addToCartCallback}
        handleSliderAction={handleSliderAction}
      />
    </Wrapper>
  );
};

export default Action;
