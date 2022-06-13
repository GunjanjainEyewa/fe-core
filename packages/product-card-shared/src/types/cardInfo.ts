import { Theme } from '@eyewa/ui-components/themes/types';
import { ListingProduct } from '.';

export type SMALL = 'small';
export type MEDIUM = 'medium';
export type COMPACT = 'compact';

export interface StyleProps {
  size: SMALL | MEDIUM | COMPACT;
}
export type Props = StyleProps;

export interface FontProps {
  size: string;
  theme: Theme;
  kind?: string;
}

export interface PriceReveal {
  status?: boolean;
  text?: string;
  textColor?: string;
  badgeColor?: string;
}

export interface CardDetailProps extends StyleProps {
  imageUrl: string;
  product: ListingProduct;
  showProFlag: boolean;
  lazyLoadImage: boolean;
  pdpPageUrl: string;
  plpPriceReveal?: PriceReveal;
  defaultColor?: boolean,
}
