import React from 'react';
import { styled } from '@nykaa/ui-components';
import AddToCartWrapper from '@nykaa/product-card-shared/components/AddToCart';
import { CartRenderProps, CartProps } from '@nykaa/product-card-shared/types/addToCart';
import { ButtonProps } from '@nykaa/product-card-shared/types';
import { ProgressStrip } from '../../Animation';

const Button = styled(ProgressStrip)`
  ${({ theme }) => theme.typography.buttonLarge};
  width: ${({ customWidth }: ButtonProps) => customWidth};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    vertical-align: middle;
  }

  .btn-text {
    ${({ theme }) => theme.typography.buttonLarge};
    text-transform: capitalize;
  }

  path:nth-of-type(2) {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

function AddToCart({
  product,
  pageLocation,
  isPro,
  addToCartCallback,
  width = '100%',
  showShades,
  handleCallback,
  journeyData,
  videoId,
}: CartProps) {
  return (
    <AddToCartWrapper
      pageLocation={pageLocation}
      product={product}
      isPro={isPro}
      addToCartCallback={addToCartCallback}
      showShades={showShades}
      handleCallback={handleCallback}
      journeyData={journeyData}
      videoId={videoId}
    >
      {({ handleAddToCart, stripClass, text }: CartRenderProps) => (
        <Button
          type="button"
          className={stripClass}
          customWidth={width}
          onClick={handleAddToCart}
        >
          <span className="btn-text">{text}</span>
        </Button>
      )}
    </AddToCartWrapper>
  );
}

export default AddToCart;
