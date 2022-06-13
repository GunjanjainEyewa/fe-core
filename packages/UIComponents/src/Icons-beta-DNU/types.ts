import {
  ReactNode,
} from 'react';


export type StyleProps = {
  size?: string;
  color?: string;
  title?: string;
};

// see if we can avoid this
type AdditionalProps = {
  children?: ReactNode;
  viewBox?: string;

};

export type Props = StyleProps & AdditionalProps;
