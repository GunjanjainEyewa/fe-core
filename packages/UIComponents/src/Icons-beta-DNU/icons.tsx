/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Props } from './types';
import Svg from './Styled';

function Icon(props: Props) {
  const {
    children,
    size,
    title,
    ...rest
  } = props;
  const custom = { ...rest, size: (size || '24px') };
  return (
    <Svg {...custom}>
      <title>{title}</title>
      {children}
    </Svg>
  );
}

export default Icon;
