import React, { useState, useEffect } from 'react';
import { Option } from '../../components/PillButton';
import Question from '../../components/Question';
import Answer from './Answer';
import { OptionData } from '../../types';


interface Options {
  value: string;
  optionId: string;
}


interface SingleSelectProps {
  questionText: string;
  options: Options[];
  selectedValues?: OptionData[];
  isSkippable: boolean;
  isPrivate: boolean;
  attribute: string;
  showEditButton?: boolean;
  keyIndex: number;
  isEditable: boolean;
  handleEditClick: (indexValue: number) => void;
  handleSelectAnswer: (
    attribute: string, selectedValue: Option
  ) => void;
  handleSkipClick?: (attribute: string) => void;
}

const SingleSelect = (props: SingleSelectProps) => {
  const {
    questionText,
    options,
    selectedValues,
    isSkippable,
    isPrivate,
    attribute,
    keyIndex,
    isEditable,
    handleEditClick,
    handleSelectAnswer,
    handleSkipClick,
    showEditButton,
  } = props;
  const [answer, setAnswer] = useState(selectedValues || []);

  useEffect(() => {
    if (selectedValues && (selectedValues.length > 0)) {
      setAnswer(selectedValues);
    }
  }, [selectedValues]);


  const handleAnswerClick = (selectedOption: Option) => {
    if (
      selectedValues && (
        selectedValues.length > 0
      ) && (
        selectedValues[0].optionId === selectedOption.optionId
      )
    ) {
      setAnswer([]);
    } else {
      setAnswer([selectedOption]);
    }
    handleSelectAnswer(attribute, selectedOption);
  };

  const handleSkip = () => {
    if (selectedValues && (selectedValues.length > 0)) {
      setAnswer(selectedValues);
    } else {
      setAnswer([]);
    }
    if (handleSkipClick) {
      handleSkipClick(attribute);
    }
  };

  const handleEdit = () => {
    handleEditClick(keyIndex);
  };


  return (
    <>
      <Question
        text={questionText}
      />
      <Answer
        options={options}
        handleClick={handleAnswerClick}
        isEditable={isEditable}
        selectedValues={answer}
        isSkippable={isSkippable}
        handleSkip={handleSkip}
        handleEdit={handleEdit}
        isPrivate={isPrivate}
        showEditButton={showEditButton}
      />
    </>
  );
};

export default SingleSelect;
