// libs
import React, { memo } from 'react';

// components
import ErrorBoundary from '../ErrorBoundary';
import Placeholder from '../Placeholder';
import ErrorPage from '../ErrorPage';

// constants
import { WIDGET_COMPONENTS } from '../../constants/widgets';

// components
import ToastProvider from '../Toast';

// defs
import { AppProps } from '../../types/AppProps';

function Container({
  widgetsEnabled, isError, isFetching, isNotFound, widgets,
}: AppProps) {
  if (isFetching) {
    return <Placeholder />;
  }

  if (isNotFound) {
    return <ErrorPage kind="4XX" />;
  }

  if (isError) {
    return <ErrorPage kind="5XX" />;
  }

  return (
    <ErrorBoundary>
      <ToastProvider>
        {widgets.map(({ type, data }, indx) => {
          if (widgetsEnabled.includes(type) && data) {
            const WidgetComponent = WIDGET_COMPONENTS[type];

            // @ts-ignore
            return <WidgetComponent key={`widget_${indx + 1}`} data={data} />;
          }
          return null;
        })}
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default memo(Container);
