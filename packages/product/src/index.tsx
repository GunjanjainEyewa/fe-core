import React from 'react';
import styled from '@nykaa/ui-components/styles/styled';
import { NewTags } from '@nykaa/product-card-shared/types/tags';
import ProTagSvg from './ProTagSvg';
import CardImg from './Img';
import CardTitle from './Title';
import VariantsCount from './VariantsCount';
import CardPrice from './Price';
import RatingInfo from './RatingInfo';
import SaleTagComponent from './SaleTag';
import {
  PriceReveal,
  StyleProps,
  TagObject,
  Translations,
} from './types';
import { defaultTranslationKeys } from './constants';
import { objectEqualiser } from './helper';
import Offer from './Offer';
import TagsWrapper from './Tags/TagsWrapper';


interface CardProps {
  hasDynamicHeight: boolean;
}

const Wrap = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 32px;
  overflow: hidden;
`;

const CardInfo = styled.a`
  display: block;
  padding-top: ${({ hasDynamicHeight }: CardProps) => (hasDynamicHeight ? '0' : '10px')};
  text-decoration: none;
`;

const Stock = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium}
  background-color: #eee;
  color: #000000;
  position: absolute;
  top: 20%;
  left: 25%;
  padding: 4% 8%;
`;

const Details = styled.div`
  margin-top: 4px;
  padding-left: 15px;
  padding-right: 15px;
  white-space: normal;
`;

const SkuLeft = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  color: #fa6400;
`;

export interface Product {
  name: string;
  productId: string;
  inStock: boolean;
  id: string;
  title: string;
  slug: string;
  parentId: string;
  offersCount: number;
  dynamicTags: Array<string | TagObject>;
  quantity: number;
  variantType: string;
  variantCount: number;
  mrp: number;
  price: number;
  discount: number;
  rating: number;
  ratingCount: number;
  isBackorder :boolean;
  newTags?: NewTags[];
  offer?: string;
  offerColor?: string;
  showOffer?: boolean;
}

export interface ProductCardProps extends StyleProps {
  showProFlag: boolean;
  product: Product;
  handleCardClick?: (slug: string, parentId: string) => void;
  handelTagClick?: () => void;
  imageUrl: string;
  pdpPageUrl: string;
  lazyLoadImage?: boolean;
  hasDynamicHeight?: boolean;
  showReview?: boolean;
  cardHeight?: string;
  cardWidth?: string;
  maxCardHeight?: string;
  plpPriceReveal?: PriceReveal;
  translations?: Translations;
}


const ProductCard: React.SFC<ProductCardProps> = (props: ProductCardProps) => {
  const {
    product,
    showProFlag,
    imageUrl,
    pdpPageUrl,
    lazyLoadImage,
    size,
    hasDynamicHeight = false,
    cardHeight,
    cardWidth,
    showReview = true,
    maxCardHeight,
    plpPriceReveal,
    translations: translationsObj = {},
  } = props;

  const translations = objectEqualiser(translationsObj, defaultTranslationKeys);
  const {
    outOfStock,
    fewLeft,
    quantityLeft,
    variant,
    variants,
    discount: translatedDiscount,
  } = translations;

  const {
    title, offersCount,
    dynamicTags, inStock, quantity, variantCount,
    mrp, price, discount, rating, ratingCount, isBackorder, newTags,
    variantType,
    offer = '',
    offerColor = '',
    showOffer = false,
  } = product;
  let tags = dynamicTags;
  const showMultipleTag = Array.isArray(newTags);
  if (showMultipleTag) {
    tags = newTags.map((tag: NewTags) => tag.title);
  }
  let skuLeft = '';

  if ((quantity > 0) && !isBackorder) {
    if (quantity < 10) {
      const quantityLeftTranslation = `${quantity} ${quantityLeft}`;
      skuLeft = quantityLeftTranslation;
    } else if (quantity < 100) {
      skuLeft = fewLeft;
    }
  }
  let customVariant = '';
  if (variantCount && variantType) {
    customVariant = variantCount > 1 ? variants || `${variantType}s` : variant || variantType;
  }
  const showSaleTag = plpPriceReveal && (plpPriceReveal.status);
  const showFewLeft = ((!offer || !showOffer) && skuLeft);
  return (
    <Wrap>
      {
        (showProFlag) && (
          <ProTagSvg />
        )
      }
      {showSaleTag && <SaleTagComponent plpPriceReveal={plpPriceReveal} />}
      {
        (!showSaleTag) && (
          <TagsWrapper
            showMultipleTag={showMultipleTag}
            tags={tags}
            newTags={newTags}
            newTagsStyle={newTags}
            offersCount={offersCount}
          />
        )
      }
      <CardInfo hasDynamicHeight={hasDynamicHeight} href={pdpPageUrl}>
        <CardImg
          src={imageUrl}
          alt={title}
          inStock={inStock}
          isLazy={lazyLoadImage}
          hasDynamicHeight={hasDynamicHeight}
          cardHeight={cardHeight}
          cardWidth={cardWidth}
          maxCardHeight={maxCardHeight}
        />
        {
          (!inStock) && (
          <Stock>
            { outOfStock }
          </Stock>
          )
        }
        <Details>
          <CardTitle title={title} elipsTitleLength={57} />
          <VariantsCount
            variantType={customVariant}
            variantCount={variantCount}
            isTranslated={Boolean(customVariant)}
          />
          {(!hasDynamicHeight || showReview) && (
            <RatingInfo
              rating={rating}
              ratingCount={ratingCount}
            />
          )}
          <CardPrice
            mrp={mrp}
            price={price}
            discount={discount}
            size={size}
            discountTranslation={translatedDiscount}
          />
          {showOffer && (
            <Offer
              message={offer}
              color={offerColor}
            />
          )}
          {showFewLeft && (
            <SkuLeft>
              {skuLeft}
            </SkuLeft>
          )}
        </Details>
      </CardInfo>
    </Wrap>
  );
};
export default ProductCard;
