import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import {
  BarLoader,
  Spinner,
  SpotLoader,
  BarLoaderProps,
  SpinnerProps,
  SpotHelperProps,
} from '../src/Loader';

export default {
  title: 'UI Components/Loader',
  component: BarLoader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'nexus5x'
    }
  },
};

function useInterval(callback, delay) {
  const savedCallback = React.useRef(() => {});
  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const BarLoaderComponent = (args: BarLoaderProps) => {
  const [value, setValue] = React.useState(args.value);

  if (args.isDeterminate) {
    useInterval(() => {
      if (value < 100) {
        setValue(value + 10);
      } else {
        setValue(0);
      }
    }, 1000);
  }

  return <BarLoader {...args} value={value} />;
}
BarLoaderComponent.args = {
  value: 0,
  text: '',
  fullScreen: false,
  isDeterminate: false,
  width: 200,
  indeterminateTime: 2,
};
BarLoaderComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=2513%3A29414',
  },
}
BarLoaderComponent.storyName = 'Bar Loader';

export const SpinnerComponent = (args: SpinnerProps) => {
  const [value, setValue] = React.useState(args.value);

  if (args.isDeterminate) {
    useInterval(() => {
      if (value < 100) {
        setValue(value + 10);
      } else {
        setValue(0);
      }
    }, 1000);
  }

  return <Spinner {...args} value={value} />;
}
SpinnerComponent.args = {
  size: 'large',
  value: 0,
  isDeterminate: false,
  showLogo: false,
  showValue: false,
  indeterminateTime: 2,
};
SpinnerComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=2513%3A29414',
  },
}
SpinnerComponent.storyName = 'Spinner';

export const SpotLoaderComponent = (args: SpotHelperProps) => <SpotLoader {...args} />;
SpotLoaderComponent.args = {
  size: 'large',
};
SpotLoaderComponent.parameters =  {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uXf402kaMzcbWfW39gUjAB/NDS---Beauty---UI-Kit?node-id=2513%3A29414',
  },
}
SpotLoaderComponent.storyName = 'Spot Loader';
