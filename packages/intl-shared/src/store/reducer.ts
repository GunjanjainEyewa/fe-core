import { DEFAULT_CONFIG } from './constants';
import actionTypes from './actionTypes';

interface Action {
  type: string;
  payload?: any;
}

const langConfig = (state = DEFAULT_CONFIG, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.UPDATE_LANGUAGE:
      return {
        ...state,
        lang: payload,
      };
    case actionTypes.UPDATE_STRINGS:
      return {
        ...state,
        strings: payload,
      };
    case actionTypes.TOGGLE_LANG_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

export default langConfig;
