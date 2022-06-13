import { NewTags } from '@eyewa/product-card-shared/types/tags';

export interface ImageItem {
  url: string;
  id: string;
}

export interface MediaItem {
  url: string;
  type: string;
}

export interface PrimaryCategories {
  l1: {
    name: string,
    id: string,
  };
  l2?: {
    name: string,
    id: string,
  };
  l3?: {
    name: string,
    id: string,
  };
  l4?: {
    name: string,
    id: string,
  };
}

export interface ListingProduct {
  brandName: string;
  buttonText: string;
  childId: string;
  discount: number;
  dynamicTags: string[];
  newTags?: NewTags[];
  id: string;
  imageUrl: string;
  inStock: boolean;
  mrp: number;
  name: string;
  offersCount: number;
  onlyWishlistButton: boolean;
  parentId: string;
  price: number;
  primaryCategories: PrimaryCategories;
  productId: string;
  quantity: number;
  rating: number;
  ratingCount: number;
  slug: string;
  type: string;
  title: string;
  variantCount: number;
  variantType: string;
  isBackorder: boolean;
  variantName?: string;
  offerPrice?: number;
  isLux?: number;
  featured?: boolean;
  isBestSeller?: boolean;
  media?: MediaItem[];
  sku?: string;
  expiry?: string;
  offer?: string;
  offerColor?: string;
  offerId?: string;
  showOffer?: boolean;
}
