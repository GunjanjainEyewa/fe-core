import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Radio, {
  Props, GroupProps, ALIGN, TYPES
} from '../src/Radio';

import RadioGroup from '../src/Radio/Styled/group';
export default {
  title: 'UI Components/Radio',
  component: Radio,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

const arr = ["1","2","3"];

export const RadioComponent = (args: Props & GroupProps) => {
  return (
    <RadioGroup align={args.align} disabled={args.disabled} name="story" type={args.type} changeHandler={() => console.log('clicked')} value="1">
      { arr.map((key) => {
        return (<Radio label={args.label + ' ' + key} value={key} key={'radio_' + key}/>);
      })}
    </RadioGroup>

  )
}
RadioComponent.args = {
  checked: true,
  label: "Label",
  label2: "Label2",
  disabled: false,
  type: TYPES.default,
  align: ALIGN.horizontal,

};
RadioComponent.storyName = 'default';

