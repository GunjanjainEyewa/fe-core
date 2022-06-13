import React from 'react';
import { styled } from '@nykaa/ui-components';
import TierMarker from './TierMarker';
import getMarkerPos from '../../utils';
import { TierBarProps } from '../../types';


const TierWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing160} 0;
  display: flex;
  align-items: center;
`;

const BaseRange = styled.div`
  width: 100%;
  height: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.snow600};
`;

const Spike = styled.div<{ color: string }>`
  height: 16px;
  width: 2px;
  background: ${({ color }) => color};
`;
// TODO: background color

const CoveredRange = styled.div<{ colorGradStart: string, colorGradEnd: string, width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}%;
  height: 8px;
  transition: width .5s linear;
  background-image: linear-gradient(to right, ${({ colorGradStart }) => colorGradStart}, ${({ colorGradEnd }) => colorGradEnd});
  z-index: 1;
`;

const Tooltip = styled.div<{ colorGradStart: string, colorGradEnd: string, width: number }>`
  ${({ theme }) => theme.typography.labelSmall};
  position: absolute;
  bottom: 1.25rem;
  background-image: linear-gradient(to right, ${({ colorGradStart }) => colorGradStart}, ${({ colorGradEnd }) => colorGradEnd});
  z-index: 1;
  color: #fff;
  padding: ${({ theme }) => theme.spacing.spacing20} ${({ theme }) => theme.spacing.spacing40};
  border-radius: ${({ theme }) => theme.borders.radius20};
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    bottom: -7px;
  }
  &.normal {
    left: ${({ width }) => width}%;
    &::after {
      left: 0;
      bottom: -5px;
      border-top: 7px solid ${({ colorGradStart }) => colorGradStart};
    }
  }
  &.gold {
    left: ${({ width }) => width - 15}%;
    &::after {
      left: 45%;
      border-top: 7px solid ${({ colorGradStart }) => colorGradStart};
    }
  }
  &.platinum {
    right: 0;
    &::after {
      right: 0;
      bottom: -5px;
      border-top: 7px solid ${({ colorGradEnd }) => colorGradEnd};
    }
  }
`;

const TierBar: React.FunctionComponent<TierBarProps> = (props: TierBarProps) => {
  const {
    tiers,
    currentAmount,
    maxAmount,
    color,
    showTooltip = false,
    tierName,
  } = props;

  const calculatedWidth = getMarkerPos(currentAmount, maxAmount);
  return (
    <TierWrapper>
      <Spike color={color[0]} />
      <BaseRange>
        <CoveredRange width={calculatedWidth} colorGradStart={color[0]} colorGradEnd={color[1]} />
        {showTooltip && (
        <Tooltip
          className={tierName}
          width={calculatedWidth}
          colorGradStart={color[1]}
          colorGradEnd={color[0]}
        >
          YOU’RE HERE
        </Tooltip>
        )}
        {tiers?.map((tier) => (
          <TierMarker
            isMarked={tier.amount <= currentAmount}
            amount={tier.amount}
            name={tier.name}
            key={`tier_${tier.name}`}
            maxAmount={maxAmount}
            textShown={tier.textShown}
            textColor={tier.textColor}
            subText={tier.subText}
            tierName={tierName}
            color={tier.color}
          />
        ))}
      </BaseRange>
    </TierWrapper>
  );
};

export default TierBar;
