import { Dispatch } from 'redux';

import {
  getRewardDetails, getLoyaltyDetails,
  getCouponList, getCouponDetails,
} from './service';
import EVENTS from './actionTypes';
import {
  RewardParams,
  TransformRewardData,
  LoyaltyParams,
  TransformLoyaltyData,
  CouponListParams,
  CouponDetailsParams,
  TransformCoupon,
  TransformCouponDetails,
} from './types';
import { transactionTypes } from './constants';


export const fetchRewardHistory = (params: RewardParams) => (dispatch: Dispatch) => (
  getRewardDetails(params)
    .then((rewardHistory: TransformRewardData[]) => {
      const { transactionDirection, count } = params;
      const offsetCount = (rewardHistory && rewardHistory.length >= count);
      if (transactionDirection === transactionTypes.DEBIT) {
        dispatch({
          type: EVENTS.REWARD_UTILIZED_HISTORY_FETCHED,
          payload: {
            utilizedRewards: rewardHistory,
            page: params.page || 0,
            loadUtilizedMore: offsetCount,
            isUtilizedPageChanged: false,
          },
        });
      } else {
        dispatch({
          type: EVENTS.REWARD_EARNED_HISTORY_FETCHED,
          payload: {
            earnedRewards: rewardHistory,
            page: params.page || 0,
            loadEarnedMore: offsetCount,
            isEarnedPageChanged: false,
          },
        });
      }
      return rewardHistory;
    }).catch((err) => {
      dispatch({
        type: EVENTS.REWARD_HISTORY_FAILED,
      });
      return Promise.reject(err);
    })
);

export const fetchLoyaltyDetails = (params: LoyaltyParams) => (dispatch: Dispatch) => (
  getLoyaltyDetails(params)
    .then((loyaltyData: TransformLoyaltyData) => {
      dispatch({
        type: EVENTS.LOYALTY_DETAILS_FETCHED,
        payload: {
          loyaltyData,
        },
      });
    }).catch((err) => {
      dispatch({
        type: EVENTS.LOYALTY_DETAILS_FAILED,
      });
      return Promise.reject(err);
    })
);

export const changeEarnedPage = (pageNumber: number) => (dispatch: Dispatch) => {
  dispatch({
    type: EVENTS.CHANGE_EARNED_PAGE,
    payload: { pageNumber, isEarnedPageChanged: true },
  });
};

export const changeUtilizedPage = (pageNumber: number) => (dispatch: Dispatch) => {
  dispatch({
    type: EVENTS.CHANGE_UTILIZED_PAGE,
    payload: { pageNumber, isUtilizedPageChanged: true },
  });
};

export const fetchCouponList = (params: CouponListParams) => (dispatch: Dispatch) => (
  getCouponList(params)
    .then((couponList: TransformCoupon[]) => {
      dispatch({
        type: EVENTS.COUPON_LIST_FETCHED,
        payload: {
          couponList,
        },
      });
    }).catch((err) => {
      dispatch({
        type: EVENTS.COUPON_LIST_FAILED,
      });
      return Promise.reject(err);
    })
);

export const fetchCouponDetails = (params: CouponDetailsParams) => (dispatch: Dispatch) => (
  getCouponDetails(params)
    .then((couponDetails: TransformCouponDetails) => {
      dispatch({
        type: EVENTS.COUPON_DETAILS_FETCHED,
        payload: {
          couponDetails,
        },
      });
    }).catch((err) => {
      dispatch({
        type: EVENTS.COUPON_DETAILS_FAILED,
      });
      return Promise.reject(err);
    })
);
