// information related to Brand

export interface BrandInfo {
  aspectRatio: number;
  description: string;
  imageUrl: string;
  title: string;
  actionUrl?: string;
}

interface BrandInfoWidget {
  type: 'BRAND_INFO';
  data: BrandInfo;
}

// Primary Action button [Add to cart / Add to Wishlist]
export interface CTAInfo {
  showWishlist?: boolean;
  buttonText: string;
  productId: string;
  domain: string;
  shouldShowViewBag: boolean;
}

interface CTAWidget {
  type: 'CTA';
  data: CTAInfo;
}

// A plus Content
export interface AplusSnippet {
  imageUrl: '';
  aspectRatio: '';
  description: '';
  title: '';
}

export interface ProductAttributeInfo {
  slug: string;
  attributes?: { key: string; value: string }[];
  title: string;
  value?: string;
  shouldShowAsColumn: boolean;
  actionUrl?: string;
}

export interface DescAttributesInfo {
  title: string;
  list: ProductAttributeInfo[];
}

interface DescAttributesWidget {
  type: 'DESCRIPTION_ATTRIBUTES';
  data: DescAttributesInfo;
}

export interface ImageMedia {
  id: string;
  mediaType: 'image';
  position: number;
  url: string;
  aspectRatio: number;
}

export interface VideoMedia {
  hlsUrl: string;
  dashUrl: string;
  id: string;
  aspectRatio: number;
  thumbnailUrl: string;
  mediaType: 'video';
}

export interface MediaInfo {
  carouselHeight: number;
  carouselWidth: number;
  images: ImageMedia[];
}

interface MediaWidget {
  type: 'MEDIA';
  data: MediaInfo;
}

export interface SiblingColor {
  id: string;
  sku: string;
  actionUrl: string;
  name: string;
  colorCode: string;
}

export interface SiblingColorsWidget {
  type: 'COLORS';
  data: SiblingColor[];
}

export interface Size {
  id: string;
  sku: string;
  discountedPrice: number;
  price: number;
  discount: number;
  showWishlistButton: boolean;
  title: string;
  subTitle: string;
  categoryName: string;
  isOutOfStock: boolean;
}

export interface SizesWidget {
  type: 'SIZES';
  data: Size[];
}

export interface Tag {
  borderColor: string;
  title: string;
  bgColor: string;
  transparency: string;
  titleColor: string;
  fontSize: string;
  fontWeight: string;
}

export interface ChildColor {
  id: string;
  sku: string;
  discountedPrice: number;
  price: number;
  discount: number;
  showWishlistButton: boolean;
  title: string;
  subTitle: string;
  categoryName: string;
  isOutOfStock: boolean;
}

export interface ChildColorsWidget {
  type: 'SHADES';
  data: ChildColor[];
}

export interface PrimaryInfo {
  title: string;
  subTitle: string;
  categoryName: string;
  discountedPrice: number;
  price: number;
  discount: number;
  tags?: Tag[];
  rating: number;
  ratingCount: number;
  reviewCount: number;
  badge?: {
    title: string;
    imageUrl: string;
  };
  brandActionUrl?: string;
  currency?: string;
  showStarActive: boolean;
}

interface PrimaryInfoWidget {
  type: 'PRIMARY_INFO';
  data: PrimaryInfo;
}

export interface ProductInfo {
  id: string;
  sku: string;
  title: string;
  subTitle: string;
  categoryName: string;
  discountedPrice: number;
  price: number;
  discount: number;
  imageUrl: string;
  shipsIn: string;
  isOutOfStock: boolean;
  showWishlistButton: boolean;
  sizes?: Size[];
  siblingColors?: SiblingColor[];
  childColors?: ChildColor[];
  tags?: Tag[];
  currency?: string;
  brandId?: string;
  brandActionUrl?: string;
}

export interface TopReviewInfo {
  rating: number;
  ratingCount: number;
  reviewCount: number;
  helpfulReview: [
    {
      reviewId: string;
      profileImageUrl: string;
      childId: string;
      createdAt: string;
      title: string;
      detail: string;
      isBuyer: boolean;
      userName: string;
      rating: number;
      likes: string;
      images: string[];
      tags: { tag: string; type: 'manual' | 'response' }[];
      metaData: { portfolioForm: [] };
    },
  ];
}
export interface TopReviewWidget {
  type: 'TOP_REVIEW';
  data: TopReviewInfo;
}

export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
  productUrl: string;
  imgUrl: string;
}

export type MetaWidgetInfo = MetaInfo & ProductInfo & TopReviewInfo;
interface MetaWidget {
  type: 'META_INFO';
  data: MetaWidgetInfo;
}

export type ProductWidgets =
  | CTAWidget
  | BrandInfoWidget
  | DescAttributesWidget
  | MediaWidget
  | SiblingColorsWidget
  | SizesWidget
  | PrimaryInfoWidget
  | ChildColorsWidget
  | TopReviewWidget;

export interface Product {
  data: Partial<ProductInfo>;
  widgets: ProductWidgets[];
  isFetching: boolean;
  isError: boolean;
  isNotFound: boolean;
}

export interface PDPState {
  pdpSdk: Product;
}

export type Payload = Partial<Product>;
