import React from 'react';
import CrossIcon from '@eyewa/size-chart-shared/Icons/CrossIcon';
import { styled } from '@eyewa/ui-components';
import { closeSizeChart } from '../../utils';

interface HeaderProps {
  unSelectVariantOncloseChart: () => void;
  title: string;
}
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  ${({ theme }) => theme.typography.type360};
  padding-left: ${({ theme }) => theme.spacing.spacing120};
  padding-top: ${({ theme }) => theme.spacing.spacing80};
`;
const CloseButtonIcon = styled.span`
  cursor: pointer;
`;
const HeaderText = styled.div`
  ${({ theme }) => theme.typography.titleLarge};
  letter-spacing: -${({ theme }) => theme.typography.spacing300}px;
  padding-top: ${({ theme }) => theme.spacing.spacing60};
  padding-left: ${({ theme }) => theme.spacing.spacing120};
  text-transform: capitalize;
`;
const Header = ({ unSelectVariantOncloseChart, title }: HeaderProps) => (
  <>
    <CloseButton>
      <CloseButtonIcon onClick={() => closeSizeChart(unSelectVariantOncloseChart)}>
        <CrossIcon />
      </CloseButtonIcon>
    </CloseButton>
    <HeaderText>
      {title}
    </HeaderText>
  </>
);

export default Header;
