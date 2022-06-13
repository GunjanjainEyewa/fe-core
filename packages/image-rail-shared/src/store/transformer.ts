import { scaleImage } from '@eyewa/utils/image';
import { ReviewImagesProps, ImagesDataProps, ReviewImagesInfoProps } from '../types';
import { NO_DATA_FOUND_IN_API, API_DATA_NOT_AN_OBJECT } from '../constants';


const transformReviewImagesResponse = (apiResponseData: ReviewImagesProps) => {
  if (!apiResponseData) {
    throw new Error(NO_DATA_FOUND_IN_API);
  }

  if (
    (typeof apiResponseData !== 'object')
    || Array.isArray(apiResponseData)
  ) {
    throw new Error(API_DATA_NOT_AN_OBJECT);
  }

  const {
    total: totalImagesAvailable = 0,
    reviewImages: imageList = [],
    reviewData,
    pageKey,
  } = apiResponseData;

  const transformedImages: ImagesDataProps[] = [];
  const transformedImagesWithInfo: ReviewImagesInfoProps[] = [];
  const nextPageKey = pageKey || '';

  imageList?.forEach((imageItem, index) => {
    const { reviewId, imageUrl } = imageItem;
    const reviewInfo = reviewData[reviewId];

    if (reviewInfo) {
      const {
        childId,
        title = '',
        description,
        name = '',
        createdOn,
        likeCount = 0,
        rating = 0,
        isBuyer = false,
        createdOnText = '', // FIXME: This is not coming from API
      } = reviewInfo;

      const imageInfo = {
        url: scaleImage({ url: imageUrl, width: 150, height: 150 }),
      };

      /**
       * This complicated logic for ID??... you wonder!
       * we would want a unique identifier to avoid flattening of children.
       * This can happen because the subsequent reviewImage requests can return
       * images with reviewId's which already was sent in the first page.
       */
      transformedImages.push({
        ...imageInfo,
        id: `${reviewId}-${index}${(nextPageKey) ? `-${nextPageKey}` : ''}`,
      });

      transformedImagesWithInfo.push({
        imageUrl: scaleImage({ url: imageUrl, width: 500 }),
        review: {
          childId,
          title,
          description,
          name,
          createdOn,
          likeCount,
          rating,
          isBuyer,
          id: String(reviewId),
          isLikedByUser: false,
          profilePic: '',
          createdOnText,
        },
      });
    }
  });

  return {
    totalImagesAvailable,
    images: transformedImages,
    imagesWithInfo: transformedImagesWithInfo,
    nextPageKey,
  };
};

export default transformReviewImagesResponse;
