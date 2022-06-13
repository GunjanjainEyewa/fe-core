
import React from 'react';

import { hexToRgb } from '../../styles/utils';
import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import {
  KIND,
  VARIANT,
} from '../constants';
import NegativeIcon from './Icons/negative';
import InfoIcon from './Icons/info';
import PositiveIcon from './Icons/positive';
import WarningIcon from './Icons/warning';


// this can be refactor we can make it simpler  inherited from button
type GetStyles = { theme: Theme } & Props;

export const getFontStyles = ({ variant, kind, theme }: Partial<GetStyles>) => {
  const { bodySmall } = theme.typography;
  const {
    info, negative, positive, warning, textPrimary,
  } = theme.colors;

  switch (variant) {
    // will declae combinations or re factor this logic
    case VARIANT.inline: {
      switch (kind) {
        case KIND.info: {
          return { ...bodySmall, color: info };
        }
        case KIND.negative: {
          return { ...bodySmall, color: negative };
        }
        case KIND.positive: {
          return { ...bodySmall, color: positive };
        }
        case KIND.warning: {
          return { ...bodySmall, color: warning };
        }

        default: {
          return {};
        }
      }
    }


    default:
      return { ...bodySmall, color: textPrimary };
  }
};

export const getBorderStyles = ({ variant, kind, theme }: Partial<GetStyles>): any => {
  let border;
  let borderColor;
  // * Border width and style

  switch (variant) {
    case VARIANT.inline: {
      return {};
    }
    default: {
      border = theme.borders.border100;
    }
  }

  switch (kind) {
    case KIND.info: {
      borderColor = hexToRgb(theme.colors.info, 0.16);
      break;
    }
    case KIND.negative: {
      borderColor = hexToRgb(theme.colors.negative, 0.16);
      break;
    }
    case KIND.positive: {
      borderColor = hexToRgb(theme.colors.positive, 0.16);
      break;
    }
    case KIND.warning: {
      borderColor = hexToRgb(theme.colors.warning, 0.16);
      break;
    }
    default: {
      break;
    }
  }
  const borderRadius = theme.borders.radiusPrimary;

  return {
    ...border,
    borderRadius,
    borderColor,
  };
};

export const getSizing = ({ variant, theme }: Partial<GetStyles>) => {
  // TODO: spacing in case of buttons involving borders
  const sizeProps: {
    paddingLeft?: string,
    paddingRight?: string,
    paddingTop?: string,
    paddingBottom?: string,
    padding?: string,
    width?: string,
  } = {

  };

  switch (variant) {
    case VARIANT.multi: {
      sizeProps.padding = theme.spacing.spacing60;
      break;
    }
    case VARIANT.single: {
      sizeProps.padding = theme.spacing.spacing40;
      break;
    }


    default:
      break;
  }

  // TODO: Handle shapes
  return sizeProps;
};


export const getKindStyles = (
  {
    theme, kind, variant, withIcon,
    dismissible,
  }: Partial<GetStyles>,
) => {
  const overlay = {
    backgroundColor: '',
    justifyContent: 'unset',
  };
  if (variant === VARIANT.inline) {
    return {};
  }
  if (!withIcon && (!dismissible)) {
    overlay.justifyContent = 'center';
  }

  switch (kind) {
    case KIND.info: {
      overlay.backgroundColor = hexToRgb(theme.colors.info, 0.08);
      break;
    }
    case KIND.positive: {
      overlay.backgroundColor = hexToRgb(theme.colors.positive, 0.08);
      break;
    }
    case KIND.warning: {
      overlay.backgroundColor = hexToRgb(theme.colors.warning, 0.08);
      break;
    }
    case KIND.negative: {
      overlay.backgroundColor = hexToRgb(theme.colors.negative, 0.08);
      break;
    }

    default:
      return {};
  }
  return {
    ...overlay,
  };
};


export const getIcon = (kind:keyof typeof KIND) => {
  switch (kind) {
    case KIND.info: {
      return <InfoIcon />;
    }
    case KIND.positive: {
      return <PositiveIcon />;
    }
    case KIND.warning: {
      return <WarningIcon />;
    }
    case KIND.negative: {
      return <NegativeIcon />;
    }
    default: {
      return <InfoIcon />;
    }
  }
};


export const getTitleStyles = ({ theme }: Partial<GetStyles>) => {
  const {
    type142,

  } = theme.typography;

  return { ...type142 };
};

export const getMessageStyle = (dismissible: boolean) => {
  if (dismissible) {
    return { 'max-width': '85%' };
  }
  return {};
};
