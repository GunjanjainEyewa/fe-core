import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import LikeSvg from '@nykaa/review-card-shared/Icons/likeSvg';
import { LikeProps } from '@nykaa/review-card-shared/types';
import { LIKE_ICON_ID } from '@nykaa/review-card-shared/constants';
import LikeText from './LikeText';


const Wrapper = styled.section`
  ${({ theme }) => theme.typography.buttonLarge};
  background-color: white;
  margin: -${({ theme }) => theme.spacing.spacing10} 
  ${({ theme }) => theme.spacing.spacing60} 0px;
  padding: ${({ theme }) => theme.spacing.spacing20} 0;
  display: flex;
`;

const LikeIcon = styled.span<{ isLikedByUser: boolean; }>`
  ${({ theme }) => theme.borders.border100};
  display: flex;
  border-color:${({ theme }) => hexToRgb(theme.colors.state, 0.12)};
  border-radius: ${({ theme }) => theme.borders.radius20};
  min-width: 130px;
  padding: ${({ theme }) => theme.spacing.spacing40} 
  ${({ theme }) => theme.spacing.spacing60} 
  ${({ theme }) => theme.spacing.spacing60}
  ${({ theme }) => theme.spacing.spacing80};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  svg {
    display: inline-block;
    vertical-align: bottom;
  }
  g {
    stroke: ${({ isLikedByUser, theme }) => (isLikedByUser ? 'none' : theme.colors.primary)};
    fill: ${({ isLikedByUser, theme }) => (isLikedByUser ? theme.colors.primary : 'none')};
  }
`;

const TextLike = styled.div`
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;

const LikeInfo = ({
  reviewId, likeCount, isLikedByUser, handleLike,
}: LikeProps) => (
  <Wrapper>
    <LikeIcon
      className={LIKE_ICON_ID}
      isLikedByUser={isLikedByUser}
      onClick={() => handleLike(reviewId, isLikedByUser, likeCount)}
    >
      <LikeSvg />
      <TextLike>
        Helpful
      </TextLike>
    </LikeIcon>
    {(likeCount > 0) && (
      <LikeText likeCount={likeCount} isLikedByUser={isLikedByUser} />
    )}
  </Wrapper>
);

export default LikeInfo;
