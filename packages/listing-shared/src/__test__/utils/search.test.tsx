import {
  sanitizeQuery,
  filterParamsForSearch,
} from '../../search/store/helpers';

describe('sanitizeQuery', () => {
  test('should return string without == when replace with input is empty string', () => {
    expect(sanitizeQuery('filter=12&sort=23==', '')).toEqual('filter12&sort23');
  });
  test('should return string when replace with input is &', () => {
    expect(sanitizeQuery('filter=12&sort=23==', '&')).toEqual(
      'filter&12&sort&23&&'
    );
  });
  test('should return empty string when input string is empty', () => {
    expect(sanitizeQuery('', '')).toEqual('');
  });
});

const params = {
  discount_range_filter: '20-*',
  q: 'lakme',
  root: 'search',
  searchType: 'Manual',
  sort: 'name',
  sourcepage: 'home',
};
const groupId = '1';
const output = {
  customer_group_id: '1',
  discount_range_filter: '20-*',
  search: 'lakme',
  sort: 'name',
  pro: true,
  platform: 'desktop',
};
describe('filter params for search', () => {
  test('should return search params when we pass params', () => {
    expect(filterParamsForSearch(params, true, groupId, 'desktop')).toEqual(output);
  });
  test('should throw error when invalid params pass', () => {
    expect(() => {
      filterParamsForSearch(null, false, '','desktop');
    }).toThrow('params has to be of type object... passed: null');
    expect(() => {
      filterParamsForSearch(undefined, false,'', 'desktop');
    }).toThrow('params has to be of type object... passed: ');
  });
});
