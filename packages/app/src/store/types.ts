
export interface Client {
  device: string;
  version?: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface Store {
  storeId: string;
  name: string;
  storeLogo: string;
  multiStoreLogo: string;
}

export interface StoreOptions {
  status: boolean;
  backToBeautyText: string;
  exploreMoreStores: string;
  stores: Store[];
  userPercentage: number;
  rememberLastStore: boolean;
}


export interface ConfigFlags {
  isSmartLockActive: boolean;
  mobileMapping: {
    sendOtpCaptcha: boolean;
    verifyOtpCaptcha: boolean;
  }
}


export interface AppState {
  pageType: (string | null);
  statusCode: number;
  storeId: string;
  configFlagsFetched: boolean;
  configFlags: ConfigFlags;
  run: number;
  client: Client;
}
