export interface BadgeValueProps {
  imageUrl: string;
  title: string;
}

export interface ProductTag {
  bgColor: string;
  titleColor: string;
  title: string;
  transparency: string;
  borderColor: string;
  fontSize?: string;
  fontWeight?: string;
}
export interface MediaItem {
  url: string;
  type: string;
}
export interface ManufactureData {
  originOfCountryName: string;
  manufacturerName: string;
  manufacturerAddress: string;
}
export interface SizeData {
  [key: string]: { [key: string]: string };
}
export interface Product {
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
  shadeImage: string;
  quantity: number;
  variantName: string;
  sku: string;
  slug: string;
  productType: string;
  expiry: string;
  returnAvailable: boolean;
  messageOnReturn: string;
  featured: boolean;
  onlyWishlistButton: number;
  imageUrl: string;
  manufacture: ManufactureData[];
  display_combo: boolean;
  sizeData?: SizeData;
  isLux?: number;
}
