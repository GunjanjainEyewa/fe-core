
import React, { useEffect } from 'react';
import { styled } from '@nykaa/ui-components';
import { pushEvent } from '@nykaa/data-layer/utils';
import { IFRAME_ID, PRODUCT_VIDEO_PLAYED } from '../../../constants';
import { extractVideoId } from '../../../utils';


interface SelectedVideoProps {
  videoSrc: string;
  selectedSlidePosition: number;
}

const Wrapper = styled.div`
  max-width: 320px;
`;
const SelectedVideo = ({ videoSrc, selectedSlidePosition }: SelectedVideoProps) => {
  const {
    doesVideoIdExists,
    videoId,
  } = extractVideoId(videoSrc);

  const handleWindowBlur = () => {
    if (
      document?.activeElement instanceof HTMLIFrameElement
      && document?.activeElement.id === IFRAME_ID
    ) {
      pushEvent(PRODUCT_VIDEO_PLAYED, { videoPosition: selectedSlidePosition });
    }
  };
  useEffect(() => {
    window.addEventListener('blur', handleWindowBlur);
  });

  if (!doesVideoIdExists) {
    return null;
  }
  return (
    <Wrapper>
      <iframe
        title="product-video"
        width={344}
        height={344}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        id={IFRAME_ID}
      />
    </Wrapper>
  );
};

export default SelectedVideo;
