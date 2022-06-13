/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledComponent from './Styled';
import { Props } from './types';


function Toast({
  ...rest
}: Props): React.ReactElement<Props> {
  const { children } = rest;
  const isChildren = !!children;
  return (
    <StyledComponent
      {...rest}
      isChildren={isChildren}
    />
  );
}

export default Toast;
