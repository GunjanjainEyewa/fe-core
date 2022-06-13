import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import Input from '../inputs';
import ResultCount from '../resultCount';
import Error from '../error';
import RangeSelector from '../selector';
import { min as minInputType, max as maxInputType } from '../../constants';

interface Props {
  title: string;
  min: number;
  max: number;
  resultCount: number;
  handleBlur: (min: number, max: number) => void;
}

const Title = styled.p`
  ${({ theme }) => theme.typography.subTitleMedium};
  opacity: 0.92;
`;

const RangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const ErrorWrapper = styled.div`
  min-height: 18px;
  margin: 10px 0;
`;

function InputRanges({
  title = 'Select Price Range', min = 1, max = Number.POSITIVE_INFINITY, resultCount = 0, handleBlur: onBlur,
}: Props) {
  const [error, setError] = useState({
    min: '',
    max: '',
  });
  const [value, setValue] = useState({
    min,
    max,
  });
  const handleBlur = () => {
    if (typeof onBlur === 'function') {
      onBlur(value.min, value.max);
    }
  };
  const errorMsg = error.min || error.max || '';
  return (
    <>
      <Title>
        {' '}
        { title }
        {' '}
      </Title>
      <RangeWrapper>
        <Input
          min={min}
          max={max}
          currentValue={value}
          label="Min. Amount"
          inputType={minInputType}
          onChange={(val) => setValue({ ...value, min: Number(val) })}
          handleError={(msg) => setError({
            ...error,
            min: msg,
          })}
          onBlur={handleBlur}
        />
        <Input
          min={min}
          max={max}
          currentValue={value}
          label="max. Amount"
          inputType={maxInputType}
          onChange={(val) => setValue({ ...value, max: Number(val) })}
          handleError={(msg) => setError({
            ...error,
            max: msg,
          })}
          onBlur={handleBlur}
        />
      </RangeWrapper>
      <ErrorWrapper>
        <Error message={errorMsg} />
      </ErrorWrapper>
      <RangeSelector
        min={min}
        max={max}
        currentValue={value}
        onChange={(val, type) => setValue({ ...value, [type]: val })}
        onBlur={onBlur}
      />
      <ResultCount count={resultCount} />
    </>
  );
}

export default InputRanges;
