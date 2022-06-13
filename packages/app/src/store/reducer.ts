import actionTypes from './actionTypes';
import { defaultState } from './constants';
import { AppState, Action } from './types';


const app = (state = defaultState, action: Action): AppState => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.APP_REDUCER_SET_PAGE:
      return {
        ...state,
        pageType: payload,
      };

    case actionTypes.APP_REDUCER_STATUS_CODE:
      return {
        ...state,
        statusCode: payload,
      };

    case actionTypes.CONFIG_FLAGS:
      return {
        ...state,
        ...(payload && { configFlags: payload }),
        configFlagsFetched: true,
      };

    case actionTypes.SET_RUN: {
      return {
        ...state,
        run: payload,
      };
    }

    default:
      return state;
  }
};

export default app;
