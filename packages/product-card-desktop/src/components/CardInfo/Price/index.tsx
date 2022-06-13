import React from 'react';
import { styled } from '@eyewa/ui-components';
import { FONT_NORMAL } from '@eyewa/product-card-shared/constant/cardInfo';
import { getFontData } from '@eyewa/product-card-shared/utils/cardInfo';
import { Props, StyleProps } from '@eyewa/product-card-shared/types/cardInfo';

const PriceInfo = styled.div<Props>`
  line-height: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing60};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
`;

const MrpInfo = styled.span<Props>`
  margin-right: ${({ theme }) => theme.spacing.spacing20};
  color: ${({ theme }) => theme.colors.textSecondary};
  ${(props) => getFontData(props, FONT_NORMAL)}
  span {
    text-decoration-line: line-through;
    padding-left: ${({ theme }) => theme.spacing.spacing20};
    ${(props) => getFontData(props, FONT_NORMAL)};
  }
`;

const OfferPrice = styled.span<Props>`
  color: ${({ theme }) => theme?.colors?.textPrimary};
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
}

const CardPrice: React.FC<CardPriceProps> = ({
  mrp, price, discount, size,
}: CardPriceProps) => {
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
          {`${discount}% Off`}
        </Discount>
        )}
      </PriceInfo>
    );
  }
  return (
    <PriceInfo size={size}>
      <MrpInfo size={size}>
        MRP:
      </MrpInfo>
      <OfferPrice size={size}>
        {`₹${mrp}`}
      </OfferPrice>
    </PriceInfo>
  );
};

export default CardPrice;
