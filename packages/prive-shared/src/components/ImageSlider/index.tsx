import React, { FC, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import ImageSliderContent from './ImageSliderContent';
import { benefitsSliderConfig } from '../../constants';

type ImageSliderProps = {
  tier: string;
  imgList: Array<string>;
  transTime?: number; // in ms
  upgradeBtnText: string;
  handleClick: (args0: any) => any;
};

const sliderTransitionType = {
  reset: '',
  left: 'transform:translateX(-50vw)',
  right: 'transform:translateX(50vw)',
};

const ImageSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  background: ${({ theme }) => theme.colors.snow200};
  padding: 0px 1.25rem ${({ theme }) => theme.spacing.spacing120};
  overflow: hidden;
`;

const ImageSliderHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.spacing160};
`;
const ImageSliderTitle = styled.div`
  ${({ theme }) => theme.typography.labelSmall}
  margin-bottom:${({ theme }) => theme.spacing.spacing40};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
`;
const ImageSliderDescription = styled.div`
  ${({ theme }) => theme.typography.titleMedium}
  margin-bottom:21px;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;

const ImageSliderTile = styled.div<{ isActive: boolean }>`
  width: 24px;
  height: 2px;
  background: ${({ theme, isActive }) => hexToRgb(theme.colors.textPrimary, isActive ? 0.64 : 0.16)};
  mix-blend-mode: normal;
  border-radius: ${({ theme }) => theme.spacing.spacing10};
  margin: 0 ${({ theme }) => theme.spacing.spacing40};
`;

const ImageSliderTilesCnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 21px;
  margin-top: ${({ theme }) => theme.spacing.spacing120};
  z-index: 1;
  width: 100%;
`;

const ImageSlider: FC<ImageSliderProps> = ({
  tier,
  imgList,
  transTime = 300,
  upgradeBtnText,
  handleClick,
}: ImageSliderProps) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(
    benefitsSliderConfig[tier].defaultSlide,
  );
  const [transitionType, setTransitionType] = useState(
    sliderTransitionType.reset,
  );

  const applyTransition = (transitionTime: number, type: string) => {
    if (!transitionType) {
      setTransitionType(type);
      setTimeout(() => {
        setTransitionType(sliderTransitionType.reset);
      }, transitionTime);
    }
  };

  const onSwipedLeft = () => {
    applyTransition(transTime, sliderTransitionType.left);
    setTimeout(() => {
      setActiveSlideIdx(
        (prevSlideIdx: number) => (prevSlideIdx + 1) % imgList.length,
      );
    }, transTime);
  };

  const onSwipedRight = () => {
    applyTransition(transTime, sliderTransitionType.right);
    setTimeout(() => {
      setActiveSlideIdx(
        (prevSlideIdx: number) => (imgList.length + (prevSlideIdx - 1)) % imgList.length,
      );
    }, transTime);
  };

  return (
    <ImageSliderWrapper id="membership-benefits">
      <ImageSliderHeader>
        <ImageSliderTitle>{benefitsSliderConfig[tier].title}</ImageSliderTitle>
        <ImageSliderDescription>
          {benefitsSliderConfig[tier].description}
        </ImageSliderDescription>
      </ImageSliderHeader>
      <ImageSliderContent
        imgList={imgList}
        upgradeText={benefitsSliderConfig[tier].upgradeText}
        upgradeBtnText={upgradeBtnText}
        activeSlideIdx={activeSlideIdx}
        transitionType={transitionType}
        transTime={transTime}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        handleClick={handleClick}
      />
      <ImageSliderTilesCnt>
        {imgList.map((_, id) => (
          <ImageSliderTile isActive={id === activeSlideIdx} />
        ))}
      </ImageSliderTilesCnt>
    </ImageSliderWrapper>
  );
};

export default ImageSlider;
