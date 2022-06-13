import colors from '../../tokens/colors';
import colorTokens from './colorTokens';
import componentColorTokens from './componentColorTokens';
import borders from '../shared/borders';
import typography from '../shared/typography';
import spacing from '../shared/spacing';
import radiusTokens from './radiusTokens';
import { getTypography } from './typography';

import {
  Theme, ColorTokens, Borders, TypoGraphy, RadiusAlias,
} from '../types';

type CustomTokens = Partial<{
  colors: Partial<ColorTokens>,
  borders: Partial<Borders> & Partial<RadiusAlias>,
  typography: Partial<TypoGraphy>
}>;

const createLightTheme = (customTokens: Partial<CustomTokens>): Theme => {
  const updatedTokens = {
    ...colorTokens,
    ...customTokens.colors,
  };

  const bordersTokens = {
    ...borders,
    ...customTokens.borders,
  };

  const typographyTokens = {
    ...typography,
    ...customTokens.typography,
  };

  const theme: Theme = {
    colors: {
      ...colors,
      ...updatedTokens,
      ...componentColorTokens(updatedTokens),
    },
    borders: {
      ...radiusTokens(bordersTokens),
      ...bordersTokens,
    },
    typography: {
      ...typographyTokens,
      ...getTypography(typographyTokens),
    },
    spacing,
  };

  // TODO: replace with deep copy
  return { ...theme };
};

export default createLightTheme;
