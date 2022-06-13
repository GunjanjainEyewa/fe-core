import React, { useState } from 'react';
import { Input, Selector, Range, Error } from '../src';
import { inputType as InputType } from '../src/types';

interface ErrorProps {
  message: string;
}
export default {
  title: 'filters/price'
}

export const inputRange = ({ title, min, max, resultCount}) => {
  const handleBlur = (min: number, max: number) => {}
  return(
    <Range title={title} min={min} max = {max} resultCount={resultCount} handleBlur={handleBlur}/>
  )
};
inputRange.args = {
  title: "Select Price Range",
  min: 100,
  max: 10000,
  resultCount: 200,
}

export const inputComponent = ({ inputType, label, min, max }) => {
  const [error, setError] = useState("");
  const [currentValue, setValues] = useState({
    min,
    max,
  });
  return(
    <>
      <Input
        currentValue={currentValue}
        inputType={inputType}
        label={label}
        onChange={val => setValues({ ...currentValue, [inputType]: val })}
        handleError={err => setError(err)}
        min={min}
        max={max}
      />
      <Error message={error} />
    </>
  )
};
inputComponent.args = {
  inputType: 'min',
  label: 'Min. Amount',
  min: 1,
  max: 100,
}

export const selectorComponent = (args) => {
  const defaultValues = {
    min: 0,
    max: 10,
  };
  const [currentValue, setCurrentValue] = useState(defaultValues);
  
  const onChange = (val: number, type: InputType) => {
    setCurrentValue({ ...currentValue, [type]: val });
  }

  return(
    <>
      <Selector {...args}  onChange={onChange} currentValue={currentValue} />
    </>
  )
};

export const error = (args: ErrorProps) => {
  return(
    <>
      <Error message={args.message} />
    </>
  )
};
error.args = {
  message: "Please enter a valid amount!"
}