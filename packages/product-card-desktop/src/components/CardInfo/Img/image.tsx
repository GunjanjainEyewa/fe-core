import React from 'react';
import { styled } from '@eyewa/ui-components';


const Img = styled.img`
  width: 100%;
  max-height: 215px;
`;

interface ImgProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImgProps> = ({
  src,
  alt,
}: ImgProps) => (
  <Img
    src={src}
    alt={alt}
  />
);

export default Image;
