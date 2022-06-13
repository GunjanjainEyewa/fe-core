import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import UserInfo from '@eyewa/review-card-shared/components/UserInfo';
import RatingInfo from '@eyewa/review-card-shared/components/RatingInfo';
import DateInfo from '@eyewa/review-card-shared/components/DateInfo';
import Description from '@eyewa/review-card-shared/components/Description';
import ImageList from '@eyewa/review-card-shared/components/Images';
import { ReviewProps } from '@eyewa/review-card-shared/types';
import { USER_INFO_CLASS } from '@eyewa/review-card-shared/constants';
import Like from './components/LikeInfo';


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => hexToRgb(theme.colors.state, 0.12)};
  padding: ${({ theme }) => theme.spacing.spacing120} 0 ${({ theme }) => theme.spacing.spacing80}; 
`;

const UserInfoWrapper = styled.div`
  width:25%;
  .${USER_INFO_CLASS} {
    display: flex;
    padding: 0 0 16px 0;
  }
`;

const ReviewInfoWrapper = styled.div`
  width: 75%;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
`;

const ReviewCard: React.SFC<ReviewProps> = (props: ReviewProps) => {
  const {
    review, product, handleImageClick, handleLike,
    showReadMore, handleReadMore, descriptionLength,
    isLazyLoading,
  } = props;
  return (
    <Wrapper>
      <UserInfoWrapper>
        <UserInfo
          profilePic={review?.profilePic}
          name={review?.name}
          isBuyer={review?.isBuyer}
        />
      </UserInfoWrapper>
      <ReviewInfoWrapper>
        <RatingContainer>
          <RatingInfo
            rating={review?.rating}
            variantId={review?.variantId}
            variantType={product?.variant_type}
            options={product?.options}
          />
          <DateInfo
            createdOnText={review?.createdOnText}
          />
        </RatingContainer>
        <>
          <Description
            title={review?.title}
            description={review?.description}
            showReadMore={showReadMore}
            handleReadMore={handleReadMore}
            descriptionLength={descriptionLength}
          />
          <ImageList
            reviewId={review?.id}
            images={review?.images}
            handleImageClick={(imageData) => handleImageClick(imageData, String(review?.id))}
            isLazyLoading={isLazyLoading}
          />
        </>
        <Like
          likeCount={review?.likeCount}
          isLikedByUser={review?.isLikedByUser}
          handleLike={handleLike}
          reviewId={review?.id}
        />
      </ReviewInfoWrapper>
    </Wrapper>
  );
};
export default ReviewCard;
