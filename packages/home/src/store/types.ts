export interface MetaDataType {
  title: string,
  keywords: string,
  description: string,
}

export interface HomeState {
  loading: boolean;
  isFetchingError: boolean,
  widgets: (null|Inventory[]);
  // btfWidgets: (null|Inventory[]);
  metaData: MetaDataType,
}

export interface Inventory {
  inventoryName: string;
  inventoryId: string;
  inventoryPageType: string;
  inventoryPageSection: string;
  inventoryPageData: string;
  visibility: string;
  position: number;
  widgetData: {
    params: {},
    widgetType: string;
  };
}

export interface Action {
  type: string;
  payload?: Inventory[];
  metaData?: MetaDataType,
}

export interface FetchHomePageParams {
  store?: string;
  page_type?: string;
  page_data?: string;
}
