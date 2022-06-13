import { Action } from './types';
import actionTypes from './actionTypes';


const defaultState = {
  // add a default state
};

const Navigation = (state = defaultState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_NAV_DATA:
      return {
        ...state,
        menu: payload,
      };

    default:
      return state;
  }
};

export default Navigation;
