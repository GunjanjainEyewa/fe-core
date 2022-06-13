import React from 'react';
import { styled } from '@eyewa/ui-components';
import UserInfo from '@eyewa/review-card-shared/components/UserInfo';
import RatingInfo from '@eyewa/review-card-shared/components/RatingInfo';
import Description from '@eyewa/review-card-shared/components/Description';
import DateInfo from '@eyewa/review-card-shared/components/DateInfo';
import Like from '@eyewa/review-card-desktop/components/LikeInfo';
import ImageList from '@eyewa/review-card-shared/components/Images';
import ProductTile from '@eyewa/product-card-desktop';
import { ReviewProps } from '../../types/Review';


const ProductTileWrapper = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.spacing.spacing60};
  margin-bottom: ${({ theme }) => theme.spacing.spacing160};
  margin-top: ${({ theme }) => theme.spacing.spacing160};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
`;
const ReviewCard: React.SFC<ReviewProps> = (props: ReviewProps) => {
  const {
    review, product, handleImageClick, handleLike,
    showReadMore, handleReadMore, descriptionLength,
    isLazyLoading, isPro, pageLocation, addToCartCallback,
    handleSlider, user,
  } = props;
  return (
    <>
      <UserInfo
        profilePic={review?.profilePic || ''}
        name={review?.name || ''}
        isBuyer={review?.isBuyer || false}
      />
      <Wrapper>
        <RatingInfo
          rating={review?.rating}
          variantId={review?.variantId}
          variantType={product?.variantType}
        />
        <DateInfo
          createdOnText={review?.createdOnText}
        />
      </Wrapper>
      {(review?.title) && (
        <Description
          title={review?.title}
          description={review?.description}
          showReadMore={showReadMore}
          handleReadMore={handleReadMore}
          descriptionLength={descriptionLength}
        />
      )}
      {(review?.images) && (
        <ImageList
          reviewId={review?.id}
          images={review?.images}
          handleImageClick={handleImageClick}
          isLazyLoading={isLazyLoading}
        />
      )}
      <Like
        likeCount={review?.likeCount}
        isLikedByUser={review?.isLikedByUser}
        handleLike={handleLike}
        reviewId={review?.id}
      />
      {/* we have to mark option property in product card package
        because we only show addToBag button in this card.
      */}
      {(product?.inStock) && (
        <ProductTileWrapper>
          <ProductTile
            imageUrl={product?.imageUrl}
            product={product}
            showProFlag={isPro}
            lazyLoadImage={false}
            positionInList={1}
            user={user}
            pageLocation={pageLocation}
            addToCartCallback={addToCartCallback}
            size="compact"
            handleSlider={handleSlider}
            onlyAddToBag
            showFixedAction
          />
        </ProductTileWrapper>
      )}
    </>
  );
};
export default ReviewCard;
