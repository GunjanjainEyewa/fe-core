import React from 'react';
import { styled } from '@nykaa/ui-components';
import colors from '@nykaa/ui-components/tokens/colors';


interface Props {
  content: string;
}

const Wrapper = styled.p`
  ${({ theme }) => theme.typography.type240};
  margin: 0 0 8% 0;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  color: ${colors.pebble500};
`;

const Title = ({ content = '' }: Props) => {
  if (!content) {
    return null;
  }
  return (
    <Wrapper>
      { content }
    </Wrapper>
  );
};

export default Title;
