import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import ImageGrid, { ImageItem } from '../src/mobile';
import ThemeInterface from './decorators';

const imageGridItems: ImageItem[] = [
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2145',
  },
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',

    id: '2146',
  },
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2147',
  },
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2148',
  },
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2149',
  },
];

export default {
  title: 'ImageGrid',
  component: ImageGrid,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
  decorators: [ThemeInterface],
};

export const SimpleImageGrid = () => (
  <ImageGrid imageList={imageGridItems} />
);

export const ImageGridWithHandler = () => (
  <ImageGrid imageList={imageGridItems} handleClick={action('click-on-image-item')} />
);
