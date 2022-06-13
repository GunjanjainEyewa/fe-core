import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';


interface ToolTipProps {
  message: string;
  contentClass: string;
}
const Content = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-radius: ${({ theme }) => theme.borders.radius10};
  border-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  visibility: hidden;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  border-radius: ${({ theme }) => theme.borders.radius20};
  position: absolute;
  z-index: 1;
  bottom: 100%;
  margin-left: -60px;
  box-shadow: 0px 4px 35px 0 rgb(0 0 0 / 20%);
  ${({ theme }) => theme.typography.bodyMedium};
  padding: ${({ theme }) => theme.spacing.spacing40} ${({ theme }) => theme.spacing.spacing80};
  &::before{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.22)} transparent transparent transparent;
  }
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -9px;
    border-width: 9px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.white} transparent transparent transparent;
  }
`;

const ToolTip = ({ message, contentClass }: ToolTipProps) => (
  <Content className={contentClass}>
    {message}
  </Content>
);

export default ToolTip;
