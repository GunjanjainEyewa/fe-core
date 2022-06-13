// libs
import { setCookie, getCookie } from '@eyewa/utils/cookies';

// defs
import { AnalyticsCommonFields } from '../types';

// constants
import {
  SESSION_SEPERATOR,
  NYKAA_ANALYTICS_CACHE_KEY,
  NYKAA_VISITOR_ID_COOKIE,
  NYKAA_VISIT_ID_COOKIE,
  NYKAA_EVENT_COUNTER_COOKIE,
  NYKAA_EVENT_COUNTER_EXPIRY_DAYS,
  NYKAA_PAGE_COUNTER_COOKIE,
  NYKAA_PAGE_COUNTER_EXPIRY_DAYS,
} from '../constants';

const NYKAA_VISIT_ID_COOKIE_EXPIRY = (0.02085);
const INITIAL_PAGE_COUNTER = 0;
const INITIAL_EVENT_COUNTER = 0;

// interface
interface CacheData {
  events: Record<string, any>[];
  commonFields: Partial<AnalyticsCommonFields>
}

/**
 * Get omniture mcid
 * @returns {string} omniture MCID
 */
export const getOmnitureMCID = (): string => window?.s?.marketingCloudVisitorID;

/**
 * Get visitor id from document cookies' "bcookie"
 * @returns {string} visitor id
 */
export const getVisitorId = (): string | number | boolean => getCookie(NYKAA_VISITOR_ID_COOKIE);

/**
 * Get current page counter value from document cookies' NYKAA_PCOUNTER
 * Return 0 in case of no cookie or in case of any error
 * @returns {number} pageCounter
 */
export const getPageCounter = () : number => {
  const pageCounter = getCookie(NYKAA_PAGE_COUNTER_COOKIE) || INITIAL_PAGE_COUNTER;

  try {
    return Number(pageCounter);
  } catch (err) {
    return 0;
  }
};

/**
 * Set current page counter value to param value
 * @param {number} pageCounter
 */
export const setPageCounter = (pageCounter : number) : void => {
  setCookie(
    NYKAA_PAGE_COUNTER_COOKIE,
    pageCounter,
    NYKAA_PAGE_COUNTER_EXPIRY_DAYS,
  );
};

/**
 * Get currewnt event counter value from document cookies' NYKAA_ECOUNTER
 * Return 0 in case of no cookie or in case of any error
 * @returns {number} eventCounter
 */
export const getEventCounter = () : number => {
  const localEventCounter = getCookie(NYKAA_EVENT_COUNTER_COOKIE) || INITIAL_EVENT_COUNTER;

  try {
    return Number(localEventCounter);
  } catch (err) {
    return 0;
  }
};

/**
 * Set current event counter value to param value
 * @param {number} eventCounter
 */
export const setEventCounter = (eventCounter : number) : void => {
  setCookie(
    NYKAA_EVENT_COUNTER_COOKIE,
    eventCounter,
    NYKAA_EVENT_COUNTER_EXPIRY_DAYS,
  );
};

/**
 * Get current visit(session) id from document cookies' 'NYKAA_VISIT'
 * @returns {object} visitData
 * @returns {string} visitData.visitId Visit(or Session) Id
 * @returns {boolean} visitData.isExistingSessionLive Whether visit id is existing or newly created
 */
export const getVisitId = (): { visitId: string, isExistingSessionLive: boolean } => {
  let visitId = getCookie(NYKAA_VISIT_ID_COOKIE) || '';
  let isExistingSessionLive = true;

  if (visitId) {
    setCookie(
      NYKAA_VISIT_ID_COOKIE,
      visitId,
      NYKAA_VISIT_ID_COOKIE_EXPIRY,
    );
  } else {
    isExistingSessionLive = false;
    const visitorId = getVisitorId();

    // if visitorId  present and visit id not present
    // create a new visit id with visitor id suffixed with epoch timestamp
    // also, reset page counter and event counter to initial values
    if (visitorId) {
      visitId = `${visitorId}${SESSION_SEPERATOR}${Date.now()}`;

      setCookie(
        NYKAA_VISIT_ID_COOKIE,
        visitId,
        NYKAA_VISIT_ID_COOKIE_EXPIRY,
      );
      setPageCounter(INITIAL_PAGE_COUNTER);
      setEventCounter(INITIAL_EVENT_COUNTER);
    }
  }

  return { visitId: `${visitId}`, isExistingSessionLive };
};

/**
 * Get Browser network type
 * @returns {string} Network type - 'wifi', 'cellular', etc.
 */
// @ts-ignore - connection is not defined in lib.dom
export const getBrowserNetworkType = (): string => window?.navigator?.connection?.type || 'NA';

/**
 * Get Browser effective network type
 * @returns {string} Network effective type - 'slow-2g', '2g', '3g', or '4g'.
 */
// @ts-ignore - connection is not defined in lib.dom
export const getBrowserNetworkSpeed = (): string => window?.navigator?.connection?.effectiveType || 'NA';

/**
 * Store events in localStorage
 * @param {object} data - data containing list of events and commonFields
 */
export const storeAnalytics = (data: CacheData) => {
  try {
    window.localStorage.setItem(
      NYKAA_ANALYTICS_CACHE_KEY,
      JSON.stringify(data),
    );
  } catch (e) {
    /** DO NOTHING - as localStorage error */
  }
};

/**
 * Clear all data stored in localStorage
 */
export const clearAnalytics = () => {
  try {
    window.localStorage.removeItem(NYKAA_ANALYTICS_CACHE_KEY);
  } catch (e) {
    /** DO NOTHING - as localStorage error */
  }
};

/**
 * Get all events stored in localStorage
 * @returns {object} events list and commonFields
 */
export const getStoredAnalytics = (): CacheData => {
  try {
    const savedData = window.localStorage.getItem(NYKAA_ANALYTICS_CACHE_KEY);

    if (!savedData) {
      return { events: [], commonFields: {} };
    }

    const { events = [], commonFields = {} } = JSON.parse(savedData);
    return { events, commonFields } as CacheData;
  } catch (e) {
    /** DO NOTHING - as localStorage error */
    return { events: [], commonFields: {} };
  }
};

/**
 * Util function to remove shallow undefined keys
 * @param {object} obj - any object
 * @returns {object}
 */
export const removeEmptyKeys = (obj: Record<string, any> = {}): object => {
  const newObject: Record<string, any> = {};

  Object.keys(obj).forEach((key: string) => {
    if (obj[key] === undefined) {
      return;
    }

    newObject[key] = obj[key];
  });

  return newObject;
};
