import React, { useRef, useEffect } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { rangeError, min as minType, max as maxType } from '../../constants';
import { inputType as InputType } from '../../types';

interface Props {
  label: string;
  currentValue: {
    min: number,
    max: number,
  };
  inputType: InputType;
  max: number;
  min: number;
  minError?: string;
  maxError?: string;
  onBlur: (min: number, max: number) => void;
  onChange?: (num: number) => void;
  handleError?: (msg: string) => void;
}

const Wrapper = styled.div``;

const Radius = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100px;
`;

const InputWrapper = styled.input`
  background: ${({ theme }) => theme.colors.surface20};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  outline: none;
  border: none;
  width: 100%;
  height: 40px;
  caret-color: ${({ theme }) => theme.colors.primary};
  border-spacing: 15px;
  border-bottom: 2px solid ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
  &:border-color: ${({ theme }) => theme.colors.primary};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type=number] {
      -moz-apdivpearance: textfield;
  }
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;
  ${({ theme }) => theme.typography.bodySmall};
  font-family: Inter;
`;

function Input({
  label = '',
  onChange,
  handleError,
  inputType,
  currentValue,
  min = 1,
  max = Number.POSITIVE_INFINITY,
  minError: minErrorMsg = '',
  maxError: maxErrorMsg = '',
  onBlur = null,
}: Props) {
  const inputRef = useRef(null);

  if (!inputType) {
    return null;
  }

  const minAmount = Math.min(min, max);
  const maxAmount = Math.max(min, max);

  const handleRangeError = (val: number) => {
    const value = Number(val);

    const minError = (inputType === minType)
    && ((!value) || (value < minAmount) || (value > (currentValue.max || maxAmount)));

    const maxError = (inputType === maxType)
    && ((!value) || (value > maxAmount) || (value < (currentValue.min || minAmount)));

    if (minError) {
      handleError(minErrorMsg || rangeError);
    } else if (maxError) {
      handleError(maxErrorMsg || rangeError);
    } else {
      handleError('');
    }
  };

  const handleChange = (e: any) => {
    let { value } = e.target;
    if (Number.isNaN(value)) {
      value = Number(value);
    }
    onChange(value);
    handleRangeError(Number(value));
  };

  const handleBlur = () => {
    let value = currentValue[inputType];
    if (Number.isNaN(value)) {
      value = Number(value);
    }
    handleRangeError(value);
    const isCorrectValue = (currentValue[inputType]) && (value > minAmount && value < maxAmount);
    if (!isCorrectValue) {
      onChange(inputType === minType ? minAmount : maxAmount);
    }
    if (typeof onBlur === 'function') {
      onBlur(currentValue.min, currentValue.max);
    }
  };

  const inputVal = currentValue[inputType];

  useEffect(() => {
    if (inputRef.current && !inputRef.current.value) {
      if (inputVal) {
        inputRef.current.value = inputVal;
      } else {
        inputRef.current.value = inputType === minType ? minAmount : maxAmount;
      }
    }
    handleRangeError(inputRef.current.value);
  }, [currentValue[inputType]]);

  return (
    <Wrapper>
      <Label>
        { label }
        {' '}
      </Label>
      <Radius>
        <InputWrapper
          type="number"
          ref={inputRef}
          value={inputVal}
          min={minAmount}
          max={maxAmount}
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}
        />
      </Radius>
    </Wrapper>
  );
}

export default Input;
