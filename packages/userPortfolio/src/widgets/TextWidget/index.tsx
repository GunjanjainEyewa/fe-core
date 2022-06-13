import React, { useState, useEffect } from 'react';
import { Option } from '../../components/PillButton';
import Question from '../../components/Question';
import Answer from './Answer';


interface Options {
  value: string;
  optionId: string;
}


interface TextSelectProps {
  questionText: string;
  option: Options;
  selectedValue?: string;
  attribute: string;
  handleSelectAnswer: (
    attribute: string, selectedValue: Option
  ) => void;
}

const TextSelect = (props: TextSelectProps) => {
  const {
    questionText,
    option,
    selectedValue,
    attribute,
    handleSelectAnswer,
  } = props;
  const [answer, setAnswer] = useState(selectedValue);

  useEffect(() => {
    if (selectedValue) {
      setAnswer(selectedValue);
    }
  }, [selectedValue]);


  const handleAnswerClick = (selectedOption: Option) => {
    if (selectedOption) {
      setAnswer(selectedOption.value);
      handleSelectAnswer(attribute, selectedOption);
    }
  };

  return (
    <>
      <Question
        text={questionText}
      />
      <Answer
        option={option}
        handleClick={handleAnswerClick}
        selectedValue={answer}
      />
    </>
  );
};

export default TextSelect;
