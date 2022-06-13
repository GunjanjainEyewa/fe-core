import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import NykaaPriveLogo from '../../../Icons/NykaaPriveLogo';

const LoggedWrapper = styled.div`
  height: 312px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Background = styled.img`
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
  top: 37px;
  right: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.labelMedium}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;

const Logo = styled.div`
  width: 125px;
  height: 38px;
  margin-top: 6px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const ChildWrapper = styled.div`
  z-index: 1;
  height: auto;
  background: #ffffff;
  border-radius: 12px;
  width: 320px;
  position: relative;
  margin-top: -30px;
  align-self: center;
`;

const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface10};
  backdrop-filter: blur(15px);
  border-radius: ${({ theme }) => theme.spacing.spacing60};
  padding: 18px 16px 20px 18px;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
`;
const Description = styled.div`
  ${({ theme }) => theme.typography.titleSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;
const Info = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const UserInfo = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.08)};
  margin-bottom: 18px;
  padding-bottom: 18px;
  align-items: flex-start;
}
`;

const Banner = (props: any) => {
  const {
    firstName, lastName, rewardPoints,
    upgradeAmount, expiryDate,
    backgroundUrl,
    profileUrl = 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
  } = props;
  return (
    <LoggedWrapper>
      <Background src={backgroundUrl} />
      <Content>
        <Text>WELCOME TO</Text>
        <Logo>
          <NykaaPriveLogo />
        </Logo>
      </Content>
      <ChildWrapper>
        <BannerWrapper>
          <UserInfo>
            <img src={profileUrl} alt="profile-url" />
            <Wrap>
              Hi
              <Title>
                {`${firstName} ${lastName}`}
              </Title>
              <Description>
                {`You have ${rewardPoints} Reward Points`}
              </Description>
            </Wrap>
          </UserInfo>
          <Info>
            {`Spend Rs ${upgradeAmount} by ${expiryDate} to become a Prive Silver member and redeem your points`}
          </Info>
        </BannerWrapper>
      </ChildWrapper>
    </LoggedWrapper>
  );
};

export default Banner;
