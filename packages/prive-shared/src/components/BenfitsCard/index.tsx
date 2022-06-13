import React, { FC } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { tierEarnBgUrlMap } from '../../constants';
import { getImgElementFromUrl } from '../../utils';

const BenefitsCardWrapper = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.08)};
  border-radius: ${({ theme }) => theme.borders.radius30};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.spacing80};
  position: relative;
  width: 100px;
`;

const BackgroundImage = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.92)};
`;

const RewardIcon = styled.i`
  margin-left: -5px;
`;

type BenefitsCardProps = {
  icon: JSX.Element;
  text: string;
  tierName: string;
};

const BenefitsCard: FC<BenefitsCardProps> = ({ icon, text, tierName }: BenefitsCardProps) => {
  let bgImg;
  switch (tierName) {
    case 'silver':
      bgImg = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.silver.small, altText: 'earn-bg-image' });
      break;
    case 'gold':
      bgImg = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.gold.small, altText: 'earn-bg-image' });
      break;
    case 'platinum':
      bgImg = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.platinum.small, altText: 'earn-bg-image' });
      break;
    default: break;
  }
  return (
    <BenefitsCardWrapper>
      <BackgroundImage>{bgImg}</BackgroundImage>
      <RewardIcon>{icon}</RewardIcon>
      <CardTitle>{text}</CardTitle>
    </BenefitsCardWrapper>
  );
};

export default BenefitsCard;
