import { NewTags } from '@eyewa/product-card-shared/types/tags';


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
  brandIds: string[];
  brandName: string;
  buttonText: string;
  categoryIds: string[];
  childId: string;
  discount: number;
  dynamicTags: string[];
  newTags: NewTags[];
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
  proFlag: number;
  quantity: number;
  rating: number;
  ratingCount: number;
  slug: string;
  type: string;
  title: string;
  variantCount: number;
  variantType: string;
  isBackorder: boolean;
  isLux: number;
  isFreeSample: boolean;
  offer: string,
  offerColor: string,
  offerId: string,
  showOffer: boolean,
}

export interface TipTile {
  url: string;
  imageSrc: string;
}
