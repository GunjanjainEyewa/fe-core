import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import VerifiedSvg from '../../Icons/verifiedSvg';
import ProSvg from '../../Icons/proSvg';
import { AVATAR, USER_INFO_CLASS, DEFAULT_VERIFIED_BUYER } from '../../constants';


interface UserProps {
  profilePic: string;
  name: string;
  isBuyer: boolean;
  customText?: string;
  isProUser?: boolean;
}
const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing80};
  background-color: ${({ theme }) => theme.colors.white};
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  vertical-align: top;
  display: inline-block;
`;

const UserDescription = styled.div`
  display: inline-block;
  margin-left:10px;
  width: 165px;
  word-break: break-word;
`;

const UserName = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
  display: block;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
  margin: ${({ theme }) => theme.spacing.spacing20} 0;
`;

const UserType = styled.span`
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.52)};
`;

const UserIcon = styled.i`
  margin-right: ${({ theme }) => theme.spacing.spacing20};
  vertical-align: middle;
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
    stroke: ${({ theme }) => hexToRgb(theme.colors.primary, 0.22)};
  }
  svg circle {
    fill: ${({ theme }) => hexToRgb(theme.colors.primary, 0.22)};
  }
`;


const UserInfo = ({
  profilePic, name, isBuyer, customText = DEFAULT_VERIFIED_BUYER, isProUser,
}: UserProps) => {
  const icon = isProUser ? <ProSvg /> : <VerifiedSvg />;
  return (
    <Wrapper className={USER_INFO_CLASS}>
      <UserImg src={profilePic} alt={AVATAR} />
      <UserDescription>
        <UserName>
          {name}
        </UserName>
        {(isBuyer || isProUser)
      && (
      <UserType>
        <UserIcon>
          {icon}
        </UserIcon>
        {customText}
      </UserType>
      )}
      </UserDescription>
    </Wrapper>
  );
};

export default UserInfo;
