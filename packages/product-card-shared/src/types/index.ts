import { NewTags } from './tags';

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
  // brandIds: string[];
  brandName: string;
  buttonText: string;
  // categoryIds: string[];
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
  // proFlag: number;
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
  isFreeSample?: boolean;
  offer?: string;
  offerColor?: string;
  offerId?: string;
  showOffer?: boolean;
}

export interface MediaItem {
  url: string;
  type: string;
  mediaType?: string;
}

export interface User {
  cartItemsCount: number;
  email: string;
  firstName: string;
  formKey: string;
  groupId: string;
  id: string;
  isLoyal: boolean;
  isPro: boolean;
  lastName: string;
  rewardPoints: number;
  userName: string;
  wishlist: string[];
}

export interface PageLocationType {
  pageType?: string;
  listingPageType?: string;
  id?: string;
}

export interface PageSourceProps {
  pageLocation: PageLocationType;
  variantType?: string;
  productId?: string;
  isPreview?: boolean;
}

export interface ButtonProps {
  customWidth?: string;
  isLoading?: boolean;
  customHeight?: string;
}
