import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import EarnPointCard from '../src/components/EarnPoints';

export default {
  title: 'PriveMobileComponents',
  component: EarnPointCard,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};


export const EarnPointView = (props) => <EarnPointCard {...props} />;

EarnPointView.args = {
  tierName: 'silver',
  currentAmount: 2000,
  maxAmount: 5000,
  handleShopClick: () => {
    console.log('LOGIN clicked @@WelcomeBanner');
  }, 
  handleBdClick: () => {
    console.log('LOGIN clicked @@WelcomeBanner');
  },
  birthdayCTA: "Enter Birthday to unlock",
  birthdayCTADisabled: false,
  handleReviewClick: () => {},
  defaultExpanded: false,
  goldTierAmount:5000,
  platinumTierAmount:15000,
  silverTierAmount: 1500,
  defaultShopExpanded: true,
};
