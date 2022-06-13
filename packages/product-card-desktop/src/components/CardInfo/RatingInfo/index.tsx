import React from 'react';
import styled from '@eyewa/ui-components/styles/styled';
import { EmptyStarIcon, RatingSvg } from '../../icons';


const Rating = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing60};
  display: flex;
  justify-content: center;
  align-items: center;
  .star-wrap {
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing.spacing10};
  }
`;

const Count = styled.span`
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => theme.colors.state};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;

interface RatingProps {
  rating: number;
  ratingCount: number;
}

const RatingInfo: React.FC<RatingProps> = ({
  rating, ratingCount,
}: RatingProps) => {
  const fullStars = Math.round(rating);

  return (
    (ratingCount > 0) && (
      <Rating>
        {
          [...Array(5)].map((star, index) => {
            const starKey = `${index}-${star}`;
            const emptyStar = (index) >= fullStars;

            return (
              <span
                key={starKey}
                className="star-wrap"
              >
                {
                  (emptyStar) ? <EmptyStarIcon /> : <RatingSvg />
                }
              </span>
            );
          })
        }
        <Count>
          (
          {' '}
          {ratingCount}
          {' '}
          )
        </Count>
      </Rating>
    )
  );
};

export default RatingInfo;
