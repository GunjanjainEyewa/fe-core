import React from 'react';
import styled from '@nykaa/ui-components/styles/styled';

const originalHeight = '156px';

interface ImgSizeProps {
  maxHeight: string;
  maxWidth: string;
}

const Img = styled.img`
  text-align: center;
  // height: 156px;
  position: relative;
  max-height: ${({ maxHeight }: ImgSizeProps) => maxHeight};
  max-width: ${({ maxWidth }: ImgSizeProps) => maxWidth};
  vertical-align: middle;
`;

interface ImgProps {
  src: string;
  alt: string;
  hasDynamicHeight: boolean;
  cardHeight?: string;
  cardWidth?: string;
  maxCardHeight?: string;
}

const Image: React.FC<ImgProps> = ({
  src,
  alt,
  hasDynamicHeight,
  cardHeight,
  cardWidth,
  maxCardHeight,
}: ImgProps) => (
  <Img
    src={src}
    alt={alt}
    height={(hasDynamicHeight && cardHeight) ? cardHeight : originalHeight}
    maxWidth={(hasDynamicHeight && cardWidth) ? cardWidth : 'none'}
    maxHeight={(hasDynamicHeight && maxCardHeight) ? maxCardHeight : originalHeight}
  />
);

export default Image;
