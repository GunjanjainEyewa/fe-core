import React, { useState } from 'react';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { styled } from '@nykaa/ui-components';
import ArrowIcon from '../../Icons/ArrowIcon';

export interface EarnPointProps {
  title: string;
  summary: string;
  isCollapsible: boolean;
  reviewUrl: JSX.Element;
  children?: JSX.Element;
  earnBgUrl: JSX.Element;
  titleColor: string;
  defaultExpanded?: boolean;
}

// background: url(${ShopBackground}) no-repeat;
// UPDATE: border and border-color with tokens

const Wrapper = styled.div`
  position: relative;
  width: auto;
  border: 0.5px solid;
  border-radius: ${({ theme }) => theme.borders.radius30};
  border-color: #D9DBDD;
  padding-bottom: ${({ theme }) => theme.spacing.spacing120};
  margin: ${({ theme }) => theme.spacing.spacing80} 1.25rem 0;
  &.expanded {
    padding-bottom: 0;
  }
`;

const HeadCtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: align-items 0.2s ease-in-out;
  width: 100%;
  top: 12px;
  padding: 0 ${({ theme }) => theme.spacing.spacing80};
  img {
    flex: none;
    height: 32px;
  }
`;

const HeadCtnBg = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  z-index: 0;
  width: 100%;
  height: 66px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HeadContent = styled.div`
  margin-left: ${({ theme }) => theme.spacing.spacing80};
  flex: auto;
  align-self: center;
  &.expanded {
    align-self: center;
  }
`;

const HeadTitle = styled.div<{ titleColor: string }>`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ titleColor }) => titleColor};
`;

const HeadSummary = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
`;

const Icon = styled.i`
  svg {
    height: 20px;
    width: 20px;
    transition: transform 0.2s ease-in-out;
  }
  align-self: flex-start;
  flex: none;
  padding: 0 ${({ theme }) => theme.spacing.spacing10};
  flex: none;
  cursor: pointer;
  &.expanded {
    margin: auto;
    align-self: baseline;
    svg {
      transform: rotate(180deg);
    }
  }
`;

const ChildrenCtn = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing160};
  transition: max-height 0.2s ease-in-out;
  max-height: 0px;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.spacing.spacing80};
  &.expanded {
    max-height: 800px;
    overflow: visible;
  }
`;

const EarnPointCard: React.FunctionComponent<EarnPointProps> = (
  props: EarnPointProps,
) => {
  const {
    title,
    summary,
    isCollapsible,
    reviewUrl,
    children,
    titleColor,
    earnBgUrl,
    defaultExpanded = false,
  } = props;

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleArrow = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Wrapper className={isExpanded ? 'expanded' : ''}>
      <HeadCtnBg>{earnBgUrl}</HeadCtnBg>
      <>
        <HeadCtn>
          <i>{reviewUrl}</i>
          <HeadContent className={isExpanded ? 'expanded' : ''}>
            <HeadTitle titleColor={titleColor}>{title}</HeadTitle>
            {!isExpanded && <HeadSummary>{summary}</HeadSummary>}
          </HeadContent>
          {isCollapsible ? (
            <Icon
              className={isExpanded ? 'expanded' : ''}
              onClick={toggleArrow}
            >
              <ArrowIcon />
            </Icon>
          ) : null}
        </HeadCtn>
      </>
      {children && isCollapsible && isExpanded ? (
        <ChildrenCtn className={isExpanded ? 'expanded' : ''}>
          {children}
        </ChildrenCtn>
      ) : null}
    </Wrapper>
  );
};

export default EarnPointCard;
