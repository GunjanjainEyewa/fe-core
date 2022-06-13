import {
  ReactElement,
  ReactNode,
} from 'react';
import {
  SIZE,
} from './constants';

export type TabProps = {
  label: string;
  id: string;
  icon?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
};

export type TabsProps = {
  fitted: boolean;
  size: keyof typeof SIZE;
  selected: string;
  changeHandler: Function;
  children: ReactElement[];
};

export type HelperProps = {
  fit?: number;
  size?: keyof typeof SIZE;
  selected?: boolean;
  disabled?: boolean;
  changeHandler?: Function;
};

export type TabsContainer = {
  fitted: boolean;
};
