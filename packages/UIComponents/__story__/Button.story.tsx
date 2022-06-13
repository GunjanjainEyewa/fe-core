import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ThemeProvider from '../src/styles/ThemeProvider';
import BaseStyles from '../src/styles/BaseStyles';
import { createLightTheme } from '../src/themes';

import Button, {
  KIND,
  SHAPE,
  SIZE,
  Props,
  COLOR,
} from '../src/Button';


export default {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const Buttons = (args: Props) => {
  return (
    <Button
      kind={args.kind}
      size={args.size}
      shape={args.shape}
      color={args.color}
      fullWidth={args.fullWidth}
      disabled={args.disabled}
      onClick={() => alert('HELLO')}
    >
      {args.children}
    </Button>
  )
}

Buttons.args = {
  children: 'Button Label',
  disabled: false,
  fullWidth: false,
  kind: KIND.primary,
  size: SIZE.medium,
  shape: SHAPE.default,
  color: COLOR.primary
};
Buttons.storyName = 'default';

const BlankSpace = () => (
  <>
    {' '}
  </>
);

export const PrimaryButtons = (args) => (
  <div>
    <Button
      kind={KIND.primary}
      size={SIZE.large}
      shape={SHAPE.default}
    >
      Large Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.primary}
      size={SIZE.medium}
      shape={SHAPE.default}
      color={COLOR.primary}
    >
      Medium Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.primary}
      size={SIZE.small}
      shape={SHAPE.default}
    >
      Small Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.primary}
      size={SIZE.compact}
      shape={SHAPE.default}
    >
      Compact Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.primary}
      size={SIZE.compact}
      shape={SHAPE.default}
      disabled
    >
      Disabled Button
    </Button>
    <br />
    <BlankSpace />
    <br />
    <Button
      kind={KIND.primary}
      size={SIZE.large}
      shape={SHAPE.default}
      fullWidth
    >
      Full Width Button
    </Button>
  </div>
);
PrimaryButtons.storyName = 'Primary Button';

export const SecondaryButtons = (args) => (
  <div>
    <Button
      kind={KIND.secondary}
      size={SIZE.large}
      shape={SHAPE.default}
    >
      Large Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.secondary}
      size={SIZE.medium}
      shape={SHAPE.default}
    >
      Medium Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.secondary}
      size={SIZE.small}
      shape={SHAPE.default}
    >
      Small Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.secondary}
      size={SIZE.compact}
      shape={SHAPE.default}
    >
      Compact Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.secondary}
      size={SIZE.compact}
      shape={SHAPE.default}
      disabled
    >
      Disabled Button
    </Button>
    <br />
    <BlankSpace />
    <br />
    <Button
      kind={KIND.secondary}
      size={SIZE.large}
      shape={SHAPE.default}
      fullWidth
    >
      Full Width Button
    </Button>
  </div>
);
SecondaryButtons.storyName = 'Secondary Button';

export const TertiaryButtons = (args) => (
  <div>
    <Button
      kind={KIND.tertiary}
      size={SIZE.large}
      shape={SHAPE.default}
    >
      Large Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.tertiary}
      size={SIZE.medium}
      shape={SHAPE.default}
    >
      Medium Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.tertiary}
      size={SIZE.small}
      shape={SHAPE.default}
    >
      Small Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.tertiary}
      size={SIZE.compact}
      shape={SHAPE.default}
    >
      Compact Button
    </Button>
    <BlankSpace />
    <Button
      kind={KIND.tertiary}
      size={SIZE.compact}
      shape={SHAPE.default}
      disabled
    >
      Disabled Button
    </Button>
    <br />
    <BlankSpace />
    <br />
    <Button
      kind={KIND.tertiary}
      size={SIZE.large}
      shape={SHAPE.default}
      fullWidth
    >
      Full Width Button
    </Button>
  </div>
);
TertiaryButtons.storyName = 'Tertiary Button';

export const CustomTheme = () => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: 'red',
    }
  })}>
    <Button
      kind={KIND.primary}
      shape={SHAPE.default}
      size={SIZE.medium}
    >
      Button Label
    </Button>
  </ThemeProvider>
)

CustomTheme.storyName = 'With "theme overrides"';
CustomTheme.parameters = {
  description: 'We are passing a custom primary color',
}
