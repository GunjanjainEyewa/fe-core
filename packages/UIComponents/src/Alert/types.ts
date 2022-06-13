import {
  ReactNode,
} from 'react';
import {
  KIND,
  VARIANT,
} from './constants';

export type StyleProps = {
  kind: keyof typeof KIND;
  variant: keyof typeof VARIANT;
  /**
   * TODO: yet to handle this
   */
  withIcon?: boolean;
  message: string;
  dismissible? : boolean;
  onDismiss?: () => {};
  title?: string;
  action?: any;
};

// see if we can avoid this
type AdditionalProps = {
  children?: ReactNode;

};

export type Props = StyleProps & AdditionalProps;
