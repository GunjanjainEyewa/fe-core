import React, { useState } from 'react';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { styled } from '@eyewa/ui-components';
import { action } from '@storybook/addon-actions';
import ImageViewer from '../src/';
import { openImageViewerPopup } from '../src/utils';
import ImageList from '@eyewa/review-card-shared/components/Images';

const imageUrl = 'https://images-static.nykaa.com/prod-review/1617775570548_db193b7c-fd68-4856-892f-808df849621b_1.jpg?tr=w-550,h-550,pr-true';
const imageUrl1 = 'https://images-static.nykaa.com/prod-review/1581853535462_3663f5d7-4683-4883-a213-064d405f3ea0_1.jpeg?tr=w-550,h-550,pr-true';
const imageUrl2 ="https://images-static.nykaa.com/prod-review/1581836462814_03d65225-c17f-461f-afc1-17a2a71ba947_1.jpg?tr=w-550,h-550,pr-true";
const imageUrl3 = "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/c/0c3905b24533_h-8901030753664.jpg?tr=w-550,h-550,pr-true";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default {
  title: 'Image Viewer For Desktop',
  component: ImageViewer,
  parameters: {
    viewport: {
      viewports: DEFAULT_VIEWPORT,
      defaultViewport: 'some default',
    },
  },
}

const theme = {
  verifiedIconFill:'#FFD3E4',
  primaryColor: '#FC2779'
}

const review= {
  "id": 1234,
  "variantId": 4321,
  "title": "Loved the product",
  "description": "I really love the way it gives me instant “ready to go” look! It provides full coverage, along with that it gives u full make up look in one step , with a lipstick to go! Nice experience.",
  "name": "Ritu Singh",
  "createdOn": "2019-12-01 02:24:23",
  "likeCount": 10,
  "rating": 5,
  "isLikedByUser": true,
  "isBuyer": true,
  "profilePic": "https://images-static.nykaa.com/prod-review/default_profile_image.svg",
  "createdOnText": "1 day ago",
  "images": [imageUrl, imageUrl1, imageUrl2, imageUrl3]
}
const reviewWithoutImages= {
  "id": 1234,
  "variantId": 4321,
  "title": "Loved the product",
  "description": "I really love the way it gives me instant “ready to go” look! It provides full coverage, along with that it gives u full make up look in one step , with a lipstick to go! Nice experience.",
  "name": "Ritu Singh",
  "createdOn": "2019-12-01 02:24:23",
  "likeCount": 10,
  "rating": 5,
  "isLikedByUser": true,
  "isBuyer": true,
  "profilePic": "https://images-static.nykaa.com/prod-review/default_profile_image.svg",
  "createdOnText": "1 day ago"
}
const reviewWithoutImages1= {
  "id": 123,
  "variantId": 432,
  "title": "Loved the product1",
  "description": "I really love the way it gives me instant “ready to go” look! It provides full coverage, along with that it gives u full make up look in one step , with a lipstick to go",
  "name": "saksham",
  "createdOn": "2019-12-01 02:24:23",
  "likeCount": 10,
  "rating": 5,
  "isLikedByUser": true,
  "isBuyer": true,
  "profilePic": "https://images-static.nykaa.com/prod-review/default_profile_image.svg",
  "createdOnText": "4 day ago"
}
const reviewWithoutImages2= {
  "id": 123,
  "variantId": 432,
  "title": "Loved the product1",
  "description": "I really love the way it gives me instant “ready to go” look! It provides full coverage, along with that it gives u full make up look in one step , with a lipstick to go",
  "name": "saksham agrawal",
  "createdOn": "2019-12-01 02:24:23",
  "likeCount": 10,
  "rating": 5,
  "isLikedByUser": true,
  "isBuyer": true,
  "profilePic": "https://images-static.nykaa.com/prod-review/default_profile_image.svg",
  "createdOnText": "2 day ago"
}
const reviewWithoutImages3= {
  "id": 123,
  "variantId": 432,
  "title": "Loved the product1",
  "description": "I really love the way it gives me instant “ready to go” look! It provides full coverage, along with that it gives u full make up look in one step , with a lipstick to go",
  "name": "dummy",
  "createdOn": "2019-12-01 02:24:23",
  "likeCount": 10,
  "rating": 5,
  "isLikedByUser": true,
  "isBuyer": true,
  "profilePic": "https://images-static.nykaa.com/prod-review/default_profile_image.svg",
  "createdOnText": "3 day ago"
}

const product = {
  name: 'Liptstic',
  productId: '423423',
  inStock: true,
  id: '4321',
  title: 'Tester Liptsick Tester Liptsick Tester Liptsick',
  slug: 'lipstick',
  parentId: '4321',
  offersCount: 1,
  dynamicTags: [],
  quantity: -2,
  variantType: 'normal',
  variantCount: 0,
  mrp: 500,
  price: 343,
  discount: 20,
  rating: 3.5,
  ratingCount: 200,
  type: 'normal',
  isBackorder: false,
  offerPrice: 0,
  variantName: '',
  onlyWishlistButton: false,
  childId: '423423',
  imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/e/6eb7a6326117_h-8901030701740.jpg',
  primaryCategories: { l1: { id: ' ', name: '' } },
  brandName: '',
  buttonText: '',
};

