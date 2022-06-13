import React from 'react';
import { styled } from '@nykaa/ui-components';
import Title from './components/Title';
import Description from './components/Description';
import { Configs } from './types';


interface Props {
  configs: Configs;
}

const Container = styled.div`
  width: 100%;
  background-color: #cacaca;
  min-height: 270px;
  display: flex;
`;

const Content = styled.div`
  width: 62%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const Image = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
    width: 100%;
    height: auto;
  }
`;

function ArtWidget({ configs }: Props) {
  const {
    title, content, link, linkText, image, videoImage, video,
  } = configs;
  const hasData = (title && content && link && linkText);

  if (!hasData) {
    return null;
  }

  const desc = { content, link, linkText };

  const imageSrc = video ? videoImage : image;

  return (
    <Container>
      <Content>
        <Title content={title} />
        <Description data={desc} />
      </Content>
      <Image>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <img src={imageSrc} alt={title} />
        </a>
      </Image>
    </Container>
  );
}

export default ArtWidget;
