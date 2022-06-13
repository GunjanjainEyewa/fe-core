import React from 'react';
import styled from '@eyewa/ui-components/styles/styled';
import getFontData from './helper';
import { defaultTranslationKeys, FONT_NORMAL } from '../constants';
import {
  Props,
  StyleProps,
} from '../types';


const PriceInfo = styled.div<Props>`
  line-height: 20px;
  margin-top: 4px;
  ${(props) => getFontData(props)}
`;

const MrpInfo = styled.span<Props>`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.textSecondary};
  ${(props) => getFontData(props, FONT_NORMAL)};
  span {
    text-decoration-line: line-through;
    padding-left: 3px;
    ${(props) => getFontData(props, FONT_NORMAL)};
  }
`;

const OfferPrice = styled.span<Props>`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${(props) => getFontData(props)};
`;

const Discount = styled.span<Props>`
  color: ${({ theme }) => theme.colors.positive};
  margin-left: 4px;
  padding-left: 4px;
  border-left: 1px solid #eeeeee;
  ${(props) => getFontData(props, FONT_NORMAL)};
`;

interface CardPriceProps extends StyleProps {
  mrp: number;
  price: number;
  discount: number;
  discountTranslation?: string;
}

const CardPrice: React.FC<CardPriceProps> = ({
  mrp, price, discount, size, discountTranslation = defaultTranslationKeys.discount,
}: CardPriceProps) => {
  const translation = `${discount}% ${discountTranslation}`;
  if (price && (mrp > price)) {
    return (
      <PriceInfo size={size}>
        <MrpInfo size={size}>
          MRP:
          <span>
            {`₹${mrp}`}
          </span>
        </MrpInfo>
        <OfferPrice size={size}>
          {`₹${price}`}
        </OfferPrice>
        {(discount > 0) && (
        <Discount size={size}>
          {translation}
        </Discount>
        )}
      </PriceInfo>
    );
  }
  return (
    <>
      <MrpInfo size={size}>
        MRP:
      </MrpInfo>
      <OfferPrice size={size}>
        {`₹${mrp}`}
      </OfferPrice>
    </>
  );
};

export default CardPrice;
