import React, { FC } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import SummaryLayout from '../SummaryLayout';

const FaqListWrapper = styled.div``;
const FaqListTitle = styled.div`
  margin-bottom: 3px;
  ${({ theme }) => theme.typography.titleSmall}
  color:${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;
const FaqListContent = styled.div``;

type FaqListProps = {
  title: string;
  faqList: Array<{ title: string; description: string }>;
};

const FaqList: FC<FaqListProps> = ({ title, faqList }: FaqListProps) => (
  <FaqListWrapper>
    <FaqListTitle>{title}</FaqListTitle>
    <FaqListContent>
      {faqList.map(
        (faqObj: { title: string; description: string }, index: number) => (
          <SummaryLayout
            isCollapsible
            defaultExpanded={!index}
            title={faqObj.title}
            description={faqObj.description}
          />
        ),
      )}
    </FaqListContent>
  </FaqListWrapper>
);

export default FaqList;
