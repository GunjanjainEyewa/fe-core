import {
  RTL_DIRECTION,
  PALATE_SLIDER_ID,
  SINGLE_PALATE_ID,
} from '../../constants';

const validateImage = (index: number, imagesLength: number): boolean => {
  let isValid = false;
  if ((index > -1) && (index < imagesLength)) {
    isValid = true;
  }
  return isValid;
};

export const onSwipeRightImage = (activeIndex: number, imagesLength: number): number => {
  const nextIndex = activeIndex - 1;
  if (validateImage(nextIndex, imagesLength)) {
    return nextIndex;
  }
  return activeIndex;
};

export const onSwipeLeftImage = (activeIndex: number,
  imagesLength: number): number => {
  let nextIndex = activeIndex;
  if (validateImage(nextIndex + 1, imagesLength)) {
    nextIndex = activeIndex + 1;
  }
  return nextIndex;
};

export const applyTransition = (activeIndex: number, isFirst = false) => {
  if (document) {
    const elemArray = Array.from(document.getElementsByClassName('image-slider'));
    if (elemArray && elemArray.length) {
      const { clientWidth } = elemArray[0];
      if (clientWidth) {
        const transTime = isFirst ? 0 : 500;

        const transformValue = `-${(activeIndex > 0)
          ? (clientWidth * activeIndex - clientWidth * 0.25)
          : (clientWidth * activeIndex)
        }`;

        const style = `transition: transform ${transTime}ms ease 0s;transform: translateX(${transformValue}px`;

        [].forEach.call(elemArray, (element:HTMLElement) => {
          element.setAttribute('style', style);
        });
      }
    }
  }
};

export const applyTransitionPalate = (indexValue: number, direction: string) => {
  if (document) {
    const container = document.getElementById(PALATE_SLIDER_ID);
    const palateElement = document.getElementById(SINGLE_PALATE_ID);
    if (container && palateElement) {
      const { clientWidth } = palateElement;
      if (direction === RTL_DIRECTION) {
        container.scrollLeft -= clientWidth * indexValue;
      } else {
        container.scrollLeft += clientWidth * indexValue;
      }
    }
  }
};
