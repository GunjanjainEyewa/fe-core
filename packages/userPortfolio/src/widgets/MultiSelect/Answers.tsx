import React from 'react';
import styled from '@emotion/styled';
import { Option } from '../../components/PillButton';
import Edit from '../../components/Editable';
import NonEdit from '../../components/NonEditable';
import Next from '../../components/RoundedButton';
import Skip from '../../components/OutlineButton';
import PrivateInfo from '../../components/PrivateInfo';
import { SKIP_BUTTON_TEXT, NEXT_BUTTON_TEXT } from '../../constants';
import { OptionData } from '../../types';


const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  text-align: right;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding-right: 16px;
  z-index: 1;
`;

const NextWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: #E2007D;
  width: 190px;
  align-self: center;
  background: white;
  margin: 24px auto;
`;

const PrivateWrapper = styled.div`
  margin: 24px 0 16px 0;
`;

const SkipWrapper = styled.div`
  color: #E80071;
  margin: 0 32px 32px 0;
  background: white;
  text-align: right;
`;


interface ButtonProps {
  options: Option[];
  handleClick: (option: Option) => void;
  questionId?: number;
  isEditable: boolean;
  selectedValues?: OptionData[];
  isSkippable: boolean;
  isPrivate?: boolean;
  showEditButton: boolean;
  handleSkip: () => void;
  handleNext: () => void;
  handleEdit: () => void;
}

const AnswerOptions = (props: ButtonProps) => {
  const {
    options,
    handleClick,
    isEditable,
    selectedValues,
    isSkippable,
    isPrivate,
    showEditButton,
    handleSkip,
    handleNext,
    handleEdit,
  } = props;
  if (isEditable) {
    const showNextButton = selectedValues && (selectedValues.length > 0);
    return (
      <>
        <EditWrapper>
          <Edit
            options={options}
            selectedValues={selectedValues}
            handleClick={handleClick}
          />
        </EditWrapper>
        <ButtonWrapper>
          {
            showNextButton && (
              <NextWrapper>
                <Next handleInteraction={handleNext} text={NEXT_BUTTON_TEXT} isDisabled={false} />
              </NextWrapper>
            )
          }
          {
            isPrivate && (
              <PrivateWrapper>
                <PrivateInfo
                  text="These information will always remain private, and
                  visible only to you"
                />
              </PrivateWrapper>
            )
          }
          {
            isSkippable && (
              <SkipWrapper>
                <Skip handleInteraction={handleSkip} text={SKIP_BUTTON_TEXT} />
              </SkipWrapper>
            )
          }
        </ButtonWrapper>
      </>
    );
  }
  return (
    <NonEdit
      selectedValues={selectedValues}
      handleEdit={handleEdit}
      showEditButton={showEditButton}
    />

  );
};

export default AnswerOptions;
