import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import TextField, { VARIANT, STATE } from '../src/TextField';
import  { Props } from '../src/Textfield/types';

export default {
  title: 'UI Components/TextField',
  component: TextField,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};
const SearchIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7694 20.6347L16.1819 15.0453C17.3122 13.6693 17.984 11.9093 17.984 9.98933C17.984 5.57333 14.4119 2 9.99733 2C5.57214 2 2 5.57333 2 9.98933C2 14.4053 5.57214 17.9787 9.98666 17.9787C11.906 17.9787 13.6654 17.296 15.041 16.176L20.6284 21.7653C20.7884 21.9253 20.991 22 21.1936 22C21.3962 22 21.5988 21.9253 21.7587 21.7653C22.0786 21.456 22.0786 20.944 21.7694 20.6347ZM9.98666 16.3787C6.46784 16.3787 3.59947 13.5093 3.59947 9.98933C3.59947 6.46933 6.46784 3.6 9.98666 3.6C13.5055 3.6 16.3739 6.46933 16.3739 9.98933C16.3739 13.52 13.5162 16.3787 9.98666 16.3787Z" fill="#001325" fill-opacity="0.92"/>
    </svg>
  );
};


const MicroIcon = () => {
  return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77831 3.26303C9.64182 2.43418 10.8005 1.98017 12 2.00066C13.1996 1.98017 14.3583 2.43418 15.2218 3.26303C16.0853 4.09188 16.583 5.22785 16.6058 6.42157V11.2731C16.5958 11.865 16.4687 12.4491 16.2318 12.9921C15.9949 13.5351 15.6528 14.0264 15.2251 14.4378C14.7974 14.8492 14.2925 15.1728 13.7391 15.3899C13.1857 15.6071 12.5948 15.7137 12 15.7036C11.4053 15.7137 10.8143 15.6071 10.261 15.3899C9.70762 15.1728 9.20266 14.8492 8.77496 14.4378C8.34726 14.0264 8.00519 13.5351 7.7683 12.9921C7.5314 12.4491 7.40431 11.865 7.3943 11.2731V6.42157C7.41704 5.22785 7.9148 4.09188 8.77831 3.26303ZM14.202 4.27789C13.609 3.7182 12.8171 3.41544 12 3.43602C11.183 3.41544 10.3911 3.7182 9.79806 4.27789C9.20502 4.83758 8.85925 5.60851 8.8366 6.42157V11.2731C8.85926 12.087 9.20472 12.8589 9.79747 13.4201C10.3902 13.9813 11.1821 14.2862 12 14.2682C12.818 14.2862 13.6099 13.9813 14.2026 13.4201C14.7954 12.8589 15.1408 12.087 15.1635 11.2731V6.42157C15.1408 5.60851 14.7951 4.83758 14.202 4.27789Z" fill="#001325" fill-opacity="0.92"/>
<path d="M17.4808 15.8545C16.1857 17.2358 14.4129 18.0776 12.5193 18.2107L12.5 20.4785V20.5646H13.9712C14.1624 20.5646 14.3459 20.6403 14.4811 20.7748C14.6164 20.9094 14.6923 21.092 14.6923 21.2823C14.6923 21.4727 14.6164 21.6552 14.4811 21.7898C14.3459 21.9244 14.1624 22 13.9712 22H9.62506C9.43379 22 9.25037 21.9244 9.11513 21.7898C8.97989 21.6552 8.90391 21.4727 8.90391 21.2823C8.90391 21.092 8.97989 20.9094 9.11513 20.7748C9.25037 20.6403 9.43379 20.5646 9.62506 20.5646H11.0385C11.034 20.5361 11.034 20.5071 11.0385 20.4785V18.1724C9.44001 17.9738 7.94921 17.265 6.78952 16.1523C5.62982 15.0396 4.86366 13.5828 4.60585 12.0003C4.53342 11.5929 4.49802 11.1797 4.50009 10.7659C4.50009 10.5756 4.57606 10.393 4.71131 10.2585C4.84655 10.1239 5.02997 10.0483 5.22124 10.0483C5.4125 10.0483 5.59592 10.1239 5.73117 10.2585C5.86641 10.393 5.94238 10.5756 5.94238 10.7659C5.94238 12.3648 6.5806 13.8982 7.71663 15.0287C8.85266 16.1593 10.3935 16.7944 12 16.7944C13.6066 16.7944 15.1474 16.1593 16.2835 15.0287C17.4195 13.8982 18.0577 12.3648 18.0577 10.7659C18.0577 10.5756 18.1337 10.393 18.2689 10.2585C18.4042 10.1239 18.5876 10.0483 18.7788 10.0483C18.9701 10.0483 19.1535 10.1239 19.2888 10.2585C19.424 10.393 19.5 10.5756 19.5 10.7659C19.4974 12.6551 18.776 14.4733 17.4808 15.8545Z" fill="#001325" fill-opacity="0.92"/>
</svg>

  );
};
const action = () => {
  console.log("action inline---");
}

