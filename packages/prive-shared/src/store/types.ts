export interface Action {
  type: string;
  payload?: any;
}

export interface RewardParams {
  count: number;
  customerId: string;
  page: number;
  transactionDirection: string;
}

export interface TransformRewardData {
  reason: string;
  title: string;
  amount: number;
  quantity?: number;
  multiplier?: number;
  domain: string;
  date: string;
}

export interface LoyaltyParams {
  customer_id: string;
  domain: string;
}

export interface TransformLoyaltyData {
  tierName: string;
  enrollmentDate: string;
  expiryDate: string;
  upgradeDate: string;
  upgradeAmount: number;
  retainAmount: number;
  savedAmount: number;
}

export interface RewardDataState {
  earnedRewards: TransformRewardData[],
  utilizedRewards: TransformRewardData[],
  earnedPage: number;
  utilizedPage: number;
  loadEarnedMore: boolean;
  loadUtilizedMore: boolean;
  isUtilizedPageChanged: boolean;
  isEarnedPageChanged: boolean;
}

export interface TransformCoupon {
  couponCode: string;
  description: string;
  couponId: number,
  fromDate: string,
  toDate: string,
  title: string,
  imageUrl: string|null;
  offerId: number;
}
export interface TransformCouponDetails {
  couponCode: string;
  description: string;
  title: string;
  subtitle: string;
  imageUrl: string| null;
  tnc: string[];
  couponId: number;
  couponTncUrl: string,
}

export interface LoyaltyState {
  rewardData: RewardDataState;
  loyaltyData: TransformLoyaltyData|{};
  couponList: TransformCoupon[];
  couponDetails: TransformCouponDetails|{};
}

export interface CouponListParams {
  customerId: string;
  domain: string;
  isGuestCustomer: boolean;
}

export interface CouponDetailsParams {
  couponId: number;
  domain: string;
}
