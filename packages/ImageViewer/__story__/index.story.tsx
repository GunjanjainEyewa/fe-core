import React from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import ImageViewer from '../src/';

const imageUrl = 'https://images-static.nykaa.com/prod-review/1581836462814_03d65225-c17f-461f-afc1-17a2a71ba947_1.jpg?tr=w-500,pr-true';
const imageUrl1 = 'https://images-static.nykaa.com/prod-review/1581853535462_3663f5d7-4683-4883-a213-064d405f3ea0_1.jpeg?tr=w-500,pr-true';


export default {
  title: 'Image Viewer',
  component: ImageViewer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
}

const theme = {
  verifiedIconFill:'#FFD3E4',
  primaryColor: '#FC2779'
}

const reviewData= {
  "id": "1234",
  "variantId": 4321,
  "title": "Loved the product",
  "description": "I really love the way it gives me instant “ready to go” look! It provides full coverage, along with that it gives u full make up look in one step , with a lipstick to go! Nice experience.",
  "name": "Ritu Singh",
  "createdOn": "2019-12-01 02:24:23",
  "likeCount": 10,
  "rating": 5,
  "isLikedByUser": true,
  "isBuyer": true,
  "profilePic": "",
  "createdOnText": "1 day ago",
  "isProUser": true,
  "label": "Verified Professional"
}

const productData = {
  name: "Nykaa So Matte! Mini Lipstick",
  productId: '374239',
  id: '374239',
  options: [{
    variant_icon:'https://images-static.nykaa.com/media/icons/8904245710071_pilatesberry.jpg',
    id: '4321',
    variant_name:'47 M Bare Minimum'
  }],
  variant_type: 'shade',
}

let reviewList = [
  {review:reviewData,imageUrl},
  {review:reviewData,imageUrl:imageUrl1},
  {review:reviewData,imageUrl}
]


const testLoadMore = () => {
  console.log("handler load more called")
}

export const ImageView = () => (
  <div style={{height:'100vh', width:'100vw'}}>
      <ImageViewer
    reviews={reviewList}
    activeIndex={1}
    hasMore={true}
    loadMore={testLoadMore}
    product={productData}
    theme={theme}
  />

  </div>

)

export const ImageViewWithAction = () => (
  <ImageViewer
    reviews={reviewList}
    activeIndex={1}
    hasMore={true}
    loadMore={action('image-view-load-more')}
    product={productData}
    theme={theme}
  />
);