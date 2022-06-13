import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ReviewList from '../src';


const reviewList = [{
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ['https://images-static.nykaa.com/prod-review/1581836462814_03d65225-c17f-461f-afc1-17a2a71ba947_1.jpg?tr=w-500,pr-true', 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/c/0c3905b24533_h-8901030753664.jpg','https://images-static.nykaa.com/prod-review/1581853535462_3663f5d7-4683-4883-a213-064d405f3ea0_1.jpeg?tr=w-500,pr-true'],
    createdOnText: 'Today',
  },
  {
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ["https://images-static.nykaa.com/nonprod-review/1580281418065_a65f58ef-fc51-4e98-9c93-9cb59ff9187e_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1580281426504_b464dc1e-a78c-4811-9191-c1d61a7bf3fa_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1580281435320_c11b4497-d3f0-4c52-9837-5542e6871111_1.jpg"],
    createdOnText: 'Today',
  },
  {
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ["https://images-static.nykaa.com/nonprod-review/1580281446147_103afb0a-640f-411e-9caa-f3b39fb8eedf_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1580281456549_f24fd9c1-5a0d-4e7c-abe6-8308cf84aa74_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1579264750668_0794c030-ca32-420f-a203-a2abc785a7ae_1.jpg"],
    createdOnText: 'Today',
  },
  {
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ["https://images-static.nykaa.com/nonprod-review/1611047217395_9f6a0d70-ac2f-4c84-b9a3-c03b76a58ee4_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1591803602732_b658d0a3-eae0-495a-a7d5-74d2201ad063_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1591803641048_f184a6d5-473c-43a2-ac92-c87c2b0b5708_1.jpg"],
    createdOnText: 'Today',
  },
  {
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ["https://images-static.nykaa.com/nonprod-review/1591803608812_22d1c4de-404c-4470-a6df-ff48c05ce9e8_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1606198293474_f435ec91-8dbb-4840-8b10-d95c81f87d96_1.jpg",
    "https://images-static.nykaa.com/nonprod-review/1606198301085_b183817e-cb95-4ddb-9b58-ddd8bbd7e828_1.jpg"],
    createdOnText: 'Today',
  },
  {
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ["https://images-static.nykaa.com/nonprod-review/1606198301085_b183817e-cb95-4ddb-9b58-ddd8bbd7e828_1.jpg",
    'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/c/0c3905b24533_h-8901030753664.jpg',
    'https://images-static.nykaa.com/prod-review/1581853535462_3663f5d7-4683-4883-a213-064d405f3ea0_1.jpeg?tr=w-500,pr-true'],
    createdOnText: 'Today',
  },
  {
    title: 'Lipstick',
    description: 'Prep your canvas before you start with the art of makeup with Nykaa Prep Me Up! Face Primer. This lightweight, non – greasy Formula instantly blurs the appearance of pores and fine lines to create a flawless base.',
    name: 'Amruta singh',
    createdOn: '26-11-2019',
    likeCount: 34,
    rating: 2,
    isLikedByUser: false,
    isBuyer: true,
    profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
    variantId: 4321,
    id: 1234,
    images: ['https://images-static.nykaa.com/prod-review/1581836462814_03d65225-c17f-461f-afc1-17a2a71ba947_1.jpg?tr=w-500,pr-true', 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/c/0c3905b24533_h-8901030753664.jpg','https://images-static.nykaa.com/prod-review/1581853535462_3663f5d7-4683-4883-a213-064d405f3ea0_1.jpeg?tr=w-500,pr-true'],
    createdOnText: 'Today',
  },
];
  
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
};
const theme = {
  primaryColor: '#fc2779',
  verifiedCircle: '#ffd3e4',
  veirfiedCheck: '#FF5295',
  backgroundColor: '#fff',
  ratingGreenBgColor: '#5cd285',
  ratingOrangeBgColor: '#fa6400',
  ratingRedBgColor: '#E02020',
  borderColor: '#eeeeee',
  secondaryTextColor: '#3f414d',
  primaryTextColor: '#1b1b1b',

};
export default {
  title: 'ReviewList',
  component: ReviewList,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

const translations = {
  PEOPLE_FOUND_THIS_HELPFUL: "लोगों को यह मददगार लगा",
  FOUND_THIS_HELPFUL: "यह मददगार लगा",
  YOU: "आपको",
  AND: "और",
  HELPFUL: "मददगार" ,
  VERIFIED_BUYER: "सत्यापित खरीदार"
};

export const ReviewListView = () => (
  <ReviewList
    reviews={reviewList} 
    product={product} 
    handleImageClick={action('click-on-image-item')} 
    handleLike={action('click-on-lick-icon')}
    theme={theme}
    translations={translations}
  />
)