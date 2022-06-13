import React from 'react';
import { styled } from '@eyewa/ui-components';
import Wishlist from '@eyewa/product-card-desktop/components/CardActions/AddToWishlist';
import { ListingProduct, User } from '@eyewa/product-card-shared/types';
import { AddToWishlist, RemoveFromWishlist } from '@eyewa/product-card-shared/types/addToWishlist';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';


const Wrapper = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  border-radius: ${({ theme }) => theme.borders.radius20};
  width: 80px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    width: auto;
    height: auto;
    border: none;
  }
`;
interface WishlistIconProps {
  pageLocation: string;
  user: User;
  product: ListingProduct;
  wishlistCallback: (params: AddToWishlist | RemoveFromWishlist, isAdd: boolean) => Promise<any>;
  redirectAuthPage: () => void;
}
const WishlistIcon = (props: WishlistIconProps) => {
  const {
    pageLocation,
    user,
    wishlistCallback,
    product,
    redirectAuthPage,
  } = props;
  return (
    <Wrapper>
      <Wishlist
        pageLocation={{ pageType: pageLocation }}
        user={user}
        wishlistCallback={wishlistCallback}
        redirectAuthPage={redirectAuthPage}
        product={product}
      />
    </Wrapper>
  );
};

export default WishlistIcon;
