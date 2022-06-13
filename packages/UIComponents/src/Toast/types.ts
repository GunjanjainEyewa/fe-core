import {
  ReactNode,
} from 'react';
import {
  VARIANT,
} from './constants';

export type StyleProps = {
  variant: keyof typeof VARIANT;
  icon?: ReactNode;
  message: string;
  timer? : number;
  onDismiss?: () => {};
  action?: any;
  isChildren: boolean;
};

// see if we can avoid this
type AdditionalProps = {
  children?: ReactNode;

};

export type Props = StyleProps & AdditionalProps;
