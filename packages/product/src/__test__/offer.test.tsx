import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Offer from '../Offer';

const OFFER = 'Upto 50% Off!';
const COLOR = 'green';

const Wrapper = mount(<Offer message={OFFER} color={COLOR} />);
const OfferWrapper = (offerMessage = OFFER, color = '') => {
    return shallow(<Offer message={offerMessage} color={color}/>);
}

describe('Component is Rendering', () => {
    test('With Offer Message', () => {
        expect(Wrapper.contains(OFFER)).toBeTruthy();
    });
    
    test('With provided Color Code', () => {
        const offerNode = Wrapper.getDOMNode()[1];
        expect(getComputedStyle(offerNode).getPropertyValue('color')).toEqual(COLOR);
    });

    test('null in case of no message', () => {
        expect(OfferWrapper('')).toEqual({});
    });

    test('When message type is not Correct', () => {
        expect(OfferWrapper([])).toEqual({});
    });

    test('when color type is incorrect', () => {
        expect(OfferWrapper(OFFER, []).props().children).toContain(OFFER);
    })
});
