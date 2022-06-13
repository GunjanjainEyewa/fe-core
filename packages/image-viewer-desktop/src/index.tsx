import React, { useState, useEffect } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { LIKE_ICON_ID } from '@nykaa/review-card-shared/constants';
import SelectedImage from './components/SelectedImage';
import ReviewCard from './components/ReviewCard';
import { ImageDataProps, ImageViewerProps } from './types';
import { IMAGE_VIEWER_OVERLAY, IMAGE_VIEWER_POPUP } from './constants';
import {
  closeImageViewerPopup, scaleUrlForImageViewer, handleImageClick,
} from './utils';
import { Review } from './types/Review';


const OverLay = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.5)};
  z-index: 10;
  cursor: pointer;
`;
const ImageViewerModal = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 11;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const ReviewCardContainer = styled.div`
  width: 35%;
  margin-left: ${({ theme }) => theme.spacing.spacing60};
  overflow-y: scroll;
  & .${LIKE_ICON_ID} {
    max-height: 43px;
    margin-top: ${({ theme }) => theme.spacing.spacing60};
  }
  &::-webkit-scrollbar { 
    display: none;
  }
`;
const ImageViewer = (props: ImageViewerProps) => {
  const {
    reviewData, product, handleLike,
    activeIndex, isPro, pageLocation,
    addToCartCallback, handleForward, handleBackward,
    handleSlider, user,
  } = props;
  const [activeReview, setActiveReview] = useState<Review>(reviewData.review[0]);
  const [selectedImageData, setSelectedImageData] = useState<ImageDataProps>({
    selectedUrl: reviewData.imageUrl[activeIndex],
    activeIndex: 0,
    forwardActive: false,
    backwardActive: false,
  });
  useEffect(() => {
    setSelectedImageData({
      selectedUrl: scaleUrlForImageViewer(reviewData?.imageUrl[activeIndex]),
      activeIndex,
      forwardActive: (activeIndex < reviewData?.imageUrl?.length - 1),
      backwardActive: (activeIndex !== 0),
    });
    if (activeIndex < reviewData?.review?.length) {
      setActiveReview(reviewData?.review[activeIndex]);
    }
  }, [reviewData, activeIndex]);
  return (
    <>
      <OverLay
        id={IMAGE_VIEWER_OVERLAY}
        onClick={closeImageViewerPopup}
      />
      <ImageViewerModal id={IMAGE_VIEWER_POPUP}>
        <Wrapper>
          {(selectedImageData?.selectedUrl)
            && (
            <SelectedImage
              imageUrl={selectedImageData.selectedUrl}
              backwardButtonActive={selectedImageData.backwardActive}
              forwardButtonActive={selectedImageData.forwardActive}
              handleBackward={handleBackward}
              handleForward={handleForward}
            />
            )}
          {(activeReview) && (
            <ReviewCardContainer>
              <ReviewCard
                review={activeReview}
                product={product}
                handleImageClick={(imageData) => handleImageClick(
                  imageData, {
                    reviewData,
                    setSelectedImageData,
                    setActiveReview,
                  },
                )}
                handleLike={handleLike}
                isPro={isPro}
                pageLocation={pageLocation}
                addToCartCallback={addToCartCallback}
                handleSlider={handleSlider}
                user={user}
              />
            </ReviewCardContainer>
          )}
        </Wrapper>
      </ImageViewerModal>
    </>
  );
};

export default ImageViewer;
