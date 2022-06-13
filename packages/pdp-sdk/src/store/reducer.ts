import { ACTION_TYPE } from './actions';
import { Product } from '../types/transformer';

interface ActionType {
  type: string;
  payload: Partial<Product>;
}

const initialData: Product = {
  isFetching: false,
  isError: false,
  isNotFound: false,
  data: {},
  widgets: [],
};

const getReducer = (state = initialData, action?: ActionType) => {
  switch (action.type) {
    case ACTION_TYPE.FETCHING_DATA_START: {
      return {
        ...state,
        isFetching: true,
        isError: false,
        isNotFound: false,
      };
    }

    case ACTION_TYPE.FETCHING_DATA_FAILED: {
      return {
        ...state,
        isFetching: false,
        isError: false,
        isNotFound: true,
      };
    }

    case ACTION_TYPE.FETCHING_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isError: false,
        isNotFound: false,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default getReducer;
