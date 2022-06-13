import React, { useState } from 'react';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import SummaryLayout from '../src/components/SummaryLayout';
import TierBar from '../src/components/TierBar';
import JourneyCard from '../src/components/JourneyCard';
import WorkCard from '../src/components/WorkCard';
import EasyImage from '../src/Icons/EasyJoin';
import EarnPointCard from '../src/components/EarnPointsCard';
import BenefitsCard from '../src/components/BenfitsCard';
import ExclusiveBenefits from '../src/components/ExclusiveBenefits';
import { normalColors, goldColors, platinumColors } from '../constants/colorTokens';

export default {
  title: 'Prive UI Components',
  component: SummaryLayout,
  parameters: {
    viewport: {
      viewports: DEFAULT_VIEWPORT,
      defaultViewport: 'iphone6',
    },
  },
}

const tierArray: TierProps[] = [
  {
    amount: 1500,
    name: 'silver',
    textShown: 'Normal',
    color: [normalColors.tierBarFillColor1, normalColors.tierBarFillColor2],
    subText: '@ ₹1500',
  },
  {
    amount: 5000,
    name: 'gold',
    textShown: 'Gold',
    color: [goldColors.tierBarFillColor1, goldColors.tierBarFillColor2],
    subText: '@ ₹5000',
  },
  {
    amount: 15000,
    name: 'platinum',
    textShown: 'Platinum',
    color: [platinumColors.tierBarFillColor1, platinumColors.tierBarFillColor2],
    subText: '@ ₹15000',
  },
];

export const SummaryView = (args) => {
  return (
    <SummaryLayout
      isCollapsible={args.isCollapsible}
      defaultExpanded={args.defaultExpanded}
      title={args.title}
      description={args.description}
    />
  )
}

SummaryView.args = {
  isCollapsible: true,
  defaultExpanded: false,
  title: 'What is Nykaa Prive?',
  description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
};


export const TierView = (args) => {
  return (
    <TierBar {...args}/>
)
}
TierView.args = {
  tiers: tierArray,
  viewOnly: false,
  currentAmount: 2000,
  maxAmount: 15000,
  color: ['#680435', '#EA7487']
};


export const JourneyView = (args) => {
  return (
    <JourneyCard
      {...args}
    />
  )
}

JourneyView.args = {
  deviceType: 'web',
  tierName: 'gold',
  expiryDate: '24th Oct 2022',
  upgradeAmount: 7000,
  retainAmount: 0,
  spentAmount: 10000,
  silverTierAmount: 1500,
  goldTierAmount: 5000,
  platinumTierAmount: 15000,
};


export const WorkCardView = () => {
  return (
    <WorkCard
      icon={EasyImage}
      title='Easy to Join'
      description='Shop for ₹1,500 in a year & become a Prive member'
    />
  )
}

export const EarnPointView = (props) => {
  return (
    <EarnPointCard {...props}>
      <SummaryLayout
        isCollapsible={false}
        defaultExpanded
        title={'1000 Points for every product you review'}
        description="Customers who are signed in can leave a review and earn 100 points once verified by Team Nykaa."
      />
    </EarnPointCard>
  );
};

EarnPointView.args = {
  title: 'Review & Rate',
  summary: 'Post pictures, give reviews & rate your purchase',
  isCollapsible: true,
  earnBgUrl: null,
  reviewUrl: <EasyImage/>,
};

export const BenefitsCardView = (args) => {
  return (
      <BenefitsCard
          {...args}
      />
  )
}
BenefitsCardView.args = {
  text: 'Reward Points Multiplier',
  tierName: 'silver',
  icon: <EasyImage />,
};

export const ExclusiveBenefitsView = () => {
    return (
        <ExclusiveBenefits
          tierName='silver'    
          handleClick = {() => {
          console.log('COLLECT clicked @@CouponTile');
          }}
        />
    )
}
