import React, { FC } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { Swipeable } from 'react-swipeable';
import Button, { KIND, SHAPE, SIZE } from '@nykaa/ui-components/Button';

type ImageSliderContentProps = {
  imgList: Array<string>;
  activeSlideIdx: number;
  transitionType: string;
  transTime: number;
  upgradeText: string;
  upgradeBtnText: string;
  onSwipedLeft: (args0: any) => any;
  onSwipedRight: (args0: any) => any;
  handleClick: (args0: any) => any;
};

const ImageSlide = styled.img<{
  transitionType: string;
  transTime: number;
}>`
  transition: transform ${({ transTime }) => transTime}ms ease-in-out;
  ${({ transitionType }) => transitionType};
  width: 100%;
`;

const TierUpgradeCnt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.snow300};
  padding: ${({ theme }) => theme.spacing.spacing80} ${({ theme }) => theme.spacing.spacing120};
  border-radius: 0px 0px ${({ theme }) => theme.spacing.spacing40}
    ${({ theme }) => theme.spacing.spacing40};
`;

const TierUpgradeText = styled.div`
  ${({ theme }) => theme.typography.subTitleSmall};
  color:${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  margin-right: ${({ theme }) => theme.spacing.spacing10};
`;

const TierUpgradeBtn = styled(Button)`
  ${({ theme }) => theme.typography.buttonSmall}
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.snow100};
  white-space: nowrap;
  padding: ${({ theme }) => theme.spacing.spacing40} 0;
  width: 90px;
`;

const ImageSliderContent: FC<ImageSliderContentProps> = ({
  onSwipedLeft,
  onSwipedRight,
  imgList,
  activeSlideIdx,
  transitionType,
  transTime,
  upgradeText,
  upgradeBtnText,
  handleClick,
}: ImageSliderContentProps) => (
  <>
    <Swipeable
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
      delta={10}
      preventDefaultTouchmoveEvent={false}
      trackTouch
      trackMouse
      rotationAngle={0}
      style={{
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <ImageSlide
        src={imgList[activeSlideIdx]}
        transitionType={transitionType}
        transTime={transTime}
      />
    </Swipeable>
    <TierUpgradeCnt>
      <TierUpgradeText>{upgradeText}</TierUpgradeText>
      <TierUpgradeBtn
        kind={KIND.tertiary}
        size={SIZE.medium}
        shape={SHAPE.default}
        onClick={handleClick}
      >
        {upgradeBtnText}
      </TierUpgradeBtn>
    </TierUpgradeCnt>
  </>
);

export default ImageSliderContent;
