// helpers
import { setCommonFields } from './helpers/commonFields';
import { validateEventForPageLoad, getEventDataForPageLoad, getExistingDataLayerEvents } from './helpers/dataLayer';
import {
  initializeBatch,
  destroyBatch,
  batchEvent,
  batchMultipleEvents,
  batchImpressionEvents,
  sendBeaconEvent,
  addSessionDetailsToEvent,
} from './helpers/events';

// defs
import { AnalyticsInitialization, ImpressionEventData } from './types';

// TODO - read the package version
const SDK_VERSION = '0.1.2';

class AnalyticsSDK {
  public version = SDK_VERSION;

  public constructor({
    analyticsEndpoint,
    batchInterval = 20000,
    ...rest
  }: AnalyticsInitialization) {
    setCommonFields({ sdkVersion: SDK_VERSION, ...rest });
    initializeBatch(analyticsEndpoint, batchInterval);
    this.initializeDataLayer();
  }

  private initializeDataLayer = () => {
    const eventsToPushInRetina = getExistingDataLayerEvents();

    eventsToPushInRetina.map((
      event : Record<string, any>,
    ) => {
      if (event) {
        this.sendEvent(event.eventName, event.data);
      }

      return true;
    });
  };

  /**
   * Destroy all event listeners
   */
  public destroy = () => {
    destroyBatch();
  };

  /**
   * Set Analytics common fields
   * @param {object} fields - common fields service would like to override or set
   */
  public setCommonFields = setCommonFields;

  /**
   * Send analytics event
   * @param {string} eventName - event name
   * @param {object} data - event data
   */
  public sendEvent = (eventName: string, data: Record<string, any>) => {
    const timestamp = new Date().getTime() / 1000;

    const eventData = {
      hit_recorded_at: timestamp,
      ...addSessionDetailsToEvent({
        ...data,
        event_name: eventName,
      }),
    };

    // attempt sending event using sendBeacon
    if (sendBeaconEvent([eventData])) {
      return;
    }

    batchEvent(eventData);
  };

  /**
   * Send multiple analytics event
   * @param {object[]} data - event data
   */
  public sendMultipleEvents = (multipleEvents: Record<string, any>[]) => {
    const timestamp = new Date().getTime() / 1000;

    const eventData = multipleEvents.map((event) => ({
      hit_recorded_at: timestamp,
      ...addSessionDetailsToEvent(event),
    }));

    // attempt sending event using sendBeacon
    if (sendBeaconEvent(eventData)) {
      return;
    }

    batchMultipleEvents(eventData);
  };

  /**
   * Send impression event
   * @param {string} eventName - event name
   * @param {object[]} data - impression event data
   */
  public sendImpressionEvent = (
    eventName: string,
    impressionData: ImpressionEventData,
  ) => {
    batchImpressionEvents({
      event_name: eventName,
      ...impressionData,
      ...addSessionDetailsToEvent(impressionData),
    });
  };

  /**
   * Push dataLayer event in Retina pipeline
   * @param {object} data - dataLayer event
   */
  public pushDataLayerEvent = (
    data: Record<string, any>,
  ) => {
    const shouldPushEventInRetina = validateEventForPageLoad(data);

    if (shouldPushEventInRetina) {
      const eventToPush = getEventDataForPageLoad(data);

      if (eventToPush) {
        this.sendEvent(eventToPush.eventName, eventToPush.data);
      }
    }
  };
}

export default AnalyticsSDK;
