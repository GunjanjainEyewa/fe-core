import React from 'react';
import { styled } from '@eyewa/ui-components';


const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  overflow: hidden;
  height: 42px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing60};
  text-align: center;
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
