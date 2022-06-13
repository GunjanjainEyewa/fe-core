import React from 'react';
import PillButton, { Option } from '../PillButton';
import { OptionData } from '../../types';
import { isOptionSelected } from '../../helpers';


interface ButtonProps {
  options: Option[];
  selectedValues?: OptionData[];
  handleClick: (option: Option) => void;
}

const PillButtons = (props: ButtonProps) => {
  const {
    options,
    handleClick,
    selectedValues,
  } = props;
  return (
    <>
      { options && options.map((option: Option) => {
        const isSelected = isOptionSelected(selectedValues, option.optionId);
        return (
          <PillButton
            isSelected={isSelected}
            option={option}
            handleClick={handleClick}
          />
        );
      })}
    </>
  );
};

export default PillButtons;
