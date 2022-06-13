import React from 'react';
import { styled } from '@eyewa/ui-components';
import { NOT_ANSWERED_VALUE } from '../../constants';
import getDisplayValues from '../../helpers';
import { OptionData } from '../../types';


const NonEditWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Answers = styled.div`
  background: #FDEBF4;
  border-radius: 10px 10px 0px;
  ${({ theme }) => theme.typography.bodyMedium};
  text-align: start;
  color: #001325;
  padding: 10px;
  max-width: 232px;
  width: fit-content;
  word-break: break-word;
  text-transform: capitalize;
`;

const EditButton = styled.div`
  ${({ theme }) => theme.typography.buttonSmall};
  text-align: right;
  color: rgb(0,19,37, 0.36);
  padding-top: 4px;
`;


interface NonEditProps {
  selectedValues?: OptionData[];
  showEditButton: boolean;
  handleEdit: () => void;
}

const NonEdit = (props: NonEditProps) => {
  const {
    selectedValues,
    handleEdit,
    showEditButton,
  } = props;
  return (
    <NonEditWrapper>
      <Answers>
        {
        (selectedValues && (selectedValues.length > 0)) ? (
          getDisplayValues(selectedValues)
        )
          : NOT_ANSWERED_VALUE
        }
      </Answers>
      {showEditButton && (
        <EditButton onClick={() => handleEdit()}>
          Edit
        </EditButton>
      )}
    </NonEditWrapper>
  );
};

export default NonEdit;
