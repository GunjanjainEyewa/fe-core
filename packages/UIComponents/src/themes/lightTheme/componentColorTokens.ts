import { ColorTokens } from '../types';
// <noun>[<adjective>][<state>]<property>
// noun - button, chip, input, alert, list
// adjective - primary, secondary, tertiary
// state - hover, focused, pressed, activated, disabled
// property - fill, text, border, hover
// special-property - overlay
export default (colorTokens: ColorTokens) => ({
  notificationInfoBorderColor: colorTokens.info,
  notificationInfoFill: colorTokens.info,
  notificationWarningBorderColor: colorTokens.warning,
  notificationWarningFill: colorTokens.warning,
  notificationPositiveBorderColor: colorTokens.positive,
  notificationPositiveFill: colorTokens.positive,
  notificationPositiveText: colorTokens.positive,
  notificationNegativeBorderColor: colorTokens.negative,
  notificationNegativeFill: colorTokens.negative,
  notificationNegativeText: colorTokens.negative,

  chipColor: colorTokens.textPrimary,
  chipActivatedColor: colorTokens.primary40,
  chipActivatedBackground: colorTokens.primary,

  buttonPrimaryFill: colorTokens.primary,
  buttonPrimaryText: colorTokens.white,
  buttonPrimaryDisabledFill: colorTokens.state,
  buttonPrimaryDisabledText: colorTokens.textPrimary,
  buttonPrimaryOverlayFill: colorTokens.white,

  buttonSecondaryFill: colorTokens.white,
  buttonSecondaryText: colorTokens.primary,
  buttonSecondaryBorderColor: colorTokens.state,
  buttonSecondaryDisabledFill: colorTokens.white,
  buttonSecondaryDisabledText: colorTokens.textPrimary,
  buttonSecondaryOverlayFill: colorTokens.state,
  buttonSecondaryActiveText: colorTokens.textPrimary,

  buttonTertiaryFill: colorTokens.white,
  buttonTertiaryText: colorTokens.primary,
  buttonTertiaryDisabledFill: colorTokens.white,
  buttonTertiaryDisabledText: colorTokens.textPrimary,
  buttonTertiaryOverlayFill: colorTokens.state,
  buttonTertiaryActiveText: colorTokens.textPrimary,

  checkboxCheckedFill: colorTokens.secondary,
  checkboxUnCheckedFill: colorTokens.surface20,

});
