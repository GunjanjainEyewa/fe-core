import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import {
  VARIANT,
} from '../constants';

// this can be refactor we can make it simpler  inherited from button
type GetStyles = { theme: Theme } & Props;

export const getFontStyles = ({ theme }: Partial<GetStyles>) => {
  const { type140 } = theme.typography;

  return { ...type140, color: theme.colors.textInversePrimary };
};

export const getBorderStyles = ({ theme }: Partial<GetStyles>): any => {
  const border = theme.borders.border100;


  const borderRadius = theme.borders.radius30;

  return {
    ...border,
    borderRadius,
  };
};

export const getSizing = ({ theme }: Partial<GetStyles>) => {
  // TODO: spacing in case of buttons involving borders
  const sizeProp = {
    padding: theme.spacing.spacing60,
  };

  return sizeProp;
};


export const getKindStyles = (
  {
    theme, variant, icon, isChildren, timer,
  }: Partial<GetStyles>,
) => {
  const overlay = {
    backgroundColor: theme.colors.surfaceInverse30,
    justifyContent: 'unset',
  };

  if ((variant === VARIANT.single) && !(!!timer || !!icon || isChildren)) {
    overlay.justifyContent = 'center';
  }

  return {
    ...overlay,
  };
};


export const getTitleStyles = ({ theme }: Partial<GetStyles>) => {
  const {
    type141,

  } = theme.typography;

  return { ...type141 };
};

export const getMessageStyle = (dismissible: boolean) => {
  if (!dismissible) {
    return { 'max-width': '70%' };
  }
  return {};
};

export const getButtonFontStyles = ({ theme }: Partial<GetStyles>) => {
  const { type142 } = theme.typography;

  return { ...type142 };
};
