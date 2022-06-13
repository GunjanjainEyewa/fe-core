import React from 'react';
import { styled } from '@nykaa/ui-components';

import RatingSvg from './ratingSvg';

export interface Rating {
  rating: number;
  variantIcon: string;
  variantName: string;
  createdOn: string;
  isShade: boolean;
}


const Wrap = styled.section`
  margin: 5px;
  ${({ theme }) => theme.typography.bodyMedium};
`;

const Rating = styled.span`
  display: inline-block;
  color: #ffffff;
  ${({ theme }) => theme.typography.titleXSmall};
  padding: 3px 5px;
`;

const StarIcon = styled.i`
  margin-left: 4px;
  svg {
    display: inline-block;
    vertical-align: bottom;
  }`;

const Variant = styled.span`
  display: inline-block;
  margin-left: 10px;
  padding-left: 10px;
  color: #ffffff;
  border-left: 1px solid #eeeeee;
`;

const Img = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  float: left;
 `;

const CreatedOn = styled.span`
  display: inline-block;
  margin-left: 10px;
  padding-left: 10px;
  float: right;
  color: ${({ theme }) => theme.colors.textInverseSecondary};
`;

const RatingInfo: React.SFC<Rating> = ({
  rating, variantName, variantIcon, createdOn, isShade,
}: Rating) => (
  <Wrap>
    <Rating>
      {rating}
      <StarIcon>
        <RatingSvg />
      </StarIcon>
    </Rating>
    {isShade && (
      <Variant>
        <Img src={variantIcon} alt={variantName} />
        { variantName }
      </Variant>
    )}
    <CreatedOn>
      { createdOn }
    </CreatedOn>
  </Wrap>
);

export default RatingInfo;
