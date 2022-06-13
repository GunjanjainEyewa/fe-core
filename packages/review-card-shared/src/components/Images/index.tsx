import React from 'react';
import LazyLoad from '@eyewa/lazy-load';
import { styled } from '@eyewa/ui-components';
import ImagesView from './ImagesView';
import { Images } from '../../types';


const BOTTOM_MARGIN_FOR_LAZY_LOAD = 150;
const RIGHT_MARGIN_FOR_LAZY_LOAD = 100;


const PlaceHolder = styled.div`
  width: 100%;
  height: 54px;
  background: ${({ theme }) => theme.colors.surface30};
`;

const ImageList = ({
  reviewId,
  images,
  handleImageClick,
  isLazyLoading = false,
}: Images) => {
  if (isLazyLoading) {
    return (
      <LazyLoad
        bottomMargin={BOTTOM_MARGIN_FOR_LAZY_LOAD}
        rightMargin={RIGHT_MARGIN_FOR_LAZY_LOAD}
        placeHolder={<PlaceHolder />}
        wrapperClassName="lazy-load-wrap"
      >
        <ImagesView
          reviewId={reviewId}
          images={images}
          handleImageClick={handleImageClick}
        />
      </LazyLoad>
    );
  }
  return (
    <ImagesView
      reviewId={reviewId}
      images={images}
      handleImageClick={handleImageClick}
    />
  );
};

export default ImageList;
