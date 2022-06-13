/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledComponent from './Styled/SpotLoader';
import { SpotHelperProps as Props } from './types';

function SpotLoader({
  ...rest
}: Props): React.ReactElement<Props> {
  return (
    <StyledComponent
      {...rest}
    />
  );
}

export default SpotLoader;
