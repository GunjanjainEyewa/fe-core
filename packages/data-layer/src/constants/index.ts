export enum pageTypes {
  PRODUCT = 'Product Detail Page',
  SEARCH_SUGGESTIONS = 'Search Suggestions Page',
  HOME = 'Nykaa : Home Page',
  CATEGORY = 'Category Page',
  SEARCH_LISTING = 'Search Page',
  PRO_INTRO = 'Pro Intro',
}


export enum pageNamePrefix {
  PRODUCT = 'Nykaa : product page: ',
  ALL_REVIEW_IMAGE_GRID ='Nykaa: AllReviewPage: ImageGrid',
  HOME = 'Nykaa : Home Page',
  CATEGORY = 'Nykaa',
  OFFER_PAGE= 'offer page'
}

export enum listingPageTypes {
  CATEGORY = 'category',
  OFFER_LISTING = 'Offer Listing'
}

// ? Picked up these from nykaa_fe
export const events = {
  ADD_TO_CART_CLICK: 'addToCartClick',
  ADD_TO_CART_SUCCESS: 'addToCartSuccess',
  ADD_TO_WISHLIST_SUCCESS: 'addToWishlistSuccess',
  PRODUCT_PAGE_VIEW_CLIENT: 'productPageViewClient',
  USER_DATA_FETCH: 'userDataFetched',
  USER_LOGOUT: 'userLoggedout',
  NOTIFY_ME: 'notifyMe',
  GAMOOGA_CART_SUCCESS: 'gamoogaCartSuccess',
  VARIANT_CHANGE_ON_PD: 'variantChangePD',
  RATE_PRODUCT_CLICK: 'rateProductClick',
  REMOVE_ROM_WISHLIST: 'removeFromWishlist',
  REVIEW_IMAGE_CLICK: 'reviewImageClick',
  REVIEW_FILTER_SELECTED: 'filterSelected',
  REVIEW_SORT_SELECTED: 'sortSelected',
  IMAGE_GRID_PAGE: 'imageGridPage',
  VIEW_SIMILAR_CLICK: 'viewSimilarClick',
  OFFERS_TAG_CLICK: 'offersTagClick',
  ALL_SHADES_CLICK: 'allShadesClick',
  REVIEW_IMAGE_CLOSE: 'reviewImageClose',
  GUIDE_CLICK: 'guideClick',
  PRODUCT_VIDEO_PLAY: 'productVideoPlay',
};


export enum PageRootTypes {
  SEARCH = 'search',
  CAV_PD = 'cav_pd',
  CAB_PD = 'cab_pd',
  NAV = 'nav_',
  OFFER_PDP = 'pdp',
}


export enum SiteNavigation {
  SEARCH = 'Search',
  PRODUCT = 'Product Page',
  CATEGORY = 'Category',
}

export enum siteSubNavigationPrefix {
  SEARCH = 'Search:',
  PRODUCT_CAV = 'Product Page : Widget : Customers Also Viewed',
  PRODUCT_CAB = 'Product Page : Widget : Customers Also Bought',
  CATEGORY = 'Category : ' // TODO: MSR-1499 - siteSubNavigationLogic
}

export const FEATURED = 'Featured';
export const NOT_FEATURED = 'NotFeatured';

export const SHARE_PRODUCT = 'shareProduct';

export const defaultDataLayer = () => ({
  isMobile: true,
  gaId: process.env.GA_ID,
  optimizeId: process.env.OPTIMIZE_ID,
  newStack: true,
});

export enum PageSource {
  SEARCH = 'Search',
  BANNER = 'Banner',
  MEGA_MENU = 'MM',
  WIDGETS = 'Widget',
  OTHERS = 'Others',
  CAB_WIDGET = 'widget: customeralsoviewed',
  CAV_WIDGET = 'widget: customeralsoviewed',
  Product = 'product',
  CATEGORY = 'Listing',
  QUERY = 'query',
  OFFER_PAGE = 'mweb:offer page',
  IMAGE_POPUP = 'ImagePopup',
  VIDEO_POPUP = 'VideoPopup',
}

export const PLP_SUB_NAV_SUFFIX = 'mega-menu';
