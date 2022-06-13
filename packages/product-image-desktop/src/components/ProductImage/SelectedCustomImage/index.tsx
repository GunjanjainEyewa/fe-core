import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import FullScreen from '../../../Icons/FullScreenIcon';
import PlayVideo from '../../../Icons/PlayVideoIcon';
import { IMAGE_VIEW_TEXT, VIDEO_VIEW_TEXT } from '../../../constants';

interface CustomImageProps {
  ImageClickCallback: (type: string) => void;
  isVideo: boolean;
  normalImage: string;
  mediaType: string;
}

const ImageWrapper = styled.div<{ isVideo: boolean }>`
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ isVideo, theme }) => (isVideo ? theme.colors.surfaceInverse : 'none')};
    img{
      position:relative;
      width: 320px;
      height: 320px;
      object-fit: contain;
      filter: ${({ isVideo }) => (isVideo ? 'brightness(0.44)' : 'none')};
    }
`;

const TextWrapper = styled.div`
    position: absolute;
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 10px;
    ${({ theme }) => theme.typography.subTitleMedium};
    width: 100%;
    text-align: center;
    bottom: -40px;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 43%;
    left: 43%;
`;

const SelectedCustomImage = ({
  ImageClickCallback,
  normalImage,
  isVideo,
  mediaType,
}: CustomImageProps) => {
  const [showHoverState, setShowHoverState] = useState(false);

  return (
    <ImageWrapper
      onClick={() => ImageClickCallback(mediaType)}
      onMouseMove={() => setShowHoverState(true)}
      onMouseLeave={() => setShowHoverState(false)}
      onFocus={() => setShowHoverState(true)}
      isVideo={isVideo}
    >
      <img alt="product" src={normalImage} />
      {showHoverState && (!isVideo)
        && (
          <>
            <IconWrapper>
              <FullScreen />
            </IconWrapper>
            <TextWrapper>
              {IMAGE_VIEW_TEXT}
            </TextWrapper>
          </>
        )}
      {isVideo
          && (
            <>
              <IconWrapper>
                <PlayVideo />
              </IconWrapper>
              <TextWrapper>
                {VIDEO_VIEW_TEXT }
              </TextWrapper>
            </>
          )}
    </ImageWrapper>
  );
};

export default SelectedCustomImage;
