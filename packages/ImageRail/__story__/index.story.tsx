import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import ImageRail, { ImageItem } from '../src/components';


const imageRailItems: ImageItem[] = [
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
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2153',
  },
];

export default {
  title: 'ImageRail',
  component: ImageRail,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};

export const SimpleImageRail = () => (
  <ImageRail
    imageList={imageRailItems}
    handleClick={(itemData) => { alert(itemData.id); }}
    handleShowMore={() => { alert(); }}
    totalImages={9}
  />
);

export const ImageRailUnlimited = () => (
  <ImageRail
    imageList={imageRailItems}
    handleClick={action('image-rail-item-click')}
    handleShowMore={action('image-rail-show-more-click')}
  />
);

export const ImageRailWithClickHandlers = () => (
  <ImageRail
    imageList={imageRailItems}
    handleClick={action('image-rail-item-click')}
    handleShowMore={action('image-rail-show-more-click')}
    totalImages={9}
  />
);

export const ImageRailForDesktop = () => (
  <ImageRail
    imageList={imageRailItems}
    handleClick={action('image-rail-item-click')}
    handleShowMore={action('image-rail-show-more-click')}
    totalImages={9}
  />
);
