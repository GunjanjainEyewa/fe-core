import { VariantsAction } from './types';
import EVENTS from './actionTypes';
import { VariantsState } from '../../types/variants';


const defaultState: VariantsState = {
  loading: false,
  isNotFound: false,
  isFetchingError: false,
  loadingProductId: '',
  data: [],

};

const Variants = (
  state = defaultState,
  action: VariantsAction,
) => {
  const { type, payload, loadingProductId } = action;
  switch (type) {
    case EVENTS.FETCH_VARIANTS_PROGRESS: {
      return {
        ...state,
        loadingProductId,
        loading: true,
        isNotFound: false,
        isFetchingError: false,
      };
    }


    case EVENTS.FETCH_VARIANTS_SUCCESS: {
      const { productId = '' } = action;
      return {
        ...state,
        data: {
          ...state.data,
          [productId]: payload,
        },
        loading: false,
        isNotFound: false,
        isFetchingError: false,
        loadingProductId: '',
      };
    }

    case EVENTS.FETCH_VARIANTS_NOT_FOUND: {
      return {
        ...state,
        loading: false,
        isNotFound: true,
        isFetchingError: false,
        loadingProductId: '',
      };
    }


    case EVENTS.FETCH_VARIANTS_FAILED: {
      return {
        ...state,
        loading: false,
        isNotFound: false,
        isFetchingError: true,
        loadingProductId: '',
      };
    }

    default:
      return state;
  }
};


export default Variants;
