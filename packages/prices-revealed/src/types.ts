export interface ProductEligibilityWithDiscount {
  saleTitle: string;
  offerPrice: number;
  discount: string;
  images: string[];
}

export interface ProductEligibilityNoDiscount {
  saleOffer: {
    images: string[];
  }
  noSaleOffer: {
    images: string[];
  }
}

export interface ProductEligibility {
  error: boolean;
  data: (null | ProductEligibilityWithDiscount | ProductEligibilityNoDiscount);
}

export interface PriceRevealConfig {
  active: boolean;
  productEligibilityActive: boolean;
  data?: {
    bucket: string;
    pinkBoxUrl: string;
    saleOfferTitle: string;
    colors: {
      offerTitle: string;
      offerPrice: string;
      offerDiscount: string;
      offerDescription: string;
    }
  }
}

export interface PriceRevealState {
  items: string[],
  error: (null | Error),
}

export interface DynamicWishlistAddProps {
  bucket: string;
  productId: string;
}

export interface ParamsForSnackBarCallback {
  show: boolean;
  isError: boolean;
  message: string;
}
