import React from 'react';
import Error from '../src/components/Error'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {SIZE_ERROR_MSG} from '../src/constant'
export default {
  title: 'variant Selector/shared/error',
  component: Error,
  args: {
    message: SIZE_ERROR_MSG
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export const error = (props) => <Error {...props} />
