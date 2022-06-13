import { ApiHelper } from '@eyewa/utils/network';
import { logger } from '@eyewa/logger';

import { queryStringFromParams } from '@eyewa/utils/urls';
import { ROUTES, getUrl } from '@eyewa/utils/network/urls';
import { mandatoryRequestParams } from './constants';
import {
  transformRewardDetails, transformLoyaltyDetails,
  transformCouponList, transformCouponDetails,
} from './transformer';
import {
  LoyaltyParams, RewardParams,
  CouponListParams, CouponDetailsParams,
} from './types';


export const getRewardDetails = async (params: RewardParams) => {
  const url = `${getUrl(ROUTES.REWARD_HISTORY)}`;
  const queryParams = {
    ...mandatoryRequestParams,
    ...params,
  };
  const queryString = queryStringFromParams(queryParams);
  try {
    const { data: { data } } = await ApiHelper(`${url}${queryString}`, 'get');

    if (!data) {
      throw new Error('"result" not found reward history');
    }
    const transformedData = transformRewardDetails(data?.dataList);
    return transformedData;
  } catch (e) {
    logger.error(e, 'Error fetching Reward History');
    throw e;
  }
};

export const getLoyaltyDetails = async (params: LoyaltyParams) => {
  const url = `${getUrl(ROUTES.LOYALITY_SERVICE)}`;
  const queryParams = {
    ...mandatoryRequestParams,
    ...params,
  };
  const queryString = queryStringFromParams(queryParams);
  try {
    const { data } = await ApiHelper(`${url}${queryString}`, 'get');

    if (!data) {
      throw new Error('"result" not found customer tier details');
    }
    const transformedData = transformLoyaltyDetails(data);
    return transformedData;
  } catch (e) {
    logger.error(e, 'Error fetching Customer tier Details');
    throw e;
  }
};

export const getCouponList = async (params: CouponListParams) => {
  const url = '/gateway-api/coupon/api/v2/coupon/customer';
  const queryParams = {
    ...mandatoryRequestParams,
    ...params,
  };
  const queryString = queryStringFromParams(queryParams);
  try {
    const { data: { data } } = await ApiHelper(`${url}${queryString}`, 'get');

    if (!data) {
      throw new Error('"result" not found coupon list');
    }
    const transformedData = transformCouponList(data);
    return transformedData;
  } catch (e) {
    logger.error(e, 'Error fetching Coupon list');
    throw e;
  }
};

export const getCouponDetails = async (params: CouponDetailsParams) => {
  const url = '/gateway-api/coupon/api/v2/coupon/description';
  const queryParams = {
    ...mandatoryRequestParams,
    ...params,
  };
  const queryString = queryStringFromParams(queryParams);
  try {
    const { data: { data } } = await ApiHelper(`${url}${queryString}`, 'get');

    if (!data) {
      throw new Error('"result" not found coupon details');
    }
    const transformedData = transformCouponDetails(data);
    return transformedData;
  } catch (e) {
    logger.error(e, 'Error fetching Coupon Details');
    throw e;
  }
};
