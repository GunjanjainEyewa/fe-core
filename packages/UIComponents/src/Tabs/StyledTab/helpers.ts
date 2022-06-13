import { Theme } from '../../themes/types';

import {
  HelperProps,
} from '../types';
import {
  SIZE,
  FULL_WIDTH,
  TAB_MAX_WIDTH,
} from '../constants';

type GetStyles = { theme: Theme } & HelperProps;

export const getFontStyles = ({ size, theme }: Pick<GetStyles, 'size' | 'theme'>) => {
  const {
    subTitleLarge, subTitleMedium, subTitleSmall,
  } = theme.typography;

  switch (size) {
    case SIZE.large:
      return subTitleLarge;
    case SIZE.medium:
      return subTitleMedium;
    case SIZE.small:
      return subTitleSmall;
    default:
      return subTitleMedium;
  }
};

export const getSizing = (
  { theme, size }: Partial<GetStyles>,
) => {
  const {
    spacing60, spacing80,
  } = theme.spacing;
  // Replace these with tokens, yet to be made by design team
  let paddingY: string = '10px';
  switch (size) {
    case SIZE.large:
      paddingY = spacing60;
      break;

    case SIZE.small:
      paddingY = spacing60;
      break;

    default:
      break;
  }

  return { padding: `${paddingY} ${spacing80}` };
};

export const getFit = (
  { fit }: Partial<GetStyles>,
) => {
  const width = `${FULL_WIDTH / fit}%`;

  const sizeProps: {
    width?: string,
    maxWidth: string,
  } = {
    width: fit ? width : '',
    maxWidth: fit ? width : TAB_MAX_WIDTH.large,
  };

  return sizeProps;
};

export const getKindStyles = (
  { theme, selected, disabled }: Partial<GetStyles>,
) => {
  const { secondary, textSecondary, textDisabled } = theme.colors;

  if (disabled) {
    return textDisabled;
  }
  if (selected) {
    return secondary;
  }
  return textSecondary;
};

export const getIconSize = ({ theme, size }: Partial<GetStyles>) => {
  const { spacing60, spacing80 } = theme.spacing;
  const sizeProps: {
    height: string,
  } = {
    height: spacing80,
  };

  switch (size) {
    case SIZE.small:
      sizeProps.height = spacing60;
      break;

    default:
      break;
  }

  return sizeProps;
};
