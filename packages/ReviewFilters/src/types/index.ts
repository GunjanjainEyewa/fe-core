import { Theme as ThemeType } from '@eyewa/ui-components/themes/types';

export interface Option {
  productId: string;
  variantName: string;
  variantIcon: string;
}
export interface ThemeProps {
  theme: Theme;
}

export interface VariantModalProps{
  options: Option[];
  closeModal: () => void;
  selectedVariants: Option[];
  handleApply: () => void;
  handleClick: (id: string) => void;
  handleClose: (id: string) => void;
  isSelected: (id: string) => boolean;
  updateVariants: (arg0: []) => void;
  variantType: string;
  applyDisabled: boolean;
  theme: any;
}

export interface VariantHeaderProps {
  selectedVariants: Option[];
  handleClose: (id: string) => void;
}

export interface VariantBodyProps {
  options: Option[];
  handleClick: (id: string) => void;
  isSelected: (id: string) => boolean;
}

export interface VariantProps {
  variantsLength: number;
  handleVariantModal: () => void;
  variantType: string;
  theme: any;
}

export interface OptionForSortModal {
  isSelected: boolean;
  id: string;
  text: string;
}
export interface SortModalProps {
  options: OptionForSortModal[];
  text: string;
  changeSort: (id: string) => void;
  theme: any;
}

export interface FilterProps {
  options: OptionForSortModal[];
  handleClick: (id: string) => void;
  theme: any;
}

export interface Theme extends ThemeType {
  backgroundColor: string;
  borderColor: string;
  secondaryTextColor: string;
  primaryTextColor: string;
  brandPrimary: string;
  brandSecondary: string;
  darkGrey: string;
  lightGrey: string;
  lightBorder: string,
  lightBlack: string,
  primaryColor: string;
}
