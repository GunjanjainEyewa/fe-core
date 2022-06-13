import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { PRODUCT_ADDED } from '@eyewa/product-card-shared/constant/addToCart';
import { ButtonProps } from '@eyewa/product-card-shared/types';
import { CardActionProps, ActionStyleProps } from '../../types';
import { getAction } from '../../utils';
import Wishlist from './AddToWishlist';
import AddToCart from './AddToBag';
import Variants from './Variants';

const ActionWrapper = styled.div`
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  background : ${({ customBg, theme }: ActionStyleProps) => (customBg ? theme.colors.white : 'auto')};
  a {
    text-decoration: unset;
    height: 100%;
    width: 50%;
  }
`;

const ViewDetail = styled.button`
  ${({ theme }) => theme.typography.buttonLarge};
  ${({ theme }) => theme.borders.border100};
  color: ${({ theme }) => theme.colors.primary};
  width: ${({ customWidth }: ButtonProps) => customWidth};
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
`;
const AddedToBag = styled.button`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.borders.border100};
  background: ${({ theme }) => hexToRgb(theme.colors.warning, 0.7)};
  border-color: ${({ theme }) => hexToRgb(theme.colors.warning, 0.2)};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${({ theme }) => theme.typography.bodyMedium};
  &:after { 
    content: "❯";
    position: absolute;
    right: 14px;
`;

const Link = styled.a``;

const CardAction = ({
  product,
  showShades,
  pdpPageUrl,
  user,
  pageLocation,
  handleVariantCross,
  openNotifyMe,
  handleVariant,
  handleSlider,
  addToCartCallback,
  wishlistCallback,
  redirectAuthPage,
  onlyAddToBag,
  handleShowCAB,
  journeyData,
}: CardActionProps) => {
  // show shades = shade pallete open
  const [showProductAdded, setShowProductAdded] = useState(false);
  const {
    onlyWishlistButton, variantType, type, inStock,
  } = product || {};
  const isPro = user?.isPro || false;
  const {
    showNotifyMe,
    showVariants,
    showAddToBag,
    showViewDetailBtn,
    showWishlist,
  } = getAction(
    onlyAddToBag,
    onlyWishlistButton,
    showProductAdded,
    inStock,
    type,
    showShades,
  );
  // only for 'only wishlist' button
  const wishlistButton = ((onlyWishlistButton) && !(onlyAddToBag)) ? 'wishlist_button' : '';
  const notifyMeWidth = (showShades) ? '50%' : '75%';
  const notifyMeClass = (showShades) ? '' : 'fill-bg';
  const wishlistWidth = (onlyWishlistButton) ? '100%' : '25%';
  let addToBagWidth = (showShades) ? '50%' : '75%';
  addToBagWidth = (onlyAddToBag) ? '100%' : addToBagWidth;
  const handleAddToBag = useCallback(
    (status: boolean) => {
      if (!showShades && status) {
        setShowProductAdded(true);
      }
      if (handleVariantCross) {
        handleVariantCross();
      }
      if (handleShowCAB) {
        handleShowCAB();
      }
    },
    [handleVariantCross, showShades],
  );

  useEffect(() => {
    let btnTimeOut: any;
    if (showProductAdded) {
      btnTimeOut = setTimeout(() => {
        setShowProductAdded(false);
      }, 5000);
    }
    return () => {
      if (btnTimeOut) {
        clearTimeout(btnTimeOut);
      }
    };
  }, [showProductAdded]);

  return (
    <ActionWrapper customBg={showProductAdded}>
      {(showWishlist) && (
        <Wishlist
          user={user}
          width={wishlistWidth}
          pageLocation={pageLocation}
          customWishlistButton={wishlistButton}
          product={product}
          customWishlistClass="wishlist_button_text"
          wishlistCallback={wishlistCallback}
          redirectAuthPage={redirectAuthPage}
        />
      )}
      {(showViewDetailBtn) && (
        <Link href={pdpPageUrl} target="_blank" rel="noopener noreferrer">
          <ViewDetail customWidth="100%">View Detail</ViewDetail>
        </Link>
      )}
      {(showNotifyMe) && (
        <ViewDetail
          className={notifyMeClass}
          customWidth={notifyMeWidth}
          onClick={openNotifyMe}
        >
          Notify Me
        </ViewDetail>
      )}
      {(showAddToBag) && (
        <AddToCart
          isPro={isPro}
          pageLocation={pageLocation}
          width={addToBagWidth}
          addToCartCallback={addToCartCallback}
          handleCallback={handleAddToBag}
          showShades={showShades}
          product={product}
          journeyData={journeyData}
        />
      )}
      {((!onlyWishlistButton) && (showVariants)) && (
        <Variants variantType={variantType} handleVariant={handleVariant} />
      )}
      {(showProductAdded) && (
        <AddedToBag onClick={handleSlider}>{PRODUCT_ADDED}</AddedToBag>
      )}
    </ActionWrapper>
  );
};

export default CardAction;
