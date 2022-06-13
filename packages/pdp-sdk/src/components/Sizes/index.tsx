import React, { memo } from 'react';
import { Size } from '../../types/transformer';

export interface Props{
  data: Size[]
}

function Sizes({ data }: Props) {
  if (!data) {
    return null;
  }

  return <>Sizes</>;
}

export default memo(Sizes);
