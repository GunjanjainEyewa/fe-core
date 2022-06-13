import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ThemeProvider from '../src/styles/ThemeProvider';
import BaseStyles from '../src/styles/BaseStyles';
import { createLightTheme } from '../src/themes';
import InfoIcon from '../src/Alert/Styled/Icons/info'
import Button from '../src/Button';

import Toast, {

  VARIANT,
  Props,
} from '../src/Toast';


export default {
  title: 'UI Components/Toast',
  component: Toast,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const Toasts = (args: Props) => {
  return (
    <Toast
    variant={args.variant}
    message={args.message}
    timer={args.timer}
    onDismiss={() => console.log("on dismiss")}
    icon={<InfoIcon />}
  >
      <Button
      
      kind="tertiary"
      size="small"
      shape="default"
  
      onClick={() => console.log("button click")}
    > Tertiary</Button>
    </Toast>
  )
}
Toasts.args = {
  
  variant: VARIANT.single,
  message: 'Something has happened.',
  timer: 6,


};
Toasts.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=178%3A22376',
  },
}

Toasts.storyName = 'default';