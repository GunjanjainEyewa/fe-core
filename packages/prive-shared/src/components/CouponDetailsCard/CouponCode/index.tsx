import React, { FC } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import CopyCodeIcon from '../../../Icons/CopyCodeIcon';
import CouponPercentIcon from '../../../Icons/CouponPercentIcon';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.snow200};
  padding: ${({ theme }) => theme.spacing.spacing40} 1.25rem ${({ theme }) => theme.spacing.spacing40} ${({ theme }) => theme.spacing.spacing80};
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CouponCodeTitle = styled.span`
  ${({ theme }) => theme.typography.titleXSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;

const ShareCnt = styled.div``;

type couponCodeProps = {
  couponCode: string;
  handleShareClick?: () => void;
};

const CouponCode: FC<couponCodeProps> = ({
  couponCode,
  handleShareClick,
}: couponCodeProps) => (
  <Wrapper>
    <TitleWrapper>
      <CouponPercentIcon />
      <CouponCodeTitle>{couponCode}</CouponCodeTitle>
    </TitleWrapper>
    <ShareCnt onClick={handleShareClick}>
      <CopyCodeIcon />
    </ShareCnt>
  </Wrapper>
);

export default CouponCode;
