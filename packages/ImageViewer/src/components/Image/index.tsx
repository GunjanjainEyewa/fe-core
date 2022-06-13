import * as React from 'react';
import { styled } from '@nykaa/ui-components';

const Image = styled.img`
max-width: 100%;
`;


export interface ImageProps {
  imageUrl: string;
}

const ImageCard: React.SFC<ImageProps> = (props: ImageProps) => {
  const { imageUrl } = props;
  return (
    <Image src={imageUrl} alt="" />
  );
};
export default ImageCard;
