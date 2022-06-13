import React from 'react';
import ThemeProvider from '@eyewa/ui-components/src/styles/ThemeProvider';
import { createLightTheme } from '@eyewa/ui-components/src/themes';

export default function wrapWithTheme(child: any, func: Function) {
  return func(child, {
    wrappingComponent: ({ children }: any) => (
      <ThemeProvider theme={createLightTheme({})}>
        {children}
      </ThemeProvider>
    ),
  });
}
