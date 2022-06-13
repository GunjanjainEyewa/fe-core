export interface TierBarProps {
  tiers: TierProps[];
  currentAmount: number;
  viewOnly?: boolean;
  maxAmount: number;
  color: string[];
  showTooltip?: boolean;
  tierName?: string;
}

export interface TierProps {
  amount: number;
  color?: string[];
  textColor?:string;
  name: string;
  isMarked?: boolean;
  max?: number;
  textShown?: string;
  maxAmount?: number;
  subText?: string;
  tierName?: string;
}
