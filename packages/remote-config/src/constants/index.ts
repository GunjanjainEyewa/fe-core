import { RemoteConfig } from '../types';

const FREE_SHIPPING = 500;
export const CACHE_KEY = 'REMOTE_CONFIG';

export const GET_REMOTE_CONFIG_URL = () => process.env.REMOTE_CONFIG_URL;

export const DEFAULT_CONFIG: RemoteConfig = {
  switches: {
    newRatingForm: true,
    appLinkEnabled: true,
    showDeliveryOnPd: true,
    showOffersOnPdp: false,
    showRewardPoints: true,
    showViewSimilar: true,
    internationalMode: false,
    redirectionList: [
      {
        name: 'NewPDP',
        status: true,
        userPercentage: 100,
        cookieName: 'NEW_PDP',
      },
      {
        name: 'NewHome',
        status: true,
        userPercentage: 5,
        cookieName: 'N_HOM',
      },
    ],
    trackDeviceId: false,
    pdPageBanners: false,
    offerListingEnabled: false,
    mobileNumberMapping: false,
    showUserPortfolio: false,
    webOtpAutoRead: false,
    loadInterFont: false,
    experimentV2Enabled: false,
    dwebPdpCustomVideo: false,
  },
  configs: {
    whitelistedDomains: [],
    customersAlsoBought: {
      status: true,
      algorithm: 'coccurence_direct',
    },
    customersAlsoViewed: {
      status: true,
      algorithm: 'coccurence_simple',
    },
    rewardPointsOnSignUp: 2000,
    upiOffer: {
      status: false,
      message: '',
    },
    priceReveal: {
      active: false,
      productEligibilityActive: false,
    },
    maxSearchHistoryCount: 5,
    trendingSearchesToShow: 5,
    storeOptions: {
      status: false,
      backToBeautyText: 'Back to Main Store',
      exploreMoreStores: '',
      stores: [],
      rememberLastStore: false,
      userPercentage: 0,
    },
    contentPolicy: {
      userPercentage: 5,
      headerKey: 'Content-Security-Policy-Report-Only',
      status: false,
      value: '',
    },
    sortForListing: [
      {
        name: 'popularity',
        key: 'popularity',
      },
      {
        name: 'discount',
        key: 'discount',
      },
      {
        name: 'name',
        key: 'name',
      },
      {
        name: 'customer top rated',
        key: 'customer_top_rated',
      },
      {
        name: 'new arrivals',
        key: 'new_arrival',
      },
      {
        name: 'price: high to low',
        key: 'price_desc',
      },
      {
        name: 'price: low to high',
        key: 'price_asc',
      },
    ],
    freeShipping: FREE_SHIPPING,
    homePage: {
      initialInventories: 2,
      eagerLoadImages: 2,
      pageTypeSuffix: { status: false },
    },
    meta: null,
    guidedSearch: {
      status: false,
      userPercentage: 0,
    },
    searchSuggestionIcons: {
      query: 'https://www.nykaa.com/media/wysiwyg/2020/search.svg',
      buying_guide: 'https://www.nykaa.com/media/wysiwyg/2020/buying-guide.svg',
      history: 'https://www.nykaa.com/media/wysiwyg/2020/clock.svg',
      trending: 'https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg',
    },
    AB: {
      searchSuggestion: {
        status: false,
        userPercentage: 0,
        keyName: 'ab_newautocomplete_screen',
      },
      guidedSearch: {
        status: false,
        userPercentage: 0,
        keyName: 'ab_guides',
      },
    },
    ABV2: [],
    landingPageABConfig: {},
    plpPriceReveal: {
      status: true,
      categoryId: [],
      text: 'SALE OFFER INSIDE',
      textColor: '#E80071',
      badgeColor: '#FDEBF4',
    },
    sentrySampleRate: 0.1,
    policies: [
      {
        title: 'Terms & Conditions',
        link: '/terms-conditions',
      },
      {
        title: 'Shipping Policy',
        link: '/shipping-policy',
      },
      {
        title: 'Cancellation policy',
        link: '/cancellation-policy',
      },
      {
        title: 'Privacy policy',
        link: '/privacy-policy',
      },
    ],
  },
};
