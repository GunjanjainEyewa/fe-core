import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { styled } from '@eyewa/ui-components';
import ProductCarousel from '../src';


export interface ListStyle {
  listWidth: number;
  forwardWidth: number;
}
const Wrapper = styled.div`
  width: 1100px;
`;
const ProductCard = styled.div`
  min-width: 250px;
  min-height: 400px;
  border: 1px solid black;
  margin: 12px;
`;
export default {
  title: 'Product Card Carousel',
  component: ProductCarousel,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};
const arrayList = [1,2,3,4,5,6,7];
const ListItem = <>
  {
    arrayList.map(ele => <ProductCard>{ele}</ProductCard>)
  }
</>;

export const CouponTile = () => {
  return (
    <Wrapper>
      <ProductCarousel
        ListItem={ListItem}
        numberOfCardToDisplay={4}
        cardWidth={274}
      />
    </Wrapper>
  );
}

export const CouponTileWithInfinite = () => {
  return (
    <Wrapper>
      <ProductCarousel
        ListItem={ListItem}
        numberOfCardToDisplay={4}
        cardWidth={274}
        isInfiniteEnable
      />
    </Wrapper>
  );
}
