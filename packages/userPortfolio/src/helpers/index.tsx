import { OptionData } from '../types';

const getDisplayValues = (selectedValues: OptionData[]) => {
  let valuesToDisplay = '';
  const selectedAnswers: string[] = [];
  if (selectedValues && (selectedValues.length > 0)) {
    selectedValues.map((selectedValue) => {
      if (selectedValue && (selectedValue.value)) {
        selectedAnswers.push(selectedValue.value);
      }
      return selectedAnswers;
    });
    valuesToDisplay = selectedAnswers.toString();
    if (valuesToDisplay) {
      return valuesToDisplay.replace(/,/g, ', ');
    }
  }
  return valuesToDisplay;
};

export default getDisplayValues;

export const isOptionSelected = (selectedValues: OptionData[], optionId: string) => {
  let isSelected = false;
  if (selectedValues && (selectedValues.length > 0)) {
    isSelected = selectedValues.some((value: OptionData) => (value.optionId === optionId));
  }
  return isSelected;
};
