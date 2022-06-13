/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledComponent from './Styled/BarLoader';
import { BarLoaderProps as Props } from './types';

function BarLoader({
  ...rest
}: Props): React.ReactElement<Props> {
  return (
    <StyledComponent
      {...rest}
    />
  );
}

export default BarLoader;
