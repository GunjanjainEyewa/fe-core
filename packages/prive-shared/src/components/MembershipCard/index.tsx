import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import NykaaPriveLogo from '../../Icons/NykaaPriveLogo';
import NormalCoin from '../../Icons/NormalCoin';
import GoldCoin from '../../Icons/GoldCoin';
import PlatinumCoin from '../../Icons/PlatinumCoin';
import { tierNames } from '../../constants';
import { normalColors, goldColors, platinumColors } from '../../constants/colorTokens';


const Wrapper = styled.div<{ bgColor: string, boxShadow: string }>`
  background: ${({ bgColor }) => hexToRgb(bgColor, 0.55)};
  border-radius: ${({ theme }) => theme.spacing.spacing60};
  height: 154px;
  padding: 20px;
  margin-top: ${({ theme }) => theme.spacing.spacing80};
  width: 100%;
  box-shadow: ${({ boxShadow }) => boxShadow};
  backdrop-filter: blur(15px);
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Container = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RewardPoints = styled.div`
  ${({ theme }) => theme.typography.titleLarge}
`;
const Header = styled.div`
  display: flex;
`;
const Text = styled.div`
  ${({ theme }) => theme.typography.bodySmall}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  padding-left:7px;
`;
const InfoWrapper = styled.div`
  margin-top: 35px;
`;
const Info = styled.div<{ infoColor: string }>`
  ${({ theme }) => theme.typography.titleSmall};
  color:${({ infoColor }) => infoColor};
  text-transform: capitalize;
`;
const Period = styled.div`
  ${({ theme }) => theme.typography.bodySmall}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
`;

type MembershipCardProps = {
  tierName: string;
  expiryDate: string;
  rewardPoints: number;
  enrollmentDate: string;
};

const MembershipCard = ({
  tierName,
  enrollmentDate,
  expiryDate,
  rewardPoints,
}: MembershipCardProps) => {
  // let rewardCoin = null;
  // let cardBgColor = '';
  // let infoColor = '';
  const getRewardInfo = () => {
    switch (tierName) {
      case tierNames.silver:
        return {
          rewardCoin: <NormalCoin />,
          infoColor: normalColors.memberShipInfoColor,
          cardBgColor: normalColors.memberShipCardBgColor,
          boxShadow: normalColors.memberShipBoxShadow,
        };
      case tierNames.gold:
        return {
          rewardCoin: <GoldCoin />,
          infoColor: goldColors.memberShipInfoColor,
          cardBgColor: goldColors.memberShipCardBgColor,
          boxShadow: goldColors.memberShipBoxShadow,
        };
      case tierNames.platinum:
        return {
          rewardCoin: <PlatinumCoin />,
          infoColor: platinumColors.memberShipInfoColor,
          cardBgColor: platinumColors.memberShipCardBgColor,
          boxShadow: platinumColors.memberShipBoxShadow,
        };
      default:
        return {};
    }
  };
  const updatedInfoColors = getRewardInfo();
  return (
    <Wrapper bgColor={updatedInfoColors.cardBgColor} boxShadow={updatedInfoColors.boxShadow} id="MembershipCard-wrapper">
      <Content>
        <NykaaPriveLogo />
        <Container>
          <Header>
            {updatedInfoColors.rewardCoin}
            <RewardPoints id="MembershipCard-rewardpoints">{rewardPoints}</RewardPoints>
          </Header>
          <Text>Reward Points</Text>
        </Container>
      </Content>
      <InfoWrapper>
        <Info infoColor={updatedInfoColors.infoColor} id="MembershipCard-tier">
          {`${tierNames[tierName]} Membership`}
        </Info>
        <Period id="MembershipCard-tierperiod">{`From ${enrollmentDate} to ${expiryDate}`}</Period>
      </InfoWrapper>
    </Wrapper>
  );
};

export default MembershipCard;
