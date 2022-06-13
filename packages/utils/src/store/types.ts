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
