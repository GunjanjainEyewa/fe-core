import { transformListingFilters } from '../../transformer/filter';

export const inputData = [
    {
      key: 'brand_filter',
      title: 'Brand',
      type: 'multi-select',
      facets: [
        {
          id: '604',
          name: 'Lakme',
          count: '3',
        },
      ],
      show_search_box: false,
    },
    {
      key: 'discount_range_filter',
      title: 'Discount',
      type: 'single-select',
      facets: [
        {
          id: '30-*',
          name: '30% and above',
          count: '2',
        },
      ],
      show_search_box: false,
    },
    {
      key: 'color_filter',
      title: 'Color',
      type: 'color-filter',
      facets: [
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
 export const output = [
    {
      key: 'brand_filter',
      title: 'Brand',
      type: 'multi-select',
      data: [
        {
          id: '604',
          name: 'Lakme',
          count: '3',
        },
      ],
      showSearch: false,
    },
    {
      key: 'discount_range_filter',
      title: 'Discount',
      type: 'single-select',
      data: [
        {
          id: '30-*',
          name: '30% and above',
          count: '2',
        },
      ],
      showSearch: false,
    },
    {
      key: 'color_filter',
      title: 'Color',
      type: 'color-filter',
      data: [
        {
          id: '13915',
          name: 'Green',
          color_code: ['#00CD66'],
          count: '2',
        },
      ],
      showSearch: false,
    },
  ];
  
  describe("Test for Filters Transformer", () => {
    test('should return empty array when filter list emptyArray', () => {
      expect(transformListingFilters([])).toEqual([]);
    });
    test('should return empty array when filter list null', () => {
      expect(transformListingFilters(null)).toEqual([]);
    });
    test('should return empty array when filter list undefined', () => {
        expect(transformListingFilters(undefined)).toEqual([]);
      });
    test('should return transform array when filter list provided', () => {
      expect(transformListingFilters(inputData)).toEqual(output);
    });
  });