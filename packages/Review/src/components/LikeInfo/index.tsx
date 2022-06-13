import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import LikeSvg from '@nykaa/review-card-shared/Icons/likeSvg';
import { LikeProps } from '@nykaa/review-card-shared/types';
import LikeText from './LikeText';
import { defaultTranslations } from '../../constants';


const Wrapper = styled.section`
  ${({ theme }) => theme.typography.bodyMedium};
  border-top: ${({ theme }) => `1px solid ${hexToRgb(theme.colors.state, 0.12)}`};
  border-bottom: ${({ theme }) => `1px solid ${hexToRgb(theme.colors.state, 0.12)}`};
  background-color: white;
  margin: -${({ theme }) => theme.spacing.spacing10} 
  ${({ theme }) => theme.spacing.spacing60} 0px;
  padding: ${({ theme }) => theme.spacing.spacing20} 0;
  display: flex;
`;

const LikeIcon = styled.span<{ isLikedByUser: boolean; }>`
  width: 35%;
  padding: ${({ theme }) => theme.spacing.spacing20} 
  ${({ theme }) => theme.spacing.spacing80} 
  ${({ theme }) => theme.spacing.spacing40} 0;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 14px;
  svg {
    display: inline-block;
    vertical-align: bottom;
  }
  g {
    stroke: ${({ isLikedByUser, theme }) => (isLikedByUser ? 'none' : theme.colors.primary)};
    fill: ${({ isLikedByUser, theme }) => (isLikedByUser ? theme.colors.primary : 'none')};
  }
`;

const TextLike = styled.strong`
  ${({ theme }) => theme.typography.buttonMedium};
  margin-left: ${({ theme }) => theme.spacing.spacing20};
`;

const LikeInfo = ({
  reviewId, likeCount, isLikedByUser, handleLike, customTranslations = defaultTranslations,
}: LikeProps) => (
  <Wrapper>
    <LikeIcon
      isLikedByUser={isLikedByUser}
      onClick={() => handleLike(reviewId, isLikedByUser, likeCount)}
    >
      <LikeSvg />
      <TextLike>
        {customTranslations?.HELPFUL || defaultTranslations.HELPFUL}
      </TextLike>
    </LikeIcon>
    {(likeCount > 0) && (
      <LikeText
        likeCount={likeCount}
        isLikedByUser={isLikedByUser}
        customTranslations={customTranslations}
      />
    )}
  </Wrapper>
);

export default LikeInfo;
