export type SMALL = 'small';
export type MEDIUM = 'medium';
export type SMALL_ALT = 'small_alt';

export type StyleProps = {
  size: SMALL | MEDIUM | SMALL_ALT
};

export type Props = StyleProps;

export interface PriceReveal {
  status?: boolean;
  text?: string;
  textColor?: string;
  badgeColor?: string;
}

export interface TagObject {
  id: string;
  name: string;
}

export interface Translations {
  outOfStock?: string,
  fewLeft?: string,
  quantityLeft?: string,
  variant?: string,
  variants?: string,
  discount?: string,
}
