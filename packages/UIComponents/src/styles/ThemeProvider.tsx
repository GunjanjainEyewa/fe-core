import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { Theme } from '../themes/types';

const ThemeWrapper = ({ theme, children }: { theme: Theme, children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
