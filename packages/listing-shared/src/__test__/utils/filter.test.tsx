import {
  createActiveFilterObjectFromURL,
  getKeyById,
  getUrlStringFromSelectedFilter,
  getDataForCategory,
  getApiRequestObject,
} from '../../utils/filter';
const filterList = [
  {
    key: 'category_filter',
    title: 'Category',
    type: 'category-filter',
    data: [
      {
        id: '228',
        depth: '2',
        parent_id: '13',
        name: 'Foundation',
      },
    ],
    show_search_box: false,
  },
  {
    key: 'star_rating_filter',
    title: 'Avg Customer Rating',
    type: 'single-select',
    data: [
      {
        id: '4',
        name: '4 stars & above',
        count: '2',
      },
    ],
    show_search_box: false,
  },
  {
    key: 'range',
    title: 'Range',
    type: 'range-filter',
    data: {
      min: 200,
      max: 400,
    },
    show_search_box: false,
  },
  {
    key: 'color_filter',
    title: 'Color',
    type: 'color-filter',
    data: [
      {
        id: '10801',
        name: 'brown',
        color_code: ['#00CD66'],
        count: '2',
      },
      {
        id: '13915',
        name: 'Green',
        color_code: ['#00CD66'],
        count: '2',
      },
    ],
    show_search_box: false,
  },
];

const input =
  '?page_no=1&q=lakme&searchType=history&range=200-400&star_rating_filter=4&color_filter=10801,13915&category_filter=228';
const output = {
  color_filter: {
    data: [
      { id: '10801', name: 'brown' },
      { id: '13915', name: 'Green' },
    ],
    title: 'Color',
    type: 'color-filter',
  },
  star_rating_filter: {
    data: { id: '4', name: '4 stars & above' },
    title: 'Avg Customer Rating',
    type: 'single-select',
  },
  category_filter: {
    type: 'category-filter',
    title: 'Category',
    data: [{ id: '228', depth: '2', parentId: '13', name: 'Foundation' }],
  },
  range: {
    type: 'range-filter',
    title: 'Range',
    data: { min: '200', max: '400' },
  },
  q: 'lakme',
  searchType: 'history',
  page_no: '1',
};

const data = [
  {
    id: '604',
    name: 'Lakme',
    count: '3',
  },
];

describe('Test for Active Filters List', () => {
  test('should return empty object when Active filters list emptyArray', () => {
    expect(createActiveFilterObjectFromURL([], '')).toEqual({});
  });
  test('should return empty object when Active filters list null', () => {
    expect(createActiveFilterObjectFromURL(null, '')).toEqual({});
  });
  test('should return empty object when Active filters list undefined', () => {
    expect(createActiveFilterObjectFromURL(undefined, '')).toEqual({});
  });
  test('should return empty object when query params is empty', () => {
    expect(createActiveFilterObjectFromURL(filterList, '')).toEqual({});
  });
  test('should return empty object when query params is empty', () => {
    expect(createActiveFilterObjectFromURL(filterList, null)).toEqual({});
  });
  test('should return transform object when Active filters list provided', () => {
    expect(createActiveFilterObjectFromURL(filterList, input)).toEqual(output);
  });
});

describe('Test for Get Key By Id', () => {
  test('should return empty string when filters is empty', () => {
    expect(getKeyById('12', [], 'key')).toEqual('');
    expect(getKeyById('12', null, 'key')).toEqual('');
    expect(getKeyById('604', data, 'n')).toEqual('');
    expect(getKeyById('12', undefined, 'key')).toEqual('');
  });
  test('should return empty string when id is empty', () => {
    expect(getKeyById('', data, 'key')).toEqual('');
  });
  test('should return empty string when key is empty', () => {
    expect(getKeyById('id', data, '')).toEqual('');
  });
  test('should return string when filters list provided', () => {
    expect(getKeyById('604', data, 'name')).toEqual('Lakme');
  });
});

const selectedFilter = output;
const outputString =
  '?color_filter=10801,13915&star_rating_filter=4&category_filter=228&range=200-400&q=lakme&searchType=history&page_no=1&sort=sort';

describe('Test for url string for selected filter', () => {
  test('should return empty string when selected filters list emptyArray', () => {
    expect(getUrlStringFromSelectedFilter([], '')).toEqual('');
  });
  test('should return empty string when selected filters list null', () => {
    expect(getUrlStringFromSelectedFilter(null, '')).toEqual('');
  });
  test('should return empty string when selected filters list undefined', () => {
    expect(getUrlStringFromSelectedFilter(undefined, '')).toEqual('');
  });
  test('should return transform string when selected filters list provided', () => {
    expect(getUrlStringFromSelectedFilter(selectedFilter, 'sort')).toEqual(
      outputString
    );
  });
});

const categoryFilter = {
  key: 'category_filter',
  title: 'Category',
  type: 'category-filter',
  data: [
    {
      id: '228',
      depth: '2',
      parent_id: '13',
      name: 'Foundation',
    },
  ],
  show_search_box: false,
};
const outputData = [
  { id: '228', depth: '2', parentId: '13', name: 'Foundation' },
];

describe('Test for category data', () => {
  test('should return empty array when value is null', () => {
    expect(getDataForCategory(null, {})).toEqual([]);
  });
  test('should return empty array when value is undefined', () => {
    expect(getDataForCategory(undefined, {})).toEqual([]);
  });
  test('should return empty array when value is object', () => {
    expect(getDataForCategory({}, {})).toEqual([]);
  });
  test('should return array when filters list provided', () => {
    expect(getDataForCategory('228', categoryFilter)).toEqual(outputData);
  });
});

const url =
  '?sort=popularity&ptype=brand&id=596&algo=ui_with_cta_mixed&instock_size_filter=20699&discount_range_filter=30-*';
const filterData = {
  algo: 'ui_with_cta_mixed',
  discount_range_filter: '30-*',
  id: '596',
  instock_size_filter: '20699',
  ptype: 'brand',
  sort: 'popularity',
};

describe('Test for api request object', () => {
  test('should return empty object when url is null', () => {
    expect(getApiRequestObject(null)).toEqual({});
  });
  test('should return empty object when url is undefined', () => {
    expect(getApiRequestObject(undefined)).toEqual({});
  });
  test('should return empty object when url is array', () => {
    expect(getApiRequestObject([])).toEqual({});
  });
  test('should return object when url is provided', () => {
    expect(getApiRequestObject(url)).toEqual(filterData);
  });
});
