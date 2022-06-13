import React, { memo } from 'react';
import { ChildColor } from '../../types/transformer';

export interface Props{
  data: ChildColor[]
}

function Shades({ data }: Props) {
  if (!data) {
    return null;
  }

  return <>Shades</>;
}

export default memo(Shades);
