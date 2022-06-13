import React from 'react';
import StyledBadge from './Styled';
import { Props } from './types';

const Badge = ({ ...props }: Props): React.ReactElement<Props> => (
  <StyledBadge {...props} />
);

export default Badge;
