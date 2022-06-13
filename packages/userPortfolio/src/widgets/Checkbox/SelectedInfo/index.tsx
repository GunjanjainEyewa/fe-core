import React from 'react';
import { styled } from '@nykaa/ui-components';
import PortFolioCard from '../../../components/PortfolioCard';
import Button from '../../../components/OutlineButton';
import { GOT_IT_BUTTON_TEXT } from '../../../constants';
import { UserInfoProps } from '../../../types/CheckboxWidget';

// Replace with new token
const Text = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  line-height: 18px;
  letter-spacing: -0.102941px;
  color: #001325;
  margin-top: 16px;
`;

const ButtonWrapper = styled.div`
  color: #E80071;
  margin: 0 32px 32px 0;
  background: white;
  position: fixed;
  bottom: 0;
  right: 0;
`;

interface SelectedInfoProps {
  profilePic: string;
  name: string;
  createdOnText: string;
  skinTone?: string;
  skinType?: string;
  hairType?: string[];
  handleInteraction?: () => void;
  showInfoSection: boolean;
  userInfo: UserInfoProps[];
}

const SelectedInfo = (props: SelectedInfoProps) => {
  const {
    profilePic,
    name,
    createdOnText,
    userInfo,
    showInfoSection,
    handleInteraction,
  } = props;
  return (
    <>
      <Text>
        This is how it will appear with your Reviews
      </Text>
      <PortFolioCard
        profilePic={profilePic}
        name={name}
        createdOnText={createdOnText}
        userInfo={userInfo}
      />
      {
        showInfoSection && (
          <ButtonWrapper>
            <Button
              text={GOT_IT_BUTTON_TEXT}
              handleInteraction={handleInteraction}
            />
          </ButtonWrapper>
        )
      }
    </>
  );
};

export default SelectedInfo;
