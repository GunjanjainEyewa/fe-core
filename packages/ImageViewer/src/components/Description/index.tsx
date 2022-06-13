import * as React from 'react';
import { styled } from '@nykaa/ui-components';
import { DescriptionProps } from '@nykaa/image-viewer-shared/types';

const Wrap = styled.section`
  padding: 0 5px;
`;

const Title = styled.h4`
  color: #ffffff;
  ${({ theme }) => theme.typography.subTitleMedium};
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textInverseSecondary};
  ${({ theme }) => theme.typography.bodyMedium};
`;

export default (props: DescriptionProps): JSX.Element => {
  const { title, description } = props;
  return (
    <Wrap>
      {title && (
        <Title>
          &quot;
          {title}
          &quot;
        </Title>
      )}
      <Description>
        {description}
      </Description>
    </Wrap>
  );
};
