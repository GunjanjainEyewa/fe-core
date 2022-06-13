import {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import {
  KIND,
  SHAPE,
  SIZE,
  COLOR,
} from './constants';

export type StyleProps = {
  kind: keyof typeof KIND;
  size: keyof typeof SIZE;
  /**
   * TODO: yet to handle this
   */
  shape: keyof typeof SHAPE;
  /**
   * @type {boolean} [fullWidth=false]
   */
  fullWidth?: boolean;
  color?: keyof typeof COLOR;
};

// see if we can avoid this
type AdditionalProps = {
  children: ReactNode;
  /**
   * TODO: yet to handle this
   */
  iconAfter?: ReactNode;
};

export type Props = ButtonHTMLAttributes<HTMLButtonElement>
& StyleProps
& AdditionalProps;
