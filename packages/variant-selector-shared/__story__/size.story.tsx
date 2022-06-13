import React from 'react';
import SizeChip from '../src/components/SizeChip';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export default {
  title: 'variant Selector/shared/size',
  component: SizeChip,
  args: {
    label:'UK 10',
    isSelected: true,
    isOutOfStock: false,
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

export const sizeChip = (props) => <SizeChip {...props} />
