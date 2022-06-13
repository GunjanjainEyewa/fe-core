import { PageLocationType, User } from '@nykaa/product-card-shared/types';
import { CartParams } from '@nykaa/product-card-shared/types/addToCart';
import { ListingProduct, ImageItem } from './Product';


export interface Review {
  title: string;
  description: string;
  name: string;
  createdOn: string;
  likeCount: number;
  rating: number;
  isLikedByUser: boolean;
  isBuyer: boolean;
  profilePic: string;
  variantId: number;
  id: number;
  images?: string[];
  createdOnText: string;
}

export interface ReviewDataProps {
  review: Review[];
  imageUrl: string[];
}

export interface ReviewProps {
  review: Review;
  product: ListingProduct;
  handleImageClick: (imageItem: ImageItem) => void;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
  showReadMore?: boolean;
  handleReadMore?: () => void;
  descriptionLength?: number;
  isLazyLoading?: boolean;
  isPro: boolean;
  pageLocation: PageLocationType;
  addToCartCallback: (params: CartParams) => Promise<any>;
  handleSlider: () => {};
  user: User;
}
