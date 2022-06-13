import React from 'react';
import styled from '@emotion/styled';
import Edit from './Editable';
import NonEdit from './NonEditable';
import OutlineButton from '../../components/OutlineButton';
import PrivateInfo from '../../components/PrivateInfo';
import { SKIP_BUTTON_TEXT } from '../../constants';
import { OptionData } from '../../types';


const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

interface ImageSelectorProps {
  options: OptionData[];
  handleClick: (option: OptionData) => void;
  questionId?: number;
  isEditable: boolean;
  selectedValue?: OptionData[];
  isSkippable: boolean;
  isPrivate?: boolean;
  showEditButton: boolean;
  showInfoSection: boolean;
  infoText: string;
  handleSkip: () => void;
  handleEdit: () => void;
  handleInteraction: () => void;
}

const AnswerOptions = (props: ImageSelectorProps) => {
  const {
    options,
    handleClick,
    isEditable,
    selectedValue,
    isSkippable,
    isPrivate,
    handleSkip,
    handleEdit,
    showEditButton,
    showInfoSection,
    infoText,
    handleInteraction,
  } = props;

  if (isEditable) {
    return (
      <>
        <EditWrapper>
          <Edit
            options={options}
            selectedValue={selectedValue}
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
      selectedValue={selectedValue}
      handleEdit={handleEdit}
      showEditButton={showEditButton}
      showInfoSection={showInfoSection}
      infoText={infoText}
      handleInteraction={handleInteraction}
    />

  );
};

export default AnswerOptions;
