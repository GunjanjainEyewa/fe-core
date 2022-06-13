export interface ImageItem {
  url: string;
  id: string;
}
export interface Images {
  isLazyLoading?: boolean;
  reviewId: number;
  images: string[];
  handleImageClick: (imageItem: ImageItem) => void;
}
