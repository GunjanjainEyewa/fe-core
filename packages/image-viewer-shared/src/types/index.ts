
export interface DescriptionProps {
  title: string;
  description: string;
}

export interface UserProps {
  name: string;
  isBuyer: boolean;
  isProUser?: boolean;
  label?: string;
  customText?: string;
}

export interface Review extends DescriptionProps, UserProps {
  createdOn: string;
  rating: number;
  variantId: number;
  id: string;
  createdOnText: string;
  likeCount: number;
  isLikedByUser: boolean;
  profilePic?: string;
  images?: string[];
  isProUser?: boolean;
  label?: string;
}

interface Variant {
  variant_icon: string;
  id: string;
  variant_name: string;
}

export interface Product {
  name: string;
  productId: string;
  options?: Variant[];
  id: string;
  variant_type: string;
}

export interface ImageReviewProps {
  imageUrl: string;
  review: Review;
}

export interface ImageViewerProps {
  reviews: ImageReviewProps[];
  activeIndex: number;
  loadMore: () => void;
  hasMore: boolean;
  product: Product;
}
export interface ImageItem {
  url: string;
  id: string;
}

export interface LikeTextProps {
  likeCount: number;
  isLikedByUser: boolean;
}
export interface LikeProps {
  reviewId: number;
  likeCount: number;
  isLikedByUser: boolean;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
}


export interface Images {
  isLazyLoading?: boolean;
  reviewId: number;
  images: string[];
  handleImageClick: (imageItem: ImageItem) => void;
  review?: Review;
}

export interface ReviewProps {
  review: Review;
  product: Product;
  handleImageClick: (imageItem: ImageItem) => void;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
  showReadMore?: boolean;
  handleReadMore?: () => void;
  descriptionLength?: number;
  isLazyLoading?: boolean;
}
