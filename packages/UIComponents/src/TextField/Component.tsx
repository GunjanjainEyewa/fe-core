/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledComponent from './Styled';
import { Props } from './types';


function TextField({
  ...rest
}: Props): React.ReactElement<Props> {
  return (
    <StyledComponent
      {...rest}
    />
  );
}

export default TextField;
