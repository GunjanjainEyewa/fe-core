import React from 'react';
import { styled } from '@eyewa/ui-components';
import { UserProps } from '@eyewa/image-viewer-shared/types';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import VerifiedSvg from './verifiedSvg';
import ProSvg from './proSvg';


const Wrap = styled.div`
  display: inline-block;
  width: 100%;
`;

const UserName = styled.span`
  display: block;
  ${({ theme }) => theme.typography.subTitleMedium};
  color: #ffffff;
  margin-top: 4px;
`;
const Label = styled.span`
  display: flex;
  margin-left: 4px;
`;

const UserType = styled.span`
  ${({ theme }) => theme.typography.bodyXSmall};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  vertical-align: middle;
  i {
    margin-right: 4px;
    svg {
      background: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    }
    svg path {
      fill: ${({ theme }) => theme.colors.primary};
      stroke: ${({ theme }) => hexToRgb(theme.colors.primary, 0.22)};
    }
    svg circle {
      fill: ${({ theme }) => hexToRgb(theme.colors.primary, 0.22)};
    }
  }
`;

const User: React.SFC<UserProps> = ({
  name, isBuyer, isProUser, customText,
}: UserProps) => {
  const icon = isProUser ? <ProSvg /> : <i><VerifiedSvg /></i>;
  return (
    <Wrap>
      <UserName>{name}</UserName>
      {(isBuyer || isProUser)
    && (
    <UserType>
      {icon}
      <Label>
        {customText}
      </Label>
    </UserType>
    )}
    </Wrap>
  );
};

export default User;
