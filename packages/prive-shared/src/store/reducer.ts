import actionTypes from './actionTypes';
import { Action } from './types';
import { defaultState } from './constants';


const userDetails = (state = defaultState, action: Action) => {
  const { type, payload } = action;
  const { rewardData } = state;
  switch (type) {
    case actionTypes.REWARD_UTILIZED_HISTORY_FETCHED: {
      return {
        ...state,
        rewardData: {
          ...rewardData,
          utilizedRewards: [
            ...rewardData.utilizedRewards,
            ...payload.utilizedRewards,
          ],
          utilizedPage: payload.page,
          loadUtilizedMore: payload.loadUtilizedMore,
          isUtilizedPageChanged: payload.isUtilizedPageChanged,
        },
      };
    }
    case actionTypes.REWARD_EARNED_HISTORY_FETCHED: {
      return {
        ...state,
        rewardData: {
          ...rewardData,
          earnedRewards: [
            ...rewardData.earnedRewards,
            ...payload.earnedRewards,
          ],
          earnedPage: payload.page,
          loadEarnedMore: payload.loadEarnedMore,
          isEarnedPageChanged: payload.isEarnedPageChanged,
        },
      };
    }
    case actionTypes.CHANGE_UTILIZED_PAGE:
      return {
        ...state,
        rewardData: {
          ...rewardData,
          utilizedPage: payload.pageNumber,
          isUtilizedPageChanged: payload.isUtilizedPageChanged,
        },
      };
    case actionTypes.CHANGE_EARNED_PAGE:
      return {
        ...state,
        rewardData: {
          ...rewardData,
          earnedPage: payload.pageNumber,
          isEarnedPageChanged: payload.isEarnedPageChanged,
        },
      };
    case actionTypes.LOYALTY_DETAILS_FETCHED:
      return {
        ...state,
        loyaltyData: payload.loyaltyData,
      };
    case actionTypes.LOYALTY_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        isFetchingError: true,
      };
    case actionTypes.COUPON_LIST_FETCHED:
      return {
        ...state,
        couponList: payload.couponList,
      };
    case actionTypes.COUPON_LIST_FAILED:
      return {
        ...state,
        loading: false,
        isFetchingError: true,
      };
    case actionTypes.COUPON_DETAILS_FETCHED:
      return {
        ...state,
        couponDetails: payload.couponDetails,
      };
    case actionTypes.COUPON_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        isFetchingError: true,
      };
    default:
      return state;
  }
};

export default userDetails;
