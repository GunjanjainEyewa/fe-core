import React, { memo } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import DiscountIcon from './DiscountBadge';
import { inPriceFormat, currencyCode } from '../../../../utils';

const ALL_INCLUSIVE_TEXTS = {
  INCLUSIVE: 'Inclusive of all taxes',
  MRP: 'MRP',
};
interface PriceWithDiscountProps {
  discount?: number;
  currency?: string;
  discountedPrice?: number;
  price?: number;
}

const Currency = styled.span`
  margin-right: ${({ theme }) => theme.spacing.spacing10};
  font-size: inherit;
`;

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing60};
  height: 46px;
`;

const Amount = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.type201};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  margin-bottom: -${({ theme }) => theme.spacing.spacing10};
`;
const Discount = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;
const OriginalPrice = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.36)};
  text-decoration: line-through;
  margin: 0 ${({ theme }) => theme.spacing.spacing40} 0 ${({ theme }) => theme.spacing.spacing20};
`;
const Label = styled.div`
  display: block;
  ${({ theme }) => theme.typography.bodyXSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  margin-top: ${({ theme }) => theme.spacing.spacing20};
`;

function PriceWithDiscount({
  discount = 0,
  currency,
  discountedPrice,
  price,
}: PriceWithDiscountProps) {
  return (
    <Container>
      <Amount>
        <Currency>{currencyCode(currency)}</Currency>
        {inPriceFormat(discountedPrice)}
      </Amount>
      {discount > 0 && (
        <>
          <OriginalPrice>
            {ALL_INCLUSIVE_TEXTS.MRP}
            {' '}
            {currencyCode(currency)}
            {inPriceFormat(price)}
          </OriginalPrice>
          <Discount>
            <DiscountIcon discount={inPriceFormat(discount)} />
          </Discount>
        </>
      )}
      <Label>{ALL_INCLUSIVE_TEXTS.INCLUSIVE}</Label>
    </Container>
  );
}

export default memo(PriceWithDiscount);
