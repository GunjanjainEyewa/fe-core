export enum ROUTES {
  PRODUCT,
  AUTH,
  WISHLIST_IDS,
  CAV,
  CAB,
  CHECK_DELIVERY,
  CONFIG_FLAGS,
  SEARCH_SUGGESTIONS,
  TRENDING_SEARCHES,
  GATEWAY,
  OFFERS,
  REVIEW_PHOTOS,
  LIKE_REVIEW,
  NAVIGATION,
  LOGOUT,
  QNA,
  NEWS_LETTER_SUBSCRIPTION,
  GET_VARIANTS,
  GRAPH_API,
  FB_API,
  GOOGLE_API,
  LOGIN,
  PRODUCT_LIST,
  DEVICE_TRACKING_SERVICE,
  CATEGORY_PRICE_LIST,
  FOOTER_CATEGORIES,
  ABOUT_US,
  SEARCH_LISTING,
  OFFER_PRODUCT_LIST,
  LOGOUT_ALL,
  COUPONS_OFFERS,
  DESKTOP_NAVIGATION,
  COMBO_PRODUCT,
  SP,
  PLP_WIDGETS,
  USER_DETAILS,
  PRIVE_DETAILS,
  REWARD_HISTORY,
  LOYALITY_SERVICE
}

export const urls: { [key: string]: string } = {
  [ROUTES.PRODUCT]: '/app-api/index.php/products/details',
  [ROUTES.AUTH]: '/ReactConfig.php',
  [ROUTES.WISHLIST_IDS]: '/app-api/index.php/customer/get_wishlist_data',
  [ROUTES.CAV]: '/app-api/index.php/products/customer_also_viewed_gludo',
  [ROUTES.CAB]: '/app-api/index.php/products/customer_also_bought_gludo',
  [ROUTES.CHECK_DELIVERY]: '/custom/index/enterpincode',
  [ROUTES.CONFIG_FLAGS]: '/app-api/index.php/react/config_flags',
  [ROUTES.SEARCH_SUGGESTIONS]: '/gludo/searchSuggestions',
  [ROUTES.TRENDING_SEARCHES]: '/search/trending',
  [ROUTES.GATEWAY]: '/gateway-api',
  [ROUTES.LIKE_REVIEW]: '/advancereview/index/like',
  [ROUTES.OFFERS]: '/gateway-api/offer/api/v1/product/{productId}/offer',
  [ROUTES.NAVIGATION]: '/getNavigation.php',
  [ROUTES.LOGOUT]: '/customer/account/logout/',
  [ROUTES.QNA]: '/custom/index/getqna',
  [ROUTES.NEWS_LETTER_SUBSCRIPTION]: '/newsletter/subscriber/customnew',
  [ROUTES.GET_VARIANTS]: '/gludo/listVariants',
  [ROUTES.GRAPH_API]: 'https://graph.facebook.com/me?fields=name,email',
  [ROUTES.FB_API]: '/app-api/index.php/user/sec_login_fb',
  [ROUTES.GOOGLE_API]: '/app-api/index.php/user/sec_login_google',
  [ROUTES.LOGIN]: '/customer/account/ajaxLogin/',
  [ROUTES.PRODUCT_LIST]: '/app-api/index.php/products/list',
  [ROUTES.DEVICE_TRACKING_SERVICE]: '/trk/device',
  [ROUTES.CATEGORY_PRICE_LIST]: '/app-api/index.php/categories/price_listing',
  [ROUTES.FOOTER_CATEGORIES]: '/app-api/index.php/products/footer_categories',
  [ROUTES.ABOUT_US]: '/app-api/index.php/categories/dataForAboutSection',
  [ROUTES.SEARCH_LISTING]: '/api/search.list',
  [ROUTES.OFFER_PRODUCT_LIST]: '/app-api/index.php/products/list/offer',
  [ROUTES.LOGOUT_ALL]: '/app-api/index.php/customer/logout_from_all_session',
  [ROUTES.COUPONS_OFFERS]: '/gateway-api/offer/api/v1/product/customer/offer',
  [ROUTES.DESKTOP_NAVIGATION]: '/app-api/index.php/react/navigation',
  [ROUTES.COMBO_PRODUCT]: '/gateway-api/apis/v2/product.getRelatedBundles',
  [ROUTES.PLP_WIDGETS]: '/app-api/index.php/products/widgets_on_plp',
  [ROUTES.USER_DETAILS]: '/app-api/index.php/user/user_details',
  [ROUTES.REWARD_HISTORY]: '/gateway-api/vault/transaction/info',
  [ROUTES.LOYALITY_SERVICE]: '/gateway-api/loyalty/customer/customer_tier_info',
  [ROUTES.SP]: '/sp',
};

export const getAPIHost = () => (__SERVER__ ? process.env.API_INTERNAL_HOST : process.env.API_HOST);

export const getUrl = (uri: ROUTES): string => `${getAPIHost() || ''}${urls[uri]}`;

export const getGatewayUrl = () => (__SERVER__ ? process.env.GATEWAY_API_INTERNAL : `${process.env.API_HOST || ''}/gateway-api`);

export const getUrlPrefixed = (
  requestPath: string,
  clientPrefix: string = '',
  serverPrefix: string = '',
) => {
  if (__SERVER__) {
    return `${serverPrefix}${requestPath}`;
  }
  return `${clientPrefix}${requestPath}`;
};


export function getDealsEndpoint() {
  if (__SERVER__) {
    return process.env.DEALS_INTERNAL_ENDPOINT;
  }

  return process.env.DEALS_ENDPOINT;
}
export const getDealsUrl = () => (`${getDealsEndpoint()}/inventory/data/json/`);
