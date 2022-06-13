import React from 'react';
import Header from '../src/components/Header';
import { styled } from '@nykaa/ui-components'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export default {
  title: 'variant Selector/Mobile/Header',
  component: Header,
  args: {
    title: 'TAP TO SELECT SIZE',
    chartTitle: 'Size Chart',
  },
  argTypes: {
    onClick: { action: 'clicked'}
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

const VariantInfo = styled.span`
  ${({ theme }) => theme.typography.titleXSmall};
  color: ${({ theme }) => theme.colors.primary};
`;

const CustomTitle = styled.span`
  color: ${({ theme }) => theme.colors.surfaceInverse};
`;

const Title = <CustomTitle className="text">
  Select Shade
  <VariantInfo>
    {` (19)`}
  </VariantInfo>
</CustomTitle>;

export const HeaderwithTitle = (props) => <Header {...props} />
export const ShadeHeaderWithNoCurrentVariant = (props) => <Header {...props} title={Title}/> 
