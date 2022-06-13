import React from 'react';
import { styled } from '@nykaa/ui-components';

interface Props {
  text: any;
}

const Wrapper = styled.p`
  ${({ theme }) => theme.typography.type241};
  color: #001325;
`;

const Text = ({ text }: Props) => (
  <Wrapper>
    { text }
  </Wrapper>
);

export default Text;
