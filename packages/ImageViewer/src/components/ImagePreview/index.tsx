import * as React from 'react';

import { styled } from '@eyewa/ui-components';
import { ImageReviewProps } from '@eyewa/image-viewer-shared/types';
import { DEFAULT_VERIFIED_BUYER } from '@eyewa/image-viewer-shared/constants';
import RatingInfo from '../Rating';
import Description from '../Description';
import User from '../User';
import LikeInfo from '../Like';
import ImageCard from '../Image';


interface Variant {
  variant_icon: string;
  id: string;
  variant_name: string;
}

export interface Product {
  name: string;
  productId: string;
  options?: Variant[];
  id: string;
  variant_type: string;
}


interface ImagePreviewProps extends ImageReviewProps {
  product: Product;
  reviewClass: string;
}

const Wrap = styled.div`
  background: #000000;
  height: 100%;
  width: 100%;
  align-items: center;
  flex: 0 0 auto;
  display: flex;
`;

const ImageContainer = styled.div`
  display:block;
  width: 100%;
  text-align: center;
`;

const ReviewInfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 5px 10px;
  &.hide-block {
    display: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  margin: 5px;
  align-items: flex-end;
`;

const UserInfo = styled.div`
  width: 50%;
`;

const LikeInfoContainer = styled.div`
width: 50%;
`;

const ImagePreview: React.SFC<ImagePreviewProps> = (props: ImagePreviewProps) => {
  const {
    imageUrl,
    review,
    product,
    reviewClass,
  } = props;

  const { options, variant_type: variantType } = product || {};
  const { variantId } = review;
  const isShade = variantType === 'shade';
  const variant = ((isShade) && (options) && (
    options.find((option) => (parseInt(option.id, 10) === variantId))
  ));
  const variantName = variant && variant.variant_name;
  const variantIcon = variant && variant.variant_icon;

  return (
    <Wrap className="image-view-container">
      <ImageContainer>
        <ImageCard imageUrl={imageUrl} />
      </ImageContainer>
      <ReviewInfoContainer className={reviewClass}>
        <RatingInfo
          rating={review.rating}
          variantIcon={variantIcon || ''}
          variantName={variantName || ''}
          createdOn={review.createdOnText}
          isShade={isShade}
        />
        <Description title={review.title} description={review.description} />
        <UserContainer>
          <UserInfo>
            <User
              name={review.name}
              isBuyer={review.isBuyer}
              isProUser={review.isProUser}
              customText={review?.label || DEFAULT_VERIFIED_BUYER}
            />
          </UserInfo>
          <LikeInfoContainer>
            <LikeInfo count={review.likeCount} isLiked={review.isLikedByUser} />
          </LikeInfoContainer>
        </UserContainer>
      </ReviewInfoContainer>
    </Wrap>
  );
};
export default ImagePreview;
