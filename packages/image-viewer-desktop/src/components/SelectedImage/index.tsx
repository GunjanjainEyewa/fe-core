import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import CrossIcon from '@nykaa/image-viewer-shared/Icons/CloseIcon';
import ArrowIcon from '@nykaa/image-viewer-shared/Icons/Arrow';
import { closeImageViewerPopup } from '../../utils';


interface SelectedImageProps{
  imageUrl: string;
  backwardButtonActive: boolean;
  forwardButtonActive: boolean;
  handleForward: () => void;
  handleBackward: () => void;
}
const Wrapper = styled.div`
  position: relative;
  max-width: 65%;
  min-width: 576px;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const ZoomImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.7)};
  padding: 120px;
  transform: translate(0);
`;
const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;
const SelectedImage = ({
  imageUrl,
  backwardButtonActive,
  forwardButtonActive,
  handleForward,
  handleBackward,
}: SelectedImageProps) => (
  <Wrapper>
    <CrossIcon handleCross={closeImageViewerPopup} />
    <ArrowIcon
      inactive={!backwardButtonActive}
      forwardArrow={false}
      handleArrowButton={handleBackward}
    />
    <Overlay>
      <ZoomImage src={imageUrl} />
    </Overlay>
    <Container>
      <MainImage src={imageUrl} />
    </Container>
    <ArrowIcon
      inactive={!forwardButtonActive}
      forwardArrow
      handleArrowButton={handleForward}
    />
  </Wrapper>
);

export default SelectedImage;
