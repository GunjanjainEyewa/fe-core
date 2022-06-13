import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import RatingInfo from '@eyewa/product-card/RatingInfo';
import Price from '@eyewa/product-card/Price';
import { scaleImageInUri } from '@eyewa/utils/image';
import { Product } from '../../types';
import { SMALL } from '../../constants';


const Info = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => hexToRgb(theme.colors.state, 0.2)};
  background-color: white;
  margin-bottom: 10px;
  cursor: pointer;
  overflow: hidden;
`;
const ImageDesc = styled.div`
  padding: 10px;
  height: 80px;
  display: flex;
  flex: 0 0 80px;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 5px;
    max-width: 45px;
    max-height: 45px;
  }
`;
const Desc = styled.div`
  padding: 10px;
`;
// Replace with new token
const CustomTag = styled.div`
  text-transform: uppercase;
  ${({ theme }) => theme.typography.type101};
  line-height: 15px;
  letter-spacing: 0.5px;
  &.featured {
    color:  ${({ theme }) => theme.colors.pink500};
  }
  &.offer {
    color: ${({ theme }) => theme.colors.orange500};
  }
  &.new {
    color: ${({ theme }) => theme.colors.blue500};
  }
  &.bestseller {
    color: ${({ theme }) => theme.colors.green500};
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
`;

const TileView = ({
  productId,
  customTag,
  productIcon,
  productTitle,
  ratingCount,
  avgRating,
  mrp,
  price,
  discount,
  handleClick,
  customClass,
}: Product) => (
  <Info
    onClick={() => handleClick({ productId, productTitle })}
    className={customClass}
  >
    <ImageDesc>
      {customTag && (
        <CustomTag className={customTag.toLowerCase()}>{customTag}</CustomTag>
      )}
      <img
        src={scaleImageInUri({ url: productIcon, width: 100, height: 100 })}
        alt={productTitle}
      />
    </ImageDesc>
    <Desc>
      <Title>
        {productTitle}
      </Title>
      <RatingInfo rating={avgRating} ratingCount={ratingCount} />
      <Price
        mrp={mrp}
        price={price}
        discount={discount}
        size={SMALL}
      />
    </Desc>
  </Info>
);

export default TileView;
