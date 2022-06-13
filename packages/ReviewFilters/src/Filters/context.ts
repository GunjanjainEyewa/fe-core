import React, { useContext } from 'react';
import { Theme } from '@nykaa/ui-components/themes/types';

export const ThemeContext = React.createContext<Theme | null>(null);

export default ThemeContext;

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
