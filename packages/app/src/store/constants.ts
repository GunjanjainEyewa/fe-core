import { statusCodes } from '@nykaa/utils/network/constants';
import { AppState, ConfigFlags } from './types';


export const DEFAULT_CONFIG_FLAGS: ConfigFlags = {
  isSmartLockActive: false,
  mobileMapping: {
    sendOtpCaptcha: false,
    verifyOtpCaptcha: false,
  },
};


export const defaultClient = {
  device: 'WEB',
};

export const defaultState: AppState = {
  pageType: null,
  statusCode: statusCodes.SUCCESS,
  storeId: '',
  configFlagsFetched: false,
  configFlags: DEFAULT_CONFIG_FLAGS,
  run: 100,
  client: defaultClient,
};

export const CUSTOM_ERROR_MESSAGE = 'Error fetching widgets';
export const CUSTOM_WIDGET_API_ERROR = 'result" not found in widgets api -> data';
