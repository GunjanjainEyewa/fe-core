import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import LedgerItemComp from '../src/components/LedgerItem';

export default {
  title: 'PriveLedgeredComponents',
  component: LedgerItemComp,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export const LedgerItem = (props) => <LedgerItemComp {...props} />;

LedgerItem.args = {
  title: 'Maybelline New York Color Maybelline New York Color',
  amount: 2000,
  amountColor: '#964D5D',
  domain: 'Endless Aisle',
  isCredit: true,
  multiplier: '1.5',
  reason: 'Purchase',
  date: 'Dec 28, 2021',
  tier: 'gold',
};
