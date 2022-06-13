# Design system for Nykaa web

## Themes supported
1. Light theme


## How to provide theme to all the components
Use `ThemeProvider` at the top level of your application
```jsx
import ThemeProvider from 'ui-components/styles/ThemeProvider';
import { createLightTheme } from 'ui-components/styles/themes';


<ThemeProvider theme={createLightTheme({})}>
  .
  .
</ThemeProvider>
```

## Accessing theme
Theme object provided in the `ThemeProvider` can be accessed by any component implementing styles using `styled` util

```jsx
import styled from '../styles/styled';

const Button = styled.button`
  ${({ theme }) => theme.borders.border150};
  box-sizing: border-box;
`;

const Chip = ({ value }) => (
  <Button>
    {value}
  </Button>
);

```
