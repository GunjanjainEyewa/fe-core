import React from 'react';
import { styled } from '@nykaa/ui-components';
import WishlistWrapper from '@nykaa/product-card-shared/components/AddToWishlist';
import { WishlistRenderProps, WishListProps } from '@nykaa/product-card-shared/types/addToWishlist';
import { ButtonProps } from '@nykaa/product-card-shared/types';
import { HeartIcon } from '../../icons';


const Button = styled.button`
  ${({ theme }) => theme.typography.buttonLarge};
  color: ${({ theme }) => theme.colors.primary};
  width: ${({ customWidth }: ButtonProps) => customWidth};
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid #ebebeb;
  height: 100%;
  border-width: 1px 0 0 0;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  .wishlist_button {
    margin-left: ${({ theme }) => theme.spacing.spacing40};
  }
  &:focus {
    outline: none;
  }
  &.in svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

function Wishlist(props: WishListProps) {
  const {
    pageLocation,
    user,
    product,
    customWishlistClass,
    width = '100%',
    wishlistCallback,
    redirectAuthPage,
    videoId,
  } = props;
  const { onlyWishlistButton } = product || {};
  return (
    <WishlistWrapper
      pageLocation={pageLocation}
      user={user}
      product={product}
      wishlistCallback={wishlistCallback}
      redirectAuthPage={redirectAuthPage}
      videoId={videoId}
    >
      {({ handleClick, buttonText, isInWishlist }: WishlistRenderProps) => (
        <Button
          type="button"
          customWidth={width}
          onClick={handleClick}
          className={`${isInWishlist ? 'in ' : ''}${customWishlistClass}`}
        >
          <HeartIcon height={24} width={24} />
          {Boolean(onlyWishlistButton) && <span className="wishlist_button">{buttonText}</span>}
        </Button>
      )}

    </WishlistWrapper>
  );
}

export default Wishlist;
