import { Dispatch } from 'redux';
import actionTypes from './actionTypes';


export const changeLanguage = (lang: string) => (dispatch: Dispatch) => (
  dispatch({
    type: actionTypes.UPDATE_LANGUAGE,
    payload: lang,
  })
);

export const toggleLanguageModal = () => (dispatch: Dispatch) => (
  dispatch({
    type: actionTypes.TOGGLE_LANG_MODAL,
  })
);
