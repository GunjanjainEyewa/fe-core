import * as React from 'react';
// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ImageSection from '../src/';


export default {
  title: 'ImageSlider',
  component: ImageSection,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};
const images =  [{"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_1.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_2.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_3.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_4.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_5.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_6.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_7.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_8.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_9.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_10.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_11.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_12.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_13.jpg"}, {"type": "video", "url": "https://www.youtube.com/watch?v=AZvCm3QCSqM"}];

export const Images = () => (
  <ImageSection
    images={images}
    visibleSlides={5}
  />
);

const testImages =  [{"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_2.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_3.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_4.jpg"}, {"type": "image", "url": "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/3/23793ef8904245710958_5.jpg"}];

export const ImagesLessThanVisibleSlides = () => (
  <ImageSection
    images={testImages}
    visibleSlides={5}
  />
);
