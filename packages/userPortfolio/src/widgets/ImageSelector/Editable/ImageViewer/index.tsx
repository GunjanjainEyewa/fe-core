import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Swipeable } from 'react-swipeable';
import { ImageViewerProps } from '../../../../types/ImageSelector';
import { OptionData } from '../../../../types';
import { onSwipeRightImage, onSwipeLeftImage, applyTransition } from '../../../../helpers/ImageSelector';

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Wrapper = styled.div`
  align-items: center;
  flex: 0 auto;
  text-align: center;
  display: flex;
`;

const Image = styled.img`
  &.first-image {
    margin-left: 75px;
  }
  width: 215px;
  opacity: 0.5;
  margin: 20px 5px;
  position: relative;
  align-self: center;
  &.selected {
    opacity: 1;
    width: 235px;
  }
`;

const ImageViewer = (props: ImageViewerProps) => {
  const {
    options,
    activeImage,
    handleImageSelect,
  } = props;
  const [isMount, setMounted] = useState(true);

  useEffect(() => {
    applyTransition(activeImage, isMount);
    if (isMount) {
      setMounted(false);
    }
  }, [activeImage]);

  return (
    <Swipeable
      onSwipedRight={() => { handleImageSelect(onSwipeRightImage(activeImage, options.length)); }}
      onSwipedLeft={
        () => {
          handleImageSelect(onSwipeLeftImage(activeImage, options.length));
        }
      }
      delta={10}
      preventDefaultTouchmoveEvent={false}
      trackTouch
      trackMouse
      rotationAngle={0}
      style={{ height: '90%', width: '100%' }}
    >
      <ImageWrapper>
        {
          options && options.map((option: OptionData, index: number) => {
            const imageClass = `${((activeImage === 0) && (index === 0)) ? 'first-image' : ''}
            ${(activeImage === index) ? 'selected' : ''}`;
            return (
              <Wrapper className="image-slider">
                <Image
                  className={imageClass}
                  src={option.image}
                  alt="user-data"
                  onClick={() => handleImageSelect(index)}
                />
              </Wrapper>
            );
          })
        }
      </ImageWrapper>
    </Swipeable>
  );
};

export default ImageViewer;
