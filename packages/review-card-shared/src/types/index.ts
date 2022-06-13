export interface Variant {
  variant_icon: string;
  id: string;
  variant_name: string;
}

export interface LikeTextProps {
  likeCount: number;
  isLikedByUser: boolean;
  customTranslations?: DefaultTranslations
}
export interface LikeProps {
  reviewId: number;
  likeCount: number;
  isLikedByUser: boolean;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
  customTranslations?: DefaultTranslations;
}

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
  images: Array<string>;
  createdOnText: string;
  isProUser?: boolean;
  label?: string;
}

export interface Product {
  name: string;
  productId: string;
  options?: Variant[];
  id?: string;
  variant_type?: string;
}
export interface ImageItem {
  url: string;
  id: string;
}
export interface Images {
  isLazyLoading?: boolean;
  reviewId: number;
  images: string[];
  handleImageClick: (imageData: ImageItem, reviewId?: string) => void;
}

export interface DefaultTranslations {
  YOU?: string,
  PEOPLE_FOUND_THIS_HELPFUL?: string,
  FOUND_THIS_HELPFUL?: string,
  AND?: string,
  HELPFUL?: string,
  VERIFIED_BUYER?: string,
}

export interface ReviewProps {
  review: Review;
  product: Product;
  handleImageClick: (imageData: ImageItem, reviewId?: string) => void;
  handleLike: (id: number, isLikedByUser: boolean, likeCount: number) => void;
  showReadMore?: boolean;
  handleReadMore?: () => void;
  descriptionLength?: number;
  isLazyLoading?: boolean;
  translations?: DefaultTranslations;
}
