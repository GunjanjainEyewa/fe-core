import 'jsdom-global/register'; // for providing

import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from '../../components/CardInfo';
import Offer from '../../components/CardInfo/Offer';


const imageUrl = 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/7/773602042951_2.jpg';

const product = {
  name: 'Liptstick',
  productId: '423423',
  inStock: false,
  id: '4321',
  title: 'Tester Liptsick ',
  slug: 'lipstick',
  parentId: '4321',
  offersCount: 1,
  dynamicTags: ['offer', 'new'],
  quantity: 9,
  variantType: 'shade',
  variantCount: 10,
  mrp: 500,
  price: 343,
  discount: 20,
  rating: 3.5,
  ratingCount: 200,
  isBackorder: false,
  offer: 'Get 70% Off',
};

const MockProps = {
  product,
  imageUrl,
};

const MockPropWithMessageEnabled = {
  ...MockProps,
  product: { ...product, quantity: 108, showOffer: true },
};

const MockPropsWithoutShowOffer = {
  ...MockProps,
  product: { ...product, showOffer: false },
};

const MockPropsWithEmptyMessage = {
  ...MockProps,
  product: { ...product, showOffer: true, offer: '' },
};

const getWrapper = (mockProps) => shallow(<CardDetail {...mockProps} />);

describe('Product card renders ', () => {
  test('with Offer in it', () => {
    expect(getWrapper(MockPropWithMessageEnabled).find(Offer)).toHaveLength(1);
  });

  test('without offers', () => {
    expect(getWrapper(MockPropsWithoutShowOffer).find(Offer)).toHaveLength(0);
  });

  test('without offers when empty message is passed.', () => {
    expect(getWrapper(MockPropsWithEmptyMessage).find(Offer)).toHaveLength(0);
  });
});
