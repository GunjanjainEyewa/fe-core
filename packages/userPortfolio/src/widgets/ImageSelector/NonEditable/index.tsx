import React from 'react';
import { styled } from '@nykaa/ui-components';
import InfoSection from '../../../components/InfoSection';
import { GOT_IT_BUTTON_TEXT } from '../../../constants';


const NonEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 24px 0;
`;
const Answers = styled.div`
  border: 1px solid #D6D9DC;
  box-sizing: border-box;
  border-radius: 12px 12px 0px 12px;
  align-self: right;
  ${({ theme }) => theme.typography.bodyMedium};
  text-align: start;
  letter-spacing: 0.5px;
  color: #001325;
  max-width: 121px;
  width: fit-content;
`;

const EditButton = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  line-height: 13px;
  text-align: right;
  letter-spacing: 0.428571px;
  color: rgb(0,19,37, 0.36);
  padding-top: 4px;
`;

const NameWrapper = styled.div`
  padding: 10px 0 10px 10px;
  text-align: start;
  word-break: break-word;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.labelMedium};
  color: #E80071;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 119px;
  border-bottom: 1px solid #D6D9DC;
  border-radius: 12px 12px 0 12px;
`;

// Replace with new token
const NonAnswer = styled.div`
  background: #FDEBF4;
  border-radius: 10px 10px 0px;
  ${({ theme }) => theme.typography.bodyMedium};
  text-align: start;
  letter-spacing: 0.5px;
  color: #001325;
  padding: 10px;
  max-width: 232px;
  width: fit-content;
`;

interface NonEditProps {
  selectedValue?: any;
  showEditButton: boolean;
  handleEdit: () => void;
  infoText: string;
  showInfoSection: boolean;
  handleInteraction: () => void;
}

const NonEdit = (props: NonEditProps) => {
  const {
    selectedValue,
    handleEdit,
    showEditButton,
    showInfoSection,
    infoText,
    handleInteraction,
  } = props;
  return (
    <>
      <NonEditWrapper>
        { selectedValue && (
          selectedValue.length > 0
        ) && (
          selectedValue[0].optionId !== '-1'
        ) ? (
          <Answers>
            <ValueWrapper>
              <Image src={selectedValue[0].image} alt="user-tone" />
              <NameWrapper>
                <Name>
                  {selectedValue[0].value}
                </Name>
              </NameWrapper>
            </ValueWrapper>
          </Answers>
          ) : (
            <NonAnswer>
              Not Answered
            </NonAnswer>
          )}
        { showEditButton && (
          <EditButton onClick={() => handleEdit()}>
            Edit
          </EditButton>
        )}
      </NonEditWrapper>
      {showInfoSection && (
        <InfoSection
          text={infoText}
          buttonText={GOT_IT_BUTTON_TEXT}
          handleInteraction={handleInteraction}
        />
      )}
    </>
  );
};

export default NonEdit;
