// libs
import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';

// icons
import StarActive from './icon/StarActive';
import StarInActive from './icon/StarInActive';

const TrimmedIcon = styled.span<{ trimmed?: number }>`
  position: absolute;
  left: 0;
  clip-path: ${({ trimmed = 0 }) => `inset(0 ${100 - Math.floor(trimmed * 100)}% 0 0)`};
`;

const Star = styled.button`
  background: transparent;
  border: none;
  position: relative;
  outline: 0;
  margin-right: ${({ theme }) => theme.spacing.spacing10};
  display: inline-block;
  cursor: pointer;
`;

interface Props {
  maxCount: number;
  activeCount: number;
  size: number;
  onChange: (val: number) => void;
}

function StarRating({
  maxCount = 5, activeCount = 0, size = 25, onChange,
}: Partial<Props>) {
  const onClick = (index: number) => {
    if (onChange === undefined) return;

    onChange(index);
  };

  const ActiveIcon = <StarActive size={size} />;
  const InActiveIcon = <StarInActive size={size} />;

  return (
    <div>
      {Array(maxCount)
        .fill(1)
        .map((_, indx) => {
          const i = indx + 1;
          const isFilled = i <= activeCount;
          const canAddTrimmedIcon = i === Math.floor(activeCount + 1) && activeCount > 0;

          return (
            <Star key={i} onClick={() => onClick(i)}>
              {isFilled ? ActiveIcon : InActiveIcon}

              {canAddTrimmedIcon && (
                <TrimmedIcon className="icon-star-filled" trimmed={activeCount % (i - 1)}>
                  {ActiveIcon}
                </TrimmedIcon>
              )}
            </Star>
          );
        })}
    </div>
  );
}

export default memo(StarRating);
