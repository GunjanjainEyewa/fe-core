import React from 'react';
import { styled } from '@eyewa/ui-components';
import Ledgeritem from '../../LedgerItem';
import {
  normalColors,
  goldColors,
  platinumColors,
} from '../../../constants/colorTokens';

export type DataListItemType = {
  title: string;
  amount: number;
  domain: string;
  multiplier?: number;
  reason: string;
  quantity?: number;
  date: string;
};

interface RewardHistoryContentProps {
  tier: string;
  isCredit: boolean;
  dataList: Array<DataListItemType>;
}

const ledgerItemAmtColorMap: any = {
  silver: normalColors.ledgerItemAmountColor,
  gold: goldColors.ledgerItemAmountColor,
  platinum: platinumColors.ledgerItemAmountColor,
};

const domainMap: any = {
  NYKAA_POS_ENDLESS_AISLE: 'Endless Aisle',
  NYKAA_RETAIL: 'Retail',
};

const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing80};
`;

const RewardHistoryContent = ({
  tier,
  dataList = [],
  isCredit,
}: RewardHistoryContentProps) => (
  <Wrapper
    id="rewards-window"
  >
    {dataList.map((data) => (
      <Content>
        <Ledgeritem
          title={data.title}
          amount={data.amount}
          amountColor={ledgerItemAmtColorMap[tier]}
          isCredit={isCredit}
          domain={domainMap[data.domain]}
          multiplier={data.multiplier}
          reason={data.reason}
          quantity={data.quantity}
          date={data.date}
          tier={tier}
        />
      </Content>
    ))}
  </Wrapper>
);

export default RewardHistoryContent;
