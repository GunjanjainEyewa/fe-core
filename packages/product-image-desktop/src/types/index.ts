export interface ImagesProps {
  type: string;
  url: string;
  thumbnailUrl?: string;
  mediaType: string;
}

interface ImageSliderProps {
  activeSlide: number;
  imagesLength: number;
  changeSlide: (slide: number) => void;
}
export interface ArrowButtonProps extends ImageSliderProps {
  isBackDisabled: boolean;
  isFwdDisabled: boolean;
}

export interface VisibleSlidesProps extends ImageSliderProps {
  images: ImagesProps[];
  onHoverThumbnail: (slide: number) => void;
  selectedSlide: number;
}
