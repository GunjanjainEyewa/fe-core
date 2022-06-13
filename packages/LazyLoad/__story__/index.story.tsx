import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from "@storybook/addon-knobs";

import LazyLoad from '../src';

export default {
  title: 'LazyLoad',
  component: LazyLoad,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
  decorators: [withKnobs],
};

const DummyPlaceHolder = () => {
  return (
    <div style={{
        background: '#ddd',
        padding: '20px',
      }}
    >
      <h2>Placeholder</h2>
      <span>(Almost there... scroll a little more to see the lazy load content)</span>
    </div>
  );
}

const SimpleLazyLoad = () => (
  <div>
    <div style={{
        height: '100vh',
        padding: '20px 5px',
      }}
    >
      <h3>Scroll to see the Lazy load content</h3>
      <p>
        The content of interest is set to load after being
        <strong> 250px from the bottom of the view port</strong>.
      </p>
    </div>
    <LazyLoad
      bottomMargin={-250}
      placeHolder={<DummyPlaceHolder />}
    >
      <div style={{
          background: 'linear-gradient(to right, #4389A2, #5C258D)',
          padding: '20px',
          color: '#fff',
        }}
      >
        <h2>Some component to lazy load.</h2>
      </div>
    </LazyLoad>
    <div style={{height: '100vh'}}></div>
  </div>
);

// TODO: add more demonstrations
