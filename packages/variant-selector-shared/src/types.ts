export interface Variant {
  buttonText?: string;
  childId: string;
  discount?: number;
  isBestSeller?: boolean;
  inStock?: boolean;
  media?: any[];
  carousel?: any[];
  relatedVideo?: any[];
  mrp?: number;
  name: string;
  parentId?: string;
  offerPrice?: number;
  price?: number;
  packSize?: string;
  shadeImage?: string;
  quantity?: number;
  variantName: string;
  sku: string;
  slug?: string;
  productType?: string;
  expiry?: string;
  returnAvailable?: boolean;
  messageOnReturn?: string;
  featured?: boolean;
  onlyWishlistButton?: number;
  imageUrl?: string;
  manufacture?: any[];
  display_combo?: boolean;
  sizeData?: any;
  isLux?: number;
  contentLang?: {
    [key:string]: string;
  };
}
