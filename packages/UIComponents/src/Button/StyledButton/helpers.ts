import { CSSProperties } from 'react';

import { hexToRgb } from '../../styles/utils';
import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import {
  KIND,
  COLOR,
  SIZE,
} from '../constants';

const additionalProperties: CSSProperties = {
  position: 'absolute',
};

type GetStyles = { theme: Theme } & Pick<Props, 'kind' | 'size' | 'shape' | 'color'>;
export const isValidColor = (color: keyof typeof COLOR) => COLOR[color];
export const getColorOverRide = (defaultToken: any, key: keyof typeof COLOR, theme: Theme) => (
  (isValidColor(key) && theme.colors[key]) ? theme.colors[key] : defaultToken
);

export const getFontStyles = ({ size, theme }: Pick<GetStyles, 'size' | 'theme'>) => {
  const {
    buttonSmall, buttonMedium, buttonLarge,
  } = theme.typography;

  switch (size) {
    case SIZE.large:
      return buttonLarge;
    case SIZE.medium:
      return buttonMedium;

    case SIZE.small:
      return buttonSmall;

    case SIZE.compact:
      return buttonSmall;

    default:
      return buttonMedium;
  }
};

export const getBorderStyles = ({
  shape, theme, kind,
}: Pick<GetStyles, 'shape' | 'size' | 'theme' | 'kind'>) => {
  let border;
  // * Border width and style
  switch (kind) {
    case 'secondary':
      border = theme.borders.border100;
      break;

    case 'primary':
    case 'tertiary':
    default:
      break;
  }

  // * Border-radius
  let borderRadius = theme.borders.radiusPrimary;
  switch (shape) {
    case 'pill':
      // Handle pill border -radius
      break;

    case 'round':
      borderRadius = '50%';
      break;

    default:
      break;
  }

  return {
    ...border,
    borderRadius,
  };
};

export const getSizing = ({
  size, theme,
}: Pick<GetStyles, 'kind' | 'shape' | 'size' | 'theme'>) => {
  const {
    spacing40, spacing50, spacing60,
    spacing20, spacing80,
  } = theme.spacing;
  const sizeProps: {
    paddingLeft: string,
    paddingRight: string,
    paddingTop?: string,
    paddingBottom?: string,
    width?: string,
  } = {
    paddingLeft: spacing80,
    paddingRight: spacing80,
  };

  switch (size) {
    case 'compact':
      sizeProps.paddingTop = spacing20;
      sizeProps.paddingBottom = spacing20;
      break;

    case 'large':
      sizeProps.paddingTop = spacing60;
      sizeProps.paddingBottom = spacing60;
      break;

      // padding changes refer figma
      // compact will be depricated
      // icon with text   aonly button
      // text with link need to add
      // verify all states with new ui kit

    case 'medium':
      sizeProps.paddingTop = spacing50;
      sizeProps.paddingBottom = spacing50;
      break;

    case 'small':
      sizeProps.paddingTop = spacing40;
      sizeProps.paddingBottom = spacing40;
      sizeProps.paddingLeft = spacing60;
      sizeProps.paddingRight = spacing60;
      break;

    default:
      sizeProps.paddingTop = spacing40;
      sizeProps.paddingBottom = spacing40;
      break;
  }

  // TODO: Handle shapes
  return sizeProps;
};


export const getKindStyles = (
  { theme, kind, color }: Pick<GetStyles, 'kind' | 'theme' | 'color'>,
) => {
  const buttonOverlay = {
    content: '""',
    position: additionalProperties.position,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };
  const primaryFill = getColorOverRide(theme.colors.buttonPrimaryFill, color, theme);
  switch (kind) {
    case KIND.primary:
      return {
        backgroundColor: primaryFill,
        color: theme.colors.buttonPrimaryText,

        '&:hover': {

          '&::before': {
            ...buttonOverlay,
            backgroundColor: hexToRgb(theme.colors.buttonPrimaryOverlayFill, 0.16),
          },
        },
        '&:active': {

          '&::before': {
            ...buttonOverlay,
            backgroundColor: hexToRgb(theme.colors.buttonPrimaryOverlayFill, 0.32),
          },
        },
        '&:disabled': {
          backgroundColor: hexToRgb(theme.colors.buttonPrimaryDisabledFill, 0.36),
          color: hexToRgb(theme.colors.buttonPrimaryDisabledText, 0.36),

          '&::before': {
            display: 'none',
          },
        },
      };

    case KIND.secondary:
      return {
        backgroundColor: theme.colors.buttonSecondaryFill,
        color: getColorOverRide(theme.colors.buttonSecondaryText, color, theme),
        borderColor: hexToRgb(theme.colors.buttonSecondaryBorderColor, 0.16),

        '&:hover': {

          '&::before': {
            ...buttonOverlay,
            backgroundColor: hexToRgb(theme.colors.buttonSecondaryOverlayFill, 0.08),
          },
        },
        '&:active': {
          '&::before': {
            ...buttonOverlay,
            backgroundColor: hexToRgb(theme.colors.buttonSecondaryOverlayFill, 0.16),
          },
        },
        '&:disabled': {
          color: hexToRgb(theme.colors.buttonSecondaryDisabledText, 0.36),

          '&::before': {
            display: 'none',
          },
        },
      };

    case KIND.tertiary:
      return {
        backgroundColor: theme.colors.buttonTertiaryFill,
        color: getColorOverRide(theme.colors.buttonTertiaryText, color, theme),

        '&:hover': {
          '&::before': {
            ...buttonOverlay,
            backgroundColor: hexToRgb(theme.colors.buttonTertiaryOverlayFill, 0.08),
          },
        },
        '&:active': {
          '&::before': {
            ...buttonOverlay,
            backgroundColor: hexToRgb(theme.colors.buttonTertiaryOverlayFill, 0.16),
          },
        },
        '&:disabled': {
          color: hexToRgb(theme.colors.buttonSecondaryDisabledText, 0.36),
          '&::before': {
            display: 'none',
          },
        },
      };

    default:
      return {};
  }
};
