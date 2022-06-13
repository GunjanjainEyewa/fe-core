import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ThemeProvider from '../src/styles/ThemeProvider';
import BaseStyles from '../src/styles/BaseStyles';
import { createLightTheme } from '../src/themes';
import Button from '../src/Button';

import Alert, {
  KIND,
  VARIANT,
  Props,
} from '../src/Alert';


export default {
  title: 'UI Components/Alert',
  component: Alert,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const Alerts = (args: Props) => {
  return (
    <Alert
    kind={args.kind}
    variant={args.variant}
    message={args.message}
    withIcon={args.withIcon}
    dismissible={args.dismissible}
    onDismiss={() => console.log("clicked")}
    title={args.title}>
      <Button
      
      kind="tertiary"
      size="small"
      shape="default"
  
      onClick={() => console.log("button click")}
    > Verify Now</Button>
    </Alert>
  )
}
Alerts.args = {
  
  variant: VARIANT.inline,
  kind: KIND.info,
  message: 'This is an info alert message',
  withIcon:true,
  dismissible: true,
  title: 'Use a title'

 
};
Alerts.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=145%3A0',
  },
}
Alerts.storyName = 'default';