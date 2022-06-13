import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Description from '../src/components/Description';
import ImageList from '../src/components/Images';
import RatingInfo from '../src/components/RatingInfo';
import UserInfo from '../src/components/UserInfo';

export default {
  title: 'ReviewCardShared',
  component: Description,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
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
  isLikedByUser: true,
  isBuyer: true,
  profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
  variantId: 4321,
  id: 1234,
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

export const DescForReview = () => (
  <Description
    title={review.title}
    description={review.description}
    showReadMore={true}
    handleReadMore={action('read more click')}
    descriptionLength={120}
  />
);

export const ImageListForReview = () => (
  <ImageList
    reviewId={review.id}
    images={review.images}
    handleImageClick={action('click on image')}
    isLazyLoading={true}
  />
);


export const RatingInfoForReviewMobile = () => (
  <>
  <h1>Green background</h1>
  <RatingInfo
    rating={4}
    variantId={1234}
    options={product.options}
    variantType={product.variant_type}
  />
  <h1>Orange background</h1>
  <RatingInfo
    rating={3}
    variantId={1234}
    options={product.options}
    variantType={product.variant_type}
  />
  <h1>Red background</h1>
  <RatingInfo
    rating={review.rating}
    variantId={1234}
    options={product.options}
    variantType={product.variant_type}
  />
  </>
);

export const RatingInfoForReviewDesktop = () => (
  <>
  <h1>Green background</h1>
  <RatingInfo
    rating={4}
    variantId={1234}
    options={product.options}
    variantType={product.variant_type}
  />
  <h1>Orange background</h1>
  <RatingInfo
    rating={3}
    variantId={1234}
    options={product.options}
    variantType={product.variant_type}
  />
  <h1>Red background</h1>
  <RatingInfo
    rating={review.rating}
    variantId={1234}
    options={product.options}
    variantType={product.variant_type}
  />
  </>
);

export const UserInfoForReviewMobile = () => (
  <UserInfo
    profilePic={review.profilePic}
    name={review.name}
    isBuyer={review.isBuyer}
  />
);

export const UserInfoForReviewDesktop = () => (
  <UserInfo
    profilePic={review.profilePic}
    name={review.name}
    isBuyer={review.isBuyer}
  />
);