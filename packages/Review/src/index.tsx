import React from 'react';
import { styled } from '@nykaa/ui-components';
import UserInfo from '@nykaa/review-card-shared/components/UserInfo';
import RatingInfo from '@nykaa/review-card-shared/components/RatingInfo';
import Description from '@nykaa/review-card-shared/components/Description';
import DateInfo from '@nykaa/review-card-shared/components/DateInfo';
import ImageList from '@nykaa/review-card-shared/components/Images';
import { ReviewProps } from '@nykaa/review-card-shared/types';
import Like from './components/LikeInfo';
import { defaultTranslations } from './constants';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CreateInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing80};
`;
const ReviewCard: React.SFC<ReviewProps> = (props: ReviewProps) => {
  const {
    review, product, handleImageClick, handleLike,
    showReadMore, handleReadMore, descriptionLength,
    isLazyLoading,
    translations = defaultTranslations,
  } = props;
  return (
    <>
      <Wrapper>
        <UserInfo
          profilePic={review.profilePic}
          name={review.name}
          isBuyer={review.isBuyer}
          isProUser={review.isProUser}
          customText={review?.label || translations?.VERIFIED_BUYER}
        />
        <CreateInfo>
          <DateInfo
            createdOnText={review?.createdOnText}
          />
        </CreateInfo>
      </Wrapper>
      <RatingInfo
        rating={review.rating}
        variantId={review.variantId}
        options={product.options}
        variantType={product.variant_type}
      />
      <>
        <Description
          title={review.title}
          description={review.description}
          showReadMore={showReadMore}
          handleReadMore={handleReadMore}
          descriptionLength={descriptionLength}
        />
        <ImageList
          reviewId={review.id}
          images={review.images}
          handleImageClick={handleImageClick}
          isLazyLoading={isLazyLoading}
        />
      </>
      <Like
        likeCount={review.likeCount}
        isLikedByUser={review.isLikedByUser}
        handleLike={handleLike}
        reviewId={review.id}
        customTranslations={translations}
      />
    </>
  );
};
export default ReviewCard;
