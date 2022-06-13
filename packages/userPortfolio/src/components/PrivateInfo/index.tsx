import React from 'react';
import { styled } from '@eyewa/ui-components';
import Icon from './LockIcon';


const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;
const TextWrapper = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  color: #006DFF;
  text-align: start;
  margin-left: 13px;
`;

interface InfoProps {
  text: string;
}

const PrivateInfo = ({ text }: InfoProps) => (
  <Wrapper>
    <Icon />
    <TextWrapper>
      {text}
    </TextWrapper>
  </Wrapper>
);

export default PrivateInfo;
