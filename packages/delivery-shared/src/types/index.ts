export interface DeliveryInfo {
  statusDate: string;
  statusMessage: string;
  codMessage: string;
  city: string;
  shippingMessage: string;
}

export interface SelectedCountry {
  id: string;
  name: string;
  flagIcon: string;
  value: string;
}

export interface DefaultMessages {
  defaultShippingMessage: string;
  defaultErrorMessage: string;
}
export interface PinCodeInfoProps {
  pinCode: number;
  productId: string;
  changeCallback: () => void;
  showCountryList?: boolean;
  defaultMessages: DefaultMessages;
  getSelectedCountryData: () => SelectedCountry;
}
