import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';

interface TitleProps {
  title: string;
  subTitle: string;
  actionUrl?: string;
}
const TitleContainer = styled.div`
  ${({ theme }) => theme.typography.subTitleLarge};
  margin: 0;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;

const AnchorTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AnchorTitle = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;
const VisitStore = styled.a`
  ${({ theme }) => theme.typography.subTitleMedium};
  display: inline-block;
  color: ${({ theme }) => theme.colors.salmon500};
  text-align: right;
  text-transform: capitalize;
  width: 110px;
`;
const TextTitle = styled.span`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};
`;
const SubTitle = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  margin-bottom: ${({ theme }) => theme.spacing.spacing60};
`;
function Title({ title, subTitle, actionUrl }: TitleProps) {
  const BRAND_TITLE = actionUrl ? (
    <AnchorTitleContainer>
      <AnchorTitle href={actionUrl}>{title}</AnchorTitle>
      <VisitStore href={actionUrl}>Visit Store</VisitStore>
    </AnchorTitleContainer>
  ) : (
    <TextTitle>{title}</TextTitle>
  );

  return (
    <TitleContainer>
      {title && BRAND_TITLE}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </TitleContainer>
  );
}

export default memo(Title);
