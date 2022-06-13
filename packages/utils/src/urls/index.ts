interface QueryParamsObject {
  [key: string]: string;
}

export const queryStringFromParams = (params: any) => {
  if (!params) {
    return '';
  }

  if (typeof params !== 'object' || Array.isArray(params)) {
    throw new Error(`Expected "params" to be an "object" got ${params}`);
  }

  let queryString = '';

  const keys = Object.keys(params);

  if (!(keys.length > 0)) {
    return queryString;
  }

  queryString = '?';
  const queryStringPairs: string[] = [];
  keys.sort().forEach((key: string) => {
    queryStringPairs.push(`${key}=${encodeURIComponent(params[key])}`);
  });

  return `${queryString}${queryStringPairs.join('&')}`;
};

export const queryStringObjectFromUrl = (url: string = '') => {
  const queryString = url.split('?')[1];
  const params = new URLSearchParams(queryString);
  const result: QueryParamsObject = {};
  params.forEach((val, key) => {
    result[key] = val;
  });
  return result;
};

interface UpdatedUrlProps {
  url: string,
  slug?: string,
  parentId?: string,
  childId?: string,
}

export const getUpdatedUrl = ({
  url, slug, parentId, childId,
}: UpdatedUrlProps) => {
  let finalURL = url;
  if (slug) {
    finalURL = finalURL.replace('{slug}', slug);
  }
  if (parentId) {
    finalURL = finalURL.replace('{id}', parentId);
  }
  if (childId) {
    finalURL = finalURL.replace('{childId}', childId);
  }

  return finalURL;
};

export const getUrlWithParamsWithoutHost = (url = '', params = '') => {
  if (!url) {
    return '';
  }
  const hostIndex = url.indexOf('.com/');
  let finalURL = url;
  if (hostIndex > -1) {
    finalURL = url.substr(hostIndex + 5);
  }
  if (params) {
    const paramSeparator = (finalURL.indexOf('?') > -1) ? ('&') : ('?');
    finalURL += paramSeparator + params;
  }
  return finalURL;
};


export const appendQueryStringToUrl = (url: string, queryString: any = '') => {
  if (!url) {
    throw new Error('"url" can not be empty');
  }

  const queryStringExists = (url.indexOf('?') > -1);
  const modifiedUrl = `${url}${(queryStringExists) ? '&' : '?'}${queryString}`;

  return modifiedUrl;
};


interface RecommendationUrlProps {
  slug: string;
  childId?: string;
  root: string;
}

export const getRecommendationsUrl = ({
  slug,
  childId,
  root,
}: RecommendationUrlProps) => {
  const queryString = `root=${root}${childId ? `&skuId=${childId}` : ''}`;
  const productUrl = `/${appendQueryStringToUrl(slug, queryString)}`;

  return productUrl;
};

export const getListProductUrl = (
  {
    slug, id, parentId, position,
  }:
  {
    slug: string,
    id: string,
    parentId: string,
    position: number,
  },
) => {
  let queryString = `productId=${parentId}`;
  if (parentId !== id) {
    queryString += `&skuId=${id}`;
  }
  if (position) {
    queryString += `&pps=${position}`;
  }
  const productUrl = `/${appendQueryStringToUrl(slug, queryString)}`;
  return productUrl;
};


export const getQueryObjectFromUrl = (url: string) => {
  if (
    (!url)
    || !(url.length > 1)
    || !(url.indexOf('?') >= 0)
  ) {
    // * > 1 because we expect it to contain a "?"
    throw new Error('"url" cannot be empty');
  }

  const queryObject: { [key: string]: any } = {};

  const queryString = url.split('?')[1];
  const parameters = queryString.split('&');

  parameters.forEach((parameter: string) => {
    const [key, value] = parameter.split('=');

    if (key && value) {
      // TODO: handle case when value is false||0
      queryObject[key] = value;
    }
  });

  return queryObject;
};

// can be moved as part of offer listing page
// export const getOfferListingUrl = (offerId: number, rootParam: string) => (
//   `${pages.OFFER_PRODUCTS}/${offerId}?${OFFER_ROOT}=${rootParam}`
// );

export const getSubPaths = (pathname: string): string[] => {
  let subNavigationArray: string[] = [];

  if (pathname && typeof pathname === 'string') {
    const elements = pathname.split('/') || [];
    const filteredElements = elements.filter((element) => !!element);

    subNavigationArray = [...filteredElements];
  }

  return subNavigationArray;
};
