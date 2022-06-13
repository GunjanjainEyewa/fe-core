import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import InputBox from '../../InputBox';
import Textarea from '../../Textarea';
import { PIN_CODE_REGEX } from '../../../constants/regex';
import { AddressInfo } from '../../../types';

interface NewAddressProps {
  addressInfo?: AddressInfo;
  onPinChange: (value: string) => any;
  onStreetChange: (value: string) => any;
}

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FieldRight = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing.spacing40};
`;

const FieldLeft = styled.div`
  width: 100%;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
`;

const FormContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
`;

const AddressTitle = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.spacing80};
`;

const NewAddressForm: React.FunctionComponent<NewAddressProps> = (
  { addressInfo, onPinChange, onStreetChange } : NewAddressProps,
) => {
  const { city, state } = addressInfo || {};
  const [pin, setPin] = useState('');
  const [street, setStreet] = useState('');

  const handlePinChange = (pinValue: string) => {
    setPin(pinValue);
    onPinChange(pinValue);
  };

  const handleStreetChange = (streetValue: string) => {
    setStreet(streetValue);
    onStreetChange(streetValue);
  };

  return (
    <FormContainer>
      <AddressTitle>Enter your new address below</AddressTitle>
      <InputBox
        isRequired
        regex={PIN_CODE_REGEX}
        label="Pin code"
        value={pin}
        onChange={(value) => handlePinChange(value)}
      />
      <Textarea
        label="Address"
        isRequired
        value={street}
        onChange={(value) => handleStreetChange(value)}
      />
      <FieldWrapper>
        <FieldLeft>
          <InputBox
            label="City"
            value={city}
            disabled
          />
        </FieldLeft>
        <FieldRight>
          <InputBox
            label="State"
            disabled
            value={state}
          />
        </FieldRight>
      </FieldWrapper>
    </FormContainer>
  );
};

export default NewAddressForm;
