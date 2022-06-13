import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import ImageSlider from './components/ImageSlider';
import ProductImage from './components/ProductImage';
import { ImagesProps } from './types';

const Wrapper = styled.div`
  display: flex;
`;
interface ImageSectionProps {
  images: ImagesProps[];
  visibleSlides: number;
  wrapperHeight?: number;
  wrapperWidth?: number;
  pdpCustomVideoEnabled?: boolean;
  selectedSlideCallback: (args: any) => void;
  ImageClickCallback: (args: string) => void;
}

const ImageSection = (props: ImageSectionProps) => {
  const {
    images, visibleSlides = 5,
    wrapperHeight, wrapperWidth,
    pdpCustomVideoEnabled,
    selectedSlideCallback,
    ImageClickCallback,
  } = props;
  const [selectedSlide, setSelectedSlide] = useState(0);

  const onHoverThumbnail = (slide: number) => {
    setSelectedSlide(slide);
    selectedSlideCallback(images[slide]);
  };

  return (
    <Wrapper>
      <ImageSlider
        selectedSlide={selectedSlide}
        images={images}
        visibleSlides={visibleSlides}
        onHoverThumbnail={onHoverThumbnail}
      />
      <ProductImage
        selectedImage={images[selectedSlide]}
        wrapperHeight={wrapperHeight}
        selectedSlidePosition={selectedSlide}
        wrapperWidth={wrapperWidth}
        pdpCustomVideoEnabled={pdpCustomVideoEnabled}
        ImageClickCallback={ImageClickCallback}
      />
    </Wrapper>
  );
};

export default ImageSection;
