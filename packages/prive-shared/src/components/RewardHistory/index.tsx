import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import {
  normalColors,
  goldColors,
  platinumColors,
} from '../../constants/colorTokens';

type RewardHistoryProps = {
  tier: string;
  tabsText: string[];
  selectedTab: number;
  onTabClick: (id: number) => void;
};

const RewardHistoryStyle: any = {
  silver: `
    color:${normalColors.tabsTextColor}; 
    background:${normalColors.tabsBgColor};
    border-color: ${normalColors.tabsBorderColor};
    `,
  gold: `
    color:${goldColors.tabsTextColor}; 
    background:${goldColors.tabsBgColor};
    border-color: ${goldColors.tabsBorderColor};
    `,
  platinum: `
    color:${platinumColors.tabsTextColor}; 
    background:${platinumColors.tabsBgColor};
    border-color: ${platinumColors.tabsBorderColor};
    `,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
const TabsCnt = styled.div`
  display: flex;
  height: ${({ theme }) => theme.spacing.spacing160};
  border: ${({ theme }) => theme.borders.border100.borderWidth}
    ${({ theme }) => theme.borders.border100.borderStyle}
    ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
  border-radius: 20px;
  width: 100%;
`;
const Tab = styled.div<{ isActive: boolean; tier: string; copies: number }>`
  ${({ theme }) => theme.typography.bodyMedium}
  text-align: center;
  height: 100%;
  width: calc(100% / ${({ copies }) => copies});
  padding: ${({ theme }) => `${theme.spacing.spacing20} ${theme.spacing.spacing0}`};
  ${({ isActive, theme, tier }) => (
    isActive
      ? `${RewardHistoryStyle[tier]}
        border:${theme.borders.border100.borderWidth} ${theme.borders.border100.borderStyle};
        border-radius:20px;
      `
      : `color:${hexToRgb(theme.colors.textPrimary, 0.92)};`)}
`;

const RewardHistory = ({
  tier,
  tabsText,
  selectedTab,
  onTabClick,
}: RewardHistoryProps) => (
  <Wrapper>
    <TabsCnt>
      {tabsText.map((tabText, idx) => (
        <Tab
          onClick={() => {
            onTabClick(idx);
          }}
          tier={tier}
          copies={tabsText.length}
          isActive={selectedTab === idx}
        >
          {tabText}
        </Tab>
      ))}
    </TabsCnt>
  </Wrapper>
);

export default RewardHistory;
