import React from 'react';
import { styled } from '@nykaa/ui-components';
import { pushEvent } from '@nykaa/data-layer/utils';
import TileView from '../components/CouponTile';
import { Coupon } from '../types';


const SCROLL_EVENT = 'couponsScroll';
interface ViewProps {
  couponList: Coupon[];
  productId: string;
  snackBarCallBack: () => void;
}
interface StyleProps {
  hasMultipleCoupon: boolean;
}
const Wrapper = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  width: 100%;
  &::-webkit-scrollbar { 
    display: none;
  }
`;
const Card = styled.div<StyleProps>`
  padding: 10px;
  display: inline-block;
  width: ${({ hasMultipleCoupon }) => (hasMultipleCoupon ? '90%' : '100%')};
`;

const handleScroll = () => {
  pushEvent(SCROLL_EVENT, {});
};
const CouponsView = ({ couponList, productId, snackBarCallBack }: ViewProps) => {
  let hasMultipleCoupon = false;
  if (couponList && couponList.length > 1) {
    hasMultipleCoupon = true;
  }
  return (
    <Wrapper
      onScroll={handleScroll}
    >
      {(couponList && couponList.map((coupon: Coupon) => {
        const { couponCode, description } = coupon;
        if (coupon && couponCode) {
          return (
            <Card
              key={couponCode}
              hasMultipleCoupon={hasMultipleCoupon}
            >
              <TileView
                productId={productId}
                id={coupon.id}
                couponCode={couponCode}
                description={description}
                snackBarCallBack={snackBarCallBack}
              />
            </Card>
          );
        }
        return null;
      }))}
    </Wrapper>
  );
};

export default CouponsView;
