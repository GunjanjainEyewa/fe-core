import React, { useState } from 'react';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { styled } from '@nykaa/ui-components';
import ArrowIcon from '../../Icons/ArrowIcon';


interface SummaryProps {
  isCollapsible: boolean;
  defaultExpanded?: boolean;
  title: string;
  description: string;
}

const Wrapper = styled.div`
  border-bottom: 0.5px solid ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.16)};
  &.border-none {
    border-bottom: 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.92)};
  margin-top: ${({ theme }) => theme.spacing.spacing40};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  .title {
    ${({ theme }) => theme.typography.subTitleMedium};
  }
`;

const Icon = styled.i`
  svg {
    transition: transform .2s linear;
  }
  padding: ${({ theme }) => theme.spacing.spacing10};
  align-self: center;
  cursor: pointer;
  &.expanded {
    svg { 
      transform: rotate(180deg);
    }
  }
`;

const Description = styled.div`
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
  ${({ theme }) => theme.typography.bodyMedium};
  padding-bottom: ${({ theme }) => theme.spacing.spacing80};
`;


const SummaryLayout: React.FunctionComponent<SummaryProps> = (props: SummaryProps) => {
  const {
    isCollapsible,
    defaultExpanded,
    title,
    description,
  } = props;

  const [isExpanded, setIsExpanded] = useState(isCollapsible ? defaultExpanded : true);

  const toggleArrow = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Wrapper className={!isCollapsible ? 'border-none' : ''}>
      <Title>
        <div className="title">{title}</div>
        {isCollapsible && (
          <Icon className={isExpanded ? 'expanded' : ''} onClick={toggleArrow}>
            <ArrowIcon />
          </Icon>
        )}
      </Title>
      {isExpanded && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default SummaryLayout;
