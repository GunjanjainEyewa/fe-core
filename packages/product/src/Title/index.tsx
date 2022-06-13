import React from 'react';
import styled from '@nykaa/ui-components/styles/styled';


const Title = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  overflow: hidden;
  height: 35px;
  display: block;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-overflow: ellipsis;
`;


interface CardTitleProps {
  title: string;
  elipsTitleLength: number;
}

const CardTitle: React.FC<CardTitleProps> = ({
  title, elipsTitleLength = 100,
}: CardTitleProps) => {
  let elipsizedText = title;
  if ((title) && (title.length > elipsTitleLength)) {
    elipsizedText = `${title.substr(0, elipsTitleLength)}...`;
  }
  return (
    <Title>
      {elipsizedText}
    </Title>
  );
};

export default CardTitle;
