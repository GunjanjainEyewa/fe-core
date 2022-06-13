import React, { FC } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import WorkCard from '../WorkCard';
import TierBar from '../TierBar';
import { TierProps } from '../../types';
import { guideConfig } from '../../constants';
import {
  normalColors,
  goldColors,
  platinumColors,
} from '../../constants/colorTokens';


export type GuideConfigArrItemType = {
  icon?: () => JSX.Element;
  imgUrl?: string;
  title: string;
  description: string;
};

type WorkingGuideProps = {
  title: string;
  upgradeAmt: string;
  tierStartPrices?:string[];
  tierName: string,
  silverTierAmount: number,
  goldTierAmount: number,
  platinumTierAmount: number,
};

const WorkingGuideWrapper = styled.div``;
const WorkingGuideTitle = styled.div`
  ${({ theme }) => theme.typography.titleMedium}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  margin-bottom: 28px;
`;
const WorkingGuideContent = styled.div``;
const WorkingGuideTierBarCnt = styled.div`
  height: 104px;
  background: linear-gradient(
    28.14deg,
    rgba(255, 234, 244, 0.4) -27.69%,
    rgba(255, 243, 245, 0.4) 62.39%
  );
  padding: 1px 13px 22px 9px;
  border: 1px solid ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.08)};
  border-radius: ${({ theme }) => theme.spacing.spacing40};
`;

const getDynamicGuideConfig = (
  guideConfigArr: Array<GuideConfigArrItemType>,
  upgradeAmt: string,
) => guideConfigArr.map((guideObj: GuideConfigArrItemType) => {
  if (guideObj.title === 'Easy to Join') {
    return {
      ...guideObj,
      description: `Shop for ₹${upgradeAmt} in a year & become a Prive member`,
    };
  }
  return guideObj;
});

const getDynamicTierArray = (
  _tierArray: TierProps[],
  tierStartPrices: string[],
) => {
  if (!tierStartPrices) return _tierArray;
  return _tierArray.map((tierObj, idx) => {
    if (tierStartPrices[idx]) {
      return { ...tierObj, textShown: `@ ₹${tierStartPrices[idx]}` };
    }
    return tierObj;
  });
};

const WorkingGuide: FC<WorkingGuideProps> = ({
  title,
  upgradeAmt,
  tierStartPrices,
  tierName,
  silverTierAmount,
  goldTierAmount,
  platinumTierAmount,
}: WorkingGuideProps) => {
  const tierArray: TierProps[] = [
    {
      amount: silverTierAmount,
      name: tierName,
      textShown: 'Normal',
      color: [normalColors.tierBarFillColor1, normalColors.tierBarFillColor2],
      subText: `@ ₹${silverTierAmount}`,
    },
    {
      amount: goldTierAmount,
      name: tierName,
      textShown: 'Gold',
      color: [goldColors.tierBarFillColor1, goldColors.tierBarFillColor2],
      subText: `@ ₹${goldTierAmount}`,
    },
    {
      amount: platinumTierAmount,
      name: tierName,
      textShown: 'Platinum',
      color: [platinumColors.tierBarFillColor1, platinumColors.tierBarFillColor2],
      subText: `@ ₹${platinumTierAmount}`,
    },
  ];

  const dynamicGuideConfig = getDynamicGuideConfig(guideConfig, upgradeAmt);
  const dynamicTierArray = getDynamicTierArray(tierArray, tierStartPrices);

  return (
    <WorkingGuideWrapper>
      <WorkingGuideTitle>{title}</WorkingGuideTitle>
      <WorkingGuideContent>
        {dynamicGuideConfig.map((guideObj, index: number) => (
          <>
            <WorkCard
              icon={guideObj.icon}
              imgUrl={guideObj.imgUrl}
              title={guideObj.title}
              description={guideObj.description}
            />
            {!index && (
              <WorkingGuideTierBarCnt>
                <TierBar
                  tiers={dynamicTierArray}
                  viewOnly={false}
                  currentAmount={0}
                  maxAmount={15000}
                  color={[
                    normalColors.tierBarFillColor1,
                    normalColors.tierBarFillColor2,
                  ]}
                />
              </WorkingGuideTierBarCnt>
            )}
          </>
        ))}
      </WorkingGuideContent>
    </WorkingGuideWrapper>
  );
};

export default WorkingGuide;
