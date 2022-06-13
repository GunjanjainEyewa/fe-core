import React from 'react';
import { styled } from '@eyewa/ui-components';
import { TierProps } from '../../../types';
import CheckIcon from '../../../Icons/CheckIcon';
import getMarkerPos from '../../../utils';

const MarkerWrap = styled.div<{ left: number }>`
  position: absolute;
  top: -6px;
  left: calc(${({ left }) => left}% - 12px);
`;

const Marker = styled.div<{colors: string[]; }>`
  position: relative;
  width: 20px;
  height: 20px;
  z-index: 1;
  border-radius: ${({ theme }) => theme.borders.radiusFull};
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #680435, #EA7487);
  ${({ colors }) => (colors) && (`
    background: linear-gradient(to right, ${colors[0]}, ${colors[1]});
  `)};
`;

const MarkCenter = styled.div`
  height: 8px;
  width: 8px;
  border-radius: ${({ theme }) => theme.borders.radiusFull};
  background-color: ${({ theme }) => theme.colors.snow600};
`;

const MarkContent = styled.div`
  position: absolute;
  top: 100%;
  text-align: center;
  width: max-content;
`;

const MarkerShadow = styled.div<{ left: number; colors: string[]; }>`
  width: 30px;
  height:30px;
  ${({ colors }) => (colors) && (`
    background: linear-gradient(241.93deg, ${colors[0]} -12.5%, ${colors[1]} 98.91%);
  `)};
  opacity: 0.3;
  position: absolute;
  top: -11px;
  left: calc(33.333333333333336% - 17px);
  border-radius: ${({ theme }) => theme.borders.radiusFull};
`;

const Title = styled.div<{ textColor?:string }>`
${({ theme }) => theme.typography.subTitleMedium};
${({ textColor }) => (textColor ? `color: ${textColor};` : '')}
`;

const TierAmount = styled.div<{colors: string[]}>`
  ${({ theme }) => theme.typography.labelSmall};
  color: ${({ colors }) => colors[0]};
`;

const TierMarker: React.FunctionComponent<TierProps> = (props: TierProps) => {
  const {
    isMarked,
    amount,
    name,
    maxAmount,
    textShown,
    textColor,
    subText,
    color,
    tierName,
  } = props;

  // TODO: Expecting from remote config
  const posLeft: number = getMarkerPos(amount, maxAmount);

  return (
    <>
      <MarkerWrap left={posLeft}>
        <Marker className={name} colors={color}>
          {!isMarked ? <MarkCenter /> : <CheckIcon />}
          <MarkContent style={maxAmount === amount ? { right: 0 } : null}>
            {textShown && <Title textColor={textColor}>{textShown}</Title>}
            {subText && <TierAmount colors={color}>{subText}</TierAmount>}
          </MarkContent>
        </Marker>
      </MarkerWrap>
      {
        tierName
        && textShown.toLowerCase() === tierName
        && isMarked
        && <MarkerShadow left={posLeft} colors={color} />
      }
    </>
  );
};

export default TierMarker;
