import { Dispatch } from 'redux';

import { getConfigFlags } from './service';
import actions from './actionTypes';


export const fetchConfigFlags = () => (dispatch: Dispatch) => getConfigFlags()
  .then((configFlags) => {
    dispatch({
      type: actions.CONFIG_FLAGS,
      payload: configFlags,
    });
  });

export const setRUN = (run: number) => (dispatch: Dispatch) => {
  dispatch({
    type: actions.SET_RUN,
    payload: run,
  });
};
