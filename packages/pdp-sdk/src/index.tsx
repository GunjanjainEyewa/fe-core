// libs
import React from 'react';
import { styled } from '@nykaa/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

// store
import { Dispatch } from 'redux';
import Connector from './Connector';

// helpers
import { PDPState } from './types/transformer';

// defs
import { AppProps } from './types/AppProps';

const Wrapper = styled.main`
  background: ${({ theme }) => theme.colors.white}
`;

function Container({
  platform,
  apiHost,
  widgetsEnabled,
}: Pick<AppProps, 'platform' | 'apiHost' | 'widgetsEnabled'>) {
  const dispatch: Dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const {
    isFetching, isError, isNotFound, widgets, data = {},
  } = useSelector(
    ({ pdpSdk }: PDPState) => pdpSdk,
  );

  return (
    <Wrapper>
      <Connector
        dispatch={dispatch}
        isFetching={isFetching}
        isError={isError}
        isNotFound={isNotFound}
        platform={platform}
        routeId={id}
        apiHost={apiHost}
        widgetsEnabled={widgetsEnabled}
        widgets={widgets}
        productData={data}
      />
    </Wrapper>
  );
}

export default Container;
