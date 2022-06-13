import colors from '../../tokens/colors';
import { ColorTokens } from '../types';
import { hexToRgb } from '../../styles/utils';


const tokens: ColorTokens = {
  primary: colors.pink500,
  primary10: colors.pink100,
  primary20: colors.pink200,
  primary30: colors.pink400,
  primary40: colors.pink600,
  primary50: colors.pink700,

  primaryInverse: colors.pink200,

  secondary: colors.pink500,
  secondary10: colors.pink100,
  secondary20: colors.pink200,
  secondary30: colors.pink400,
  secondary40: colors.pink600,
  secondary50: colors.pink700,

  secondaryInverse: colors.pink200,

  surface: colors.snow100,
  surface10: colors.snow200,
  surface20: colors.snow300,
  surface30: colors.snow500,
  surface40: colors.snow600,
  surface50: colors.snow900,

  surfaceInverse: colors.black100,
  surfaceInverse10: colors.black900,
  surfaceInverse20: colors.black800,
  surfaceInverse30: colors.black500,
  surfaceInverse40: colors.black400,
  surfaceInverse50: colors.black200,

  textPrimary: colors.pebble900,
  textSecondary: hexToRgb(colors.pebble900, 0.64),
  textDisabled: hexToRgb(colors.pebble900, 0.36),
  textOutline: hexToRgb(colors.pebble900, 0.16),
  textDecorative: hexToRgb(colors.pebble900, 0.08),

  textInversePrimary: colors.snow100,
  textInverseSecondary: hexToRgb(colors.snow100, 0.72),
  textInverseDisabled: hexToRgb(colors.snow100, 0.44),
  textInverseOutline: hexToRgb(colors.snow100, 0.16),
  textInverseDecorative: hexToRgb(colors.snow100, 0.08),

  state: colors.grey900,

  // info50 has been deprecated, use info10 instead
  info: colors.blue500,
  info50: colors.blue50,
  info10: colors.blue50,

  // warning50 has been deprecated, use warning10 instead
  warning: colors.orange500,
  warning50: colors.orange50,
  warning10: colors.orange50,

  // positive50 has been deprecated, use positive10 instead
  positive: colors.green500,
  positive50: colors.green50,
  positive10: colors.green50,

  // negative50 has been deprecated, use negative10 instead
  negative: colors.red500,
  negative50: colors.red50,
  negative10: colors.red50,

  white: colors.snow100,
};

export default tokens;
