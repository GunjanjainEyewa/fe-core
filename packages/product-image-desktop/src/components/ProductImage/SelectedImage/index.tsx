import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { scaleImage } from '@nykaa/utils/image';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import {
  PRODUCT_IMAGE_MAGNIFY, VIDEO_TYPE,
} from '../../../constants';
import { onLoadLargeImage } from '../../../utils';
import SelectedCustomImage from '../SelectedCustomImage';


interface ImageZoomProps {
  imageUri: string;
  wrapperHeight?: number;
  wrapperWidth?: number;
  pdpCustomVideoEnabled?: boolean;
  mediaType: string;
  ImageClickCallback: (type: string) => void;
}

const Wrapper = styled.div`
  max-width: 320px;
  height: 100%;
  & .pd-image-magnifier-container{
    ${({ theme }) => theme.borders.border100};
    border-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borders.radius20};
    border-color: ${({ theme }) => theme.colors.state};
    box-shadow: 0 4px 20px 2px ${({ theme }) => hexToRgb(theme.colors.state, 0.2)};
    max- width: none;
    max-height: none;
    z-index: 11;
    bottom : 50px;
    margin-top: -55px;
    right: 80px;
    overflow: hidden;
    img {
      max-width: none;
    }
  }
`;

const ImageZoom = ({
  imageUri, wrapperHeight = 520, wrapperWidth, pdpCustomVideoEnabled, mediaType, ImageClickCallback,
}: ImageZoomProps) => {
  const normalImage = scaleImage({
    url: imageUri,
    width: 344,
    height: 344,
  });
  const largeImage = scaleImage({
    url: imageUri,
    width: 1500,
    height: 1500,
  });

  const smallImage = {
    alt: 'product-image-lens',
    isFluidWidth: true,
    src: normalImage,
  };

  const largeImageValues = {
    alt: '',
    src: largeImage,
    width: 1500,
    height: 1500,
    bottom: 0,
    onLoad: () => onLoadLargeImage(wrapperHeight, wrapperWidth),
  };
  const isVideo = mediaType === VIDEO_TYPE;

  return (
    <Wrapper>
      {pdpCustomVideoEnabled ? (
        <SelectedCustomImage
          ImageClickCallback={() => ImageClickCallback(mediaType)}
          isVideo={isVideo}
          normalImage={normalImage}
          mediaType={mediaType}
        />
      )
        : (
          <ReactImageMagnify
            smallImage={smallImage}
            largeImage={largeImageValues}
            enlargedImageContainerClassName={PRODUCT_IMAGE_MAGNIFY}
            lensStyle={{ backgroundColor: 'rgba(125, 125, 125, .4)' }}
          />
        )}
    </Wrapper>
  );
};

export default ImageZoom;
