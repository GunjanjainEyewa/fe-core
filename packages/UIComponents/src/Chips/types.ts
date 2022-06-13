import {
  ReactNode,
} from 'react';
import {
  SIZE,
} from './constants';

export type StyleProps = {
  size: keyof typeof SIZE;
  icon?: ReactNode;
  label: string;
  onClick?: () => {};
  dismissible? : boolean;
  disabled?: boolean;
  imgSrc?: string;
  selected?: boolean;
};

// see if we can avoid this
type AdditionalProps = {
  children?: ReactNode;

};

export type Props = StyleProps & AdditionalProps;
