import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Badge, {
  Props,
  VARIANT,
  KIND,
} from '../src/Badge';

export default {
  title: 'UI Components/Badge',
  component: Badge,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    },
    viewMode: 'docs'
  },
};

const StarIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9914 2.90002C11.5826 2.90002 11.1738 3.11014 10.9644 3.54038L8.65104 8.25296L3.47591 9.02338C2.53861 9.16346 2.16967 10.3241 2.84772 10.9845L6.60691 14.6465L5.72944 19.8093C5.59981 20.5497 6.18812 21.15 6.8562 21.15C7.03568 21.15 7.21517 21.11 7.39465 21.0099L12.0214 18.5586L16.658 20.9899C16.8375 21.08 17.017 21.12 17.1865 21.12C17.8546 21.12 18.4429 20.5197 18.3133 19.7693L17.4158 14.5964L21.1551 10.9244C21.8332 10.2541 21.4542 9.10342 20.5169 8.97335L15.3418 8.24295L13.0185 3.53037C12.7991 3.11014 12.3903 2.90002 11.9914 2.90002Z" fill=""/>
    </svg>
  )
}

export const BadgeComponent = (args: Props) => {
  return (
    <Badge 
      variant={args.variant}
      kind= {args.kind}
      content={args.content}
      withIcon={<StarIcon />}
    />
  )
}

BadgeComponent.args = {
  variant: VARIANT.hint,
  kind: KIND.default,
  content: 'Badge',
};

BadgeComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=178%3A22377',
  },
}
BadgeComponent.storyName = 'default';

export const BadgeComponentWithoutIcon = (args: Props) => {
  return (
    <Badge 
      variant={args.variant}
      kind= {args.kind}
      content={args.content}
    />
  )
}

BadgeComponentWithoutIcon.args = {
  variant: VARIANT.label,
  kind: KIND.default,
  content: 'Badge',
};

BadgeComponentWithoutIcon.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=178%3A22377',
  },
}
BadgeComponentWithoutIcon.storyName = 'Without Icon';