export const Component = (args: Props) => {
  return (
    <div style={{width: '320px'}}>
      <TextField 
      state={args.state}
      variant={args.variant}
      label={args.label}
      supportiveText={args.supportiveText}
      prefixText={args.prefixText}
      suffixText={args.suffixText}
      placeholder={args.placeholder}
      value={args.value}
      disabled={args.disabled}
    />
    </div>
  )
}
Component.args = {
  variant: VARIANT.default,
  label: "Label",
  supportiveText: "Help or supporting text",
  prefixText: '+91',
  suffixText: 'cm',
  placeholder:"Example text content",
  value: '',
  state:STATE.default,
  disabled: false

}

Component.storyName = 'default';

export const ComponentWithIcons = (args: Props) => {
  return (
    <TextField 
      variant={args.variant}
      label={args.label} 
      supportiveText={args.supportiveText}
      icon={<SearchIcon />} 
      trailingIcon={<MicroIcon/> }
      trailingIconAction={action}  
      placeholder={args.placeholder}
    />
  )
}
ComponentWithIcons.args = {
  variant: VARIANT.default,
  label: "Label",
  supportiveText: "Help or supporting text",
  prefixText: "&#8377;",
  suffixText: 'cm',
  placeholder:"Example text content",
  value: '',
}

ComponentWithIcons.storyName = 'Text field With Icons ';

export const ComponentWithActions = (args: Props) => {
  return (
    <TextField 
      variant={args.variant}
      label={args.label}
      supportiveText={args.supportiveText} 
      icon={<SearchIcon />}
      trailingIcon={<MicroIcon/> } 
      trailingIconAction={action}
      inlineAction={action}
      inlineActionText="Tertiary"
      placeholder={args.placeholder}
    />
  )
}
ComponentWithActions.args = {
  variant: VARIANT.default,
  label: "Label",
  supportiveText: "Help or supporting text",
  prefixText: "&#8377;",
  suffixText: 'cm',
  placeholder:"Example text content",
  value: '',
}

ComponentWithActions.storyName = 'Text field With Icons and inline Action';

export const ComponentWithIconsPrefixText = (args: Props) => {
  return (
    <TextField
      variant={args.variant}
      label={args.label}
      prefixText="&#8377;" 
      icon={<SearchIcon />}
      trailingIcon={<MicroIcon/> } 
      trailingIconAction={action}
      placeholder={args.placeholder}
    />
  )
}
ComponentWithIconsPrefixText.args = {
  variant: VARIANT.compact,
  label: "Label",
  supportiveText: "Help or supporting text",
  prefixText: "&#8377;",
  suffixText: 'cm',
  placeholder:"Example text content",
  value: '',
}

ComponentWithIconsPrefixText.storyName = 'Compact Text field With Icons and prefix text';

