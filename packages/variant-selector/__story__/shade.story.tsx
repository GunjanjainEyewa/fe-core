import React from 'react';
import Shades from '../src/Shades'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

import {
    shadeVariant,
    currentShadeVariant
} from './mock';

export default {
  title: 'Variant Selector/Mobile/ShadeSelector',
  component: Shades,
  args: {
    variants: shadeVariant,
    currentVariant: currentShadeVariant,
    isVariantChart: true,
    isError: false,
    isAnimation: false
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

export const shadeSelector = (props) => <Shades {...props} />
export const shadeSelectorWithoutCurrentVariant = (props) => <Shades {...props} currentVariant={null} />

