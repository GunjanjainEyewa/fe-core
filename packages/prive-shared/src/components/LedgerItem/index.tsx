import React, { FC } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';

const Wrapper = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
  text-transform: capitalize;
`;
const Amount = styled.div<{ amountColor: string }>`
  ${({ theme }) => theme.typography.subTitleLarge}
  color: ${({ amountColor }) => amountColor};
  margin-left: auto;
`;
const ItemStats = styled.div`
  display: flex;
  width: calc(100% - 50px);
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing120};
`;
const StatsItem = styled.div`
  ${({ theme }) => theme.typography.bodySmall}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  text-transform: capitalize;
`;
const StatsDot = styled.div`
  ${({ theme }) => theme.borders.border100};
  width: 4px;
  height: 4px;
  border-radius: ${({ theme }) => theme.borders.radiusFull};
  background: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  border-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  margin: 0px ${({ theme }) => theme.spacing.spacing20};
`;

type LedgerItemProps = {
  title: string;
  amount: number;
  amountColor: string;
  domain?: string;
  multiplier: number;
  reason: string;
  quantity?: number;
  date: string;
  isCredit: boolean;
  tier: string;
};

const LedgerItem: FC<LedgerItemProps> = ({
  title,
  amount,
  amountColor,
  domain,
  multiplier,
  reason,
  quantity,
  date,
  isCredit,
  tier,
}: LedgerItemProps) => (
  <Wrapper>
    <Content>
      <Title id="LedgerItem-title">{title}</Title>
      <Amount amountColor={amountColor} id="LedgerItem-amount">
        {`${isCredit ? '+' : '-'}${amount}`}
      </Amount>
    </Content>
    <ItemStats>
      {domain && (
        <>
          <StatsItem id="LedgerItem-domain">{domain}</StatsItem>
          <StatsDot />
        </>
      )}
      {multiplier && (
        <>
          <StatsItem id="LedgerItem-multiplier">{`${multiplier}x ${tier}`}</StatsItem>
          <StatsDot />
        </>
      )}
      {reason && (
        <>
          <StatsItem id="LedgerItem-reason">{reason}</StatsItem>
          <StatsDot />
        </>
      )}
      {quantity && (
        <>
          <StatsItem id="LedgerItem-quantity">{`Qty ${quantity}`}</StatsItem>
          <StatsDot />
        </>
      )}
      <StatsItem id="LedgerItem-date">{date}</StatsItem>
    </ItemStats>
  </Wrapper>
);

export default LedgerItem;
