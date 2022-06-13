import * as React from 'react';
import { styled } from '@nykaa/ui-components';
import LikeSvg from './likeSvg';

export interface LikeProps {
  count: number;
  isLiked?: boolean;
}

const Wrap = styled.section`
  ${({ theme }) => theme.typography.bodyMedium};
  margin-top: -1px;
`;

const LikeIcon = styled.span`
  display: inline-block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  line-height: 14px;
`;

const LikeTitle = styled.span`
  ${({ theme }) => theme.typography.bodyMedium};
  padding: 5px 0 5px 5px;
  color: #ffffff;
`;

const LikeCount = styled.strong`
  margin-right: 5px;
`;

export default ({ count }: LikeProps) => {
  if (count === 0) {
    return null;
  }
  return (
    <Wrap>
      <LikeIcon>
        <LikeSvg />
      </LikeIcon>
      <LikeTitle>
        <LikeCount>
          {count}
        </LikeCount>
        people found this helpful
      </LikeTitle>
    </Wrap>
  );
};
