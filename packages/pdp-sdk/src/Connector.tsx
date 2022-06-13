
// @ts-ignore
import { frontloadConnect } from 'react-frontload';
import ApiHelper from '@eyewa/network';
import { logger } from '@eyewa/logger';

// components
import Container from './components/Container';

// components
import transformWidgetsData from './store/transformers';
import { fetchingStart, fetchingSuccess, fetchingError } from './store/actions';

// defs
import { AppProps } from './types/AppProps';

const URL = '/rest/V3/product/details/id/<product-id>?domain=';

const callApi = async ({
  platform,
  productData,
  apiHost,
  dispatch,
  isError,
  isFetching,
  isNotFound,
  routeId,
  widgetsEnabled,
}: AppProps) => {
  if (isError || isFetching || isNotFound) {
    return;
  }

  if (routeId === productData.id) {
    return;
  }

  dispatch(fetchingStart());

  const url = apiHost + URL.replace('<product-id>', routeId) + platform;
  await ApiHelper(url, {})
    .then(({ data }: any) => {
      const { wData, metadata } = data.response;

      const refinedData = transformWidgetsData({
        wData, metadata, platform, widgetsEnabled,
      });
      dispatch(fetchingSuccess(refinedData));
    })
    .catch((err: Error) => {
      logger.error(`Error occurred while fetching data: ${err.message}`, 'PDP-SDK');
      dispatch(fetchingError());
    });
};

export default frontloadConnect(callApi)(Container);
