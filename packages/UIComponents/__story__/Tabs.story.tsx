import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Tabs, TabsProps, Tab } from '../src/Tabs';

const DummyIcon = () => {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08813 5.16797L6 2.65155L4.91186 5.16797L2.19926 5.37715L4.26397 7.07834L3.61702 9.68704L6 8.28704L8.38298 9.68704L7.73603 7.07834L9.80074 5.37715L7.08813 5.16797ZM11.7802 4.52682C11.9917 4.54313 12.0774 4.79699 11.9163 4.92976L8.85833 7.44935L9.79259 11.2166C9.84182 11.4151 9.61731 11.572 9.43624 11.4657L6 9.44685L2.56376 11.4657C2.38269 11.572 2.15818 11.4151 2.20741 11.2166L3.14167 7.44935L0.0836891 4.92976C-0.0774441 4.79699 0.00831187 4.54313 0.219802 4.52682L4.23345 4.21732L5.77976 0.641322C5.86124 0.452893 6.13876 0.452893 6.22024 0.641322L7.76655 4.21732L11.7802 4.52682Z" fill="#001325" />
    </svg>
  );
};

export default {
  title: 'UI Components/Tabs',
  component: Tabs,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

export const TabsComponent = (args: TabsProps) => {
  return (
    <Tabs
      size={args.size}
      changeHandler={action('simple tabs')}
      fitted={args.fitted}
      selected={args.selected}
    >
      <Tab id='a' label={args.Tab1text} icon={<DummyIcon />}>Label a data</Tab>
      <Tab id='b' label={args.Tab2text}>Label b data jvgugv 67t gjyvchtfdr5 y</Tab>
      <Tab id='c' label={args.Tab3text} disabled={args.Tab_C_Disabled} icon={<DummyIcon />}>
        <div>
          <h1>Hi, complex child</h1>
        </div>
      </Tab>
      <Tab id='d' label={args.Tab4text}>Label d data</Tab>
      <Tab id='e' label={args.Tab5text}>Label e data</Tab>
    </Tabs>
  )
}
TabsComponent.args = {
  size: 'medium',
  fitted: false,
  selected: 'a',
  Tab1text: 'Label a',
  Tab2text: 'Label b',
  Tab3text: 'Label c',
  Tab4text: 'Label d',
  Tab5text: 'Label e',
  Tab_C_Disabled: true,
};
TabsComponent.storyName = 'default';

export const TabsComponentWithIcons = (args: TabsProps) => {
  return (
    <Tabs
      size={args.size}
      changeHandler={action('simple tabs with icons')}
      fitted={args.fitted}
      selected={args.selected}
    >
      <Tab id='a' label='Label a' icon={<DummyIcon />} />
      <Tab id='b' label='Label b' icon={<DummyIcon />} />
      <Tab id='c' label='Label c' icon={<DummyIcon />} />
    </Tabs>
  )
}
TabsComponentWithIcons.args = {
  size: 'medium',
  fitted: false,
  selected: 'a',
};
TabsComponentWithIcons.storyName = 'With Icons';
