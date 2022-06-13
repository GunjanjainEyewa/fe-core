// libs
import network from '@nykaa/network';
import { logger } from '@nykaa/logger';

// constants
import {
  BANNER_IMPRESSION_EVENT,
  PAGE_LOAD_EVENT_NAME,
  EVENTS_THRESHOLD,
} from '../constants';

// helpers
import { getCommonFields, setCachedFields } from './commonFields';
import {
  getStoredAnalytics,
  storeAnalytics,
  clearAnalytics,
  getVisitId,
  getPageCounter,
  setPageCounter,
  getEventCounter,
  setEventCounter,
} from './utils';

// defs
import { ImpressionEventData } from '../types';

// batch interval timer
let intervalTimer: number | undefined;

// session page counters
let localPageCounter: number | undefined;

// session page name
let localPageName: string | undefined;

// session page type
let localPageType: string | undefined;

// all events list
let events: Record<string, any>[] = [];


// all impression list
let impressionEvents: {
  [key: string]: ImpressionEventData & { banner_impressions: number };
} = {};

// analytics endpoint
let endpoint: string | undefined;

// beacon info sent
let beaconInfoRecorded = false;

/**
 * @param {Array.<object>}} eventsList list of events to be appended in returning object
 * @param {{Array.<string>}} impressionEventKeys list of impression event keys
 * @returns {object} formatted events' data
 */
const getEventsData = (
  eventsList: Record<string, any>[],
  impressionEventKeys: string[] = [],
): object => (
  {
    common_fields: {
      ...getCommonFields(),
      hit_sent_at: new Date().getTime() / 1000,
    },
    events: [
      ...eventsList,
      ...(impressionEventKeys && impressionEventKeys.map(
        (transactionId: string | number) => impressionEvents[transactionId],
      )),
    ],
  }
);

/**
 * Send event data using native beacon implementation
 * @param {object} data - Event data
 */
export const sendBeaconEvent = (data: Record<string, any>[]) => {
  if (endpoint === undefined) {
    logger.error('Endpoint missing - Nykaa Analytics SDK');
    return false;
  }

  if (!data) {
    return true;
  }

  // browser has no sendBeacon implementation - return false
  if (!window?.navigator?.sendBeacon) {
    // avoid sending the beacon info multiple times
    if (beaconInfoRecorded === false) {
      beaconInfoRecorded = true;
      logger.info('Beacon not supported - Nykaa Analytics SDK');
    }
    return false;
  }

  const eventData = getEventsData(data);

  const headers = {
    type: 'application/json',
    InvocationType: 'Event',
  };

  try {
    const dataBlob = new Blob([JSON.stringify(eventData)], headers);

    return window.navigator.sendBeacon(endpoint, dataBlob);
  } catch (err) {
    logger.error(err, 'Beacon Error - Nykaa Analytics SDK');
    return false;
  }
};

/**
 * Send Queued events to DWH
 */
const sendEvents = () => {
  const impressionEventKeys = Object.keys(impressionEvents);
  // if no events and no impressions are queued dont do anything
  if (events.length === 0 && impressionEventKeys.length === 0) {
    return;
  }

  const eventData = getEventsData(events, impressionEventKeys);

  // reset event list and impression list
  events = [];
  impressionEvents = {};

  if (endpoint === undefined) {
    logger.error('Endpoint missing - Nykaa Analytics SDK');
    return;
  }

  try {
    let isDone = false;

    // attempt sending event using sendBeacon
    if (window?.navigator?.sendBeacon) {
      const headers = {
        type: 'application/json',
        InvocationType: 'Event',
      };

      const dataBlob = new Blob([JSON.stringify(eventData)], headers);

      isDone = window.navigator.sendBeacon(endpoint, dataBlob);
    }

    if (!isDone) {
      /**
       * Call the Retina endpoint with event data
       * passing header InvocationType with "Event" value for async processing of data
       */
      network(endpoint, {
        method: 'post',
        data: eventData,
        headers: { InvocationType: 'Event' },
      }).catch((err: any) => logger.error(err, 'Error - Nykaa Analytics SDK'));
    }
  } catch (err) {
    logger.error(err, 'Error - Nykaa Analytics SDK');
  }
};

/**
 * On Analytics SDK load check if any event stores in localstorage
 * If stored then send those events to DWH
 */
const onLoad = () => {
  const { events: storedEvents, commonFields } = getStoredAnalytics();

  if (storedEvents.length === 0) {
    return;
  }
  clearAnalytics();

  events = [...storedEvents, ...events];

  setCachedFields(commonFields);
  sendEvents();
};

/**
 * On browser unload if any event or impression in queue store it in localStorage
 */
const onUnload = () => {
  const impressionEventKeys = Object.keys(impressionEvents);

  if (events.length === 0 && impressionEventKeys.length === 0) {
    return;
  }

  // get any data already stored before we overwrite with new data
  const { events: cachedEvents } = getStoredAnalytics();

  const cacheEvents = [
    ...cachedEvents,
    ...events,
    ...impressionEventKeys.map(
      (transactionId) => impressionEvents[transactionId],
    ),
  ];

  const cachedData = { events: cacheEvents, commonFields: getCommonFields() };
  storeAnalytics(cachedData);
};

