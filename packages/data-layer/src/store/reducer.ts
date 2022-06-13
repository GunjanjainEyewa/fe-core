import { Action } from './types';
import actionTypes from './actionTypes';


const dataLayer = (state = {}, action: Action) => {
  const { type, payload } = action;


  switch (type) {
    case actionTypes.DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default dataLayer;
