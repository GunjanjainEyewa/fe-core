import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { LikeTextProps } from '@eyewa/review-card-shared/types';


const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing40}
  0 ${({ theme }) => theme.spacing.spacing40}
  ${({ theme }) => theme.spacing.spacing80};
  margin-top: ${({ theme }) => (theme.spacing.spacing20)};
  ${({ theme }) => (theme.typography.bodyLarge)}
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.62)};
  flex-wrap: wrap;
  ${({ theme }) => theme.typography.bodyLarge};
`;
const Text = styled.strong`
  margin-right: ${({ theme }) => theme.spacing.spacing20};
`;

const LikeText: React.FC<LikeTextProps> = (
  { likeCount, isLikedByUser }: LikeTextProps,
) => {
  if (isLikedByUser) {
    if (likeCount === 1) {
      return (
        <Wrapper>
          <Text>
            You
          </Text>
          found this helpful
        </Wrapper>
      );
    }
    if (likeCount > 1) {
      return (
        <Wrapper>
          <Text>
            You
          </Text>
          and &nbsp;
          <Text>
            {likeCount - 1}
          </Text>
          people found this helpful
        </Wrapper>
      );
    }
  }
  return (
    <Wrapper>
      <Text>
        {likeCount}
      </Text>
      people found this helpful
    </Wrapper>
  );
};

export default LikeText;
