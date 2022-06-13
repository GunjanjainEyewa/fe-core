import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';


interface Description {
  title: string;
  description: string;
  showReadMore?: boolean
  handleReadMore?: () => void;
  descriptionLength?: number
}

const Wrapper = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.spacing80};
`;

const Title = styled.h4`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  padding-bottom: ${({ theme }) => theme.spacing.spacing40};
  margin-top: ${({ theme }) => theme.spacing.spacing40};;
`;

const Info = styled.p`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => theme.colors.textSecondary};

  strong {
    ${({ theme }) => theme.typography.buttonSmall};
  }
`;

const Description = (props: Description): JSX.Element => {
  const {
    title, description, handleReadMore, showReadMore, descriptionLength = description.length,
  } = props;
  return (
    <Wrapper>
      {(title)
      && (
      <Title>
        &quot;
        {title}
        &quot;
      </Title>
      )}
      {(description)
      && (
      <Info>
        {description?.substring(0, descriptionLength)}
        {showReadMore && (
        <strong onClick={() => handleReadMore()}>
          ...Read More
        </strong>
        )}
      </Info>
      )}
    </Wrapper>
  );
};

export default Description;
