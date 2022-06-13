import React, { ReactChild, useState, useEffect } from 'react';
import { styled } from '@nykaa/ui-components';
import StyledProIcon from '../Styled/Icon';
import { FloatingContainer, FloatingLabel } from '../Styled/Floats';
import validationCheck from '../../utils/validation';
import { ErrorMessage } from '../Styled';

interface InputProps {
  label: string;
  value: string;
  disabled?: boolean;
  isRequired?: boolean;
  margin?: boolean;
  regex?: RegExp;
  icon?: ReactChild;
  onChange?: (arg: any) => any;
}

const InputWrapper = styled.div<{ margin: boolean }>`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing.spacing80};
  align-items: end;
  margin-top: ${({ margin, theme }) => (margin ? theme.spacing.spacing40 : null)};
  margin-bottom: ${({ margin, theme }) => (margin ? theme.spacing.spacing80 : null)};
`;

const FloatingInput = styled.input`
  ${({ theme }) => theme.typography.bodyMedium};
  padding: ${({ theme }) => theme.spacing.spacing20};
  width: 100%;
  height:30px;
  border: none;
  border-bottom: ${({ theme }) => {
    const { borders, colors } = theme;
    const { border100 } = borders;
    return `${border100.borderWidth} ${border100.borderStyle} ${colors.surface50}`;
  }};
  &:focus {
    outline:none;
    border-bottom: 2px ${({ theme }) => theme.borders.border100.borderStyle} ${({ theme }) => theme.colors.primary}; 
  }
  &:focus ~ label, &:not(:placeholder-shown) ~ label {
    top: -18px;
    ${({ theme }) => theme.typography.labelMedium};
    color: ${({ theme }) => theme.colors.primary};
  }
  &:disabled ~ label {
    color: ${({ theme }) => theme.colors.textDisabled}; 
  }
`;


const InputBox = ({ ...props }: InputProps) => {
  const {
    label,
    disabled,
    regex,
    isRequired,
    margin,
    icon,
    value: currentValue,
    onChange,
  } = props;

  const [inputValue, setInputValue] = useState(currentValue || '');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setInputValue(currentValue);
    setErrorMsg(null);
  }, [currentValue]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputValue(value);
    const isValid = validationCheck(value, name, isRequired, regex);
    setErrorMsg(isValid);
    if (!isValid) {
      onChange(value);
    } else {
      onChange('');
    }
  };

  return (
    <>
      <InputWrapper margin={margin}>
        { icon && <StyledProIcon size={24} {...props}>{ icon }</StyledProIcon> }
        <FloatingContainer>
          <FloatingInput
            type="text"
            placeholder=" "
            name={label}
            disabled={disabled}
            value={inputValue}
            onChange={handleChange}
          />
          <FloatingLabel>{label}</FloatingLabel>
        </FloatingContainer>
      </InputWrapper>
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </>
  );
};

export default InputBox;
