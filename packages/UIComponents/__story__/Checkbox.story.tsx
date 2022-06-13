import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Checkbox, {
  Props,
} from '../src/Checkbox';


export default {
  title: 'UI Components/Checkbox',
  component: Checkbox,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const CheckboxComponent = (args: Props) => {
  const [checked, setChecked] = React.useState(args.checked);
  return (
    <Checkbox
      {...args}
      onChangeHandler={(newCheck) => setChecked(newCheck)}
      checked={checked}
    />
  )
}
CheckboxComponent.args = {
  checked: true,
  label: "Label",
  isIndeterminate: false,
};
CheckboxComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=178%3A22349',
  },
}
CheckboxComponent.storyName = 'default';

