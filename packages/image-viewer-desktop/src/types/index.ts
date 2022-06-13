import { PageLocationType, User } from '@nykaa/product-card-shared/types';
import { CartParams } from '@nykaa/product-card-shared/types/addToCart';
import { ReviewDataProps, Review } from './Review';
import { ListingProduct } from './Product';

export interface ImageDataProps {
  selectedUrl: string;
  activeIndex: number;
  forwardActive: boolean;
  backwardActive: boolean;
}

export interface HandleArrowButtonProps {
  reviewDataForImageRail?: ReviewDataProps[];
  reviewData: ReviewDataProps;
  setSelectedImageData: (imageData: ImageDataProps) => void;
  imageRailDataCondition: boolean;
  reviewImageCondition: boolean;
  currentIndex: number;
}

export interface HandleImageClick {
  reviewData: ReviewDataProps;
  setSelectedImageData: (imageData: ImageDataProps) => void;
  setActiveReview: React.Dispatch<React.SetStateAction<Review>>;
}

export interface ImageViewerProps {
  reviewData: ReviewDataProps;
  product: ListingProduct;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
  activeIndex: number;
  isPro: boolean;
  pageLocation: PageLocationType;
  addToCartCallback: (params: CartParams) => Promise<any>;
  handleSlider: () => {};
  user: User;
  handleForward: () => void;
  handleBackward: () => void;
}
