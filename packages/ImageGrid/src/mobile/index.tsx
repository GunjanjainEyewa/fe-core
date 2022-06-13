import * as React from 'react';
import LazyLoad from 'react-lazyload';
import styled from '@emotion/styled';

export interface ImageItem {
  url: string;
  id: string;
}


interface ImageClickCallback extends ImageItem {
  index: number;
}

export interface ImageGridProps {
  imageList: ImageItem[];
  customClass?: string;
  handleClick?: (image: ImageClickCallback) => void;
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: var(--ig-primary-bg, #eeeeee);
  padding: 2px;
  &::after {
    content: "";
    flex: auto;
  }
`;

const ImageItem = styled.div`
  padding: 0;
  border-radius: 4px;
  width: calc(33.3333% - 4px);
  height: calc(33vw);
  margin: 2px;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageGrid: React.SFC<ImageGridProps> = ({
  imageList = [],
  handleClick = (): void => {},
  customClass = '',
}: ImageGridProps) => (
  <Wrap className={customClass}>
    {
      imageList.map((image: ImageItem, index: number) => {
        const { url, id }: ImageItem = image;
        return (
          <ImageItem
            key={id}
            onClick={(): void => {
              handleClick({ ...image, index });
            }}
            role="button"
            tabIndex={0}
          >
            <LazyLoad once offset={150}>
              <Img src={url} alt="review pic uploaded by user" />
            </LazyLoad>
          </ImageItem>
        );
      })
    }
  </Wrap>
);

export default ImageGrid;
