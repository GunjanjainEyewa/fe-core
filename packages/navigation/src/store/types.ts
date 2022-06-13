export interface Category {
  name: string;
  categoryId: string;
  parentId?: string;
  position?: number;
  requestPath: string;
  level: number;
  children?: Category[];
}

export interface Brand {
  brandId: string;
  name: string;
  requestPath: string;
}

export interface BrandIndices {
  [index: string]: Brand[];
}

export interface Menu {
  categories: Category[],
  brands: BrandIndices,
}


export interface Navigation {
  menu?: Menu;
}


export interface Action {
  type: string;
  payload?: any;
}
