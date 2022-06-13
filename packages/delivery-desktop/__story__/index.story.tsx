import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { styled } from '@nykaa/ui-components';
import LocationIcon from '@nykaa/delivery-shared/Icons/LocationIcon';
import MessageList from '../src/components/PincodeInfo/MessageList';
import PinCodeForm from '../src/components/PincodeForm';
import Header from '../src/components/PincodeInfo/Header';
import MoreInfo from '../src/components/PincodeInfo/MoreInfo';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';



const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-left: 150px;
  flex-direction: column;
`;
const HeaderPinCode = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodySmall};
  }
`;
const HeaderText = styled.span`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodySmall};
  }
`;
const selectedCountry = {
  id: '0',
  name: 'India',
  flagIcon: "url('https://www.nykaa.com/assets/mobile/images/country_flags_sprite.png')",
  value: 'IN'
};

export default {
  title: 'CheckDelivery',
  component: <div></div>,
  parameters: {
    viewport: {
      viewports: DEFAULT_VIEWPORT,
      defaultViewport: 'someDefault'
    },
  },
};

export const CheckPincodeUi = () => (
  <>
    <HeaderPinCode>
      <LocationIcon />
      <HeaderText>DELIVERY OPTIONS</HeaderText>
    </HeaderPinCode>
    <PinCodeForm
      handleSubmit={action(" pincode check")}
      internationalMode={false}
      isIndiaSelected={true}
    />
  </>
);

export const PincodeInfoHeader = () => (
  <Header
    pinCode={122001}
    showCountryList={false}
    changeCallback={action("pincode change")}
    selectedCountry={selectedCountry}
  />
);

export const PincodeInfoHeaderWithFlag = () => (
  <Header
    pinCode={122001}
    showCountryList={true}
    changeCallback={action("pincode change")}
    selectedCountry={selectedCountry}
  />
);

export const DeliveryMessageListUi = () => (
  <MessageList
    deliveryInfoNotFound={false}
    codMessage={"Cash on Delivery available on orders above ₹700"}
    city={"delhi"}
    statusDate={"1 day"}
    statusMessage={"Dispatch in"}
    defaultErrorMessage={"Error in fetching details"}
  />
);
export const ErrorDeliveryMessageListUi = () => (
  <MessageList
    deliveryInfoNotFound={true}
    codMessage={"Cash on Delivery available on orders above ₹700"}
    city={"delhi"}
    statusDate={"1 day"}
    statusMessage={"Dispatch in"}
    defaultErrorMessage={"Error in fetching details"}
  />
);
export const MoreInfoSection = () => (
  <Wrapper>
    <MoreInfo
      message="Free shipping on orders above ₹500 & Cash on Delivery available on orders above ₹700"
    />
  </Wrapper>
);

export const PinCodeInfo = () => (
  <Wrapper>
    <Header
    pinCode={122001}
    showCountryList={false}
    changeCallback={action("pincode change")}
    selectedCountry={selectedCountry}
    />
    <MessageList
      deliveryInfoNotFound={false}
      codMessage={"Cash on Delivery available on orders above ₹700"}
      city={"delhi"}
      statusDate={"1 day"}
      statusMessage={"Dispatch in"}
      defaultErrorMessage={"Error in fetching details"}
    />
    <MoreInfo
      message="Free shipping on orders above ₹500 & Cash on Delivery available on orders above ₹700"
    />
  </Wrapper>
)
export const PinCodeInfoWithFlag = () => (
  <Wrapper>
    <Header
    pinCode={122001}
    showCountryList={true}
    changeCallback={action("pincode change")}
    selectedCountry={selectedCountry}
  />
  <MessageList
    deliveryInfoNotFound={false}
    codMessage={"Cash on Delivery available on orders above ₹700"}
    city={"delhi"}
    statusDate={"1 day"}
    statusMessage={"Dispatch in"}
    defaultErrorMessage={"Error in fetching details"}
  />
  <MoreInfo
    message="Free shipping on orders above ₹500 & Cash on Delivery available on orders above ₹700"
  />
  </Wrapper>
);
