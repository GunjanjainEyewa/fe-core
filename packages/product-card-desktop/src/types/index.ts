import {
  ListingProduct,
  PageLocationType,
  User,
} from '@nykaa/product-card-shared/types';
import { CartParams } from '@nykaa/product-card-shared/types/addToCart';
import { NotifyMeParams } from '@nykaa/product-card-shared/types/notifyMe';
import { VariantsState } from '@nykaa/product-card-shared/types/variants';
import { StyleProps, PriceReveal } from '@nykaa/product-card-shared/types/cardInfo';
import {
  AddToWishlist,
  RemoveFromWishlist,
} from '@nykaa/product-card-shared/types/addToWishlist';
import { Theme } from '@nykaa/ui-components/themes/types';
import { PageJourney } from '@nykaa/data-layer/store/action';

export interface CardActionProps {
  product: ListingProduct;
  showShades: boolean;
  pdpPageUrl: string;
  user: User;
  pageLocation: PageLocationType;
  handleVariant: () => void;
  handleVariantCross: () => void;
  openNotifyMe: () => void;
  handleSlider?: () => void;
  addToCartCallback: (params: CartParams) => Promise<any>;
  wishlistCallback: (
    params: AddToWishlist | RemoveFromWishlist,
    isAdd: boolean
  ) => Promise<any>;
  redirectAuthPage: () => void;
  onlyAddToBag: boolean;
  handleShowCAB?: ()=> void;
  journeyData?: PageJourney,
}

export interface ProductCardProps extends StyleProps {
  imageUrl: string;
  product: ListingProduct;
  showProFlag: boolean;
  lazyLoadImage: boolean;
  positionInList: number;
  user: User;
  customClass?: string;
  pageLocation: PageLocationType;
  variants?: VariantsState;
  showFixedAction?: boolean;
  onlyAddToBag?: boolean;
  handleSlider?: () => void;
  addToCartCallback?: (params: CartParams) => Promise<any>;
  wishlistCallback?: (
    params: AddToWishlist | RemoveFromWishlist,
    isAdd: boolean
  ) => Promise<any>;
  fetchVariants?: (e: { [key: string]: string }) => any;
  isRegisteredViaMobile?: (e: string) => boolean;
  sendNotifyMe?: (e: NotifyMeParams) => Promise<any>;
  redirectAuthPage?: () => void;
  plpPriceReveal?: PriceReveal;
  pdpRecommendationUrl?: string;
  handleShowCAB?: ()=> void;
  defaultColor?: boolean;
  journeyData?: PageJourney;
}

export const ProductDefaultProps = {
  onlyAddToBag: false,
  showFixedAction: false,
  handleSlider: () => {},
  addToCartCallback: (params: CartParams) => Promise.reject(params),
  wishlistCallback: (
    params: AddToWishlist | RemoveFromWishlist,
  ) => Promise.reject(params),
  fetchVariants: (e: { [key: string]: string }) => e,
  isRegisteredViaMobile: () => true,
  sendNotifyMe: (e: NotifyMeParams) => Promise.reject(e),
  redirectAuthPage: () => {},
};

export interface ActionStyleProps {
  customBg: boolean;
  theme: Theme
}
