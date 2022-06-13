import { DEFAULT_CONFIG_FLAGS } from './constants';
import { ConfigFlags } from './types';


export const ACTIVE_STRING = 'active';


export const transformConfigFlags = (rawData: any): ConfigFlags => {
  const configFlags = DEFAULT_CONFIG_FLAGS;
  if (rawData) {
    configFlags.isSmartLockActive = (rawData.login_via_smart_lock === ACTIVE_STRING);
    configFlags.mobileMapping = {
      sendOtpCaptcha: (rawData.mobile_map_send_otp_captcha === ACTIVE_STRING),
      verifyOtpCaptcha: (rawData.mobile_map_verify_otp_captcha === ACTIVE_STRING),
    };
  }

  return configFlags;
};
