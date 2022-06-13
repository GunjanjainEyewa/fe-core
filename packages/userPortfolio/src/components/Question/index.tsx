import React from 'react';
import { styled } from '@eyewa/ui-components';
import Icon from './DefaultIcon';
import ThankuIcon from './ThankuIcon';


const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const TextWrapper = styled.div`
  background: rgb(0,19,37, 0.08);
  border-radius: 0px 12px 12px;
  ${({ theme }) => theme.typography.bodyMedium};
  color: rgb(0,19,37, 0.92);
  max-width: 232px;
  margin-left: 8px;
  padding: 10px 10px 10px 18px;
`;

const ImageWrapper = styled.div`
  padding: 10px 0;
  &.svg {
    width: 100%;
  }
`;
interface QuestionProps {
  text: string;
  showImage?: boolean;
}

const Question = ({ text, showImage = false }: QuestionProps) => (
  <Wrapper>
    <Icon />
    <TextWrapper>
      {text}
      { showImage && (
        <ImageWrapper>
          <ThankuIcon />
        </ImageWrapper>
      )}
    </TextWrapper>
  </Wrapper>
);

export default Question;
