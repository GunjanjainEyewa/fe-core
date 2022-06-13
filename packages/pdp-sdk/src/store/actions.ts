import { Payload } from '../types/transformer';

export const ACTION_TYPE = {
  FETCHING_DATA_START: 'pdp-sdk/fetching_data_start',
  FETCHING_DATA_SUCCESS: 'pdp-sdk/fetching_data_success',
  FETCHING_DATA_FAILED: 'pdp-sdk/fetching_data_failed',
};

export const fetchingStart = () => ({ type: ACTION_TYPE.FETCHING_DATA_START });

export const fetchingSuccess = (payload: Payload) => ({
  type: ACTION_TYPE.FETCHING_DATA_SUCCESS,
  payload,
});

export const fetchingError = () => ({ type: ACTION_TYPE.FETCHING_DATA_FAILED });
