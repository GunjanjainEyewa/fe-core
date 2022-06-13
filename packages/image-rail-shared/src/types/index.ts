export interface ImageItem {
  url: string;
  id: string;
}

export interface ImageClickCallback extends ImageItem {
  index: number;
}

export interface ImageRailProps {
  imageList: ImageItem[];
  handleClick?: (imageData: ImageClickCallback) => void;
  handleShowMore?: () => void;
  totalImages?: number;
  wrapperClass?: string;
  itemClass?: string;
}

interface RawImagesProps {
  reviewId: number;
  imageUrl: string;
}

export interface ImagesDataProps {
  id: string;
  url: string;
}

interface ReviewDataProps {
  [key: number]: ReviewInfoProps;
}

export interface ReviewImagesInfoProps {
  imageUrl: string;
  review: ReviewInfoProps;
}

export interface ReviewInfoProps {
  childId: number;
  title: string;
  description: string;
  name: string;
  createdOn: string;
  createdOnText: string;
  likeCount: number;
  rating: number;
  profilePic: string;
  isBuyer: boolean;
  isLikedByUser: boolean;
  id: string;
}

export interface ReviewImagesProps {
  total: number;
  reviewImages: RawImagesProps[];
  reviewData: ReviewDataProps;
  pageKey: string;
}

export interface LikeReviewParams {
  productId: string;
  reviewId: number;
  flag: string;
  likeCount?: number;
}


export interface FetchReviewParams {
  id: string;
  pageKey: string;
  productName?: string;
  newProduct?: boolean;
}

export interface ReviewImagesState {
  images: RawImagesProps[];
  loading: boolean;
  totalImagesAvailable: number;
  nextPageKey: string;
  imagesWithInfo: ReviewImagesInfoProps[];
}

export interface Action {
  type: string;
  payload?: any;
  isLoading?: boolean;
  searchInput?: string;
  add_reviews?: boolean;
}

export interface DefaultStateProps {
  images: ImagesDataProps[];
  imagesWithInfo: ReviewImagesInfoProps[];
  productId: String | null;
  totalImagesAvailable: number;
  loading: boolean;
  isNotFound: boolean;
  isFetchingError: boolean;
}
