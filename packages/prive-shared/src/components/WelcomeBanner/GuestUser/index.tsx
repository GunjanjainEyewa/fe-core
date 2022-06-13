import React from 'react';
import { styled } from '@eyewa/ui-components';
import Button, { KIND, SHAPE, SIZE } from '@eyewa/ui-components/Button';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import NykaaPriveLogo from '../../../Icons/NykaaPriveLogo';

type WelcomeBannerGuestProps = {
  onLoginClick: () => any;
  backgroundUrl: string;
};

const Wrapper = styled.div`
  position: relative;
  height: 500px;
  z-index: 0;
  display: flex;
  justify-content: center;
`;
const ImgWrap = styled.span`
  width: 100%;
`;
const Content = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 32px;
`;
const Background = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
`;
const Text = styled.div`
  ${({ theme }) => theme.typography.labelMedium}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
`;
const Logo = styled.div`
  width: 178px;
  height: 54px;
  margin-top: ${({ theme }) => theme.spacing.spacing60};
  svg {
    width: 100%;
    height: 100%;
  }
`;
const Info = styled.div`
  width: 273px;
  height: 40px;
  ${({ theme }) => theme.typography.subTitleMedium}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  text-align:center;
`;
const ActionButton = styled(Button)`
  margin-top: 266px;
  width: 157px;
  height: 40px;
  padding: 0;
  color: ${({ theme }) => theme.colors.textInversePrimary};
  background: ${({ theme }) => theme.colors.primary};
`;

const GuestBanner = ({
  onLoginClick,
  backgroundUrl,
}: WelcomeBannerGuestProps) => (
  <Wrapper>
    <ImgWrap><Background src={backgroundUrl} /></ImgWrap>
    <Content>
      <Text>WELCOME TO</Text>
      <Logo>
        <NykaaPriveLogo />
      </Logo>
      <Info>
        Special Discounts • Early Access to Sales • Earn Reward Points
      </Info>
      <ActionButton
        kind={KIND.tertiary}
        size={SIZE.medium}
        shape={SHAPE.default}
        onClick={() => onLoginClick()}
      >
        Login To Continue
      </ActionButton>
    </Content>
  </Wrapper>
);

export default GuestBanner;
