import 'jsdom-global/register'; // for providing
import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '@nykaa/ui-components/styles/ThemeProvider';
import { createLightTheme } from '@nykaa/ui-components/themes';
import wrapWithTheme from '@nykaa/ui-components/themes/helpers/themeProvider';
import UserInfo from '../../components/UserInfo';
import ProSvg from '../../Icons/proSvg';


const userInfoProps = {
  profilePic: "https://images-static.nykaa.com/nonprod-review/pro_review_profile_image.svg",
  name: "Shubham Agarwal",
  isBuyer: false,
  customText: "Verified Professional",
  isProUser: true,
}


describe('Review with tags', () => {
    const userWithProTag = wrapWithTheme(<UserInfo {...userInfoProps} />, mount);
    const userWithoutProTag = wrapWithTheme(<UserInfo {...userInfoProps} isProUser={false} />, mount);

    it('should render review with professional tag',() => {
      expect(userWithProTag.find(ProSvg)).toHaveLength(1);
    });
  
    it('should render review without professional tag',() => {
      expect(userWithoutProTag.find(ProSvg)).toHaveLength(0);
    });
  });

  describe('Review with labels', () => {
    const userWithProLabel = wrapWithTheme(<UserInfo {...userInfoProps} />, mount);
    const userWithoutProLabel = wrapWithTheme(<UserInfo {...userInfoProps} customText='Verified Buyer' isProUser={false} />, mount);
    const userWithoutLabel = wrapWithTheme(<UserInfo {...userInfoProps} isProUser={false} customText={null} />, mount);

    it('should render review with professional label',() => {
      expect(userWithProLabel.find(ProSvg)).toHaveLength(1);
    });
  
    it('should render review without professional label',() => {
      expect(userWithoutProLabel.find(ProSvg)).toHaveLength(0);
    });

    it('should render review without professional label when no label defined',() => {
      expect(userWithoutLabel.find(ProSvg)).toHaveLength(0);
    });
  });