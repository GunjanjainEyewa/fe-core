/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledButton from './StyledButton';
import { Props } from './types';


function Button({
  children,
  ...rest
}: Props): React.ReactElement<Props> {
  if (!children) {
    return null;
  }

  return (
    <StyledButton
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
