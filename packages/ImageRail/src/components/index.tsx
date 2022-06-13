import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';


export interface ImageItem {
  url: string;
  id: string;
}

interface ImageClickCallback extends ImageItem {
  index: number;
}

export interface ImageRailProps {
  imageList: ImageItem[];
  handleClick?: (imageData: ImageClickCallback, reviewId?: string) => void;
  handleShowMore?: () => void;
  totalImages?: number;
  wrapperClass?: string;
  itemClass?: string;
  reviewId?: string;
  title: string;
}

const Wrap = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none !important;
  }
  width: 100%;

`;

const ImageItem = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.spacing40} 0 0;
  display: inline-block;
  border: 1px solid ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  width: 90px;
  height: 90px;
  overflow: hidden;
  &.last-item {
    position: relative;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.titleXSmall};
  color: ${({ theme }) => theme.colors.black100};
  margin-left: ${({ theme }) => theme.spacing.spacing40};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
`;

const RemainingItems = styled.span`
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
  background: rgba(0, 0, 0 ,0.75);
  ${({ theme }) => theme.typography.subTitleMedium};
`;

const ImageRail: React.SFC<ImageRailProps> = ({
  imageList = [],
  handleClick = (): void => {},
  handleShowMore = (): void => {},
  totalImages = 0,
  wrapperClass = '',
  itemClass = '',
  reviewId,
  title,
}: ImageRailProps) => {
  const trackLength = imageList.length;

  const showMore = (totalImages > trackLength);

  const remainingItems = totalImages - (trackLength - 1);
  return (
    <Wrap className={wrapperClass}>
      <Title>{title}</Title>
      {
        imageList.map(({ url, id }, index) => {
          const isLastItem = (index === (trackLength - 1));

          const imageItemClass = `${itemClass} ${(showMore && isLastItem) ? 'last-item' : ''}`;
          let onClickBack = handleClick;

          if (showMore && isLastItem) {
            onClickBack = handleShowMore;
          }

          return (
            <ImageItem
              className={imageItemClass}
              key={id}
              onClick={(): void => onClickBack({ url, id, index }, reviewId)}
            >
              <Img src={url} alt="review pic" />
              {
                (isLastItem && showMore) && (
                  <RemainingItems>
                    <span>
                      {`+ ${remainingItems}`}
                    </span>
                    <span>more</span>
                  </RemainingItems>
                )
              }
            </ImageItem>
          );
        })
      }
    </Wrap>
  );
};


export default ImageRail;
