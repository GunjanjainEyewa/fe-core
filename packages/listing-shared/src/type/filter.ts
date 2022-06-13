export interface ActiveFilterData {
  id: string;
  name: string;
  key?: string;
  depth?: string;
  parentId?: string;
}
export interface ActiveFilter {
  type: string;
  title: string;
  key?: string;
  data?: ActiveFilterData | ActiveFilterData[];
}

export interface CommonFacet {
  count: string;
  id: string;
  name: string;
  color_code?: string[];
}

export interface CategoryFacet {
  count: string;
  depth: string;
  id: string;
  include_in_menu: string;
  lft: string;
  name: string;
  parent_id: string;
  position: string;
  rgt: string;
  selectedCount?: number;
  children?: CategoryFacet[];
}

export interface ListingFilter {
  key: string;
  title: string;
  showSearch: boolean;
  type: string;
  data: (CommonFacet | CategoryFacet)[];
}
