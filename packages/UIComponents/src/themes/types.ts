import { ColorTokensT as PrimitiveColorTokens } from '../tokens/types';
import spacing from './shared/spacing';

export type ColorTokens = {
  primary: string,
  primary10: string;
  primary20: string;
  primary30: string,
  primary40: string;
  primary50: string,

  primaryInverse: string,

  secondary: string,
  secondary10: string;
  secondary20: string;
  secondary30: string,
  secondary40: string;
  secondary50: string,

  secondaryInverse: string,


  /**
   * TODO: find a better nomenclature
   * ? As this can serve the purpose of layout backgrounds - surfaces...
   * ? and also can be used as background for components
   */
  surface: string;
  surface10: string;
  surface20: string;
  surface30: string;
  surface40: string;
  surface50: string;


  surfaceInverse: string;
  surfaceInverse10:string;
  surfaceInverse20: string
  surfaceInverse30: string;
  surfaceInverse40: string;
  surfaceInverse50: string;

  textPrimary: string,
  textSecondary: string,
  textDisabled: string,
  textOutline: string,
  textDecorative: string,

  textInversePrimary: string,
  textInverseSecondary: string,
  textInverseDisabled: string,
  textInverseOutline: string,
  textInverseDecorative: string,

  state: string,
  info: string,
  info50: string,
  info10: string,

  warning: string,
  warning50: string,
  warning10: string,

  positive: string,
  positive50: string,
  positive10: string,

  negative: string,
  negative50: string,
  negative10: string,

  white: string;
};

export type ComponentColorTokens = {
  chipColor: string;
  chipActivatedColor: string;
  chipActivatedBackground: string;

  notificationInfoBorderColor: string;
  notificationInfoFill: string;
  notificationWarningBorderColor: string;
  notificationWarningFill: string;
  notificationPositiveBorderColor: string;
  notificationPositiveFill: string;
  notificationPositiveText: string;
  notificationNegativeBorderColor: string;
  notificationNegativeFill: string;
  notificationNegativeText: string;
  // TODO: move these to buttonComponentTokens
  buttonPrimaryFill: string;
  buttonPrimaryText: string;
  buttonPrimaryDisabledFill: string;
  buttonPrimaryDisabledText: string;
  buttonPrimaryOverlayFill: string;

  buttonSecondaryFill: string;
  buttonSecondaryText: string;
  buttonSecondaryBorderColor: string;
  buttonSecondaryDisabledFill: string;
  buttonSecondaryDisabledText: string;
  buttonSecondaryOverlayFill: string;
  buttonSecondaryActiveText: string;

  buttonTertiaryFill: string;
  buttonTertiaryText: string;
  buttonTertiaryDisabledFill: string;
  buttonTertiaryDisabledText: string;
  buttonTertiaryOverlayFill: string;
  buttonTertiaryActiveText: string;

  checkboxUnCheckedFill: string;
  checkboxCheckedFill: string;
};

export type Border = {
  borderStyle: string;
  borderWidth: string;
  borderColor?: string;
};
export type Borders = {
  border100: Border;
  border150: Border;
  radiusNone: string;
  radius10: string;
  radius20: string;
  radius30: string;
  radius60: string;
  radius40: string;
  radius50: string;
  radiusFull: string;
};

export type RadiusAlias = {
  radiusPrimary: string;
};
export type Spacing = typeof spacing;

export type Font = {
  fontWeight: 'bold' | 'normal' | 'bolder' | 'lighter' | number,
  fontSize: string,
  lineHeight: string | number,
};

export type TypoGraphy = {
  type100: Font,
  type101: Font,
  type102: Font,
  type120: Font,
  type121: Font,
  type122: Font,
  type140: Font,
  type141: Font,
  type142: Font,
  type160: Font,
  type161: Font,
  type162: Font,
  type200: Font,
  type201: Font,
  type202: Font,
  type240: Font,
  type241: Font,
  type242: Font,
  type320: Font,
  type321: Font,
  type322: Font,
  type360: Font,
  type361: Font,
  type362: Font,
  spacing50: number,
  spacing75: number,
  spacing100: number,
  spacing200: number,
  spacing300: number,
  spacing400: number,
  spacing500: number,
  titleXLarge: any,
  titleLarge: any,
  titleMedium: any,
  titleSmall: any,
  titleXSmall: any,
  subTitleLarge: any,
  subTitleMedium:any,
  subTitleSmall: any,
  bodyLarge: any,
  bodyMedium: any,
  bodySmall: any,
  bodyXSmall: any,
  buttonLarge:any,
  buttonMedium: any,
  buttonSmall: any,
  labelMedium: any,
  labelSmall: any,
};

export type Theme = {
  colors: PrimitiveColorTokens & ColorTokens & ComponentColorTokens,
  borders: Borders & RadiusAlias,
  typography: TypoGraphy,
  spacing: Spacing,
};
