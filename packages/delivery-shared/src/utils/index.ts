import { ERROR_IN_DELIVERY } from '../constants';


const handleSubmitClick = (
  pinCode: string,
  pinCodeLength: number,
  setErrorMessage: (value: React.SetStateAction<string>) => void,
  handleSubmit: (pinCode: number) => void,
) => {
  const PIN_CODE_REGX = new RegExp(`[0-9]{${pinCodeLength}}`);
  if (!pinCode) {
    setErrorMessage(ERROR_IN_DELIVERY);
  } else {
    const valid = PIN_CODE_REGX.test(pinCode);

    if (valid) {
      // eslint-disable-next-line radix
      handleSubmit(parseInt(pinCode));
    } else {
      setErrorMessage(ERROR_IN_DELIVERY);
    }
  }
};

export const createMessageList = (
  statusMessage: string,
  statusDate: string,
  codMessage: string,
) => (
  [
    `${statusMessage} ${statusDate}`,
    codMessage,
  ]
);

export default handleSubmitClick;
