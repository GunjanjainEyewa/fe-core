import { transformRequest } from '../../category/store/helpers';
const input = {
  pro: false,
  filter_format: 'v2',
  app_version: null,
  client: 'react',
  pageNumber: 1,
  sort: 'popularity',
  categoryId: '9127',
  isPro: false,
  ptype: 'brand',
  id: '596',
  instock_size_filter: '20725',
  root: 'nav_brand,brand_menu,top_brands,Maybelline%20New%20York',
  algo: 'ui_with_cta_mixed',
  groupId: '1',
};

const output = {
  "catalog_tag_filter": true,
  client: 'react',
  filter_format: 'v2',
  category_id: '9127',
  instock_size_filter: '20725',
  page_no: 1,
  sort: 'popularity',
};

const defaultOutput = {
  catalog_tag_filter: true,
  client: '',
  filter_format: '',
};
describe('filter category params', () => {
  test('should return category params when we pass params', () => {
    expect(transformRequest(input)).toEqual(output);
  });
  test('should return empty object when invalid params pass', () => {
    expect(transformRequest(null)).toEqual({});
    expect(transformRequest(undefined)).toEqual({});
    expect(transformRequest({})).toEqual(defaultOutput);
  });
});
