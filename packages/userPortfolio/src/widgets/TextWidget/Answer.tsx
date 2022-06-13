import React from 'react';
import { styled } from '@nykaa/ui-components';
import PillButton, { Option } from '../../components/PillButton';


const EditWrapper = styled.div`
  margin: 24px 0;
  text-align: right;
`;

const NonEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 24px 0;
`;
const Answers = styled.div`
  align-self: right;
  background: #FDEBF4;
  border-radius: 10px 10px 0px;
  ${({ theme }) => theme.typography.bodyMedium};
  text-align: right;
  color: #001325;
  padding: 10px;
  max-width: 232px;
  width: fit-content;
  word-wrap: break-word;
`;


interface ButtonProps {
  option: Option;
  handleClick: (option: Option) => void;
  questionId?: number;
  selectedValue?: string;
}

const AnswerOption = (props: ButtonProps) => {
  const {
    option,
    handleClick,
    selectedValue,
  } = props;

  if (!selectedValue) {
    return (
      <EditWrapper>
        <PillButton
          option={option}
          isSelected={false}
          handleClick={handleClick}
        />
      </EditWrapper>
    );
  }
  return (
    <NonEditWrapper>
      <Answers>
        {
          selectedValue
        }
      </Answers>
    </NonEditWrapper>

  );
};

export default AnswerOption;
