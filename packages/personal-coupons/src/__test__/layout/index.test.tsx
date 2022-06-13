import 'jsdom-global/register'; // for providing
import React from 'react';
import { shallow } from 'enzyme';
import CouponsView from '../../layout';


const couponList = [
    {
      id:1234,
      title:"test",
      couponCode: "NYKdeccosbr10",
      description: "Additional 10% OFF on your next Kay Beauty purchase!",
    },
    {
      title:"test",
      id:1234,
      couponCode: "NYKdeccosbr20",
      description: "Additional 30% OFF on your next Kay Beauty purchase!",
    },
    {
      title:"test",
      id:1234,
      couponCode: "NYKdeccosbr30",
      description: "Additional 30% OFF on your next Kay Beauty purchase!",
    },
];
const couponListWith1EmptyCoupon = [
  {
    title:"test",
    id:1234,
    couponCode: null,
    description: "Additional 10% OFF on your next Kay Beauty purchase!",
  },
  {
    title:"test",
    id:1234,
    couponCode: "NYKdeccosbr20",
    description: "Additional 30% OFF on your next Kay Beauty purchase!",
  },
  {
    title:"test",
    id:1234,
    couponCode: "NYKdeccosbr30",
    description: "Additional 30% OFF on your next Kay Beauty purchase!",
  },
];

describe('Coupon Tile Container', () => {
  it('should render all 3 child in coupon list', () => {
    const wrapper = shallow(
      <CouponsView
        productId="test"
        couponList={couponList}
      />
    );
    expect(wrapper.find('Styled(div)').first().props().children).toHaveLength(3);
  });
  it ('should not contain any child if coupon list is empty', () => {
    const wrapper = shallow(
      <CouponsView
        productId="test"
        couponList={null}
      />
    );
    expect(wrapper.find('Styled(div)').first().props().children).toBeNull();
  })
  it('should render only 2 child when 3 coupons provided but 1 coupon has couponCode null', () => {
    const wrapper = shallow(
      <CouponsView
        productId="test"
        couponList={couponListWith1EmptyCoupon}
      />
    );
    expect(wrapper.find('Styled(div)').first().props().children).toContain(null);
  });
})
