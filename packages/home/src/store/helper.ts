import { HomePageConfig } from '@nykaa/remote-config/types';
import { deviceTypes } from '@nykaa/utils/device/constants';
import { logger } from '@nykaa/logger';
import {
  pageTypes,
  pageNamePrefix,
} from '@nykaa/data-layer/constants';
import { getErrorString } from '@nykaa/data-layer/store/helpers';
import { ApiHelper } from '@nykaa/utils/network';
import { AdditionalRequestOptions } from '@nykaa/utils/network/types';
import { Inventory } from './types';
import { SEO_METADATA, SEO_DATA } from './constants';


export const getImpressionLoggingEndpoint = () => {
  const { IMPRESSION_LOG_DOMAIN } = process.env;
  return `${IMPRESSION_LOG_DOMAIN}/log_data/log`;
};

export const getHomePageParams = () => (
  {
    page_type: 'desktop-homepage',
    page_section: '*',
    device: 'desktop',
    // catalog_tag_filter: 'men',
  }
);

export const getDataLayer = (errorCode: (number|null)) => {
  if (errorCode && errorCode > 200) {
    return {
      pageName: getErrorString(errorCode),
      pageType: pageTypes.HOME,
    };
  }

  return {
    pageName: pageNamePrefix.HOME,
    pageType: pageTypes.HOME,
  };
};

const getCommonFieldsForImpressions = () => {
  try {
    return {
      platform: deviceTypes.M_WEB,
      // eslint-disable-next-line no-restricted-globals
      vertical: location.host,
      app_version: '',
      device_model: navigator.userAgent || '',
      session_id: '',
      mc_id: (window.s && window.s.marketingCloudVisitorID) || '',
      timestamp: Math.floor(new Date().getTime() / 1000),
      source: 'web-sdk',
    };
  } catch (err) {
    logger.error(err, 'Error getting common Fields');
    return {};
  }
};


export const handleImpressions = async (impressions: any[]) => {
  const data = {
    events: impressions,
    common_fields: getCommonFieldsForImpressions(),
  };
  const url = getImpressionLoggingEndpoint();
  const securityOptions: AdditionalRequestOptions = { CSRF: false };

  try {
    const response = await ApiHelper(
      url,
      'post',
      data,
      undefined,
      securityOptions,
    );

    const status = response?.data?.status;
    if (status !== 1) {
      throw new Error(`Impression log returned a status !== 1: ${status}`);
    }
  } catch (err) {
    logger.error(err, 'Error Posting data for impressions');
    throw err;
  }
};

export const getMetaData = (inventories: Inventory[]) => {
  const seoData = inventories.find(
    (x: Inventory) => (x.widgetData && x.widgetData.widgetType === SEO_DATA),
  );

  if (seoData) {
    const { widgetData: { params } } = seoData;
    return params;
  }
  // eslint-disable-next-line no-underscore-dangle
  return SEO_METADATA[__PLATFORM__];
};

export const getCustomPageType = (
  homePageConfig: HomePageConfig,
  pageTypeInQuery: (string | null),
): (string | null
  ) => {
  const { status, suffix } = homePageConfig.pageTypeSuffix || {};
  const { page_type: pageType } = getHomePageParams();

  if (status && suffix && (suffix === pageTypeInQuery)) {
    return `${pageType}-${suffix}`;
  }
  return null;
};
