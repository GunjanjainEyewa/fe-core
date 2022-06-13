const path = require('path');

module.exports = {
  stories: [
    '../packages/UIComponents/**/*.story.(ts|md)x',
    '../packages/Review/**/*.story.(ts|md)x',
    '../packages/ReviewList/**/*.story.(ts|md)x',
    '../packages/product/**/*.story.(ts|md)x',
    '../packages/product-card-desktop/**/*.story.(ts|md)x',
    '../packages/ImageViewer/**/*.story.(ts|md)x',
    '../packages/image-viewer-desktop/**/*.story.(ts|md)x',
    '../packages/image-viewer-shared/**/*.story.(ts|md)x',
    '../packages/ImageRail/**/*.story.(ts|md)x',
    '../packages/ReviewFilters/**/*.story.(ts|md)x',
    '../packages/combo-products/**/*.story.(ts|md)x',
    '../packages/size-chart/**/*.story.(ts|md)x',
    '../packages/size-chart-desktop/**/*.story.(ts|md)x',
    '../packages/personal-coupons/**/*.story.(ts|md)x',
    '../packages/product-image-desktop/**/*.story.(ts|md)x',
    '../packages/delivery-desktop/**/*.story.(ts|md)x',
    '../packages/review-card-shared/**/*.story.(ts|md)x',
    '../packages/review-card-desktop/**/*.story.(ts|md)x',
    '../packages/intl/**/*.story.(ts|md)x',
    '../packages/intl-shared/**/*.story.(ts|md)x',
    '../packages/pdp-sdk/**/*.story.(ts|md)x',
    '../packages/product-card-carousel/**/*.story.(ts|md)x',
    '../packages/price-filter/**/*.story.(ts|md)x',
    '../packages/price-filter-shared/**/*.story.(ts|md)x',
    '../packages/art-widget-desktop/**/*.story.(ts|md)x',
    '../packages/prive/**/*.story.(ts|md)x',
    '../packages/prive-shared/**/*.story.(ts|md)x',
    '../packages/variant-selector/**/*.story.(ts|md)x',
    '../packages/variant-selector-shared/**/*.story.(ts|md)x',
    '../packages/pro-registration/**/*.story.(ts|md)x',
    '../packages/utils/**/*.story.(ts|md)x'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-controls', 'storybook-addon-designs', 'storybook-addon-emotion-theme/dist/register'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      fs: path.resolve(__dirname, 'fsMock.js'),
    };
    return config;
  },
  parameters: {
    controls: { expanded: true },
  },
};
