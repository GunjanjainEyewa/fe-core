import { ListingProduct, PrimaryCategories } from '.';

export interface FetchProductParams {
  id: string;
  store?: string;
}


export interface MediaItem {
  url: string;
  type: string;
}

export interface Variant {
  buttonText: string;
  childId: string;
  discount: number;
  isBestSeller: boolean;
  inStock: boolean;
  media: MediaItem[]
  mrp: number;
  name: string;
  offerPrice: number;
  packSize?: string;
  shadeImage?: string;
  quantity: number;
  variantName: string;
  sku: string;
  slug: string;
  productType?: string;
  expiry: string;
  returnAvailable?: boolean;
  messageOnReturn?: string;
  featured?: boolean;
  imageUrl: string;
  brandName: string;
  primaryCategories: PrimaryCategories;
  defaultPid: string;
}

export interface VariantsState {
  loading: boolean;
  isNotFound: boolean;
  isFetchingError: boolean;
  loadingProductId: string;
  data: [] | {[key: string]: Variant[]};
}

export interface VariantActionProps {
  variantType: string;
  handleVariant: () => void;
}

export interface VariantCardProps {
  product: ListingProduct;
  handleVariantCross: () => void;
  isSize: boolean;
  variantsData: VariantsState;
  fetchVariants: (e: {[key: string]: string}) => void;
  handleSelectedVariant: (e: Variant) => void;
}

export interface ShadesProps {
  variant: Variant;
  selectedVariant?: Variant;
  changeVariant: (e: Variant) => void;
  index: number;
}


export interface SizeProps {
  variant: Variant;
  changeVariant: (e: Variant) => void;
  selectedVariant?: Variant;
  index: number;
}

export interface VariantProps {
  variantData: Variant[];
  loading: boolean;
  isSize: boolean;
  handleSelectedVariant: (e: Variant) => void;
  handleVariantCross: () => void;
}

export interface PaletteProps {
  variantData: Variant[];
  isSize: boolean;
  handleVariantChange: (e: Variant) => void;
  selectedVariant?: Variant;
}

export interface VariantInfoProps {
  variantName: string;
  isVariantOutOfStock: boolean;
  price: number;
  mrp: number;
  discount: number;
}

export interface VariantHeaderProps {
  title: string;
  handleVariantCross: () => void;
}
