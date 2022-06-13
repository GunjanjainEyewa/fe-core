import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import TileView from '../src/components/CouponTile';
import CouponsView from '../src/layout';


const cuponList = [
  {
    id: 1234,
    title: 'test',
    couponCode: "NYKdeccosbr10NYKdeccosbr10",
    description: "Additional 10% OFF on your next Kay Hell Beauty purchase! extra Additional 10% OFF on your next Kay Beauty purchase!",
  },
  {
    id: 1234,
    title: 'test',
    couponCode: "NYKdeccosbr20",
    description: "Additional 30% OFF on your next Kay Beauty purchase!",
  },
  {
    id: 1234,
    title: 'test',
    couponCode: "NYKdeccosbr30",
    description: "HDFC bank discount",
  },
]
export default {
  title: 'Personal Coupon',
  component: TileView,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

const cuponListWithSingleCoupon = [
  {
    id: 1234,
    title: 'test',
    couponCode: "NYKdeccosbr10",
    description: "Additional 10% OFF on your next Kay Hell Beauty purchase! extra Additional 10% OFF on",
  }
];
export const CouponTile = () => (
  <TileView
    productId="test"
    id={1234}
    couponCode="NYKdeccosbr20"
    description="Additional 10% OFF on your next Kay Beauty purchase! Extra Additional 10% OFF on your next Kay Beauty purchase!"
    snackBarCallBack={() => {action('coupon_copied')}}
  />
);

export const CouponsList = () => (
  <CouponsView
    productId="Test"
    couponList={cuponList}
    snackBarCallBack={() => {action('coupon_copied')}}
  />
);

export const CouponsListWithsingleTile = () => (
  <CouponsView
    productId="Test"
    couponList={cuponListWithSingleCoupon}
    snackBarCallBack={() => {action('coupon_copied')}}
  />
);
