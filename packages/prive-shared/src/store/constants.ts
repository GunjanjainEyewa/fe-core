import { LoyaltyState } from './types';


export const mandatoryRequestParams = {
  source: 'react',
};

export const defaultState: LoyaltyState = {
  rewardData: {
    earnedRewards: [],
    utilizedRewards: [],
    earnedPage: 0,
    utilizedPage: 0,
    loadEarnedMore: true,
    loadUtilizedMore: true,
    isUtilizedPageChanged: true,
    isEarnedPageChanged: true,
  },
  loyaltyData: {

  },
  couponList: [],
  couponDetails: {},
};

export const transactionTypes = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
};
