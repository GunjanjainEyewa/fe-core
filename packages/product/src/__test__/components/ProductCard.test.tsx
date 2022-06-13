import 'jsdom-global/register'; // for providing

import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from '../..';
import Offer from '../../Offer';
import wrapWithTheme from '@eyewa/ui-components/themes/helpers/themeProvider';


let imageUrl = 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/7/773602042951_2.jpg';

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
}

const MockProps = {
    showProFlag: true,
    product: {...product, showOffer: true },
    imageUrl,
    size: 'small',
    pdpPageUrl: '',
};

const MockPropWithMessageEnabled = {
    ...MockProps,
    product: { ...product, quantity: 108, showOffer: true }
}

const MockPropsWithoutShowOffer = {
    ...MockProps,
    product: {...product, showOffer: false },
}

const MockPropsWithShowOffer = {
    ...MockProps,
    product: {...product, showOffer: true },
}

const MockPropsForFewLeft = {
    ...MockProps,
    product: {...product, quantity: 14, showOffer: false },
}

const MockPropsWithEmptyMessage = {
    ...MockProps,
    product: {...product, quantity: 14, showOffer: true, offer: '' },
}

const MockPropsWithDisabledMessage = {
    ...MockProps,
    product: {...product, quantity: 14, showOffer: false, offer: '' },
}

const getWrapper = (mockProps) => {
    return wrapWithTheme(<ProductCard {...mockProps}/>, shallow)
}

describe('Product card renders ', () => {
    test('with Offer in it', () => {
        expect(getWrapper(MockPropWithMessageEnabled).find(Offer)).toHaveLength(1);
    })

    test('without offers', () => {
        expect(getWrapper(MockPropsWithoutShowOffer).find(Offer)).toHaveLength(0);
    })

    test('With Show Left Component', () => {
        expect(getWrapper(MockPropsForFewLeft).contains('Few Left')).toBeTruthy();
    })
        
    test('with Few left when empty string is passed as message', () => {
        expect(getWrapper(MockPropsWithEmptyMessage).contains('Few Left')).toBeTruthy();
    })

    test('with Few left when empty message was passed', () => {
        expect(getWrapper(MockPropsWithoutShowOffer).contains('9 Left!')).toBeTruthy();
    })

    test('with Few left when empty string is passed as message and show offer is disabled', () => {
        expect(getWrapper(MockPropsWithDisabledMessage).contains('Few Left')).toBeTruthy();
    })

});
