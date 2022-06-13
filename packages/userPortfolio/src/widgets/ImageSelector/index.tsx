import React, { useState, useEffect } from 'react';
import Question from '../../components/Question';
import Answer from './Answer';
import { OptionData } from '../../types';


interface ImageSelectProps {
  questionText: string;
  options: OptionData[];
  selectedValue?: OptionData[];
  isSkippable: boolean;
  isPrivate: boolean;
  attribute: string;
  showEditButton?: boolean;
  showInfoSection?: boolean;
  infoText: string;
  keyIndex: number;
  isEditable: boolean;
  handleEditClick: (indexValue: number) => void;
  handleSelectAnswer: (
    attribute: string,
    selectedValue: OptionData[],
    callApi: boolean,
  ) => void;
  handleSkipClick?: (attribute: string) => void;
}

const ImageSelect = (props: ImageSelectProps) => {
  const {
    questionText,
    options,
    selectedValue,
    isSkippable,
    isPrivate,
    attribute,
    handleSelectAnswer,
    handleSkipClick,
    showEditButton,
    showInfoSection,
    infoText,
    keyIndex,
    isEditable,
    handleEditClick,
  } = props;

  const [answer, setAnswer] = useState(selectedValue || []);

  useEffect(() => {
    if (selectedValue && (selectedValue.length > 0)) {
      setAnswer(selectedValue);
    }
  }, [selectedValue]);

  const handleAnswerClick = (selectedOption: OptionData) => {
    // If a value is selected than deselect it and if not selected than select it
    if (
      selectedValue && (
        selectedValue.length > 0
      ) && (
        selectedValue[0].optionId === selectedOption.optionId
      )
    ) {
      setAnswer([]);
    } else {
      setAnswer([selectedOption]);
    }
    handleSelectAnswer(attribute, [selectedOption], !showInfoSection);
  };

  const handleSkip = () => {
    if (selectedValue) {
      setAnswer(selectedValue);
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

  const handleGotitClick = () => {
    handleSelectAnswer(attribute, answer, true);
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
        selectedValue={answer}
        isSkippable={isSkippable}
        handleSkip={handleSkip}
        handleEdit={handleEdit}
        isPrivate={isPrivate}
        showEditButton={showEditButton}
        showInfoSection={showInfoSection}
        handleInteraction={handleGotitClick}
        infoText={infoText}
      />
    </>
  );
};

export default ImageSelect;
