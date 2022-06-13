import React, { memo } from 'react';
import { SiblingColor } from '../../types/transformer';

export interface Props{
  data: SiblingColor[]
}


function Colors({ data }: Props) {
  if (!data) {
    return null;
  }

  return <>Colors</>;
}

export default memo(Colors);
