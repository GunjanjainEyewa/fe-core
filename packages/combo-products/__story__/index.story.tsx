import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import TileView from '../src/components/ProductTile';
import ComboList from '../src/layout';


const combolist = [
  {
    productId: 1234,
    customTag: 'BestSeller',
    productIcon: "https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg",
    productTitle: "Herbal Essences Argan Oil",
    ratingCount: 45674,
    avgRating: 2.3,
    mrp: 740,
    price: 500,
    discount: 30,
    inStock: true,
  },
  {
    productId: 5678,
    customTag: 'Offer',
    productIcon: "https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg",
    productTitle: "Herbal Essences Argan Oil Shampoo For Frizz - No Colourants",
    ratingCount: 2345,
    avgRating: 3.4,
    mrp: 740,
    price: 500,
    discount: 30,
    inStock: true,
  },
  {
    productId: 5678,
    customTag: 'featured',
    productIcon: "https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg",
    productTitle: "Herbal Essences Argan Oil Shampoo For Frizz - No Colourants",
    ratingCount: 2345,
    avgRating: 3.4,
    mrp: 740,
    price: 500,
    discount: 30,
    inStock: true,
  }
];
const handleClick = ({ productId, productTitle }: any) => {
  console.log(productId, productTitle);
}
export default {
  title: 'comboProduct',
  component: TileView,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export const ProductTile = () => (
  <TileView
    productId={1234}
    customTag={'BestSeller'}
    productIcon="https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg"
    productTitle="Herbal Essences Argan Oil Shampoo For Frizz - No Colourants organic Shampoo"
    ratingCount={566}
    avgRating={4.6}
    mrp={500}
    price={400}
    discount={20.081}
    handleClick={handleClick}
  />
);
export const comboListView = () => {
  return ( <ComboList
    productList={combolist}
    minTile={1}
    maxTile={3}
    handleClick={handleClick}
  />);
};

export const comboListViewWithText = () => {
  return ( <ComboList
    productList={combolist}
    minTile={1}
    maxTile={5}
    showLessText='less'
    showMoreText='more'
    handleClick={handleClick}
  />);
};