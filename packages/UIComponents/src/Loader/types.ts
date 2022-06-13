import {
  SIZE,
} from './constants';

export type BarLoaderProps = {
  width?: number;
  indeterminateTime?: number;
  value?: number;
  isDeterminate?: boolean;
  text?: string;
  fullScreen?: boolean;
};

export type SpinnerProps = {
  size?: keyof typeof SIZE;
  value?: number;
  isDeterminate?: boolean;
  indeterminateTime?: number;
  showLogo?: boolean;
  showValue?: boolean;
};

export type SpotHelperProps = {
  delay?: number;
  size?: keyof typeof SIZE;
};
