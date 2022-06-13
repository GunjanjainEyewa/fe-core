/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StyledTab from './StyledTab';
import { TabProps } from './types';

function Tabs({
  ...rest
}: TabProps): React.ReactElement<TabProps> {
  return (
    <StyledTab
      {...rest}
    />
  );
}

export default Tabs;
