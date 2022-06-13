import React, { useEffect, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import Button, { KIND, SHAPE, SIZE } from '@eyewa/ui-components/Button';
import { Spinner } from '@eyewa/ui-components/Loader';
import AddressCard from './AddressCard';
import NewAddressForm from './NewAddressForm';
import {
  SectionContainer,
  Content,
  Header,
  SectionSummary,
  Title,
  CheckedIcon,
  Loader,
} from '../Styled';
import SavedAddress from '../../icons/savedAddress';
import StyledIcon from '../Styled/Icon';
import { AddressInfo } from '../../types';
import CheckedCircle from '../../icons/checkedCircle';

const BUTTON_TEXT: string = 'Next';
const SAVED_ADDRESS_TEXT: string = 'SELECT FROM SAVED ADDRESSES';
const BUTTON_EDIT: string = 'Edit';

interface AddressProps {
  title: string;
  status: 'basicInfo' | 'addressInfo' | 'businessInfo' | 'fileUpload' | 'tncAccepted' | 'registrationComplete';
  savedAddresses: AddressInfo[];
  onPinChange: (pincode: string) => any;
  onAddressChange: (address: AddressInfo) => any;
  addressByPin?: AddressInfo;
  isLoading?: boolean;
}

const SavedAddressHeader = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  display: flex;
  align-items: center;
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.spacing40};
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
  cursor: pointer;
  width: fit-content;
  border-radius: ${({ theme }) => theme.borders.radius10};
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledSeparator = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing120} 0;
  text-align: center;
  border-bottom: ${({ theme }) => {
    const { borders, colors } = theme;
    const { border100 } = borders;
    return `${border100.borderWidth} ${border100.borderStyle} ${colors.surface30}`;
  }};
  height: 12px;
  span {
    ${({ theme }) => theme.typography.type142};
    text-transform: uppercase;
    padding: 0 ${({ theme }) => theme.spacing.spacing40};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textDecorative};
  }
`;

const ShippingInfoForm: React.FunctionComponent<AddressProps> = ({ ...props }: AddressProps) => {
  const {
    title,
    status,
    savedAddresses,
    addressByPin,
    onPinChange,
    onAddressChange,
    isLoading,
  } = props;

  const [showContent, setShowContent] = useState(status === 'addressInfo');
  const [showSavedAddress, setShowSavedAddress] = useState(false);
  const [currentAddressID, setCurrentAddressID] = useState(null);
  const [street, setStreet] = useState('');
  const [isPinValid, setIsValidPin] = useState(false);

  useEffect(() => {
    setShowContent(status === 'addressInfo');
  }, [status]);

  const submitAddress = () => {
    if (currentAddressID) {
      const {
        city, state, pincode, countryId, street: _street, addressId, regionId,
      } = savedAddresses.find(
        (savedAddress: AddressInfo) => (savedAddress.addressId === currentAddressID),
      );
      onAddressChange({
        city,
        state,
        pincode,
        countryId,
        regionId,
        addressId,
        street: _street,
      });
    } else {
      const {
        city, state, pincode, countryId, regionId,
      } = addressByPin;
      onAddressChange({
        city,
        state,
        pincode,
        countryId,
        street,
        regionId,
      });
    }
  };

  const handlePinChange = (pin: string): void => {
    setIsValidPin(!!pin);
    onPinChange(pin);
    if (pin) {
      setCurrentAddressID(null);
    }
  };

  const isButtonDisabled = (): boolean => !(currentAddressID || (street && isPinValid));

  return (
    <SectionContainer>
      {isLoading && (
        <Loader>
          <Spinner size="medium" showLogo />
        </Loader>
      )}
      <Header border={showContent ? '2px' : '0px'}>
        <Title>{title}</Title>
        {(savedAddresses?.length > 0) && (
          <CheckedIcon>
            <CheckedCircle />
          </CheckedIcon>
        )}
        {(status !== 'addressInfo') && !showContent && (
          <Button
            kind="tertiary"
            size="small"
            shape="default"
            onClick={() => setShowContent(true)}
          >
            {BUTTON_EDIT}
          </Button>
        )}
      </Header>
      {showContent && (
      <Content>
        <SectionSummary>
          Where do you want your products to be delivered?
        </SectionSummary>
        {savedAddresses?.length !== 0 && (
          <SavedAddressHeader onClick={() => setShowSavedAddress(!showSavedAddress)}>
            <StyledIcon size={24} margin>
              <SavedAddress />
            </StyledIcon>
            <div>
              {SAVED_ADDRESS_TEXT}
            </div>
          </SavedAddressHeader>
        )}
        {showSavedAddress && savedAddresses.map((address) => (
          <AddressCard
            key={`saved_${address.addressId}`}
            {...address}
            isMarked={address.addressId === currentAddressID}
            onToggle={(id: string) => { setCurrentAddressID(id); }}
          />
        ))}
        {savedAddresses?.length !== 0 && (
          <StyledSeparator>
            <span>or</span>
          </StyledSeparator>
        )}
        <NewAddressForm
          addressInfo={addressByPin}
          onPinChange={(pin) => handlePinChange(pin)}
          onStreetChange={(value) => setStreet(value)}
        />
        <Button
          kind={KIND.primary}
          shape={SHAPE.default}
          fullWidth
          size={SIZE.medium}
          disabled={isButtonDisabled()}
          onClick={submitAddress}
        >
          {BUTTON_TEXT}
        </Button>
      </Content>
      )}
    </SectionContainer>
  );
};

export default ShippingInfoForm;
