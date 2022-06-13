declare global {
  interface Window {
    s: any;
  }
}
export interface AnalyticsCommonFields {
  environment: 'prod' | 'preprod' | 'qa' | 'smoke' | 'pref';
  platform: 'android' | 'ios' | 'mweb' | 'dweb';
  vertical: 'nykaa' | 'nykaaman' | 'nykaafashion';
  store?: string;
  deviceViewportHeight: number;
  deviceViewportWidth: number;
  networkSpeed?: string;
  omnitureMCID: string;
  visitorId: string;
  customerId?: string;
  networkWifi?: boolean;
  sdkVersion: string;
  appVersion?: string;
}

export interface AnalyticsInitialization
  extends Pick<
  AnalyticsCommonFields,
  'environment' | 'platform' | 'vertical' | 'customerId' | 'store' | 'appVersion'
  > {
  analyticsEndpoint: string;
  batchInterval?: number;
}

export interface ImpressionEventData extends Record<string, any> {
  banner_transaction_id: string;
}

export interface PAGE_TYPES {
  CATEGORY_PAGE: string,
  CMS_PAGE: string,
  HOME_PAGE: string,
  PRODUCT_PAGE: string,
  SEARCH_PAGE: string,
}
