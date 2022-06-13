import React from 'react';
import ImageRail from '@eyewa/image-rail';
import { styled } from '@eyewa/ui-components';
import { Images } from '../../types';
import { IMAGE_ITEM_CLASS } from '../../constants';


const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.spacing40} ${theme.spacing.spacing80}`};
  .${IMAGE_ITEM_CLASS} {
    width: 54px;
    height: 54px;
    vertical-align: top;
    cursor: pointer;
  }
  .lazy-load-wrap{
    width: 100%;
    height: 100%;
  }
`;


const ImagesView = ({
  reviewId,
  images,
  handleImageClick,
}: Images) => (
  <Wrapper>
    <ImageRail
      imageList={images && images.map((image: string, index: number) => (
        {
          url: `${image}?tr=w-150,h-150,pr-true`,
          id: `${reviewId}-${index}`,
        }
      ))}
      totalImages={images?.length}
      handleClick={handleImageClick}
      itemClass={IMAGE_ITEM_CLASS}
      title=""
    />
  </Wrapper>
);

export default ImagesView;
