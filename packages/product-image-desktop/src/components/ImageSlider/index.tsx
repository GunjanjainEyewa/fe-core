import React, { useState, useEffect } from 'react';

import styled from '@nykaa/ui-components/styles/styled';


import ArrowButtons from './ArrowButtons';
import VisibleSlides from './ImagesSlides';

import {
  applyTransition,
} from '../../utils/videoSlider';
import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  SLIDE_MARGIN,
} from '../../constants';
import { ImagesProps } from '../../types';


const Placeholder = styled.div<{ height: number; }>`
  margin-right: ${({ theme }) => theme.spacing.spacing160};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  ${({ height }) => `
  height: ${height}px;
  `};
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: ${IMAGE_WIDTH}px;
`;

const ThumbNailImage = styled.div`
  overflow: hidden;
  height: inherit;
`;


interface ImageSliderProps {
  images: ImagesProps[];
  visibleSlides: number;
}

const ImageSlider = (props: any) => {
  const {
    images, visibleSlides = 5,
    onHoverThumbnail, selectedSlide,
  } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    applyTransition(activeSlide, true);
  });

  const changeSlide = (slide: number) => {
    setActiveSlide(slide);
  };

  const imagesLength = images.length;
  const containerHeight = (IMAGE_HEIGHT + SLIDE_MARGIN) * visibleSlides;
  const isLastSlide = (activeSlide + visibleSlides) === imagesLength;
  const isFirstSlide = activeSlide === 0;
  return (
    <>
      <Placeholder height={containerHeight}>
        <ThumbNailImage>
          <VisibleSlides
            activeSlide={activeSlide}
            changeSlide={changeSlide}
            imagesLength={imagesLength}
            onHoverThumbnail={onHoverThumbnail}
            images={images}
            selectedSlide={selectedSlide}
          />
          {(visibleSlides < imagesLength) && (
            <ArrowButtons
              isBackDisabled={isFirstSlide}
              isFwdDisabled={isLastSlide}
              activeSlide={activeSlide}
              changeSlide={changeSlide}
              imagesLength={imagesLength}
            />
          )}
        </ThumbNailImage>
      </Placeholder>
    </>
  );
};

export default ImageSlider;
