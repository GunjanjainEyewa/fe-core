import React, { useState, useEffect } from 'react';
import { Option } from '../../components/PillButton';
import Question from '../../components/Question';
import Answer from './Answers';
// import { NOT_ANSWERED_VALUE } from '../../constants';


interface Options {
  value: string;
  optionId: string;
}

interface MultiSelectProps {
  questionText: string;
  options: Options[];
  selectedValues?: Options[];
  isSkippable: boolean;
  isPrivate: boolean;
  attribute: string;
  showEditButton: boolean;
  keyIndex: number;
  isEditable: boolean;
  handleEditClick: (indexValue: number) => void;
  handleSelectAnswer: (attribute: string, answer: Option[]) => void;
  handleSkipClick: (attribute: string) => void;
}

const MultiSelect = (props: MultiSelectProps) => {
  const {
    questionText,
    options,
    selectedValues,
    isSkippable,
    attribute,
    showEditButton,
    isPrivate,
    keyIndex,
    isEditable,
    handleEditClick,
    handleSelectAnswer,
    handleSkipClick,
  } = props;

  const [answer, setAnswer] = useState([]);


  useEffect(() => {
    if (selectedValues && selectedValues.length > 0) {
      let filteredAnswered = [...selectedValues];
      if (isEditable) {
        filteredAnswered = selectedValues.filter(
          (value) => value.optionId !== '-1',
        ) || [];
      }
      if (filteredAnswered) {
        setAnswer(filteredAnswered);
      }
    }
  }, [selectedValues, isEditable]);

  const handleAnswerClick = (selectedOption: Option) => {
    // if "not answered" is in the array list then removing it first from the list.
    const filteredAnswered = (answer && answer.filter(
      (ans) => ans.optionId !== '-1',
    )) || [];
    // if selected value already exist in the array then need to remove it
    // from array (deselect value)
    // if selected value doesn't exist then need to add it into the array fo selected answers list.
    const ansIndex = filteredAnswered.findIndex((ans: Options) => (
      ans.optionId === selectedOption.optionId
    ));
    const updatedAnswer = [...filteredAnswered];
    if (ansIndex > -1) {
      updatedAnswer.splice(ansIndex, 1);
    } else {
      updatedAnswer.push(selectedOption);
    }
    setAnswer(updatedAnswer);
  };

  const handleSkip = () => {
    if (selectedValues && (selectedValues.length > 0)) {
      setAnswer(selectedValues);
    } else {
      setAnswer([]);
    }
    handleSkipClick(attribute);
  };

  const handleNext = () => {
    handleSelectAnswer(attribute, answer);
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
        handleNext={handleNext}
        handleEdit={handleEdit}
        isPrivate={isPrivate}
        showEditButton={showEditButton}
      />
    </>
  );
};

export default MultiSelect;
