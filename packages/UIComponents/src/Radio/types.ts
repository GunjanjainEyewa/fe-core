import {
  ReactNode,
} from 'react';

export const TYPES = <const>{
  list: 'list',
  default: 'default',
};
export const ALIGN = <const>{
  horizontal: 'horizontal',
  vertical: 'vertical',
};

export type GroupProps = {
  changeHandler?: (value: string) => any;
  value: string;
  name?: string;
  children?: ReactNode;
  align: keyof typeof ALIGN;
};

export type Props = {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  value: string;
  name?: string;
  type?: keyof typeof TYPES;
  changeHandler?: (value: string) => {};
};