let reviewList = [
  {review:[ review ],imageUrl: [imageUrl, imageUrl1, imageUrl2, imageUrl3]},
  {review:[ reviewWithoutImages, reviewWithoutImages2, reviewWithoutImages1, reviewWithoutImages3 ],imageUrl:[imageUrl, imageUrl1, imageUrl2, imageUrl3]},
  {review:[ review ],imageUrl: [imageUrl, imageUrl1, imageUrl2, imageUrl3]}
]


const testLoadMore = () => {
  console.log("handler load more called")
}
const promiseWrapper = (promise) => promise
  .then((data) => [data, undefined])
  .catch((error) => Promise.resolve([undefined, error]));

const promise = (params: any) => promiseWrapper(
  new Promise((resolve) => setTimeout(() => resolve(params), 2000)),
);
const VariantData = {
  media: [],
  buttonText: 'ADD TO BAG',
  childId: '997',
  brandName: 'Lakme',
  discount: 8,
  isBestSeller: false,
  inStock: true,
  mrp: 450,
  name: 'Lakme Eyeconic Curling Mascara - Black',
  offerPrice: 414,
  packSize: '9ml',
  shadeImage:
    'https://images-static.nykaa.com/media/icons/8901030399138_black.jpg',
  quantity: 12,
  sku: '8901030399138',
  slug: 'lakme-eyeconic-curling-mascara-108957/p/108957',
  variantName: 'Black',
  expiry: '15 November 2021',
  imageUrl:
    'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8901030399138_h.jpg',
};

const getVariantData = () => {
  const variant = [];

  [...Array(20)].forEach((_, idx) => {
    if (idx === 2) {
      // not in stock
      variant.push({
        ...VariantData,
        childId: idx,
        inStock: false,
        quantity: 0,
      });
    } else {
      variant.push({ ...VariantData, childId: idx });
    }
  });
  return variant;
};
const VariantState = {
  loading: false,
  isNotFound: true,
  isFetchingError: true,
  loadingProductId: '',
  data: {},
};

const User = {
  cartItemsCount: 92,
  email: 'dummyUser@gmail.com',
  firstName: 'user',
  formKey: 'K924ve2CHfUNnZkQ',
  groupId: '1',
  id: '176769637',
  isLoyal: false,
  isPro: false,
  lastName: 'dummy',
  rewardPoints: 0,
  userName: 'dummy user',
  wishlist: ['423423'],
};


export const ImageView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleForward = () => {
    const currentIndex = activeIndex + 1;
    if ( currentIndex <=  reviewList[0]?.imageUrl?.length - 1) {
      setActiveIndex(currentIndex);
    }else {
      setActiveIndex(activeIndex);
    }
  }
  const handleBackward = () => {
    const currentIndex = activeIndex - 1;
    if ( currentIndex >= 0) {
      setActiveIndex(currentIndex);
    }else {
      setActiveIndex(activeIndex);
    }
  }
  console.log(activeIndex);
  return (
  <>
  <button onClick={openImageViewerPopup}>Open image</button>
  <Wrapper>
      <ImageViewer
        reviewData={reviewList[0]}
        product={product}
        handleLike={action("like")}
        activeIndex={activeIndex}
        isPro={false}
        pageLocation={{}}
        addToCartCallback={promise}
        variants={VariantState}
        isRegisteredViaMobile={(e: string) => false}
        user={User}
        handleSlider={() => ''}
        handleBackward={handleBackward}
        handleForward={handleForward}
      />
  </Wrapper>
  </>
);
}

export const ImageRail = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleForward = () => {
    const currentIndex = activeIndex + 1;
    if ( currentIndex <=  reviewList[0]?.imageUrl?.length - 1) {
      setActiveIndex(currentIndex);
    }else {
      setActiveIndex(activeIndex);
    }
  }
  const handleBackward = () => {
    const currentIndex = activeIndex - 1;
    if ( currentIndex >= 0) {
      setActiveIndex(currentIndex);
    }else {
      setActiveIndex(activeIndex);
    }
  }
  const handleImageClick = (imageData, reviewId) => {
    setActiveIndex(imageData.index);
    openImageViewerPopup();
  }
  return (
  <>
  <ImageList
    reviewId={review.id}
    images={[imageUrl, imageUrl1, imageUrl2, imageUrl3]}
    handleImageClick={(imageData, reviewId) => handleImageClick(imageData, reviewId)}
    isLazyLoading={false}
  />
  <Wrapper>
      <ImageViewer
        reviewData={reviewList[1]}
        product={product}
        handleLike={action("like")}
        activeIndex={activeIndex}
        isPro={false}
        pageLocation={{}}
        addToCartCallback={promise}
        variants={VariantState}
        isRegisteredViaMobile={(e: string) => false}
        user={User}
        handleSlider={() => ''}
        handleBackward={handleBackward}
        handleForward={handleForward}
      />
  </Wrapper>
  </>
);
};
