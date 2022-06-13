import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { ELIPS_TITLE_LENGTH } from '@eyewa/product-card-shared/constant/cardInfo';
import { CardDetailProps } from '@eyewa/product-card-shared/types/cardInfo';
import CardImg from './Img';
import CardTitle from './Title';
import VariantsCount from './VariantsCount';
import CardPrice from './Price';
import RatingInfo from './RatingInfo';
import TagsComponent from './Tags';
import SaleTagComponent from './SaleTag';
import Offer from './Offer';


const Wrapper = styled.div`
  padding: 30px 10.18%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const CardInfo = styled.a`
  display: block;
  padding-top: 0;
  text-decoration: none;
`;

const Stock = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.8)};
  background-color: ${({ theme }) => theme.colors.surface30};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 126px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.radius20};
`;

const Details = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const VariantWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;


const CardDetail = ({
  product, imageUrl, lazyLoadImage, pdpPageUrl, size,
  plpPriceReveal,
}: CardDetailProps) => {
  const {
    title, offersCount,
    dynamicTags, inStock, variantType, variantCount,
    mrp, discount, newTags, rating, ratingCount, offerPrice, price,
    offer = '', showOffer = false, offerColor = '',
  } = product;
  const isOfferVisible = (offer && showOffer);
  const showSaleTag = plpPriceReveal && (plpPriceReveal.status);
  return (
    <Wrapper>
      {showSaleTag && <SaleTagComponent plpPriceReveal={plpPriceReveal} />}
      {!showSaleTag && (
      <TagsComponent
        tags={dynamicTags}
        offersCount={offersCount}
        newTags={newTags}
      />
      )}
      <CardInfo href={pdpPageUrl} target="_blank" rel="noopener noreferrer">
        <CardImg
          src={imageUrl}
          alt={title}
          isLazy={lazyLoadImage}
        />
        {
          (!inStock) && (
          <Stock>
            Out Of Stock
          </Stock>
          )
        }
        <Details>
          <CardTitle title={title} elipsTitleLength={ELIPS_TITLE_LENGTH} />
          <CardPrice mrp={mrp} price={offerPrice || price} discount={discount} size={size} />
          {(isOfferVisible) && <Offer message={offer} color={offerColor} /> }
          <RatingInfo
            rating={rating}
            ratingCount={ratingCount}
          />
          <VariantWrapper>
            <VariantsCount variantType={variantType} variantCount={variantCount} />
          </VariantWrapper>
        </Details>
      </CardInfo>
    </Wrapper>
  );
};

export default CardDetail;
