import { Dispatch } from 'redux';
import { getNavigation, getDesktopNavigation } from './service';
import actionTypes from './actionTypes';


export const fetchNavigation = () => (dispatch: Dispatch) => (
  getNavigation()
    .then((navData) => {
      dispatch({
        type: actionTypes.FETCH_NAV_DATA,
        payload: navData,
      });
    })
    .catch((err) => {
      throw err;
    })
);

export const fetchDesktopNavigation = () => (dispatch: Dispatch) => (
  getDesktopNavigation()
    .then((navData) => {
      dispatch({
        type: actionTypes.FETCH_NAV_DATA,
        payload: navData,
      });
    })
    .catch((err) => {
      throw err;
    })
);
