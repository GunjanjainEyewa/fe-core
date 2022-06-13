const EVENTS = {
  REWARD_EARNED_HISTORY_FETCHED: 'reward/fetch_earned_reward_data_success',
  REWARD_UTILIZED_HISTORY_FETCHED: 'reward/fetch_utilized_reward_data_success',
  SET_EARNED_LOAD_MORE: 'reward/set_earned_load_more',
  SET_UTILIZED_LOAD_MORE: 'reward/set_utilized_load_more',
  CHANGE_EARNED_PAGE: 'reward/change_earned_page',
  CHANGE_UTILIZED_PAGE: 'reward/change_utilized_page',
  REWARD_HISTORY_PROGRESS: 'reward/fetch_reward_data_progress',
  REWARD_HISTORY_FAILED: 'reward/fetch_reward_data_failed',
  LOYALTY_DETAILS_FETCHED: 'loyalty/fetch_loyalty_details_success',
  LOYALTY_DETAILS_PROGRESS: 'reward/fetch_loyalty_details_progress',
  LOYALTY_DETAILS_FAILED: 'reward/fetch_loyalty_details_failed',
  COUPON_LIST_FETCHED: 'loyalty/fetch_coupon_list_success',
  COUPON_LIST_PROGRESS: 'reward/fetch_coupon_list_progress',
  COUPON_LIST_FAILED: 'reward/fetch_coupon_list_failed',
  COUPON_DETAILS_FETCHED: 'loyalty/fetch_coupon_details_success',
  COUPON_DETAILS_PROGRESS: 'reward/fetch_coupon_details_progress',
  COUPON_DETAILS_FAILED: 'reward/fetch_coupon_details_failed',
};

export default EVENTS;
