// helper functions
import dataLayerUtils from './dataLayerUtils';

// defs
import { PAGE_TYPES } from '../types';

// constants
import {
  PAGE_LOAD_EVENT_NAME,
  CATEGORY_PAGE_TYPE,
  CMS_PAGE_TYPE,
  HOME_PAGE_TYPE,
  PRODUCT_PAGE_TYPE,
  SEARCH_PAGE_TYPE,
} from '../constants';

// interface
interface Action {
  type: string;
  payload?: any;
}
const nlpPageNamePrefix = 'mWeb:nlp';
const pageTypesMap = {
  CATEGORY_PAGE: CATEGORY_PAGE_TYPE,
  CMS_PAGE: CMS_PAGE_TYPE,
  HOME_PAGE: HOME_PAGE_TYPE,
  PRODUCT_PAGE: PRODUCT_PAGE_TYPE,
  SEARCH_PAGE: SEARCH_PAGE_TYPE,
};

const pageTypesToCapture: string[] = [];
const pageTypeKeys = Object.keys(pageTypesMap);
pageTypeKeys.map(
  (pageTypeKey: string) => {
    pageTypesToCapture.push(pageTypesMap[pageTypeKey as keyof PAGE_TYPES]);

    return true;
  },
);

/**
 * Validate event data to capture page load events
 * @param {object} data - event data
 * @returns {boolean} if the data.pageType is page load
 */
export const validateEventForPageLoad = (
  data: Record<string, any> = {},
) => {
  const { pageType, pageName } = data;

  if (pageType && pageTypesToCapture.indexOf(data.pageType) > -1) {
    return true;
  }
  if (pageName && pageName.indexOf(nlpPageNamePrefix) > -1) {
    return true;
  }

  return false;
};

/**
 * Returns page load event for Retina pipeline
 * @param {object} data - event data
 * @returns {object} Retina page load event
 */
export const getEventDataForPageLoad = (
  data: Record<string, any>,
) => {
  const { pageType, pageName } = data;
  if (pageName && pageName.indexOf(nlpPageNamePrefix) > -1) {
    return {
      eventName: PAGE_LOAD_EVENT_NAME,
      data: dataLayerUtils.getDataForNLPView(data),
    };
  }

  switch (pageType) {
    case pageTypesMap.PRODUCT_PAGE: {
      return {
        eventName: PAGE_LOAD_EVENT_NAME,
        data: dataLayerUtils.getDataForProductView(data),
      };
    }
    case pageTypesMap.CATEGORY_PAGE: {
      return {
        eventName: PAGE_LOAD_EVENT_NAME,
        data: dataLayerUtils.getDataForCategoryView(data),
      };
    }
    case pageTypesMap.HOME_PAGE: {
      return {
        eventName: PAGE_LOAD_EVENT_NAME,
        data: dataLayerUtils.getDataForHomeView(data),
      };
    }
    case pageTypesMap.SEARCH_PAGE: {
      return {
        eventName: PAGE_LOAD_EVENT_NAME,
        data: dataLayerUtils.getDataForSearchView(data),
      };
    }
    case pageTypesMap.CMS_PAGE: {
      return {
        eventName: PAGE_LOAD_EVENT_NAME,
        data: dataLayerUtils.getDataForCMSView(data),
      };
    }
    default: {
      return null;
    }
  }
};

/**
 * Fetches existing data layer page load events for Retina pipeline
 * @returns {array} array of page load events from data layer
 */
export const getExistingDataLayerEvents = () => {
  const { dataLayer } : any = window;

  if (!dataLayer) {
    return [];
  }

  const eventsToPushInRetina: Record<string, any>[] = [];

  dataLayer.map((
    pixel : Record<string, any>,
  ) => {
    if (validateEventForPageLoad(pixel)) {
      const eventToPush = getEventDataForPageLoad(pixel);
      eventsToPushInRetina.push(eventToPush);
    }

    return true;
  });

  return eventsToPushInRetina;
};
