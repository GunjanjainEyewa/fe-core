import { defaultClient } from './constants';
import { Client } from './types';
import { defaultState } from './constants';
import { AppState } from './types';


export const getInitialAppState = (storeId: string = '', client: Client = defaultClient): AppState => ({
  ...defaultState,
  ...(storeId && { storeId }),
  ...(client && { client }),
});

export const dummy = () => {};
