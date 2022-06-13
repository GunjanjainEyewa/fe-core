import React from 'react';
import { styled } from '@eyewa/ui-components';
import { VariantInfoProps } from '@eyewa/product-card-shared/types/variants';
import CardPrice from '../../CardInfo/Price';


const ShadeDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VariantName = styled.h3`
  margin: ${({ theme }) => theme.spacing.spacing40} 0;
  text-align: center;
  ${({ theme }) => theme.typography.subTitleMedium};
`;

const OutOfStock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Detail = ({
  variantName,
  isVariantOutOfStock,
  price,
  mrp,
  discount,
}: VariantInfoProps) => (
  <ShadeDetail>
    <VariantName>{variantName}</VariantName>
    {isVariantOutOfStock && <OutOfStock>sold out</OutOfStock>}
    <CardPrice size="compact" mrp={mrp} price={price} discount={discount} />
  </ShadeDetail>
);

export default Detail;
