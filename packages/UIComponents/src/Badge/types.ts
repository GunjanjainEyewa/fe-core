import {
  ReactChild,
} from 'react';
import {
  VARIANT,
  KIND,
} from './constants';

export type Props = {
  variant: keyof typeof VARIANT;
  kind: keyof typeof KIND;
  content?: string | number;
  withIcon?: ReactChild;
};
