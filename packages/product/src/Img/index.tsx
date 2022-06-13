import React from 'react';
import LazyLoad from '@eyewa/lazy-load';
import styled from '@eyewa/ui-components/styles/styled';
import { calculateHeight } from '../helper';
import Image from './image';


const BOTTOM_MARGIN_FOR_LAZY_LOAD = 250;
const RIGHT_MARGIN_FOR_LAZY_LOAD = 100;
const originalHeight = '156px';


interface ImgBodyProps {
  hasDynamicHeight: boolean;
  height: string;
}


const ImgBody = styled.div`
  text-align: center;
  height: ${({ height }: ImgBodyProps) => height};
  position: relative;
  display: ${({ hasDynamicHeight }: ImgBodyProps) => (hasDynamicHeight ? 'flex' : 'block')};
  justify-content: center;
  margin-bottom: ${({ hasDynamicHeight }: ImgBodyProps) => (hasDynamicHeight ? '8px' : '0')};
  align-items: center;
  .lazy-load-wrap{
    width: 100%;
    height: 100%;
  }
`;

const PlaceHolder = styled.div`
  width: 100%;
  height: 156px;
  background: #dfe6e9;
`;

interface CardImgProps {
  src: string;
  alt: string;
  inStock?: boolean;
  isLazy?: boolean;
  hasDynamicHeight: boolean;
  cardHeight?: string;
  cardWidth?: string;
  maxCardHeight?: string;
}

const CardImg: React.FC<CardImgProps> = ({
  src,
  alt,
  isLazy,
  hasDynamicHeight,
  cardHeight,
  cardWidth,
  maxCardHeight,
}: CardImgProps) => {
  const height = calculateHeight(hasDynamicHeight, cardHeight, originalHeight);
  return (
    <ImgBody height={height} hasDynamicHeight={hasDynamicHeight}>
      {
      isLazy ? (
        <LazyLoad
          bottomMargin={BOTTOM_MARGIN_FOR_LAZY_LOAD}
          rightMargin={RIGHT_MARGIN_FOR_LAZY_LOAD}
          placeHolder={<PlaceHolder />}
          wrapperClassName="lazy-load-wrap"
        >
          <Image
            src={src}
            alt={alt}
            hasDynamicHeight={hasDynamicHeight}
            cardHeight={cardHeight}
            cardWidth={cardWidth}
            maxCardHeight={maxCardHeight}
          />
        </LazyLoad>
      ) : (
        <Image
          src={src}
          alt={alt}
          hasDynamicHeight={hasDynamicHeight}
          cardHeight={cardHeight}
          cardWidth={cardWidth}
          maxCardHeight={maxCardHeight}
        />
      )
    }
    </ImgBody>
  );
};

export default CardImg;
