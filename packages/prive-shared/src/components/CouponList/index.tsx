import React, { FC } from 'react';
import { styled } from '@nykaa/ui-components';
import CouponTile from '../CouponTile';
import { goldColors, normalColors, platinumColors } from '../../constants/colorTokens';

const couponColorsMap: any = {
  silver: {
    ticketBgColor: normalColors.couponTicketBgColor,
    ticketBorderColor: normalColors.couponTicketBorderColor,
  },
  gold: {
    ticketBgColor: goldColors.couponTicketBgColor,
    ticketBorderColor: goldColors.couponTicketBorderColor,
  },
  platinum: {
    ticketBgColor: platinumColors.couponTicketBgColor,
    ticketBorderColor: platinumColors.couponTicketBorderColor,
  },
};

type ListDataType = {
  couponId:number;
  offerId:number;
  title: string;
  description: string;
  couponCode: string;
  imageUrl: string;
  toDate: string;
};

type CouponListProps = {
  tier: string;
  couponList: Array<ListDataType>;
  onCouponCardClick?: (args0: any) => void;
  collectCb: (args0: any) => any;
};

const Wrapper = styled.div`
  width: auto;
  padding: ${({ theme }) => theme.spacing.spacing80}
    ${({ theme }) => theme.spacing.spacing120};
`;

const CouponCnt = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing80};
  &::first-child {
    margin-top: 0;
  }
`;

const CouponList: FC<CouponListProps> = ({
  tier,
  couponList,
  onCouponCardClick,
  collectCb,
}: CouponListProps) => (
  <Wrapper>
    {couponList.map((couponObj: ListDataType, id:number) => (
      <CouponCnt
        id={id.toString()}
        onClick={() => {
          if (onCouponCardClick) {
            onCouponCardClick({
              couponId: couponObj.couponId,
              offerId: couponObj.offerId,
            });
          }
        }}
      >
        <CouponTile
          title={couponObj.title}
          info={couponObj.description}
          brandIcon={couponObj.imageUrl}
          couponCode={couponObj.couponCode}
          validity={couponObj.toDate}
          ticketBgColor={couponColorsMap[tier].ticketBgColor}
          ticketBorderColor={couponColorsMap[tier].ticketBorderColor}
          collectCb={() => {
            collectCb(couponObj);
          }}
        />
      </CouponCnt>
    ))}
  </Wrapper>
);

export default CouponList;
