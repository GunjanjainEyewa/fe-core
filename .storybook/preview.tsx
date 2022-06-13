import React from 'react';

import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import ThemeProvider from '../packages/UIComponents/src/styles/ThemeProvider';
import BaseStyles from '../packages/UIComponents/src/styles/BaseStyles';
import { createLightTheme } from '../packages/UIComponents/src/themes';
import colors from '../packages/UIComponents/src/tokens/colors';
import borders from '../packages/UIComponents/src/themes/shared/borders';

const beauty = {
  name:'Beauty', ...createLightTheme({}),
};
const MEN = {
  brandPrimary: '#003243',
  brandSecondary: '#c2e1ec',
  brandLight: '#6eafc6',
  featuresBak: '#003243',
  featuresColor: '#ffffff',
  newsletterBak: '#066b8c',
  filterBackground: '#edf8fb',
  priceRevealColor: '#003243',
  priceRevealBg: '#EBEFF0',
  lightThemePrimary: '#83C5DB',
};
const fashion = { name:'Fashion',...createLightTheme({
  colors: {
    primary: colors.pebble900,
    primary10: colors.pebble100,
    primary20: colors.pebble200,
    primary30: colors.pebble400,
    primary40: colors.pebble600,
    primary50: colors.pebble700,
    secondaryInverse: colors.salmon500,
    surface: colors.snow100,
    surface10: colors.snow200,
    surface20: colors.snow300,
    surface30: colors.snow500,
    surface40: colors.snow600,
    surface50: colors.snow900,
    secondary: colors.salmon500,
    secondary10: colors.salmon50,
    secondary20: colors.salmon100,
    secondary30: colors.salmon400,
    secondary40: colors.salmon600,
    secondary50: colors.salmon700,
    inverse: colors.black100,
    inverse10: colors.black700,
    inverse20: colors.black600,
    inverse30: colors.black500,
    inverse40: colors.black400,
    inverse50: colors.black300,
  },
  borders: {
    radius60: '0.5rem',
    radiusPrimary: borders.radius10,
  },
})}
const men = {name:'Men', ...{
  ...MEN,
  ...createLightTheme({
    colors: {
      primary: MEN.brandPrimary,
      primary40: MEN.brandPrimary,
      primary30: MEN.brandSecondary,
      primary10: MEN.priceRevealBg,
      primary20: MEN.lightThemePrimary,
    },
  }),
}}
const themes = [beauty,fashion,  men];
// addDecorator(withThemesProvider(themes, ThemeProvider));
const WithTheme = withThemesProvider(themes, ThemeProvider);
export const decorators = [
  withThemesProvider(themes, ThemeProvider),
  Story => (
    < >
      <BaseStyles />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {   storySort: {
    method: 'alphabetical',
    order:['UI Components'],
    locales: '', 
  },},
  
};
