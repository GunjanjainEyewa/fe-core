import React from 'react';
import { styled } from '@eyewa/ui-components';

interface Props {
  data: {
    content?: string;
    link?: string;
    linkText?: string;
  }
}

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.spacing120};
  max-width: 600px;
  p {
    // This widget is made accroding to the old design system. Directly picking color now.
    color: ${({ theme }) => theme.colors.pebble700};
    ${({ theme }) => theme.typography.bodyLarge};
  }
`;

const LinkedButton = styled.a`
  ${({ theme }) => theme.typography.subTitleLarge};
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;


const Description = ({ data = {} }: Props) => {
  const { content, link, linkText } = data;
  if (!content) {
    return null;
  }
  return (
    <Wrapper>
      <p>{ content }</p>
      {(linkText && link) && (
      <LinkedButton href={link} rel="noopener noreferrer" target="_blank">
          {`${linkText}>`}
      </LinkedButton>
      )}
    </Wrapper>
  );
};

export default Description;
