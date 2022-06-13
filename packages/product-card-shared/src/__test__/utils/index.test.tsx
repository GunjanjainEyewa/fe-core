import { getFeaturedString, getPageSource } from '../../utils';

const pageLocation = {
  pageType: 'Search',
  listingPageType: 'search',
  id: 'id',
};
const variantType = 'shades';
const productId = '';
const platform = __PLATFORM__;

describe('GET FEATURED STRING', () => {
  test('it should return featured when it receives true', () => {
    expect(getFeaturedString(true)).toMatch('Featured');
  });
  test('it should return not featured when it receives false', () => {
    expect(getFeaturedString(false)).toMatch('NotFeatured');
  });
});

describe('GET PAGE SOURCE', () => {
  describe('it should return correct output when it receives correct params', () => {
    test('param isPreview false', () => {
      const isPreview = false;
      const output = `${platform}:${pageLocation.pageType}:${pageLocation.listingPageType}:${pageLocation.id}`;
      expect(
        getPageSource({ pageLocation, variantType, productId, isPreview })
      ).toEqual(output);
    });
    test('param isPreview true', () => {
      const isPreview = true;
      const output = `${platform}:${pageLocation.pageType}:${variantType}:${pageLocation.listingPageType}:${pageLocation.id}`;
      expect(
        getPageSource({ pageLocation, variantType, productId, isPreview })
      ).toEqual(output);
    });
  });
  test('it should return empty string when it receives incorrect params type', () => {
    const isPreview = false;
    //incorrect pageType
    expect(
      getPageSource({ pageLocation, variantType, productId, isPreview })
    ).toMatch('');
    //undefined pageLocation
    expect(
      getPageSource({
        pageLocation: undefined,
        variantType,
        productId,
        isPreview,
      })
    ).toMatch('');
    //empty object pageLocation
    expect(
      getPageSource({
        pageLocation: {},
        variantType,
        productId,
        isPreview,
      })
    ).toMatch('');
    //null object pageLocations
    expect(
        getPageSource({
          pageLocation: null,
          variantType,
          productId,
          isPreview,
        })
      ).toMatch('');
  });
});
