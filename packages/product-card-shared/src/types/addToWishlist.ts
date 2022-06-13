import {
  ListingProduct, PageLocationType, PrimaryCategories, User,
} from '.';


export interface GamoogaForAddToWishlist {
  prod_name: string;
  prod_id: string;
  selling_price: string;
  marked_price: string;
  prod_img: string;
  prod_url: string;
  prod_cat_l1?: string;
  prod_cat_l2?: string;
  prod_cat_l3?: string;
}

export interface AddToWishlistResponse {
  gamooga: GamoogaForAddToWishlist
}

export interface AddToWishlist {
  productId: string,
  formKey: string,
}

export interface RemoveFromWishlist {
  productId: string,
}


export interface WishlistWrapperProps {
  user: User;
  product: ListingProduct;
  redirectAuthPage: () => void;
  pageLocation: PageLocationType;
  wishlistCallback: (params: AddToWishlist | RemoveFromWishlist, isAdd: boolean) => Promise<any>;
  children: any;
  videoId?: string;
}

export interface WishlistRenderProps {
  handleClick: () => void;
  buttonText: string;
  isInWishlist: boolean;
}


export interface RemoveWishlistDataLayer {
  productId: string;
  featured: string;
  inStock: string;
  offerId?: string,
  offerMessage?: string;
}

export interface WishlistTrackingData extends AddToWishlistResponse {
  product: {
    id: string;
    brandName: string;
    mrp: number;
    name: string;
    offerPrice: number;
    primaryCategories?: PrimaryCategories;
    featured: boolean;
    isLux: number;
    inStock: boolean;
  },
  pageSource: string;
  videoId?: string;
}

export interface WishlistForDataLayer {
  productId: string;
  categoryLevel?: PrimaryCategories;
  brandName: string;
  mrp: number;
  productName: string;
  offerPrice: number;
  gamoogaData: GamoogaForAddToWishlist;
  featured: string;
  pageSource: string;
  isLux: number;
  offerId?: string,
  offerMessage?: string;
}

export interface RemoveWishlistTrackingData {
  product: {
    id: string;
    featured: boolean;
    inStock: boolean;
  }
}

export interface TrackingFuncData {
  product : ListingProduct
  pageLocation?: PageLocationType
  wishlistData?: any;
  videoId?: string;
  offerId?: string;
  offerMessage?: string;
}

export interface WishListProps {
  user: User;
  width?: string;
  pageLocation: PageLocationType;
  product: ListingProduct;
  customWishlistButton?: string;
  customWishlistClass?: string;
  wishlistCallback: (params: AddToWishlist | RemoveFromWishlist, isAdd: boolean) => Promise<any>;
  redirectAuthPage: () => void;
  videoId?: string;
}
