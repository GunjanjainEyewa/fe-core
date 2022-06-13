import React from 'react';
import ShadePalette from '../src/components/ShadePalette'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export default {
  title: 'variant Selector/shared/shade',
  component: ShadePalette,
  args: {
    name:'Maybelline New York Fit Me Matte+Poreless Liquid Foundation With Pump - 238 Rich Tan',
    image: 'https://images-static.nykaa.com/media/icons/6902395742357_238richtan.jpg',
    isSelected: true,
    isOutOfStock: false,
    isLazyLoad: false,
  },
  argTypes: {
      onClick: { action: 'clicked'},
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export const shadePalette = (props) => <ShadePalette {...props} />
