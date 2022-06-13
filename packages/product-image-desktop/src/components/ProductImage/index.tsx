import React from 'react';
import { styled } from '@eyewa/ui-components';
import SelectedImage from './SelectedImage';
import SelectedVideo from './SelectedVideo';
import { PRODUCT_SELECTED_IMAGE, VIDEO_TYPE } from '../../constants';
import { ImagesProps } from '../../types';
import { YOUTUBE_VIDEO_TYPE } from '../../constants';


interface ProductImageProps {
  selectedImage: ImagesProps;
  wrapperHeight?: number;
  selectedSlidePosition: number;
  wrapperWidth?: number;
  pdpCustomVideoEnabled?: boolean;
  ImageClickCallback: (type: string) => void;
}
const Container = styled.div`
  position: relative;
  margin-left: ${({ theme }) => theme.spacing.spacing120};
`;


const ProductImage = ({
  selectedImage, wrapperHeight,
  selectedSlidePosition, wrapperWidth,
  pdpCustomVideoEnabled,
  ImageClickCallback,
}: ProductImageProps) => {
  const { mediaType, url, thumbnailUrl } = selectedImage;
  const itemSrc = (mediaType === VIDEO_TYPE) ? thumbnailUrl : url;
  return (
    <Container className={PRODUCT_SELECTED_IMAGE}>
      {(mediaType === YOUTUBE_VIDEO_TYPE) ? (
        <SelectedVideo videoSrc={itemSrc} selectedSlidePosition={selectedSlidePosition} />
      ) : (
        <SelectedImage
          imageUri={itemSrc}
          wrapperHeight={wrapperHeight}
          wrapperWidth={wrapperWidth}
          pdpCustomVideoEnabled={pdpCustomVideoEnabled}
          mediaType={mediaType}
          ImageClickCallback={ImageClickCallback}
        />
      )}
    </Container>
  );
};
export default ProductImage;
