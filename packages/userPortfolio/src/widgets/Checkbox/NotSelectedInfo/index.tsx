import React from 'react';
import { styled } from '@eyewa/ui-components';
import InfoSection from '../../../components/InfoSection';
import { GOT_IT_BUTTON_TEXT } from '../../../constants';

// Replace with new token
const Text = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  letter-spacing: 0.25px;
  color: #001325;
  text-align: start;
  margin: 8px 10px 24px 30px;
`;

interface nonSelectProps {
  infoText: string;
  handleInteraction?: () => void;
  showInfoSection: boolean;
}

const NonSelectedInfo = (props: nonSelectProps) => {
  const { infoText, handleInteraction, showInfoSection } = props;
  return (
    <>
      <Text>
        We hope you reconsider sharing your beauty
        traits alongside your reviews with your fellow
        Nykaa Shoppers
      </Text>
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

export default NonSelectedInfo;
