import React, { useState, useEffect } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import AddToCart from '@eyewa/product-card-desktop/components/CardActions/AddToBag';
import { ListingProduct } from '@eyewa/product-card-shared/types';
import { CartParams } from '@eyewa/product-card-shared/types/addToCart';


const PRODUCT_ADDED = 'ADDED TO BAG';
interface AddToCartProps {
  pageLocation: string;
  isPro: boolean;
  product: ListingProduct,
  addToCartCallback: (params: CartParams) => Promise<any>;
  handleSliderAction: () => void;
}

const AddToBagButton = styled.div`
  width: 100%;
  height: 48px;
  & > button {
    border-radius: ${({ theme }) => theme.borders.radius20};
  }
`;
const AddedToBag = styled.button`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.borders.border100};
  background: ${({ theme }) => hexToRgb(theme.colors.warning, 0.7)};
  border-color: ${({ theme }) => hexToRgb(theme.colors.warning, 0.2)};
  font-weight: 600;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:after { 
    content: "❯";
    position: absolute;
    right: 14px;
`;

function AddToCartButton({
  pageLocation,
  product,
  isPro,
  addToCartCallback,
  handleSliderAction,
}: AddToCartProps) {
  const [showProductAdded, setShowProductAdded] = useState(false);
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
  const handleAddToBag = (status: boolean) => {
    setShowProductAdded(status);
  };

  return (
    <AddToBagButton>
      {(!showProductAdded) && (
        <AddToCart
          product={product}
          pageLocation={{ pageType: pageLocation }}
          isPro={isPro}
          addToCartCallback={addToCartCallback}
          handleCallback={handleAddToBag}
        />
      )}
      {showProductAdded && (
        <AddedToBag onClick={handleSliderAction}>
          {PRODUCT_ADDED}
        </AddedToBag>
      )}
    </AddToBagButton>
  );
}

export default AddToCartButton;
