import React from 'react';
import { styled } from '@eyewa/ui-components';
import InfoIcon from './InfoIcon';


const InfoWrapper = styled.div`
  padding: 16px 18px;
  background: #ebf3ff;
  border: 1px solid rgba(0, 109, 255, 0.16);
  border-radius: 8px;
  display: flex;
  bottom: 0;
  position: fixed;
  margin: 0px 16px 32px;
`;

const Info = styled.div`
  align-items: center;
  padding-left: 18px;
`;

const InfoText = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  color: #000F1D;
  opacity: 0.92;
`;

const Button = styled.button`
  margin-top: 16px;
  ${({ theme }) => theme.typography.titleXSmall};
  letter-spacing: 0.5px;
  color: #001325;
  border: 0;
  background-color: transparent;
`;

interface InfoProps {
  text: string;
  buttonText: string;
  handleInteraction: () => void;
}

const InfoSection = (props: InfoProps) => {
  const {
    text,
    buttonText,
    handleInteraction,
  } = props;
  return (
    <InfoWrapper>
      <i>
        <InfoIcon />
      </i>
      <Info>
        <InfoText>
          {text}
        </InfoText>
        <Button type="submit" onClick={() => handleInteraction()}>
          {buttonText}
        </Button>
      </Info>
    </InfoWrapper>
  );
};

export default InfoSection;
