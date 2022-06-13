import { StoreOptions } from '@nykaa/utils/store/types';
import { PriceRevealConfig } from '@nykaa/prices-revealed/types';
import { ExperimentConfig } from '@nykaa/experiment-sdk/types';


export interface Redirection {
  name: string,
  status: boolean,
  userPercentage: number,
  cookieName: string,
}

export interface HomePageConfig {
  initialInventories: number,
  eagerLoadImages: number,
  pageTypeSuffix: {
    status: boolean;
    suffix?: string;
  }
}

export interface MetaData {
  productPage: {
    title: string,
    description: string,
  },
  brandPage: {
    title: string,
    description: string,
  },
  searchPage: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
  }
}

export interface Switches {
  showViewSimilar: boolean;
  showOffersOnPdp: boolean;
  showRewardPoints: boolean;
  newRatingForm: boolean;
  showDeliveryOnPd: boolean;
  internationalMode: boolean;
  redirectionList: Redirection[];
  trackDeviceId: boolean;
  pdPageBanners: boolean;
  offerListingEnabled: boolean;
  appLinkEnabled: boolean;
  featuresEnabled?: boolean;
  socialLinksEnabled?: boolean;
  newsletterEnabled?: boolean;
  helpCenterEnabled?: boolean;
  mobileNumberMapping: boolean;
  showUserPortfolio: boolean;
  webOtpAutoRead: boolean;
  vpEnabled?: boolean;
  experimentV2Enabled: false,
  loadInterFont: boolean;
  dwebPdpCustomVideo: boolean;
}

export interface ABConfig {
  status: boolean;
  userPercentage: number;
  keyName: string;
}

export interface Policy {
  title: string;
  link: string;
}

export interface Configurations {
  whitelistedDomains: string[];
  customersAlsoViewed: {
    status: boolean;
    algorithm: string;
  };
  customersAlsoBought: {
    status: boolean;
    algorithm: string;
  };
  rewardPointsOnSignUp: number;
  upiOffer: {
    status: boolean,
    message: string,
  }
  priceReveal: PriceRevealConfig;
  trendingSearchesToShow: number;
  maxSearchHistoryCount: number;
  storeOptions: StoreOptions;
  contentPolicy: {
    status:boolean;
    value: string;
    userPercentage: number;
    headerKey: string;
  },
  homePage: HomePageConfig;
  sortForListing: { key: string, name: string }[];
  freeShipping: number,
  meta: MetaData,
  guidedSearch: {
    status:boolean;
    userPercentage: number;
  },
  searchSuggestionIcons: {[key:string]:string};
  searchSuggestion?: {
    status: boolean;
    userPercentage: number;
    name: string,
  };
  AB: {
    [key: string]: ABConfig;
  };
  appLinks?: {[key:string]:string};
  features?: {
    brandsCount: {[key:string]:string};
    freeShip: {[key:string]:string};
    genuineProduct: {[key:string]:string};
  };
  socialLinks?: {[key:string]:string};
  helpCenter?: {[key:string]:string};
  VP?: {
    [key: string]: string;
  };
  ABV2: ExperimentConfig[];
  landingPageABConfig:{[key:string]:[string]};
  plpPriceReveal: {
    status: boolean;
    categoryId: string[];
    text: string;
    textColor: string;
    badgeColor: string;
  }
  sentrySampleRate?: number;
  policies?: Policy[],
}

export interface RemoteConfig {
  switches:Switches,
  configs: Configurations,
}
