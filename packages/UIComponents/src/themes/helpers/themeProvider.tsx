import React from 'react';
import ThemeProvider from '../../styles/ThemeProvider';
import { createLightTheme } from '..';

export default function wrapWithTheme(child: any, func: Function) {
  return func(child, {
    wrappingComponent: ({ children }: any) => (
      <ThemeProvider theme={createLightTheme({})}>
        {children}
      </ThemeProvider>
    ),
  });
}
