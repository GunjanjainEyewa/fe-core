// helpers
import {
  getOmnitureMCID,
  getVisitorId,
  getBrowserNetworkSpeed,
  getBrowserNetworkType,
  removeEmptyKeys,
} from './utils';

// defs
import { AnalyticsCommonFields } from '../types';

const commonFieldsMap: Record<keyof AnalyticsCommonFields, string> = {
  environment: 'nykaa_environment',
  store: 'nykaa_store',
  platform: 'nykaa_platform',
  vertical: 'nykaa_vertical',
  customerId: 'nykaa_customer_id',
  deviceViewportHeight: 'device_screen_height',
  deviceViewportWidth: 'device_screen_width',
  networkSpeed: 'network_speed',
  networkWifi: 'network_wifi',
  omnitureMCID: 'omniture_mcid',
  visitorId: 'nykaa_visitor_id',
  sdkVersion: 'nykaa_sdk_version',
  appVersion: 'app_version',
};

let commonFields: Record<string, any> = {};

let omnitureMCID: string | undefined;

let visitorId: string | undefined;

let deviceViewportHeight: number | undefined;

let deviceViewportWidth: number | undefined;

let networkSpeed: string | undefined;

let networkWifi: string | undefined;

/**
 * Set Analytics common fields
 * @param {object} fields - common fields service would like to override or set
 */
export const setCommonFields = ({
  ...fields
}: Partial<AnalyticsCommonFields>) => {
  const newCommonFields: Record<string, any> = {
    ...commonFields,
  };

  Object.keys(fields).forEach((fieldKey) => {
    const commonFieldKey = commonFieldsMap[fieldKey as keyof AnalyticsCommonFields];
    newCommonFields[commonFieldKey] = fields[fieldKey as keyof AnalyticsCommonFields];
  });

  commonFields = newCommonFields;
};

/**
 * Set cached / stored common fields
 * @param {object} cachedCommonFields - common fields stored in localStorage
 */
export const setCachedFields = ({
  ...cachedCommonFields
}: Record<string, any>) => {
  commonFields = {
    ...cachedCommonFields,
    ...commonFields,
    ...removeEmptyKeys(commonFields),
  };
};

/**
 * Get all the analytics common fields
 * @returns {object} commonFields
 */
export const getCommonFields = () => {
  if (omnitureMCID === undefined || !omnitureMCID) {
    omnitureMCID = getOmnitureMCID();
  }

  if (visitorId === undefined || !visitorId) {
    visitorId = `${getVisitorId()}`;
  }

  if (deviceViewportHeight === undefined || deviceViewportWidth === undefined) {
    deviceViewportHeight = window.innerHeight;
    deviceViewportWidth = window.innerWidth;
  }

  if (networkSpeed === undefined) {
    networkSpeed = getBrowserNetworkSpeed();
  }

  if (networkWifi === undefined) {
    networkWifi = getBrowserNetworkType();
  }

  return {
    [commonFieldsMap.omnitureMCID]: omnitureMCID,
    [commonFieldsMap.visitorId]: visitorId,
    [commonFieldsMap.deviceViewportHeight]: deviceViewportHeight,
    [commonFieldsMap.deviceViewportWidth]: deviceViewportWidth,
    [commonFieldsMap.networkSpeed]:
      networkSpeed !== 'NA' ? networkSpeed : undefined,
    [commonFieldsMap.networkWifi]:
      networkWifi !== 'NA' ? networkWifi === 'wifi' : undefined,
    ...commonFields,
  };
};
