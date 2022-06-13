import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { LikeTextProps } from '@nykaa/review-card-shared/types';
import { defaultTranslations } from '../../constants';


const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing40}
  0 ${({ theme }) => theme.spacing.spacing40}
  ${({ theme }) => theme.spacing.spacing80};
  margin-top: ${({ theme }) => (theme.spacing.spacing10)};
  border-left: ${({ theme }) => `1px solid ${hexToRgb(theme.colors.state, 0.12)}`};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.62)};
  flex-wrap: wrap;
  ${({ theme }) => theme.typography.bodyMedium};
`;
const Text = styled.strong`
  margin-right: ${({ theme }) => theme.spacing.spacing20};
`;

const LikeText: React.FC<LikeTextProps> = (
  { likeCount, isLikedByUser, customTranslations = defaultTranslations }: LikeTextProps,
) => {
  const {
    YOU = defaultTranslations?.YOU,
    FOUND_THIS_HELPFUL = defaultTranslations?.FOUND_THIS_HELPFUL,
    PEOPLE_FOUND_THIS_HELPFUL = defaultTranslations?.PEOPLE_FOUND_THIS_HELPFUL,
    AND = defaultTranslations?.AND,
  } = customTranslations;

  if (isLikedByUser) {
    if (likeCount === 1) {
      return (
        <Wrapper>
          <Text>
            {YOU}
          </Text>
          { FOUND_THIS_HELPFUL }
        </Wrapper>
      );
    }
    if (likeCount > 1) {
      return (
        <Wrapper>
          <Text>
            { YOU }
          </Text>
          { AND }
          {' '}
          &nbsp;
          <Text>
            {likeCount - 1}
          </Text>
          { PEOPLE_FOUND_THIS_HELPFUL }
        </Wrapper>
      );
    }
  }
  return (
    <Wrapper>
      <Text>
        {likeCount}
      </Text>
      { PEOPLE_FOUND_THIS_HELPFUL }
    </Wrapper>
  );
};

export default LikeText;
