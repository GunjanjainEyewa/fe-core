import 'jsdom-global/register'; // for providing
import React from 'react';
import { shallow } from 'enzyme';
import TileView from '../../components/CouponTile';


describe('Coupon Tile', () => {
  test('parent div should have 2 child after render', () => {
    const wrapper = shallow(
      <TileView
        productId="1234"
        id={1234}
        couponCode="NYKdeccosbr10"
        description="Additional 10% OFF on your next Kay Beauty purchase!"
      />
    );
    expect(wrapper.find('Styled(div)').first().props().children).toHaveLength(2);
  });
  test('span for coupon code should contain a child node when we provide couponcode', () => {
    const wrapper = shallow(
      <TileView
        productId="1234"
        id={1234}
        couponCode="NYKdeccosbr10"
        description="Additional 10% OFF on your next Kay Beauty purchase!"
      />
    );
    expect(wrapper.find('Styled(span)').props().children).toEqual(["Use Code: ", <span className="title">NYKdeccosbr10</span>]);
  });
  test('span for coupon code should not contain any react node when we provide empty string or null or undefined to couponcode', () => {
    const wrapper = shallow(
      <TileView
        productId="1234"
        id={1234}
        couponCode=""
        description="Additional 10% OFF on your next Kay Beauty purchase!"
      />
    );
    expect(wrapper.find('Styled(span)').props().children).toEqual(["Use Code: ", ""]);
  });
})
