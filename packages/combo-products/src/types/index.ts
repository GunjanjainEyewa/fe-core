interface ShowMoreFunctionProps {
  productId: number;
  productTitle: string;
}

export interface Product {
  productId: number;
  customTag: string;
  productIcon: string;
  productTitle: string;
  ratingCount: number;
  avgRating: number;
  mrp: number;
  price: number;
  discount: number;
  inStock?: boolean;
  handleClick?: ({ productId, productTitle }: ShowMoreFunctionProps) => void;
  customClass?: string;
}

export interface ComboListProps {
  productList: Product[];
  minTile: number;
  maxTile: number;
  showMoreText?: string;
  showLessText?: string;
  handleClick?: ({ productId, productTitle }: ShowMoreFunctionProps) => void;
}
