import {
  ReactNode,
} from 'react';
import {
  VARIANT,
  STATE,
} from './constants';

export type StyleProps = {
  variant?: keyof typeof VARIANT;
  state?: keyof typeof STATE;

  icon?: ReactNode;
  trailingIcon?: ReactNode;
  onDismiss?: () => {};
  label?: string;
  placeholder?: string;
  supportiveText?: string;
  supportiveTextIcon?: ReactNode;
  prefixText?: string;
  onChange?: any;
  trailingIconAction?: any;
  inlineAction?: any;
  inlineActionText?: string;
  value?: string;
  disabled?: boolean;
  suffixText?: string;
};

// see if we can avoid this
type AdditionalProps = {
  children?: ReactNode;

};

export type Props = StyleProps;
