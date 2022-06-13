import React, { FC } from 'react';
import { Tabs, Tab } from '@eyewa/ui-components/Tabs';
import NormalCrown from '../../Icons/NormalCrown';
import NormalCoin from '../../Icons/NormalCoin';
import GoldCrown from '../../Icons/GoldCrown';
import GoldCoin from '../../Icons/GoldCoin';
import PlatinumCrown from '../../Icons/PlatinumCrown';
import PlatinumCoin from '../../Icons/PlatinumCoin';

type PriveTabsProps = {
  tierName: string;
  defaultTab: string;
  tabSwitchCb: (args0: string) => any;
};

const PriveTabs: FC<PriveTabsProps> = ({
  tierName,
  defaultTab = 'member',
  tabSwitchCb,
}: PriveTabsProps) => {
  const handleTabClick = (id: string) => {
    tabSwitchCb(id);
  };
  let tabIcon1;
  let tabIcon2;
  let tab1Text;
  // let tabColor;
  switch (tierName) {
    case 'silver':
      // tabColor = normalColors.tabsTextColor;
      tabIcon1 = NormalCrown;
      tabIcon2 = NormalCoin;
      tab1Text = 'Prive Member';
      break;
    case 'gold':
      // tabColor = goldColors.tabsTextColor;
      tabIcon1 = GoldCrown;
      tabIcon2 = GoldCoin;
      tab1Text = 'Gold Member';
      break;
    case 'platinum':
      // tabColor = platinumColors.tabsTextColor;
      tabIcon1 = PlatinumCrown;
      tabIcon2 = PlatinumCoin;
      tab1Text = 'Platinum Member';
      break;
    default:
      break;
  }
  return (
    <>
      <Tabs
        size="medium"
        changeHandler={handleTabClick}
        fitted
        selected={defaultTab}
      >
        <Tab id="member" label={tab1Text} icon={tabIcon1} />
        <Tab id="rewardPoints" label="Reward Points" icon={tabIcon2} />
      </Tabs>
    </>
  );
};

export default PriveTabs;
