import React, { useState, useEffect } from 'react';
import setDeliveryDetails from '@nykaa/delivery-shared/utils/serviceHelper';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { DeliveryInfo, PinCodeInfoProps } from '@nykaa/delivery-shared/types';
import DeliveryMessageList from './MessageList';
import Header from './Header';
import MoreInfo from './MoreInfo';


const Info = styled.span`
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  margin-right: ${({ theme }) => theme.spacing.spacing20};
  display: block;
`;
const Loading = styled.span`
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.spacing120};
  padding-bottom: ${({ theme }) => theme.spacing.spacing60};
`;

const PinCodeInfo = ({
  pinCode,
  productId,
  changeCallback,
  showCountryList,
  defaultMessages,
  getSelectedCountryData,
}: PinCodeInfoProps) => {
  const [fetchingDeliveryDetails, setFetchingDeliveryDetails] = useState<boolean>(false);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>();
  const [deliveryInfoNotFound, setDeliveryInfoNotFound] = useState<boolean>(false);

  let countryCode: string;
  const selectedCountry = getSelectedCountryData();
  if (showCountryList) {
    countryCode = selectedCountry?.value || '';
  }

  useEffect(() => {
    setFetchingDeliveryDetails(true);
    setDeliveryDetails(
      pinCode,
      productId,
      countryCode,
      setDeliveryInfo,
      setFetchingDeliveryDetails,
      setDeliveryInfoNotFound,
    );
  }, [pinCode, productId, countryCode]);

  if (fetchingDeliveryDetails) {
    return (
      <Loading>
        Fetching delivery details...
      </Loading>
    );
  }
  const {
    city,
    codMessage,
    statusDate,
    statusMessage,
    shippingMessage,
  } = deliveryInfo || {};
  const toolTipMessage = shippingMessage || defaultMessages?.defaultShippingMessage;
  return (
    <>
      <Info>
        <Header
          pinCode={pinCode}
          showCountryList={showCountryList}
          changeCallback={changeCallback}
          selectedCountry={selectedCountry}
        />
        <DeliveryMessageList
          deliveryInfoNotFound={deliveryInfoNotFound}
          codMessage={codMessage}
          city={city}
          statusDate={statusDate}
          statusMessage={statusMessage}
          selectedCountry={selectedCountry?.name}
          defaultErrorMessage={defaultMessages?.defaultErrorMessage}
        />
        <MoreInfo message={toolTipMessage} />
      </Info>
    </>
  );
};

export default PinCodeInfo;
