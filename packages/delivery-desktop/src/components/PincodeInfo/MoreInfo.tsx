import React from 'react';
import InfoIcon from '@eyewa/delivery-shared/Icons/InfoIcon';
import { styled } from '@eyewa/ui-components';
import { MORE_INFO_CLASS } from '@eyewa/delivery-shared/constants';
import ToolTip from '../ToolTip';


interface MoreInfoProps {
  message: string;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.typography.buttonMedium};
  cursor: help;
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  &: hover {
    .${MORE_INFO_CLASS} {
      visibility: visible;
      margin-left: -100px;
      margin-bottom: ${({ theme }) => theme.spacing.spacing40};
      ${({ theme }) => theme.typography.bodyMedium};
    }
  }
`;
const MoreInfoText = styled.span`
  ${({ theme }) => theme.typography.buttonMedium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MoreInfo = ({ message }: MoreInfoProps) => (
  <Wrapper>
    <InfoIcon />
    <MoreInfoText>
      &nbsp;More Info
    </MoreInfoText>
    <ToolTip
      message={message}
      contentClass={MORE_INFO_CLASS}
    />
  </Wrapper>
);

export default MoreInfo;
