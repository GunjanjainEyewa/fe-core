import React from 'react';
import ThemeProvider from '@nykaa/ui-components/src/styles/ThemeProvider';
import { createLightTheme } from '@nykaa/ui-components/src/themes';

export default function wrapWithTheme(child: any, func: Function) {
  return func(child, {
    wrappingComponent: ({ children }: any) => (
      <ThemeProvider theme={createLightTheme({})}>
        {children}
      </ThemeProvider>
    ),
  });
}
