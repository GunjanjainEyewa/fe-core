import React from 'react';
import { styled } from '@nykaa/ui-components';

interface HeaderProps {
  title: string|JSX.Element;
  chartTitle?: string;
  onClick?: () => void;
}
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChartTitle = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.typography.buttonMedium};
`;
ChartTitle.displayName = 'ChartTitle';

const Title = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ theme }) => theme.typography.subTitleMedium};
`;
Title.displayName = 'Title';

const Header = ({ title, chartTitle, onClick }: HeaderProps) => (
  <Head className="text">
    <Title>{title}</Title>
    {chartTitle && <ChartTitle onClick={onClick}>{chartTitle}</ChartTitle>}
  </Head>
);

export default Header;
