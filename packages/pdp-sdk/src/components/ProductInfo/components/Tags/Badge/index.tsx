import React, { memo } from 'react';
import { styled } from '@eyewa/ui-components';
import { scaleImage } from '@eyewa/utils/image';
import { BadgeValueProps } from '../../../../../types/ProductInfo';


const BADGE_HEIGHT = 16;

interface BadgeProps {
  value?: BadgeValueProps;
}
const BadgeIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.spacing40};
  position: relative;
`;

const DEFAULT_VALUE = {
  imageUrl: '',
  title: '',
};

function Badge({ value = DEFAULT_VALUE }: BadgeProps) {
  const { imageUrl, title } = value;

  if (!imageUrl) {
    return null;
  }

  return (
    <BadgeIcon>
      <img
        src={scaleImage({ url: imageUrl, height: BADGE_HEIGHT * 2 })}
        alt={title}
        height={BADGE_HEIGHT}
      />
    </BadgeIcon>
  );
}

export default memo(Badge);
