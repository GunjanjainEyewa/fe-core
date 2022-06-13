import React from 'react';
import styled from '@emotion/styled';
import { Option } from '../../components/PillButton';
import Edit from '../../components/Editable';
import NonEdit from '../../components/NonEditable';
import OutlineButton from '../../components/OutlineButton';
import PrivateInfo from '../../components/PrivateInfo';
import { SKIP_BUTTON_TEXT } from '../../constants';
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
const PrivateWrapper = styled.div`
  margin: 0 16px 24px 0;
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
  handleEdit: () => void;
}

const AnswerOption = (props: ButtonProps) => {
  const {
    options,
    handleClick,
    isEditable,
    selectedValues,
    isSkippable,
    isPrivate,
    handleSkip,
    handleEdit,
    showEditButton,
  } = props;

  if (isEditable) {
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
                <OutlineButton handleInteraction={handleSkip} text={SKIP_BUTTON_TEXT} />
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

export default AnswerOption;
