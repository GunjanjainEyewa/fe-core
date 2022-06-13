import React from 'react';
import { styled } from '@eyewa/ui-components';

import BasicInfo from './BasicInfo';
import ShimmerImage from './DefaultIcon';
import { UserInfoProps } from '../../types/CheckboxWidget';


const Wrapper = styled.div`
  background: #fff;
  border: 1px solid rgba(234, 145, 132, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 16px 0px 24px;
`;

const UserInfoWrapper = styled.div`
  padding: 17px 16px;
  display: flex;
`;

const Image = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  vertical-align: top;
  display: inline-block;
`;

const Description = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 60%;
`;

const Name = styled.span`
  display: block;
  ${({ theme }) => theme.typography.titleSmall};
  color: #001325;
  margin: 4px 0;
  text-transform: capitalize;
`;

const Date = styled.div`
  float: right;
  ${({ theme }) => theme.typography.bodySmall};
  color: #657786;
  margin-top: 4px;
`;

const Shimmer = styled.div`
  padding: 8px 16px 16px;
`;

interface UserProps {
  profilePic: string;
  name: string;
  createdOnText: string;
  userInfo: UserInfoProps[];
  skinTone?: string;
  skinType?: string;
  hairType?: string[]|[];
}
const UserInfo = (props: UserProps) => {
  const {
    profilePic, name,
    createdOnText, userInfo,
  } = props;
  return (
    <Wrapper>
      <UserInfoWrapper>
        <Image src={profilePic} alt="avatar" />
        <Description>
          <Name>
            {name}
          </Name>
        </Description>
        <Date>
          {createdOnText}
        </Date>
      </UserInfoWrapper>
      <BasicInfo
        userInfo={userInfo}
      />
      <Shimmer>
        <ShimmerImage />
      </Shimmer>
    </Wrapper>
  );
};

export default UserInfo;
