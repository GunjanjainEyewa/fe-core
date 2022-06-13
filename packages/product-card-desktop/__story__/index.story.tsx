import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { variantTypes } from '@nykaa/product-card-shared/constant/variants';
import ProductCard from '../src';
import {
  cartPromise,
  getVariantData,
  imageUrl,
  noop,
  product,
  productId,
  promise,
  User,
} from './mock';

interface Props {
  onlyAddToBag: boolean;
  showFixedAction: boolean;
  onlyWishlistButton: boolean;
  inStock: boolean;
  variantType: string;
  type: string;
}

export const Card = (args: Props) => {
  const data = getVariantData();
  const VariantState = {
    loading: false,
    isNotFound: false,
    isFetchingError: false,
    loadingProductId: '',
    data: { [productId]: data },
  };
  const { onlyWishlistButton, inStock, variantType, type } = args || {};
  const newProduct = {
    ...product,
    onlyWishlistButton,
    inStock,
    variantType,
    type,
  };
  return (
    <ProductCard
      onlyAddToBag={args.onlyAddToBag}
      showFixedAction={args.showFixedAction}
      imageUrl={imageUrl}
      product={newProduct}
      showProFlag={false}
      lazyLoadImage={true}
      positionInList={1}
      user={User}
      size="compact"
      pageLocation={{}}
      handleSlider={noop}
      variants={VariantState}
      addToCartCallback={cartPromise}
      wishlistCallback={promise}
      sendNotifyMe={promise}
      fetchVariants={(e: any) => e}
      isRegisteredViaMobile={(e: string) => false}
      redirectAuthPage={noop}
    />
  );
};

Card.args = {
  onlyAddToBag: false,
  showFixedAction: false,
  onlyWishlistButton: false,
  inStock: true,
  variantType: variantTypes.SHADE,
  type: variantTypes.SIMPLE,
};

export const CardWithAddToBag = () => {
  return (
    <ProductCard
      onlyAddToBag
      showFixedAction
      imageUrl={imageUrl}
      product={product}
      showProFlag={false}
      lazyLoadImage={true}
      positionInList={1}
      user={User}
      size="compact"
      pageLocation={{}}
      addToCartCallback={cartPromise}
      defaultColor={false}
    />
  );
};

CardWithAddToBag.storyName = `With 'Add To Bag'`;
CardWithAddToBag.parameters = {
  description: 'We are passing only required props',
};

const plpPriceReveal = {
  "status":true,
  "categoryId":[
     
  ],
  "text":"BIG BLUE OFFER INSIDE",
  "textColor":"#003243",
  "badgeColor":"#EBEFF0"
};

export const progFlag = () => {
  return (
    <div className="bg-container">
      <ProductCard
        onlyAddToBag
        showFixedAction
        imageUrl={imageUrl}
        product={product}
        showProFlag={true}
        lazyLoadImage={true}
        positionInList={1}
        user={User}
        size="compact"
        pageLocation={{}}
        addToCartCallback={cartPromise}
        plpPriceReveal={plpPriceReveal}
      />
    </div>
  );
};

progFlag.storyName = `With Pro Tag`;
progFlag.parameters = {
  description: 'Pro Tag should be appeared for pro Users',
};

export const CardWithDefaultColor = () => {
  return (
    <ProductCard
      onlyAddToBag
      showFixedAction
      imageUrl={imageUrl}
      product={product}
      showProFlag={false}
      lazyLoadImage={true}
      positionInList={1}
      user={User}
      size="compact"
      pageLocation={{}}
      addToCartCallback={cartPromise}
      defaultColor={true}
    />
  );
};

CardWithDefaultColor.storyName = `With 'Default Colors'`;
CardWithDefaultColor.parameters = {
  description: 'For Nykaaman',
};

export const CardWithOfferMessage = (props: any) => {
  const updatedProduct = {...product, ...props};
  return (
    <ProductCard
      onlyAddToBag
      showFixedAction
      imageUrl={imageUrl}
      product={updatedProduct}
      showProFlag={false}
      lazyLoadImage={true}
      positionInList={1}
      user={User}
      size="compact"
      pageLocation={{}}
      addToCartCallback={cartPromise}
      defaultColor={true}
    />
  );
};

CardWithOfferMessage.storyName = `With Offer Message`;
CardWithOfferMessage.args = {
  offer: 'Get 60% Off!',
  showOffer: true,
  offerColor: '#000000',
}


export default {
  title: 'ProductCard/Desktop',
  component: ProductCard,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};
