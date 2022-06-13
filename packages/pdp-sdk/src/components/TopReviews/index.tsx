import React, { memo } from 'react';
import { TopReviewInfo } from '../../types/transformer';

export interface Props{
  data: TopReviewInfo
}

function TopReviews({ data }: Props) {
  if (!data) {
    return null;
  }

  return <>TopReviews</>;
}

export default memo(TopReviews);
