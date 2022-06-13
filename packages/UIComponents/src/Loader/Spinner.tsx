/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledComponent from './Styled/Spinner';
import { SpinnerProps as Props } from './types';

function Spinner({
  ...rest
}: Props): React.ReactElement<Props> {
  return (
    <StyledComponent
      {...rest}
    />
  );
}

export default Spinner;
