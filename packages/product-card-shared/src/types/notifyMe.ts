import { Theme } from '@nykaa/ui-components/themes/types';
import { FormEvent } from 'react';
import { PageLocationType } from '.';
import { ListingProduct, PrimaryCategories, User } from '.';

export interface NotifyMeParams {
  email: string;
  productId: string;
  variantName: string;
  offerPrice: number;
  brandName: string;
}

export interface NotifyMeTrackingData {
  brandName: string;
  productName: string,
  productId: string,
  offerPrice: number,
  primaryCategories: PrimaryCategories,
  videoId: string;
  pageLocation?: PageLocationType;
  offerId?: string;
  offerMessage?: string;
}

export interface NotifyMeWrapperProps {
  productId: string;
  brandName: string;
  offerPrice: number;
  productName: string;
  user: User;
  handleCallback?: () => void;
  primaryCategories: PrimaryCategories;
  sendNotifyMe: (e: NotifyMeParams) => Promise<any>;
  isRegisteredViaMobile: (e: string) => boolean;
  children: any;
  videoId?: string;
  pageLocation?: PageLocationType;
  offerId?: string;
  offerMessage?: string;
}

export interface NotifyMeRenderProps {
  handleFormSubmit: () => void;
  handleChange: () => void;
  email: string;
  error: string;
}


export interface OutOfStockProps {
  user: User;
  product: ListingProduct;
  closeNotifyMe: () => void;
  sendNotifyMe: (e: NotifyMeParams)=> Promise<any>;
  isRegisteredViaMobile: (e: string) => boolean;
}

export interface NotifyMeProps {
  productId: string;
  brandName: string;
  offerPrice: number;
  productName: string;
  user: User;
  primaryCategories: PrimaryCategories;
  sendNotifyMe: (e: NotifyMeParams)=> Promise<any>;
  onClose: () => void;
  isRegisteredViaMobile: (e: string) => boolean;
  videoId?: string;
  customClass?: string;
  offerMessage?: string;
  offerId?: string;
}


export interface EmailFormProps {
  email: string;
  error: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (formSubmitEvent: FormEvent) => void;
}

export interface StyleProps {
  error: string;
  theme: Theme;
}
