import React from 'react';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { styled } from '@eyewa/ui-components';
import Review from './Review';
import Rewards from './Rewards';


const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing80} 0 ${({ theme }) => theme.spacing.spacing40};
  border: 0.5px solid ${(hexToRgb('#FFEBEE', 0.4))};
  border-radius: ${({ theme }) => theme.borders.radius30}; 
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 0 1.25rem 0.375rem;
  width: 100%;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.92)};
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};
`;

const Desc = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
`;

interface EarnPointProps {
  tierName: string;
  maxAmount: number;
  currentAmount: number;
  birthdayCTA: string;
  birthdayCTADisabled: boolean;
  handleBdClick: () => void;
  handleShopClick: () => void;
  handleReviewClick: () => void;
  defaultExpanded: boolean;
  goldTierAmount: number;
  platinumTierAmount: number;
  silverTierAmount: number;
  defaultShopExpanded?: boolean;
}

const EarnPoints = (props: EarnPointProps) => {
  const {
    tierName, currentAmount, maxAmount,
    handleShopClick, handleBdClick, birthdayCTA,
    handleReviewClick,
    birthdayCTADisabled, defaultExpanded,
    goldTierAmount,
    platinumTierAmount,
    silverTierAmount,
    defaultShopExpanded,
  } = props;
  return (
    <Wrapper>
      <Content>
        <Title>How to earn points</Title>
        <Desc>Earn 1 Reward Point for every 1 ₹ spent on any Nykaa app </Desc>
      </Content>
      <Rewards
        tierName={tierName}
        handleShopClick={handleShopClick}
        handleBdClick={handleBdClick}
        birthdayCTA={birthdayCTA}
        birthdayCTADisabled={birthdayCTADisabled}
        currentAmount={currentAmount}
        maxAmount={maxAmount}
        goldTierAmount={goldTierAmount}
        platinumTierAmount={platinumTierAmount}
        silverTierAmount={silverTierAmount}
        defaultExpanded={defaultShopExpanded}
      />
      <Review
        tierName={tierName}
        handleReviewClick={handleReviewClick}
        defaultExpanded={defaultExpanded}
      />
    </Wrapper>
  );
};

export default EarnPoints;
