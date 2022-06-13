import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import MembershipCard from '../../MembershipCard';


const LoggedWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
`;

// UPDATE: margin with token
const Content = styled.div`
  position: absolute;
  width: calc(100% - ${({ theme }) => theme.spacing.spacing200});
  margin: 0px 20px;
  z-index: 1;
  top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.spacing60};
`;
const Title = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;

const UserInfo = styled.div`
  display: flex;
  z-index: 1;
  ${({ theme }) => theme.typography.subTitleSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  img{
    width: 40px;
    height: 40px;
  }
`;

const Banner = (props: any) => {
  const {
    firstName, lastName, rewardPoints,
    tierName,
    expiryDate,
    enrollmentDate,
    backgroundUrl,
    profileUrl = 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
  } = props;

  return (
    <LoggedWrapper>
      <Background src={backgroundUrl} />
      <Content>
        <UserInfo>
          <img src={profileUrl} alt="user-profile" />
          <Wrap>
            Welcome Back
            <Title>
              {`${firstName} ${lastName}`}
            </Title>
          </Wrap>
        </UserInfo>
        <MembershipCard
          tierName={tierName}
          enrollmentDate={enrollmentDate}
          rewardPoints={rewardPoints}
          expiryDate={expiryDate}
        />
      </Content>
      {/* <ChildWrapper>
      </ChildWrapper> */}
    </LoggedWrapper>
  );
};

export default Banner;
