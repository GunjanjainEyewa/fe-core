import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import StarIcon from './StarIcon';

interface RatingProps {
  rating: number;
  reviewCount: number;
  showStarActive: boolean;
}
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing60};
`;
const ProductRating = styled.span`
  ${({ theme }) => theme.typography.titleXSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  margin: 0 ${({ theme }) => theme.spacing.spacing20};
`;
const ReviewCount = styled.span`
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
`;
const Rating = ({ rating, reviewCount, showStarActive }: RatingProps) => (
  <Container>
    <StarIcon showStarActive={showStarActive} />
    <ProductRating>
      {rating.toFixed(1)}
      |5
    </ProductRating>
    {reviewCount && (
      <ReviewCount>
        (Based on&nbsp;
        {reviewCount}
        {' '}
        Reviews)
      </ReviewCount>
    )}
  </Container>
);

export default memo(Rating);
