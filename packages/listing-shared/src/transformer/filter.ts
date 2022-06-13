import { filterTypes } from '../constants/filter';
import { ListingFilter } from '../type/filter';

export const transformListingFilters = (data: any): ListingFilter[] => {
  if (!(data && Array.isArray(data))) {
    return [];
  }
  const transformedFilters: ListingFilter[] = [];
  data.forEach((filter) => {
    const filterData: any = {};
    const {
      key,
      type,
      facets,
      title,
      show_search_box: showSearch,
    } = filter;

    if (type && key && title && facets) {
      filterData.key = key;
      filterData.title = title;
      filterData.data = facets;
      filterData.showSearch = showSearch;

      switch (type) {
        case filterTypes.SINGLE_SELECT:
          filterData.type = filterTypes.SINGLE_SELECT;
          break;
        case filterTypes.MULTI_SELECT:
          filterData.type = filterTypes.MULTI_SELECT;
          break;
        case filterTypes.RANGE:
          filterData.type = filterTypes.RANGE;
          break;
        case filterTypes.CATEGORY:
          filterData.type = filterTypes.CATEGORY;
          break;
        case filterTypes.COLOR:
          filterData.type = filterTypes.COLOR;
          break;
        default:
          filterData.type = filterTypes.SINGLE_SELECT;
          break;
      }
      transformedFilters.push(filterData);
    }
  });

  return transformedFilters;
};

export const dummy = () => {};
