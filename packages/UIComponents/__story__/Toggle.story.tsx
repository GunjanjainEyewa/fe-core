import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Toggle, {
  Props,
} from '../src/Toggle';


export default {
  title: 'UI Components/Toggle',
  component: Toggle,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const ToggleComponent = (args: Props) => {
  return (
    <Toggle onChangeHandler={() => console.log('clicked')} checked={args.checked} disabled={args.disabled}/>
  )
}
ToggleComponent.args = {
  checked: true,
};
ToggleComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=178%3A22365',
  },
}

ToggleComponent.storyName = 'default';