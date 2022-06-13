import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import Button, { KIND, SHAPE, SIZE } from '@nykaa/ui-components/Button';
import BenefitsCard from '../BenfitsCard';
import ArrowIcon from '../../Icons/ArrowIcon';
import SilverIcon1 from '../../Icons/SilverRewardMultiplierIcon';
import SilverIcon2 from '../../Icons/SilverWeeklyDiscountsIcon';
import SilverIcon3 from '../../Icons/SilverAccessIcon';
import GoldIcon1 from '../../Icons/GoldRewardMultiplierIcon';
import GoldIcon2 from '../../Icons/GoldBirthdaySurpriseIcon';
import GoldIcon3 from '../../Icons/GoldFreeShippingIcon';
import PlatinumIcon1 from '../../Icons/PlatinumRewardMultiplierIcon';
import PlatinumIcon2 from '../../Icons/PlatinumBirthdaySurpriseIcon';
import PlatinumIcon3 from '../../Icons/PlatinumFreeShippingIcon';

const Title = styled.div`
  ${({ theme }) => theme.typography.titleMedium}; 
  text-align: center;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  text-align: center;
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
`;

const CardsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.spacing80} 0 1.375rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    &::before {
      background-color: transparent;
    }
  }
`;

const BenefitsButton = styled(Button)`
  &:active::before, &:hover::before {
    background: none;
  }
`;

const ButtonArrow = styled.i`
margin-left: ${({ theme }) => theme.spacing.spacing60};
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

interface ExclusiveBenefitsProps {
  tierName: string;
  handleClick: () => void;
}
const ExclusiveBenefits = (props: ExclusiveBenefitsProps) => {
  const { tierName, handleClick } = props;
  const benefitsCards = [];
  switch (tierName) {
    case 'silver':
      benefitsCards.push(
        {
          icon: <SilverIcon1 />,
          text: 'Reward Points Multiplier',
          tierName: 'silver',
        },
        {
          icon: <SilverIcon2 />,
          text: 'Weekly Brand Offers',
          tierName: 'silver',
        },
        {
          icon: <SilverIcon3 />,
          text: 'Beauty Bars & Masterclass',
          tierName: 'silver',
        },
      );
      break;
    case 'gold':
      benefitsCards.push(
        {
          icon: <GoldIcon1 />,
          text: 'Reward Points Multiplier',
          tierName: 'gold',
        },
        {
          icon: <GoldIcon2 />,
          text: 'Refer & Earn Rewards Points',
          tierName: 'gold',
        },
        {
          icon: <GoldIcon3 />,
          text: 'Free Shipping 4 times/year',
          tierName: 'gold',
        },
      );
      break;
    case 'platinum':
      benefitsCards.push(
        {
          icon: <PlatinumIcon1 />,
          text: 'Reward Points Multiplier',
          tierName: 'platinum',
        },
        {
          icon: <PlatinumIcon2 />,
          text: 'Refer & Earn Rewards Points',
          tierName: 'platinum',
        },
        {
          icon: <PlatinumIcon3 />,
          text: 'Free Shipping 4 times/year',
          tierName: 'platinum',
        },
      );
      break;
    default:
      break;
  }
  return (
    <>
      <Title>Enjoy Exclusive Benefits</Title>
      <SubTitle>As a Prive/ Gold/ Platinum member</SubTitle>
      <CardsWrap>
        {benefitsCards.map((benefit) => (
          <BenefitsCard
            icon={benefit.icon}
            text={benefit.text}
            tierName={benefit.tierName}
          />
        ))}
      </CardsWrap>
      <ButtonWrap>
        <BenefitsButton
          kind={KIND.tertiary}
          size={SIZE.small}
          shape={SHAPE.default}
          onClick={() => handleClick()}
        >
          View All Benefits
          <ButtonArrow>
            <ArrowIcon />
          </ButtonArrow>
        </BenefitsButton>
      </ButtonWrap>
    </>
  );
};

export default ExclusiveBenefits;
