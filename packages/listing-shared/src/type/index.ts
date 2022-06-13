export interface Action {
  type: string;
  payload?: any; // ? WHY payload is Of Inventory[] ??
  searchInput?: string;
}

export interface PageLocationType {
  pageType?: string;
  listingPageType?: string;
  id?: string;
}

export interface PageLocationProps {
  root?: string;
  categoryId: string;
  suggestionType?: string;
}
