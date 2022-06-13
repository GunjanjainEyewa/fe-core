import React, { memo } from 'react';

import MultiTags from './components/Tags';
import Title from './components/Title';
import Rating from './components/Rating';
import PriceWithDiscount from './components/Price';
import Section from '../Section';

import { PrimaryInfo as PrimaryData } from '../../types/transformer';

export interface Props {
  data: PrimaryData;
}

function PrimaryInfo({ data }: Props) {
  if (!data) {
    return null;
  }

  const {
    tags,
    title,
    subTitle,
    brandActionUrl,
    rating,
    reviewCount,
    discount,
    currency,
    discountedPrice,
    price,
    showStarActive,
    badge,
  } = data;

  return (
    <Section>
      <MultiTags tagData={tags} badge={badge} />
      <Title title={title} subTitle={subTitle} actionUrl={brandActionUrl} />
      {rating > 0 && (
        <Rating rating={rating} reviewCount={reviewCount} showStarActive={showStarActive} />
      )}
      <PriceWithDiscount
        discount={discount}
        currency={currency}
        discountedPrice={discountedPrice}
        price={price}
      />
    </Section>
  );
}

export default memo(PrimaryInfo);
