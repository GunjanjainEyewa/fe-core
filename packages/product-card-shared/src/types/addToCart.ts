import { PageJourney } from '@eyewa/data-layer/store/action';
import {
  ListingProduct, PageLocationType, PrimaryCategories,
} from '.';


export interface CartItem {
  productId: string;
  sku: string;
  quantity: number;
  name: string;
  brandId: string;
  categoryIds: string[];
  mrp: number;
  offerPrice: number;
  totalPrice: number;
  discount: number;
}

export interface CartData {
  message: string;
  itemsCount: number;
  itemsQuantity: number;
  subTotal: number;
  shipping: number;
  grandTotal: number;
  discount: number;
  items: CartItem[];
}


export interface CartDataLayerData {
  variantName: string,
  productId: string,
  offerPrice: number,
  categoryLevel?: PrimaryCategories,
  brandName: string,
  mrp: number,
  quantity: number,
  categoryNames?: (string|null)[],
  productImageUrl: string,
  featured: string;
}

export interface CartParams {
  productId: string;
  pro: boolean;
}


export interface CartWrapperProps {
  product: ListingProduct;
  showShades?: boolean;
  isPro: boolean;
  pageLocation: PageLocationType;
  handleCallback?: (e: boolean) => void;
  addToCartCallback: (params: CartParams) => Promise<any>;
  children: any;
  journeyData?: PageJourney;
  videoId?: string;
}

export interface CartRenderProps {
  handleAddToCart: () => void;
  stripClass: string;
  text: string;
}

export interface CartTrackingData {
  product: ListingProduct;
  cartData: CartData; // TODO: add a type for this
  journeyData?: PageJourney;
  pageSource?: string;
  videoId?: string;
}

export interface CartEvent {
  cartAddition: CartDataLayerData;
  siteNavigation?: string;
  siteSubNavigation?: string
}

export interface TrackingFuncData {
  product : ListingProduct
  pageLocation: PageLocationType
  showShades : boolean;
  cartData: any;
  journeyData?: PageJourney;
  videoId?: string;
}

export interface CartProps {
  product: ListingProduct;
  width?: string;
  isPro: boolean;
  handleCallback?: (e: boolean) => void;
  pageLocation: PageLocationType;
  showShades?: boolean;
  addToCartCallback: (params: CartParams) => Promise<any>;
  journeyData?: PageJourney;
  videoId?: string;
}
