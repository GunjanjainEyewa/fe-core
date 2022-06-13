import React from 'react';
import { styled } from '@eyewa/ui-components';
import { PriceReveal } from '@eyewa/product-card-shared/types/cardInfo';


const Container = styled.span`
  margin: ${({ theme }) => theme.spacing.spacing80} ${({ theme }) => theme.spacing.spacing40};
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const TagName = styled.span`
    ${({ theme }) => theme.typography.bodyMedium};
    border-radius: ${({ theme }) => theme.borders.radius10};
    padding:  ${({ theme }) => theme.spacing.spacing10} ${({ theme }) => theme.spacing.spacing40};;
    color: ${({ theme }) => theme.colors.primary40};
    background-color: ${({ theme }) => theme.colors.primary10};
    border: none;
    & {
      background-color: ${({ badgeColor }: PriceReveal) => badgeColor};
      color:  ${({ textColor }: PriceReveal) => textColor};
    }
`;

interface SaleTagsProps {
  plpPriceReveal: PriceReveal
}

const SaleTags: React.SFC<SaleTagsProps> = ({
  plpPriceReveal,
}: SaleTagsProps) => {
  const { text: tagName = '', textColor, badgeColor } = plpPriceReveal;
  return (
    <Container>
      <TagName textColor={textColor} badgeColor={badgeColor}>
        {tagName}
      </TagName>
    </Container>
  );
};

export default SaleTags;
