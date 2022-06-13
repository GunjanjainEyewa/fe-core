import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import RatingSvg from '../../Icons/ratingSvg';
import getColor from '../../utils';
import { Variant } from '../../types';
import { SHADE } from '../../constants';


interface RatingProps {
  rating: number;
  variantId: number;
  options?: Variant[];
  variantType: string;
}
const Wrapper = styled.section`
  background-color: white;
  ${({ theme }) => theme.typography.titleXSmall};
  padding: ${({ theme }) => theme.spacing.spacing40} ${({ theme }) => theme.spacing.spacing80};
`;

const RatingContainer = styled.span<{ rating: number; }>`
  ${({ rating, theme }) => (`background-color: ${getColor({ theme, rating })}`)};
  ${({ theme }) => theme.typography.titleXSmall};
  display: inline-flex;
  align-items: center;
  color: white;
  border-radius: ${({ theme }) => theme.borders.radius20};
  padding: 3px 5px;
  svg {
      display: inline-block;
      vertical-align: bottom;
  }
`;

const StarIcon = styled.i`
  display: inherit;
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;

const VariantInfo = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.spacing40};
  border-left: 1px solid ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  padding-left: ${({ theme }) => theme.spacing.spacing60};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
  ${({ theme }) => theme.typography.bodyMedium};
`;

const VariantImg = styled.img`
  margin-right: ${({ theme }) => theme.spacing.spacing40};
  width: 20px;
  height: 20px;
  vertical-align: middle;
  border-style: none;
`;

const RatingInfo = ({
  options, rating, variantId, variantType,
}: RatingProps) => {
  const getChildObject = options && options.find((option) => (
    parseInt(option?.id, 10) === variantId
  ));
  const isShade = variantType === SHADE;
  return (
    <Wrapper>
      {(rating)
      && (
      <RatingContainer rating={rating}>
        {rating}
        <StarIcon>
          <RatingSvg />
        </StarIcon>
      </RatingContainer>
      )}
      {
        (isShade && getChildObject) && (
          <VariantInfo>
            <VariantImg src={getChildObject?.variant_icon} alt={getChildObject?.variant_name} />
            { getChildObject?.variant_name }
          </VariantInfo>
        )
      }
    </Wrapper>
  );
};

export default RatingInfo;
