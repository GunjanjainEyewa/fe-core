import React from 'react';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import styled from '@emotion/styled';

import BelowTheFold from './BelowTheFoldControl';
import AnimatedLoader from './BelowTheFoldControl/AnimatedLoader';


const Loading = styled(AnimatedLoader)`
  height: 109px;
`;

const Loadable = (dynamincImport: () => Promise<any>, fallBackId: string) => loadableVisibility(
  dynamincImport,
  {
    fallback: <Loading className="client" id={fallBackId} />,
  },
);

const ServerOptimized = (dynamincImport: () => Promise<any>, fallBackId: string = '') => {
  const LoadableComponent = Loadable(dynamincImport, fallBackId);

  const OptimizedComponent = (props: any) => (
    <BelowTheFold
      render={() => <LoadableComponent {...props} />}
      loading={() => <Loading />}
    />
  );

  return OptimizedComponent;
};


export default ServerOptimized;
