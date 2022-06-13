import React, { memo } from 'react';
import useIntersectionCallback from '@eyewa/utils/IObserver/useIntersectCallback';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { scaleImage } from '@eyewa/utils/image';
import { ImageMedia } from '../../../../types/transformer';

const Img = styled.img`
    display: block;
    width: 100%;

    ${({ theme }) => theme.borders.border100};
    border-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.08)};
    border-radius: ${({ theme }) => theme.borders.radius30};
`;

export interface Props {
  image: ImageMedia;
  index: number;
  setCurrentIndex: (index: number) => void;
  trackImpression: (index: number) => void;
  width: number;
  height: number;
}

function Image({
  image, index, setCurrentIndex, trackImpression, width, height,
}: Props) {
  const [setNodeReference] = useIntersectionCallback(
    { rootMargin: '0px', threshold: 0.9 },
    () => {
      setCurrentIndex(index);
    },
    false,
  );

  const [setImpressionReference] = useIntersectionCallback(
    {},
    () => {
      trackImpression(index);
    },
    true,
  );

  if (!image.url) {
    return null;
  }

  return (
    <>
      <div ref={setImpressionReference} />
      <Img
        ref={setNodeReference}
        src={scaleImage({ url: image.url, width, height })}
        alt="product Images"
        srcSet={`${scaleImage({
          url: image.url,
          width,
          height,
        })} 1x, ${scaleImage({ url: image.url, width: width * 2, height: height * 2 })} 2x`}
      />
    </>
  );
}

export default memo(Image);
