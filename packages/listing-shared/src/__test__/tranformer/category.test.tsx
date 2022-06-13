import { transformProductListingData } from '../../category/store/transformer';
import { inputData as inputProduct, outputData as products } from './product.test';
import { inputData as inputFilter, output as filters } from './filter.test';

const input = {
  category_name: 'category',
  meta_description: 'meta',
  meta_keywords: 'key',
  meta_title: 'title',
  products: inputProduct,
  filters: inputFilter,
  sort: 'name',
  total_found: 10,
  stop_further_call: 0,
  canonical: 'canonical',
  type: 'type',
  product_count: 10,
};
const output = {
  artBannerVideo: "",
  artContent: {},
  artImage: "",
  artPos: 0,
  artTitle: "",
  artURL: "",
  artVideoImage: "",
    categoryName: 'category',
    metaDescription: 'meta',
    metaKeywords: 'key',
    canonical: 'canonical',
    metaTitle: 'title',
    sort: 'name',
    totalFound : 10,
    filters,
    stopFurtherCall: false,
    listingType: 'type',
    count: 10,
    products,
    url: '',
    linkText: '',
}
const defaultOutput: any = {
  artBannerVideo: "",
  artContent: {},
  artImage: "",
  artPos: 0,
  artTitle: "",
  artURL: "",
  artVideoImage: "",
  categoryName: '',
  metaDescription: '',
  metaKeywords: '',
  canonical: '',
  metaTitle: '',
  sort: '',
  totalFound : 0,
  filters: [],
  linkText: '',
  stopFurtherCall: false,
  listingType: '',
  count: 0,
  products: [],
  url: '',
}
describe('Test for category Transformer', () => {
  test('should return transform object when list is empty object', () => {
    expect(transformProductListingData({})).toEqual(defaultOutput);
  });
  test('should return empty object when data is null', () => {
    expect(transformProductListingData(null)).toEqual({});
  });
  test('should return empty object when data is undefined', () => {
    expect(transformProductListingData(undefined)).toEqual({});
  });
  test('should return transform object when list provided', () => {
    expect(transformProductListingData(input)).toEqual(output);
  });
});
