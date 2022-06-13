import {
  TransformRewardData, TransformLoyaltyData,
  TransformCoupon, TransformCouponDetails,
} from './types';
import { getUpdatedDate } from '../utils';
import { dateTypes } from '../constants';

interface RewardPointDetails {
  date: string;
  itemName: string;
  itemQuantity: number;
  rewardMultiplier: number;
  rewardRuleDescription: string;
}
interface RewardData {
  description: string;
  title: string;
  amount: number;
  status: string;
  created: number;
  rewardPointDetails: RewardPointDetails | null
  domain: string;
  subType: string;
}

interface LoyaltyData {
  tier_name: string;
  enrollment_date: string;
  expiry_date: string;
  upgrade_amount: number;
  retain_amount: number;
  saved_amount: number;
}

export const transformRewardDetails = (rewardList: RewardData[]) => {
  const transformRewardList: TransformRewardData[] = [];
  if (!(rewardList && Array.isArray(rewardList))) {
    return transformRewardList;
  }
  rewardList.forEach((rewardData) => {
    const {
      title, subType, amount,
      domain, created,
      rewardPointDetails,
    } = rewardData;
    const transformRewardData: TransformRewardData = {
      title,
      reason: subType,
      amount,
      domain,
      date: getUpdatedDate(created),
    };
    if (rewardPointDetails && Object.keys(rewardPointDetails).length > 0) {
      const {
        date, itemQuantity, rewardMultiplier,
        rewardRuleDescription, itemName,
      } = rewardPointDetails;
      transformRewardData.title = itemName;
      transformRewardData.reason = rewardRuleDescription;
      transformRewardData.quantity = itemQuantity;
      transformRewardData.multiplier = rewardMultiplier;
      transformRewardData.date = getUpdatedDate(date);
    }

    transformRewardList.push(transformRewardData);
  });
  return transformRewardList;
};

export const transformLoyaltyDetails = (loyaltyData: LoyaltyData) => {
  if (!loyaltyData) {
    return {};
  }
  const transformLoyaltyData: TransformLoyaltyData = {
    tierName: loyaltyData.tier_name,
    enrollmentDate: getUpdatedDate(loyaltyData.enrollment_date, dateTypes.membershipCard),
    expiryDate: getUpdatedDate(loyaltyData.expiry_date, dateTypes.membershipCard),
    upgradeDate: getUpdatedDate(loyaltyData.expiry_date),
    upgradeAmount: loyaltyData.upgrade_amount,
    retainAmount: loyaltyData.retain_amount,
    savedAmount: loyaltyData.saved_amount,
  };
  return transformLoyaltyData;
};

interface CouponData {
  couponCode: string;
  description: string;
  couponId: number;
  fromDate: string;
  toDate: string;
  title: string;
  imageUrl: string | null;
  prive: boolean;
  offerId: number;
}
export const transformCouponList = (couponList: CouponData[]) => {
  const transformList: TransformCoupon[] = [];
  if (!(couponList && Array.isArray(couponList))) {
    return transformList;
  }
  couponList.forEach((couponData) => {
    const {
      title, toDate, fromDate,
      couponId, description,
      imageUrl, couponCode,
      prive,
      offerId,
    } = couponData;
    if (prive) {
      const transformCouponData: TransformCoupon = {
        couponCode,
        description,
        couponId,
        fromDate: getUpdatedDate(fromDate),
        toDate: getUpdatedDate(toDate),
        title,
        imageUrl,
        offerId,
      };
      transformList.push(transformCouponData);
    }
  });
  return transformList;
};

export const transformCouponDetails = (couponDetails: TransformCouponDetails) => {
  if (!couponDetails) {
    return {};
  }
  const transformCouponDetail: TransformCouponDetails = {
    couponCode: couponDetails.couponCode,
    description: couponDetails.description,
    title: couponDetails.title,
    subtitle: couponDetails.subtitle,
    imageUrl: couponDetails.imageUrl,
    tnc: couponDetails.tnc,
    couponId: couponDetails.couponId,
    couponTncUrl: couponDetails.couponTncUrl,
  };
  return transformCouponDetail;
};
