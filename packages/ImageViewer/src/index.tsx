import React, { useState, useEffect } from 'react';
import { Swipeable } from 'react-swipeable';

import { styled } from '@nykaa/ui-components';
import { ImageReviewProps, Product } from '@nykaa/image-viewer-shared/types';
import ImagePreview from './components/ImagePreview';

export interface ImageViewerProps {
  reviews: ImageReviewProps[];
  activeIndex: number;
  loadMore: () => void;
  hasMore: boolean;
  product: Product;
}

const validateImage = (index: number, reviewsLength: number): boolean => {
  const imagesLength = reviewsLength || 0;
  let isValid = false;
  if ((index > -1) && (index < imagesLength)) {
    isValid = true;
  }
  return isValid;
};

const onSwipeRight = (activeIndex: number, reviewsLength: number): number => {
  const nextIndex = activeIndex - 1;
  if (validateImage(nextIndex, reviewsLength)) {
    return nextIndex;
  }
  return activeIndex;
};

const onSwipeLeft = (activeIndex: number,
  reviewsLength: number,
  hasMore: boolean,
  loadMore: () => void): number => {
  let nextIndex = activeIndex;
  if (validateImage(nextIndex + 1, reviewsLength)) {
    nextIndex = activeIndex + 1;
  } else if (hasMore) {
    loadMore();
  }
  return nextIndex;
};

const toggleReviewView = (reviewClass: string):string => {
  let newClass = '';
  if (!reviewClass) {
    newClass = 'hide-block';
  }
  return newClass;
};

const applyTransition = (activeIndex: number, isFirst = false) => {
  if (document) {
    const elemArray = Array.from(document.getElementsByClassName('image-view-container'));
    if (elemArray && elemArray.length) {
      const { clientWidth } = elemArray[0];
      if (clientWidth) {
        const transTime = isFirst ? 0 : 1;
        const style = `transition: transform ${transTime}s ease;transform: translateX(-${clientWidth * activeIndex}px)`;
        [].forEach.call(elemArray, (element:HTMLElement) => {
          element.setAttribute('style', style);
        });
      }
    }
  }
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;


const ImageViewer : React.SFC<ImageViewerProps> = (props: ImageViewerProps) => {
  const {
    reviews,
    product,
    activeIndex,
    hasMore,
    loadMore,
  } = props;

  const [activeImage, changeImage] = useState(activeIndex);
  const [reviewClass, toggleReviewClass] = useState('');
  const [isMount, setMounted] = useState(true);

  useEffect(() => {
    applyTransition(activeImage, isMount);
    if (isMount) {
      setMounted(false);
    }
  }, [activeImage]);
  const reviewsLength = reviews.length;
  return (
    <>
      <Swipeable
        onSwipedRight={() => { changeImage(onSwipeRight(activeImage, reviewsLength)); }}
        onSwipedLeft={
          () => {
            changeImage(onSwipeLeft(activeImage, reviewsLength, hasMore, loadMore));
          }
        }
        delta={10}
        preventDefaultTouchmoveEvent={false}
        trackTouch
        trackMouse
        rotationAngle={0}
        style={{ height: '100%', width: '100%' }}
      >
        <Wrapper onClick={() => toggleReviewClass(toggleReviewView(reviewClass))}>
          {
            reviews.map((reviewObj, index) => (
              <ImagePreview
                imageUrl={reviewObj.imageUrl}
                review={reviewObj.review}
                product={product}
                key={`imgCard${reviewObj.review.id}-${index + 1}`}
                reviewClass={reviewClass}
              />
            ))
          }
        </Wrapper>
      </Swipeable>
    </>
  );
};
export default ImageViewer;
