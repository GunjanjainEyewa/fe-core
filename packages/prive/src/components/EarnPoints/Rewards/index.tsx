import React from 'react';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { styled } from '@nykaa/ui-components';
import EarnPointsCard from '@nykaa/prive-shared/components/EarnPointsCard';
import { normalColors, goldColors, platinumColors } from '@nykaa/prive-shared/constants/colorTokens';
import NormalShop from '@nykaa/prive-shared/Icons/NormalShop';
import GoldShop from '@nykaa/prive-shared/Icons/GoldShopIcon';
import PlatinumShop from '@nykaa/prive-shared/Icons/PlatinumShop';
import { tierNames } from '@nykaa/prive-shared/constants';
import Button, { KIND, SIZE, SHAPE } from '@nykaa/ui-components/Button';
import TierBar from '@nykaa/prive-shared/components/TierBar';
import Arrow from '@nykaa/prive-shared/Icons/Arrow';
import { getImgElementFromUrl } from '@nykaa/prive-shared/utils';
import { tierEarnBgUrlMap } from '@nykaa/prive-shared/constants';


const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.92)};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  letter-spacing: ${({ theme }) => theme.typography.spacing75}px;
`;

const Card = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing120};
  width: auto;
  padding: ${({ theme }) => `${theme.spacing.spacing40} ${theme.spacing.spacing80}`};
  background: ${({ theme }) => theme.colors.snow200};
  border-radius: ${({ theme }) => theme.borders.radius30};
`;

const BottomLine = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
`;
const ActionButton = styled(Button)`
  ${({ theme }) => theme.typography.buttonMedium}
  margin-top: 9px;
  padding-left: ${({ theme }) => theme.spacing.spacing10};
  padding-right: ${({ theme }) => theme.spacing.spacing10};
  background-color: transparent;
  &:hover {
    &::before {
      background-color: transparent;
    }
  }
`;

const ArrowButton = styled.i<{ disabled: boolean }>`
  vertical-align: middle;
  margin-left: ${({ theme }) => theme.spacing.spacing40};
  ${({ disabled, theme }) => disabled && `
    svg path {
      fill: ${hexToRgb(theme.colors.textPrimary, 0.36)};
  `}
`;

export interface EarnPointProps {
  title: string;
  summary: string;
  isCollapsible: boolean;
  children?: JSX.Element;
}


const Reward = (props: any) => {
  const {
    tierName, currentAmount, maxAmount,
    handleBdClick, handleShopClick, birthdayCTA,
    birthdayCTADisabled, defaultExpanded,
    goldTierAmount, silverTierAmount, platinumTierAmount,
  } = props;
  let reviewUrl = null;
  let titleColor = '#964D5D';
  let earnBgUrl = null;
  const tierData: any = {
    tiers: [],
    viewOnly: false,
    currentAmount,
    maxAmount,
    tierRangeColor: ['#680435', '#EA7487'],
  };
  switch (tierName) {
    case tierNames.silver:
      reviewUrl = <NormalShop />;
      titleColor = normalColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.silver.large, altText: 'earn-bg-url' });
      tierData.tierRangeColor = [normalColors.tierBarFillColor1, normalColors.tierBarFillColor2];
      tierData.tiers = [{
        amount: silverTierAmount,
        name: 'silver',
        textShown: '1x MemberShip',
        color: [normalColors.tierBarFillColor1, normalColors.tierBarFillColor2],
      },
      {
        amount: goldTierAmount,
        name: 'gold',
        textShown: '1.5x Gold',
        textColor: hexToRgb('#001325', 0.36),
        color: [hexToRgb('#66677D', 0.30), hexToRgb('#AAACCC', 0.30)],
      }];
      break;
    case tierNames.gold:
      reviewUrl = <GoldShop />;
      titleColor = goldColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.gold.large, altText: 'earn-bg-url' });
      tierData.tierRangeColor = [goldColors.tierBarFillColor1, goldColors.tierBarFillColor2];
      tierData.tiers = [{
        amount: goldTierAmount,
        name: 'gold',
        textShown: '1.5x Gold',
        color: [goldColors.tierBarFillColor1, goldColors.tierBarFillColor2],
      },
      {
        amount: platinumTierAmount,
        name: 'platinum',
        textShown: '2x Platinum',
        textColor: hexToRgb('#001325', 0.36),
        color: [hexToRgb('#66677D', 0.30), hexToRgb('#AAACCC', 0.30)],
      }];
      break;
    case tierNames.platinum:
      reviewUrl = <PlatinumShop />;
      titleColor = platinumColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.platinum.large, altText: 'earn-bg-url' });
      tierData.tierRangeColor = [
        platinumColors.tierBarFillColor1, platinumColors.tierBarFillColor2,
      ];
      tierData.tiers = [
        {
          amount: platinumTierAmount,
          name: 'platinum',
          textShown: '2x Platinum',
          color: [platinumColors.tierBarFillColor1, platinumColors.tierBarFillColor2],
        }];
      break;
    default:
      reviewUrl = <NormalShop />;
      titleColor = normalColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.silver.large, altText: 'earn-bg-url' });
      tierData.tiers = [{
        amount: 1,
        name: 'silver',
        textShown: '1x MemberShip',
      },
      {
        amount: 2,
        name: 'gold',
        textShown: '1.5x Gold',
      }];
      break;
  }
  return (
    <EarnPointsCard
      title="Shop"
      summary=""
      isCollapsible
      reviewUrl={reviewUrl}
      titleColor={titleColor}
      earnBgUrl={earnBgUrl}
      defaultExpanded={defaultExpanded}
    >
      <>
        <>
          <Title>
            Multiply your Reward Points
          </Title>
          <Card>
            <TierBar
              tiers={tierData.tiers}
              viewOnly={false}
              currentAmount={currentAmount}
              maxAmount={maxAmount}
              color={tierData.tierRangeColor}
              showTooltip={false}
            />
            <BottomLine />
            <ActionButton
              kind={KIND.tertiary}
              size={SIZE.small}
              shape={SHAPE.default}
              onClick={() => handleShopClick}
              id="LedgerItem-actionbtn-text"
            >
              <>
                Shop Now
                <ArrowButton disabled={birthdayCTADisabled}><Arrow /></ArrowButton>
              </>
            </ActionButton>
          </Card>
        </>
        <>
          <Title>
            Birthday Month
          </Title>
          <Card>
            <TierBar
              tiers={tierData.tiers}
              viewOnly={false}
              currentAmount={currentAmount}
              maxAmount={maxAmount}
              color={tierData.tierRangeColor}
              showTooltip={false}
            />
            <BottomLine />
            <ActionButton
              kind={KIND.tertiary}
              size={SIZE.small}
              shape={SHAPE.default}
              onClick={() => handleBdClick()}
              disabled={birthdayCTADisabled}
              id="LedgerItem-actionbtn-text"
            >
              <>
                {birthdayCTA}
                <ArrowButton disabled={birthdayCTADisabled}><Arrow /></ArrowButton>
              </>
            </ActionButton>
          </Card>
        </>
      </>

    </EarnPointsCard>
  );
};

export default Reward;
