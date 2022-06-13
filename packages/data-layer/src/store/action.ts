import actionTypes from './actionTypes';


export interface PageJourney {
  siteNavigation?: string;
  siteSubNavigation?: string;
}

interface DataLayerSSR extends PageJourney{
  pageType?: string;
  pageName?: string;
  [entity: string]: any;
}

export const actionForSSRDataLayer = (data: DataLayerSSR) => ({
  type: actionTypes.DATA,
  payload: data,
});
