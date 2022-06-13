import React from 'react';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { styled } from '@nykaa/ui-components';

export interface WorkCardProps {
  icon?: () => JSX.Element;
  imgUrl?: string;
  title: string;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing80};
`;

const ImageCtn = styled.div`
  margin-right: ${({ theme }) => theme.spacing.spacing80};
  img {
    width: 60px;
    height: 60px;
  }
`;

const DescriptionCtn = styled.div``;

const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleLarge};
  letter-spacing: ${({ theme }) => theme.typography.spacing75}px;
  color: ${({ theme }) => theme.colors.pebble900};
`;

const Description = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
`;

const WorkCard: React.FunctionComponent<WorkCardProps> = (
  props: WorkCardProps,
) => {
  const {
    icon, imgUrl, title, description,
  } = props;

  return (
    <Wrapper>
      <ImageCtn>
        {icon ? icon() : <img src={imgUrl} alt="prive_how_it_works" />}
      </ImageCtn>
      <DescriptionCtn>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionCtn>
    </Wrapper>
  );
};

export default WorkCard;
