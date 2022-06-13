import React from 'react';
import LazyLoad from '@eyewa/lazy-load';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import Image from './image';


const BOTTOM_MARGIN_FOR_LAZY_LOAD = 250;
const RIGHT_MARGIN_FOR_LAZY_LOAD = 100;

const ImgBody = styled.div`
  text-align: center;
  height: 215px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  align-items: center;
  padding: 0;
  .lazy-load-wrap{
    width: 100%;
    height: 100%;
  }
`;

const PlaceHolder = styled.div`
  width: 100%;
  max-height: 215px;
  background: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.08)};
`;

interface CardImgProps {
  src: string;
  alt: string;
  isLazy?: boolean;
}

const CardImg: React.FC<CardImgProps> = ({
  src,
  alt,
  isLazy,

}: CardImgProps) => (
  <ImgBody>
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

          />
        </LazyLoad>
      ) : (
        <Image
          src={src}
          alt={alt}

        />
      )
    }
  </ImgBody>
);

export default CardImg;