/**
 * On Page hide event call onUnload func to handle queued events
 */
const onPageHide = () => {
  onUnload();
};


/**
 * On Visibility hidden event call onUnload func to handle queued events
 */
const onVisibilityChange = () => {
  if (document.visibilityState === 'hidden') {
    onUnload();
  }
};

/**
 * Listen to browser pagehide and visibilitychange event to store queued events
 */
const attachUnloadListener = () => {
  document.addEventListener('visibilitychange', onVisibilityChange);
  // adding pagehide listener as fallback to visibilitychange
  window.addEventListener('pagehide', onPageHide);
};

/**
 * Clear the pagehide and visibilitychange listener
 */
const removeUnloadListener = () => {
  document.removeEventListener('visibilitychange', onVisibilityChange);
  window.removeEventListener('pagehide', onPageHide);
};

/**
 * Initialize Event Batching
 * @param {string} dwhEndpoint - DWH Endpoint
 * @param {number} batchInterval - Interval for which we should queue the events
 */
export const initializeBatch = (dwhEndpoint: string, batchInterval: number) => {
  endpoint = dwhEndpoint;
  intervalTimer = window.setInterval(sendEvents, batchInterval);
  attachUnloadListener();
  onLoad();
};

/**
 * Destroy any listeners
 */
export const destroyBatch = () => {
  if (intervalTimer) {
    window.clearInterval(intervalTimer);
  }
  removeUnloadListener();
};

/**
 * Adds session details to event under event_id field
 * @param {object} eventData - event data
 * @returns {object} formatted events' data with event_id
 */
export const addSessionDetailsToEvent = (eventData: Record<string, any>) : Record<string, any> => {
  const isImpressionEvent = eventData.event_name === BANNER_IMPRESSION_EVENT;

  const isPageView = (eventData.event_name === PAGE_LOAD_EVENT_NAME);
  // fetch visit id
  const { visitId, isExistingSessionLive } = getVisitId();

  // fetch local page counter cached for the page
  // if not cached, fetch from cookies and cache it
  if (!isExistingSessionLive
    || (localPageCounter === undefined || !localPageCounter)
    || isPageView) {
    localPageCounter = getPageCounter() + 1;
    setPageCounter(localPageCounter);
  }

  if (isPageView) {
    localPageName = eventData.page_name;
    localPageType = eventData.page_type;
  }

  // create page id string
  const pageId = `${localPageCounter}`;

  if (!isImpressionEvent) {
    // fetch global event counter from cookies
    // increment it by 1
    const eventCounter = getEventCounter() + 1;

    // create event id string
    const eventId = `${eventCounter}`;

    // update current event conter cookie
    setEventCounter(eventCounter);

    return {
      ...eventData,
      page_name: localPageName || '',
      page_type: localPageType || '',
      session_id: visitId,
      page_id: pageId,
      event_id: eventId,
    };
  }

  return {
    ...eventData,
    page_name: localPageName || '',
    page_type: localPageType || '',
    session_id: visitId,
    page_id: pageId,
  };
};

/**
 * Batch event data
 * @param {object} data - Event data
 */
export const batchEvent = (data: Record<string, any>) => {
  events.push({
    ...data,
  });

  const impressionEventKeys = Object.keys(impressionEvents);

  if ((events.length + impressionEventKeys.length) >= EVENTS_THRESHOLD) {
    sendEvents();
  }
};

/**
 * Batch Multiple events
 * @param {object} data - List of all events
 */
export const batchMultipleEvents = (data: Record<string, any>[]) => {
  events = [...events, ...data];

  const impressionEventKeys = Object.keys(impressionEvents);

  if ((events.length + impressionEventKeys.length) >= EVENTS_THRESHOLD) {
    sendEvents();
  }
};

/**
 * Batch impression events
 * @param {object} impressionData - Impression event data
 */
export const batchImpressionEvents = (impressionData: ImpressionEventData) => {
  const { banner_transaction_id: transactionId } = impressionData;

  // if impression doesn't exist add it to the impressionEvents Queue
  if (impressionEvents[transactionId] === undefined) {
    impressionEvents[transactionId] = {
      ...impressionData,
      banner_impressions: 0,
      hit_recorded_at: new Date().getTime() / 1000,
    };
  }

  // increment the impression counter
  const currentImpressions = impressionEvents[transactionId].banner_impressions;
  impressionEvents[transactionId] = {
    ...impressionEvents[transactionId],
    banner_impressions: currentImpressions + 1,
    hit_recorded_at: new Date().getTime() / 1000,
  };

  const impressionEventKeys = Object.keys(impressionEvents);

  if ((events.length + impressionEventKeys.length) >= EVENTS_THRESHOLD) {
    sendEvents();
  }
};
