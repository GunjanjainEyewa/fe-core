import { getUrl, ROUTES } from '@nykaa/utils/network/urls';
import { appendQueryStringToUrl } from '@nykaa/utils/urls';
import { ApiHelper } from '@nykaa/utils/network';
import { logger } from '@nykaa/logger';
import { transformNavigation } from './transformer';


export const getNavigation = async () => {
  const url = getUrl(ROUTES.NAVIGATION);

  try {
    const { data: { status, header }, data } = await ApiHelper(url, 'get');

    if (status !== 1) {
      throw new Error(`API failed ${data}`);
    }
    return transformNavigation(header);
  } catch (err) {
    logger.error(err, 'Error Fetching Navigation API');
    throw err;
  }
};

export const getDesktopNavigation = async () => {
  // const url = getUrl(ROUTES.DESKTOP_NAVIGATION);
  const url = '/app-api/index.php/react/navigation';
  const queryParams = new URLSearchParams();
  queryParams.append('forDevice', 'desktop');
  const urlWithQueryString = appendQueryStringToUrl(url, queryParams);


  try {
    const { data } = await ApiHelper(urlWithQueryString, 'get');

    // if (status !== 1) {
    //   throw new Error(`API failed ${data}`);
    // }
    return data;
    // return transformNavigation(header);
  } catch (err) {
    logger.error(err, 'Error Fetching Navigation API');
    throw err;
  }
};
