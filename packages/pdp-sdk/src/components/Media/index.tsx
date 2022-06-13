import React, { memo, useState } from 'react';
import { styled } from '@eyewa/ui-components';

// helpers
import { MediaInfo } from '../../types/transformer';

// components
import Dots from './components/Dots';
import Image from './components/Image';

const Carousel = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: ${({ theme }) => theme.spacing.spacing60};

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div<{ height: number; width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  flex-shrink: 0;
  scroll-snap-align: center;

  margin-right: ${({ theme }) => theme.spacing.spacing60};
`;

const SingleItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
`;
export interface Props {
  data: MediaInfo;
}

function Media({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, carouselHeight, carouselWidth } = data;

  if (!images) {
    return null;
  }

  const trackImpression = () => {
    // console.log('trackImpression', index);
  };

  if (images.length === 1) {
    return (
      <SingleItem>
        <Image
          trackImpression={trackImpression}
          setCurrentIndex={setCurrentIndex}
          index={0}
          image={images[0]}
          height={carouselHeight}
          width={carouselWidth}
        />
      </SingleItem>
    );
  }

  return (
    <>
      <Carousel>
        {images.map((image, indx) => (
          <Item key={`images_${indx + 1}`} height={carouselHeight} width={carouselWidth}>
            <Image
              trackImpression={trackImpression}
              setCurrentIndex={setCurrentIndex}
              index={indx}
              image={image}
              height={carouselHeight}
              width={carouselWidth}
            />
          </Item>
        ))}
        <Item height={carouselHeight} width={1} />
      </Carousel>
      <Dots totalCount={images.length} activeIndex={currentIndex} />
    </>
  );
}

export default memo(Media);
