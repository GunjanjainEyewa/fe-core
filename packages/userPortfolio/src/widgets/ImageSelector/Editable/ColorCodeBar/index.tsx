import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ImageViewerProps } from '../../../../types/ImageSelector';
import { applyTransitionPalate } from '../../../../helpers/ImageSelector';
import { OptionData } from '../../../../types';
import {
  LTR_DIRECTION,
  RTL_DIRECTION,
  PALATE_SLIDER_ID,
  SINGLE_PALATE_ID,
} from '../../../../constants';

const MainWrapper = styled.div`
  display: flex;
  margin-left: 75px;
  overflow: scroll;
  border-radius: 10px 0px 0px 10px;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorWrapper = styled.div`
  padding-right: 5px;
  display: flex;
`;
const ColorPallate = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.color};
`;

const Category = styled.div`
  align-self: center;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const ContentImage = styled.img`
  position: absolute;
  top: 0;
  left: 10px;
`;


const ImageSelector = (props: ImageViewerProps) => {
  const {
    options,
    activeImage,
    previousImage,
    handleImageSelect,
  } = props;

  const getDirection = () => {
    if (previousImage < activeImage) {
      return LTR_DIRECTION;
    }
    return RTL_DIRECTION;
  };

  useEffect(() => {
    const direction = getDirection();
    const indexValue = Math.abs(activeImage - previousImage);
    applyTransitionPalate(indexValue, direction);
  }, [activeImage]);

  const uniqueCategories = [...new Set(options && (
    options.map((option: OptionData) => option.category)))];

  if (!(uniqueCategories && (uniqueCategories.length > 0))) {
    return null;
  }

  return (
    <MainWrapper id={PALATE_SLIDER_ID}>
      { uniqueCategories.map((catValue) => {
        const sameCatValues = options && (
          options.filter((option: OptionData) => option.category === catValue)
        );
        if (sameCatValues && (sameCatValues.length > 0)) {
          return (
            <Wrapper>
              <ColorWrapper>
                {
                sameCatValues.map((catData: OptionData) => (
                  <ContentWrapper id={SINGLE_PALATE_ID}>
                    {((catData.keyIndex - 1) === activeImage) && (
                      <ContentImage
                        src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Foundation-Finder/arrow.png"
                        alt="arrow-down"
                      />
                    )}
                    <ColorPallate
                      color={catData.color}
                      onClick={() => handleImageSelect(catData.keyIndex - 1)}
                    />
                  </ContentWrapper>
                ))
                }
              </ColorWrapper>
              <Category>
                {catValue}
              </Category>
            </Wrapper>
          );
        }
        return null;
      })}
    </MainWrapper>
  );
};

export default ImageSelector;
