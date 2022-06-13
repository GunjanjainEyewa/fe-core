import React from 'react';
import FewLeft from '../src/components/FewLeft';
import SoldOut from '../src/components/SoldOut';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export default {
  title: 'variant Selector/shared',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export const fewLeft = () => <FewLeft />
export const soldOut = () => <SoldOut />
