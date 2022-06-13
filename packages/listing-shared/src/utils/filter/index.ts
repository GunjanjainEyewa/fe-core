import { filterTypes } from '../../constants/filter';

export const getKeyById = (id: string, filterList: any[] = [], key: string) => {
  if (!filterList || !Array.isArray(filterList) || !key || !id) {
    return '';
  }
  const selectedFilter = filterList.find((filter) => filter?.id === id);
  return selectedFilter?.[key] || '';
};

export const getDataForCategory = (filterValue: string, filter: any) => {
  if (!filterValue || typeof filterValue !== 'string') {
    return [];
  }
  const data = filterValue?.split(',')?.map((filterItem: any) => {
    const value = filterItem;
    return {
      id: value,
      depth: getKeyById(value, filter?.data, 'depth'),
      parentId:
        getKeyById(value, filter?.data, 'parent_id')
        || getKeyById(value, filter?.data, 'parentId'),
      name: getKeyById(value, filter?.data, 'name'),
    };
  });
  return data || [];
};

const getValueForFilterData = (filterValue: string, filter: any) => {
  const data = {
    id: filterValue || '',
    name: getKeyById(filterValue, filter?.data, 'name'),
  };
  return data;
};

const appendParam = (str: string, param: string = '&') => {
  let value = str;
  if (value.length > 1) {
    value += param;
  }
  return value;
};

export function createActiveFilterObjectFromURL(
  filterList: any[] = [],
  query: string,
) {
  const filterObject: any = {};
  if (!query) {
    return filterObject;
  }
  const queryString = query.substr(1);
  const queryParams = queryString.split('&');
  queryParams.forEach((queryParam) => {
    const [key, value] = queryParam.split('=');
    if (key && value) {
      filterObject[key] = value;
    }
  });
  if (filterList && Array.isArray(filterList)) {
    filterList.forEach((filter) => {
      const { key, type, title } = filter || {};
      if (filterObject[key]) {
        const filterValue = filterObject[key];
        filterObject[key] = {
          type,
          title,
        };
        let data = {};
        switch (type) {
          case filterTypes.SINGLE_SELECT:
            data = getValueForFilterData(filterValue, filter);
            break;
          case filterTypes.RANGE: {
            const [min, max] = filterValue.split('-');
            data = {
              min,
              max,
            };
            break;
          }
          case filterTypes.CATEGORY:
            data = getDataForCategory(filterValue, filter);
            break;
          default:
            data = filterValue?.split(',')?.map((filterItem: any) => {
              const value = filterItem;
              return getValueForFilterData(value, filter);
            });
            break;
        }
        filterObject[key].data = data;
      }
    });
  }
  return filterObject;
}

export function getUrlStringFromSelectedFilter(
  selectedFilter: any = {},
  sort: string = '',
) {
  if (!selectedFilter) {
    return '';
  }
  const filterKeys = Object.keys(selectedFilter) || [];
  if (filterKeys.length <= 0) {
    if (sort && typeof sort === 'string') {
      return `?sort=${sort}`;
    }
    return '';
  }
  let str = '?';
  filterKeys.forEach((key) => {
    const filterValue = selectedFilter[key];
    if (filterValue) {
      const { type, data } = filterValue;
      if (type && data) {
        switch (type) {
          case filterTypes.SINGLE_SELECT:
            if (data.id) {
              str = appendParam(str);
              const value = `${data.id}`;
              str += `${key}=${value}`;
            }
            break;
          case filterTypes.RANGE:
            if (data.min || data.max) {
              str = appendParam(str);
              const minAndmaxString = `${data.min || 0}-${data.max || 0}`;
              str += `${key}=${minAndmaxString}`;
            }
            break;
          default:
            if (Array.isArray(data)) {
              const validIds: any[] = [];
              data.forEach((dataItem) => {
                if (dataItem.id) {
                  validIds.push(dataItem.id);
                }
              });
              str = appendParam(str);
              if (validIds.length > 0) {
                const categroryValueString = validIds.join(',');
                str += `${key}=${categroryValueString}`;
              }
            }
            break;
        }
      } else if (key === 'sort') {
        if (str.indexOf('sort=') < 0) {
          str = appendParam(str);
          if (sort) {
            str += `${key}=${sort}`;
          } else {
            str += `${key}=${filterValue}`;
          }
        }
      } else if (key === 'page_no') {
        str = appendParam(str);
        str += `page_no=${filterValue}`;
      } else {
        str = appendParam(str);
        str += `${key}=${filterValue}`;
      }
    }
  });

  if (str.indexOf('sort=') < 0 && sort && typeof sort === 'string') {
    str = appendParam(str);
    str += `sort=${sort}`;
  }

  return str;
}


export function getApiRequestObject(url: string) {
  const filterObject: {[key: string]: string} = {};
  if (!url || typeof url !== 'string') {
    return filterObject;
  }
  try {
    const queryString = url.substr(1);
    const queryParams = queryString.split('&');
    queryParams.forEach((queryParam) => {
      const [key, value] = queryParam.split('=');
      /* we have a check for categoryId as the backend doesn't understand categoryId,
       * but our application works on categoryId.
       */
      if (key && value) {
        if (key === 'categoryId') {
          filterObject.category_id = value;
        } else if (key === 'page_no') {
          filterObject.pageNumber = value;
        } else {
          filterObject[key] = value;
        }
      }
    });
  } catch (error) {
    return filterObject;
  }
  return filterObject;
}
