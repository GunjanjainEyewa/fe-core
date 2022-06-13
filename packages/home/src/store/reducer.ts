import actionTypes from './actionTypes';
import { HomeState, Action } from './types';


const defaultMeta = {
  title: '',
  keywords: '',
  description: '',
};

const defaultState: HomeState = {
  loading: false,
  isFetchingError: false,
  widgets: null,
  // btfWidgets: null,
  metaData: defaultMeta,
};


const homeReducer = (
  state = defaultState,
  action: Action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_HOME_PAGE_DATA_PROGRESS:
      return {
        ...state,
        loading: true,
        isNotFound: false,
        isFetchingError: false,
      };

    case actionTypes.FETCH_HOME_PAGE_DATA_FAILED:
      return {
        ...state,
        loading: false,
        isNotFound: false,
        isFetchingError: true,
      };

    case actionTypes.FETCH_HOME_PAGE_DATA_SUCCESS: {
      const { metaData } = action;
      // const abfLength = 4; // handle it with remote config
      // let abfWidgets = payload;
      // let btfWidgets = null;
      // if (payload && (payload.length > abfLength)) {
      //   abfWidgets = payload.slice(0, abfLength);
      //   btfWidgets = payload.slice(abfLength, payload.length);
      // }
      return {
        ...state,
        loading: false,
        isNotFound: false,
        isFetchingError: false,
        widgets: payload,
        // btfWidgets: btfWidgets,
        metaData: metaData || {},
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
