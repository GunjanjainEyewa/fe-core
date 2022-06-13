import React from 'react';
import styled from '@eyewa/ui-components/styles/styled';

import RatingSvg from './RatingSvg';
import EmptyStarIcon from './EmptyStar';


const Rating = styled.div`
  line-height: 12px;
  margin-top: 5px;
  .star-wrap {
    display: inline-block;
    margin-right: 2px;
  }
`;

const Count = styled.span`
  ${({ theme }) => theme.typography.bodyXSmall};
  color: ${({ theme }) => theme.colors.state};
  margin-left: 4px;
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
          {ratingCount}
        </Count>
      </Rating>
    )
  );
};

export default RatingInfo;
