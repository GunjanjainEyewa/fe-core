import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import Badge from './Badge';
import { ProductTag, BadgeValueProps } from '../../../../types/ProductInfo';

const Container = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
`;
const Tag = styled.span<{
  borderColor: string;
  bgColor: string;
  titleColor: string;
  transparency: string;
}>`
  ${({ theme }) => theme.borders.border100};
  ${({ borderColor }) => `border-color: ${borderColor}`};
  ${({ transparency }) => `opacity: ${transparency}`};
  ${({ bgColor }) => `background: ${bgColor}`};
  color: ${({ theme, titleColor }) => titleColor || hexToRgb(theme.colors.textPrimary, 0.92)};

  border-radius: ${({ theme }) => theme.borders.radius10};
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.spacing10} ${({ theme }) => theme.spacing.spacing20};
  margin: 0 ${({ theme }) => theme.spacing.spacing40} 0 0;
  height: 16px;
`;

const TagTitle = styled.span<{
  fontSize: string;
  fontWeight: string;
}>`
  ${({ fontSize, fontWeight, theme }) => (fontSize && fontWeight
    ? `font-size: ${fontSize}px;
  font-weight: ${fontWeight}px;`
    : theme.typography.bodySmall)};
  margin: 0;
  display: block;
  text-transform: uppercase;
`;

interface MultiTagsProps {
  tagData: ProductTag[];
  badge: BadgeValueProps;
}

function MultiTags({ tagData = [], badge }: MultiTagsProps) {
  return (
    <Container>
      <Badge value={badge} />
      {tagData?.map((item: ProductTag) => {
        const {
          title,
          titleColor,
          bgColor,
          borderColor,
          transparency,
          fontSize,
          fontWeight,
        } = item;
        return (
          <Tag
            key={title}
            titleColor={titleColor}
            bgColor={bgColor}
            borderColor={borderColor}
            transparency={transparency}
          >
            <TagTitle fontSize={fontSize} fontWeight={fontWeight}>
              {title}
            </TagTitle>
          </Tag>
        );
      })}
    </Container>
  );
}

export default memo(MultiTags);
