import React, { useState } from 'react';
import { styled } from '@nykaa/ui-components';
import { FloatingContainer, FloatingLabel } from '../Styled/Floats';
import validationCheck from '../../utils/validation';
import { ErrorMessage } from '../Styled';

interface TextareaProps {
  label: string;
  value?: string;
  isRequired?: boolean;
  onChange: (arg: string) => any;
}

const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.spacing80};
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
`;

const FloatingTextarea = styled.textarea`
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
  resize: vertical;
  &:focus {
    outline:none;
    border-bottom: 2px ${({ theme }) => theme.borders.border100.borderStyle} ${({ theme }) => theme.colors.primary}; 
  }
  &:focus ~ label, &:not(:placeholder-shown) ~ label {
    top: -18px;
    ${({ theme }) => theme.typography.labelMedium};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Textarea = ({ ...props }: TextareaProps) => {
  const {
    label,
    isRequired,
    value: currentValue,
    onChange,
  } = props;
  const [inputValue, setInputValue] = useState(currentValue || '');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputValue(value);
    const isValid = validationCheck(value, name, isRequired);
    setErrorMsg(isValid);
    if (!isValid) {
      onChange(value);
    }
  };

  return (
    <>
      <Wrapper>
        <FloatingContainer>
          <FloatingTextarea
            placeholder=" "
            name={label}
            value={inputValue}
            onChange={handleChange}
          />
          <FloatingLabel>{label}</FloatingLabel>
        </FloatingContainer>
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
      </Wrapper>
    </>
  );
};

export default Textarea;
