import { ApiHelper } from '@eyewa/utils/network';
import { logger } from '@eyewa/logger';

import { queryStringFromParams } from '@eyewa/utils/urls';
import { getDealsUrl } from '@eyewa/utils/network/urls';
import { FetchHomePageParams } from './types';
import { getHomePageParams } from './helper';
import { transformWidgetsData } from './transformer';

// interface ProductParams {
//   id: string,
//   skuId?: string,
// }

export const getHomePageWidgets = async (params: FetchHomePageParams) => {
  const url = getDealsUrl();
  const queryParams = {
    ...getHomePageParams(),
    ...params,
  };

  const queryString = queryStringFromParams(queryParams);

  try {
    const { data: { result } } = await ApiHelper(`${url}${queryString}`, 'get');

    if (!result) {
      throw new Error('"result" not found in home page widgets api -> data');
    }
    return transformWidgetsData(result);
  } catch (e) {
    logger.error(e, 'Error fetching Home page widgets ');
    throw e;
  }
};

export const dummyy = () => {};
