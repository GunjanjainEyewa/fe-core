
import { TypoGraphy } from '../types';


export const getMobileTypography = (tokens: Partial<TypoGraphy>) => {
  const {
    type322, spacing50, type242, type202, type162, spacing75, spacing100, type142, type161,
    type141, type121, type160, type140, type100, type120, spacing200, type122, spacing400,
    type102, spacing500,

  } = tokens;
  return ({
    titleXLarge: { ...type322, letterSpacing: spacing50 },
    titleLarge: { ...type242, letterSpacing: spacing50 },
    titleMedium: { ...type202, letterSpacing: spacing75 },
    titleSmall: { ...type162, letterSpacing: spacing100 },
    titleXSmall: { ...type142, letterSpacing: spacing100 },
    subTitleLarge: { ...type161, letterSpacing: spacing75 },
    subTitleMedium: { ...type141, letterSpacing: spacing75 },
    subTitleSmall: { ...type121, letterSpacing: spacing100 },
    bodyLarge: { ...type160, letterSpacing: spacing100 },
    bodyMedium: { ...type140, letterSpacing: spacing100 },
    bodySmall: { ...type120, letterSpacing: spacing100 },
    bodyXSmall: { ...type100, letterSpacing: spacing200 },
    buttonLarge: { ...type162, letterSpacing: spacing200 },
    buttonMedium: { ...type142, letterSpacing: spacing200 },
    buttonSmall: { ...type122, letterSpacing: spacing200 },
    labelMedium: { ...type122, letterSpacing: spacing400 },
    labelSmall: { ...type102, letterSpacing: spacing500 },

  });
};

export const getDesktopTypography = (tokens: Partial<TypoGraphy>) => {
  const {
    type322, spacing50, type242, type202, type162, spacing75, spacing100, type142, type161,
    type141, type121, type160, type140, type100, type120, spacing200, type122, spacing400,
    type102, spacing500, type362,

  } = tokens;

  return (
    {
      titleXLarge: { ...type362, letterSpacing: spacing50 },
      titleLarge: { ...type322, letterSpacing: spacing50 },
      titleMedium: { ...type242, letterSpacing: spacing50 },
      titleSmall: { ...type202, letterSpacing: spacing75 },
      titleXSmall: { ...type162, letterSpacing: spacing75 },
      subTitleLarge: { ...type161, letterSpacing: spacing75 },
      subTitleMedium: { ...type141, letterSpacing: spacing75 },
      subTitleSmall: { ...type121, letterSpacing: spacing100 },
      bodyLarge: { ...type160, letterSpacing: spacing100 },
      bodyMedium: { ...type140, letterSpacing: spacing100 },
      bodySmall: { ...type120, letterSpacing: spacing100 },
      bodyXSmall: { ...type100, letterSpacing: spacing200 },
      buttonLarge: { ...type162, letterSpacing: spacing200 },
      buttonMedium: { ...type142, letterSpacing: spacing200 },
      buttonSmall: { ...type122, letterSpacing: spacing200 },
      labelMedium: { ...type122, letterSpacing: spacing400 },
      labelSmall: { ...type102, letterSpacing: spacing500 },

    }
  );
};

export const getTypography = (tokens: Partial<TypoGraphy>) => ({
  ...getMobileTypography(tokens),
  ...tokens,
});
