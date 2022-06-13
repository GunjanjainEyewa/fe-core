import React from 'react';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { styled } from '@eyewa/ui-components';
import TierBar from '../TierBar';
import { normalColors, goldColors, platinumColors } from '../../constants/colorTokens';
import { TierProps } from '../../types';

interface JourneyProps {
  tierName: string;
  expiryDate: string;
  upgradeAmount: number;
  retainAmount: number;
  spentAmount: number;
  goldTierAmount: number;
  silverTierAmount: number;
  platinumTierAmount: number;
}

const JourneyWrap = styled.div<{backgroundColor: string}>`
  padding: 1.25rem 0;
  ${({ theme }) => theme.borders.border100}; 
  border-color: ${({ theme }) => theme.colors.textDecorative};
  border-radius: ${({ theme }) => theme.borders.radius30}; 
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const JourneyContent = styled.div`
  padding: 0 1.25rem;
  width: 100%;
`;

const PriveHead = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.92)};
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};
`;

const PriveDesc = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
`;

const JourneyProgress = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  margin-top: ${({ theme }) => theme.spacing.spacing80};
`;


const JourneyCard: React.FunctionComponent<JourneyProps> = ({
  tierName,
  expiryDate,
  upgradeAmount,
  retainAmount,
  spentAmount,
  goldTierAmount,
  platinumTierAmount,
  silverTierAmount,
}: JourneyProps) => {
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
  let description;
  let color = [normalColors.tierBarFillColor1, normalColors.tierBarFillColor2];
  let backgroundColor;
  switch (tierName) {
    case 'silver':
      description = `Shop for ₹${upgradeAmount} more before ${expiryDate} to retain Prive Gold`;
      color = [normalColors.tierBarFillColor1, normalColors.tierBarFillColor2];
      backgroundColor = `linear-gradient(28.14deg, ${hexToRgb(normalColors.journeyCardBgColor1, 0.4)} -27.69%, ${hexToRgb(normalColors.journeyCardBgColor2, 0.4)} 62.39%)`;
      break;
    case 'gold':
      description = `Shop for ₹${upgradeAmount} more before ${expiryDate} to upgrade to Prive Platinum `;
      color = [goldColors.tierBarFillColor1, goldColors.tierBarFillColor2];
      backgroundColor = `linear-gradient(28.14deg, ${hexToRgb(goldColors.journeyCardBgColor1, 0.4)} -27.69%, ${hexToRgb(goldColors.journeyCardBgColor2, 0.4)} 62.39%)`;
      break;
    case 'platinum':
      description = `Shop for ₹${retainAmount} more before ${expiryDate} to retain Prive Platinum membership`;
      color = [platinumColors.tierBarFillColor1, platinumColors.tierBarFillColor2];
      backgroundColor = hexToRgb(platinumColors.journeyCardBgColor, 0.3);
      break;
    default:
      description = '';
      break;
  }
  return (
    <JourneyWrap backgroundColor={backgroundColor}>
      <JourneyContent>
        <PriveHead>Your Prive Journey</PriveHead>
        <PriveDesc>{description}</PriveDesc>
      </JourneyContent>
      <JourneyProgress>
        <TierBar
          tiers={tierArray}
          viewOnly={false}
          currentAmount={spentAmount}
          maxAmount={platinumTierAmount}
          color={color}
          showTooltip
          tierName={tierName}
        />
      </JourneyProgress>
    </JourneyWrap>
  );
};

export default JourneyCard;
