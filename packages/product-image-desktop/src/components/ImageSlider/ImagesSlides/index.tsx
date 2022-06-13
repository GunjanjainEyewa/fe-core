import React from 'react';
import { Swipeable } from 'react-swipeable';

import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import VideoThumbnail from './VideoThumbnail';
import {
  onSwipeUp,
  onSwipeDown,
} from '../../../utils/videoSlider';
import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  SLIDE_MARGIN,
  SLIDE_IMAGES_CLASSNAME,
  VIDEO_TYPE,
  YOUTUBE_VIDEO_TYPE,
  IMAGE,
} from '../../../constants';
import { VisibleSlidesProps, ImagesProps } from '../../../types';


const PlaceholderImage = styled.div<{ isSelected: boolean; isVideoImage: boolean; }>`
  position: relative;
  height: ${IMAGE_HEIGHT}px;
  width: ${IMAGE_WIDTH}px;
  margin-bottom: ${SLIDE_MARGIN}px;

  max-height: 50px !important;
  cursor: pointer;
  border-radius:   ${({ theme }) => theme.borders.radius10};
  padding: ${({ theme }) => theme.spacing.spacing20};
  ${({ theme }) => theme.borders.border100};
  ${({ isSelected, theme }) => `
  border-color: ${hexToRgb((isSelected ? (theme.colors.negative) : (theme.colors.state)), 0.4)};
  `};
  img {
    max-height: 38px;
    max-width: 38px;
  }
  &:last-child {
    margin-bottom: 0;
    padding-left: ${({ theme }) => theme.spacing.spacing40};
  }
`;


const VisibleSlides = (props: VisibleSlidesProps) => {
  const {
    changeSlide, activeSlide,
    imagesLength, images,
    onHoverThumbnail, selectedSlide,
  } = props;
  return (
    <Swipeable
      onSwipedUp={() => changeSlide(onSwipeUp(activeSlide, imagesLength))}
      onSwipedDown={() => changeSlide(onSwipeDown(activeSlide, imagesLength))}
      delta={10}
      preventDefaultTouchmoveEvent={false}
      trackTouch
      trackMouse
      rotationAngle={0}
      style={{ width: '100%' }}
      className={SLIDE_IMAGES_CLASSNAME}
    >
      {images?.map((image: ImagesProps, idx: number) => {
        const isVideoImage = (image.mediaType === (VIDEO_TYPE || YOUTUBE_VIDEO_TYPE));
        return (
          <PlaceholderImage
            key={idx}
            isSelected={idx === selectedSlide}
            onMouseOver={() => onHoverThumbnail(idx)}
            onFocus={() => onHoverThumbnail(idx)}
            isVideoImage={isVideoImage}
          >
            {((image.mediaType === VIDEO_TYPE) && image?.thumbnailUrl) && <img alt="product-thumbnail" src={image?.thumbnailUrl} /> }
            {(image.mediaType === YOUTUBE_VIDEO_TYPE) && <VideoThumbnail />}
            {((image.mediaType === IMAGE) && image?.url) && <img alt="product-thumbnail" src={image?.url} />}
          </PlaceholderImage>
        );
      })}
    </Swipeable>
  );
};

export default VisibleSlides;
