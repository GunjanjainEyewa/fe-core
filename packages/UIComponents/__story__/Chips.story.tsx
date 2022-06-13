import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Chips, {
  Props,
} from '../src/Chips';

export default {
  title: 'UI Components/Chips',
  component: Chips,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const ChipsComponent = (args: Props) => {

  return (
    <Chips 
      imgSrc={args.imgSrc}
      disabled= {args.disabled}
      size={args.size}
      dismissible={args.dismissible}
      label={args.label}
      // icon={<DummyIcon />} 
      selected={args.selected}
    />
  )
}
ChipsComponent.args = {
  label:'Label',
  size: 'small',
  dismissible: false,
  imgSrc: '/Image.png',

  selected: false,
};
ChipsComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=178%3A22357',
  },
}

ChipsComponent.storyName = 'default';


const DummyIcon = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.08813 5.16797L6 2.65155L4.91186 5.16797L2.19926 5.37715L4.26397 7.07834L3.61702 9.68704L6 8.28704L8.38298 9.68704L7.73603 7.07834L9.80074 5.37715L7.08813 5.16797ZM11.7802 4.52682C11.9917 4.54313 12.0774 4.79699 11.9163 4.92976L8.85833 7.44935L9.79259 11.2166C9.84182 11.4151 9.61731 11.572 9.43624 11.4657L6 9.44685L2.56376 11.4657C2.38269 11.572 2.15818 11.4151 2.20741 11.2166L3.14167 7.44935L0.0836891 4.92976C-0.0774441 4.79699 0.00831187 4.54313 0.219802 4.52682L4.23345 4.21732L5.77976 0.641322C5.86124 0.452893 6.13876 0.452893 6.22024 0.641322L7.76655 4.21732L11.7802 4.52682Z" fill="#001325" fill-opacity="0.64"/>
</svg>

  )
}
