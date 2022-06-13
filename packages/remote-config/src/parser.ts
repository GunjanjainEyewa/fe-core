import { RemoteConfig, Configurations, Switches } from './types';

const ACTIVE_STRING = 'active';
const VALUE_ONE_STRING = '1';

function extractReviewFormStatus(switches: any) {
  if (switches?.ratingReviews?.enableNewReviewForm?.status) {
    return true;
  }
  return false;
}

const getCspHeaders = (directives : string[] = []) => {
  if (directives && Array.isArray(directives)) {
    return `${directives.join(';')};`;
  }
  return '';
};


export const parseConfig = (configDataFromRemote: any): RemoteConfig => {
  const { switches: rawSwitches, configs: rawConfigs } = configDataFromRemote;
  const switches: Switches = {
    showOffersOnPdp: rawSwitches.showOffersOnPdp === ACTIVE_STRING,
    showRewardPoints: rawSwitches.showRewardPoints === ACTIVE_STRING,
    showViewSimilar: rawSwitches.showViewSimilar === ACTIVE_STRING,
    newRatingForm: extractReviewFormStatus(rawSwitches),
    showDeliveryOnPd: !!rawSwitches.enableDeliverySectionOnPd?.status,
    internationalMode: rawSwitches.internationalMode === ACTIVE_STRING,
    redirectionList: rawSwitches.redirectionList || [],
    trackDeviceId: rawSwitches.trackDeviceId,
    pdPageBanners: rawSwitches.pdPageBanners || false,
    offerListingEnabled: rawSwitches.offerListingEnabled || false,
    appLinkEnabled: !!rawSwitches.footer?.appLinkEnabled,
    featuresEnabled: !!rawSwitches.footer?.featuresEnabled,
    socialLinksEnabled: !!rawSwitches.footer?.socialLinksEnabled,
    newsletterEnabled: !!rawSwitches.footer?.newsletterEnabled,
    helpCenterEnabled: !!rawSwitches.footer?.helpCenterEnabled,
    mobileNumberMapping: rawSwitches.mobileNumberMapping || false,
    showUserPortfolio: rawSwitches.showUserPortfolio || false,
    webOtpAutoRead: rawSwitches.webOtpAutoRead || false,
    vpEnabled: rawSwitches.vpEnabled || false,
    experimentV2Enabled: rawSwitches.experimentV2Enabled || false,
    loadInterFont: rawSwitches.loadInterFont || false,
    dwebPdpCustomVideo: rawSwitches.dwebPdpCustomVideo || false,
  };
  const configs: Configurations = {
    whitelistedDomains: rawConfigs.domains || [],
    customersAlsoBought: {
      algorithm: rawSwitches.customers_also_bought?.algo,
      status: rawSwitches.customers_also_bought?.status === VALUE_ONE_STRING,
    },
    customersAlsoViewed: {
      algorithm: rawSwitches.customers_also_viewed?.algo,
      status: rawSwitches.customers_also_viewed?.status === VALUE_ONE_STRING,
    },
    rewardPointsOnSignUp: rawConfigs.reward_points?.registration || 0,
    upiOffer: rawConfigs.upiOffer || { status: false },
    priceReveal: rawConfigs.priceReveal || { active: false, productEligibilityActive: false },
    trendingSearchesToShow: rawConfigs.autoSearch?.trendingSearch || 0,
    maxSearchHistoryCount: rawConfigs.autoSearch?.recentHistory || 0,
    storeOptions: rawConfigs.storeOptions || { status: false },
    contentPolicy: {
      status: rawConfigs.contentPolicy?.status || false,
      value: getCspHeaders(rawConfigs.contentPolicy?.value),
      userPercentage: rawConfigs.contentPolicy?.userPercentage,
      headerKey: rawConfigs.contentPolicy?.headerKey,
    },
    sortForListing: rawConfigs.sortForListing || [
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
    freeShipping: rawConfigs.freeShipping,
    homePage: rawConfigs.homePage || {
      initialInventories: 3,
      eagerLoadImages: 2,
      pageTypeSuffix: { status: false },
    },
    meta: rawConfigs.meta,
    guidedSearch: {
      userPercentage: rawConfigs.guidedSearch?.userPercentage || 0,
      status: rawConfigs.guidedSearch?.status || false,
    },
    searchSuggestionIcons: rawConfigs.searchSuggestionIcons || {},
    AB: rawConfigs.AB || {},
    appLinks: rawConfigs.footer.appLinks || {},
    features: rawConfigs.footer.features || {},
    socialLinks: rawConfigs.footer.socialLinks || {},
    helpCenter: rawConfigs.footer.helpCenter || {},
    VP: rawConfigs.VP || {},
    ABV2: rawConfigs.ABV2 || [],
    landingPageABConfig: rawConfigs.landingPageABConfig || {},
    plpPriceReveal: {
      status: rawConfigs?.plpPriceReveal?.status || false,
      categoryId: rawConfigs?.plpPriceReveal?.categoryId || [],
      text: rawConfigs?.plpPriceReveal?.text || '',
      textColor: rawConfigs?.plpPriceReveal?.textColor || '',
      badgeColor: rawConfigs?.plpPriceReveal?.badgeColor || '',
    },
    sentrySampleRate: rawConfigs?.sentrySampleRate || 0.1,
    policies: rawConfigs.footer.policies || [],
  };

  const transformedConfig: RemoteConfig = {
    switches,
    configs,
  };

  return transformedConfig;
};

export const dummy = true;
