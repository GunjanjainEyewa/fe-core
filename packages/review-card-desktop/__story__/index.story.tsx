import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { ImageItem } from '@nykaa/review-card-shared/types';
import ReviewCard from '../src';


export default {
  title: 'ReviewCardForDesktop',
  component: ReviewCard,
  parameters: {
    viewport: {
      viewports: DEFAULT_VIEWPORT,
      defaultViewport: 'someDefault'
    },
  },
};


const review = {
  title: 'Lipstick',
  description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
  name: 'Amruta singh',
  createdOn: '26-11-2019',
  likeCount: 34,
  rating: 2,
  isLikedByUser: false,
  isBuyer: true,
  profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
  variantId: 1234,
  id: 4321,
  images: ['https://images-static.nykaa.com/prod-review/1581836462814_03d65225-c17f-461f-afc1-17a2a71ba947_1.jpg?tr=w-500,pr-true', 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/c/0c3905b24533_h-8901030753664.jpg','https://images-static.nykaa.com/prod-review/1581853535462_3663f5d7-4683-4883-a213-064d405f3ea0_1.jpeg?tr=w-500,pr-true'
],
  createdOnText: '26-11-2019',
}

const product = {
  name: 'Lipstick',
  productId: '4321',
  options: [{
    variant_icon:'https://images-static.nykaa.com/media/icons/8901030699887_winendine.jpg',
    id: '1234',
    variant_name: 'red lipstick'
  }],
  id: '4321',
  variant_type: 'shade',
}

export const SimpleReviewCard = () => (
  <ReviewCard 
    review={review} 
    product={product} 
    handleImageClick={action('click-on-lick-icon')} 
    handleLike={action('click-on-lick-icon')} 
    showReadMore={true}
    handleReadMore={action('click-on-read-more')}
    descriptionLength={174}
  />
);

