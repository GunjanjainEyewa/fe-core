import React, { useState, useEffect } from 'react';
import handleSubmitClick from '@eyewa/delivery-shared/utils';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { PIN_CODE_FOR_DELIVERY, ENTER_PINCODE } from '@eyewa/delivery-shared/constants';
import { getCookie } from '@eyewa/utils/cookies';


interface PinCodeFormProps {
  handleSubmit: (pinCode: number) => void;
  internationalMode: boolean;
  isIndiaSelected: boolean;
}

const FormWrap = styled.div`
  ${({ theme }) => theme.borders.border100};
  border-radius: ${({ theme }) => theme.borders.radius10};
  border-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.radius10};
  max-width: 270px;
  padding: 0 ${({ theme }) => theme.spacing.spacing40};
`;

const InputWrap = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Input = styled.input`
  border: none;
  padding: ${({ theme }) => theme.spacing.spacing40} 0;
  box-shadow: none;
  ${({ theme }) => theme.typography.bodyLarge};
  max-width: 180px;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 75%;
  }
`;

const SubmitButton = styled.button`
  ${({ theme }) => theme.typography.buttonMedium};
  border:none;
  background: transparent;
  border-radius: ${({ theme }) => theme.borders.radius20};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:focus{
    outline: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodySmall};
  }
`;
const ErrorMessage = styled.span`
  ${({ theme }) => theme.typography.bodySmall};
  width: 100%;
  color: ${({ theme }) => theme.colors.negative};
`;


const PinCodeForm = (props: PinCodeFormProps) => {
  const {
    handleSubmit,
    internationalMode,
    isIndiaSelected,
  } = props;

  const [pinCode, setPinCode] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePinCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setPinCode(value);
    setErrorMessage('');
  };
  const pinCodeLength = (internationalMode && !isIndiaSelected) ? 5 : 6;

  const handleKeyPress = (event: { key: any; }) => {
    const { key } = event;
    if (key === 'Enter') {
      handleSubmitClick(pinCode, pinCodeLength, setErrorMessage, handleSubmit);
    }
  };
  useEffect(() => {
    const pinCodeInCookie: string = getCookie(PIN_CODE_FOR_DELIVERY) as string || '';
    setPinCode(String(pinCodeInCookie || ''));
  }, []);

  return (
    <>
      <FormWrap>
        <InputWrap>
          <Input
            type="tel"
            value={pinCode}
            onChange={handlePinCodeChange}
            onKeyPress={handleKeyPress}
            placeholder={ENTER_PINCODE}
            name="pin code"
            maxLength={pinCodeLength}
            minLength={pinCodeLength}
          />
        </InputWrap>
        <SubmitButton
          type="button"
          onClick={() => handleSubmitClick(pinCode, pinCodeLength, setErrorMessage, handleSubmit)}
        >
          Check
        </SubmitButton>
      </FormWrap>
      <ErrorMessage>
        {
          errorMessage
        }
      </ErrorMessage>
    </>
  );
};

export default PinCodeForm;
