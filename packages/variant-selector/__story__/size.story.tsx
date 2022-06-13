import React from 'react';
import Sizes from '../src/Sizes';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

import {
    sizeVariant,
    currentVariantSize,
} from './mock'

export default {
  title: 'Variant Selector/Mobile',
  component: Sizes,
  args: {
    variants: sizeVariant,
    currentVariant: currentVariantSize,
    isVariantChart: true,
    isError: false,
    isAnimation: false,
  },
  argTypes: {
    onVariantClick: { action: 'onVariantClick clicked'},
    onVariantChartClick: {action:'onVariantChartClick clicked'},
    closeError: {action:'closeError called'},
    closeAnimation: {action:'closeAnimation called'}
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export const sizeSelector = (props) => <Sizes {...props} />
