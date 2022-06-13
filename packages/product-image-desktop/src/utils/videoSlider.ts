import {
  IMAGE_HEIGHT, SLIDE_MARGIN, SLIDE_IMAGES_CLASSNAME,
} from '../constants';


export const validateSlide = (index: number, slidesLength: number) => {
  let isValid = false;
  if ((index > -1) && (index < slidesLength)) {
    isValid = true;
  }
  return isValid;
};

export const onSwipeUp = (activeSlide: number, slidesLength: number) => {
  const nextSlide = activeSlide - 1;
  if (validateSlide(nextSlide, slidesLength)) {
    return nextSlide;
  }
  return activeSlide;
};


export const onSwipeDown = (
  activeSlide: number,
  slidesLength: number,
) => {
  let nextSlide = activeSlide;
  if (validateSlide(nextSlide + 1, slidesLength)) {
    nextSlide = activeSlide + 1;
  }
  return nextSlide;
};


export const applyTransition = (activeSlide: number, isFirst: boolean) => {
  if (document) {
    const elemArray = Array.from(document.getElementsByClassName(SLIDE_IMAGES_CLASSNAME));
    if (elemArray && elemArray.length) {
      const clientHeight = IMAGE_HEIGHT + SLIDE_MARGIN;
      if (clientHeight) {
        const transTime = isFirst ? 0 : 1;
        const style = `transition: transform ${transTime}s ease;transform: translateY(-${clientHeight * activeSlide}px); overflow: hidden;`;
        [].forEach.call(elemArray, (element: HTMLElement) => {
          element.setAttribute('style', style);
        });
      }
    }
  }
};
