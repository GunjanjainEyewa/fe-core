import React from 'react';
import ReviewCard from '@eyewa/review';
import { defaultTranslations } from '@eyewa/review/lib/constants';
import { Review, Product, DefaultTranslations } from '@eyewa/review-card-shared/types';


interface ImageItem {
  url: string;
  id: string;
}
interface Reviews {
  reviews: Review[];
  product: Product;
  handleImageClick: (imageItem: ImageItem) => void;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
  translations?: DefaultTranslations
}

const ReviewList: React.FunctionComponent<Reviews> = (
  {
    reviews, product, handleImageClick, handleLike, translations = defaultTranslations,
  }: Reviews,
) => (
  <>
    {reviews && reviews.map((data, index) => {
      const isLazyLoading = index > 1;
      return (
        <ReviewCard
          handleImageClick={handleImageClick}
          review={data}
          product={product}
          handleLike={handleLike}
          isLazyLoading={isLazyLoading}
          translations={translations}
        />
      );
    })}
  </>
);

export default ReviewList;
