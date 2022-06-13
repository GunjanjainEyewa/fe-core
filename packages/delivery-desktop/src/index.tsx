import React, { useState, useEffect } from 'react';
import LocationIcon from '@nykaa/delivery-shared/Icons/LocationIcon';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { PIN_CODE_FOR_DELIVERY } from '@nykaa/delivery-shared/constants';
import { SelectedCountry, DefaultMessages } from '@nykaa/delivery-shared/types';
import { getCookie } from '@nykaa/utils/cookies';
import PinCodeForm from './components/PincodeForm';
import PinCodeInfo from './components/PincodeInfo';


interface CheckDeliveryProps {
  productId: string;
  showCountryList?: boolean;
  pincodeApiDisabled?: boolean;
  defaultMessages: DefaultMessages;
  getSelectedCountryData: () => SelectedCountry;
  isIndiaSelected: () => boolean;
}

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.spacing.spacing40};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodySmall};
  }
`;
const HeaderText = styled.span`
  ${({ theme }) => theme.typography.subTitleLarge};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodySmall};
  }
`;

const CheckDelivery = ({
  productId,
  showCountryList = false,
  pincodeApiDisabled = false,
  defaultMessages,
  getSelectedCountryData,
  isIndiaSelected,
}: CheckDeliveryProps) => {
  const [pinCode, setPinCode] = useState<number>();
  const [showPinCodeForm, setShowPinCodeForm] = useState(true);

  useEffect(() => {
    if (!pincodeApiDisabled) {
      const pinCodeInCookie: number = getCookie(PIN_CODE_FOR_DELIVERY) as number;
      if (pinCodeInCookie) {
        setPinCode(pinCodeInCookie);
        setShowPinCodeForm(false);
      }
    }
  }, [pincodeApiDisabled]);

  const handlePinCodeSubmit = (newPinCode: number) => {
    setPinCode(newPinCode);
    setShowPinCodeForm(false);
  };

  return (
    <>
      <Wrapper>
        {
          showPinCodeForm && (
            <>
              <Header>
                <LocationIcon />
                <HeaderText>Delivery Options</HeaderText>
              </Header>
              <PinCodeForm
                handleSubmit={handlePinCodeSubmit}
                internationalMode={showCountryList}
                isIndiaSelected={isIndiaSelected()}
              />
            </>
          )
        }
      </Wrapper>
      {
        (!showPinCodeForm && pinCode) && (
          <PinCodeInfo
            pinCode={pinCode}
            productId={productId}
            changeCallback={() => { setShowPinCodeForm(true); }}
            showCountryList={showCountryList}
            defaultMessages={defaultMessages}
            getSelectedCountryData={getSelectedCountryData}
          />
        )
      }
    </>
  );
};

export default CheckDelivery;
