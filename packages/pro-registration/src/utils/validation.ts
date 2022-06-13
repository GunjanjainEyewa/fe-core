const REQUIRED_ERROR_MSG: string = 'is required';
const PATTERN_ERROR_MSG: string = 'is invalid';

const validationCheck = (value: string, label: string, isRequired: boolean, regex?: RegExp) => {
  if (!value && isRequired) {
    return (`${label} ${REQUIRED_ERROR_MSG}`);
  }
  if (value && regex && !regex.test(value)) {
    return (`${label} ${PATTERN_ERROR_MSG}`);
  }
  return null;
};


export default validationCheck;
