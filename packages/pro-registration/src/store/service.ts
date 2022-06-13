import { logger } from '@nykaa/logger';
import { getAPIHost } from '@nykaa/utils/network/urls';
import { ApiHelper } from '@nykaa/utils/network';
import { HttpMethods } from '@nykaa/utils/network/constants';
import { setPayload, transformAddress, transformUserInfo } from './transformer';
import {
  ERROR_IN_AUTO_ADDRESS_API,
  ERROR_IN_FETCH_PRO_USER_API,
  GET_ADDRESS_API_ENDPOINT,
  GET_PRO_USER_API_ENDPOINT,
  POST_PRO_USER_API_ENDPOINT,
  ERROR_IN_POST_PRO_USER_API,
  GET_DOCUMENT_API_ENDPOINT,
} from './constant';
import { convertToBase64 } from '../utils';

const additionalHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const getUserInfo = async () => {
  const apiHost: string = getAPIHost();
  const url = `${apiHost}${GET_PRO_USER_API_ENDPOINT}`;
  try {
    const { data } = await ApiHelper(`${url}`, HttpMethods.GET, {}, additionalHeaders);
    const { response } = data;
    if (!response) {
      throw new Error('Data not found in pro user api');
    }
    return transformUserInfo(response);
  } catch (error) {
    logger.error(error, `${ERROR_IN_FETCH_PRO_USER_API} :url=${url}`);
    return null;
  }
};

export const getAddresByPin = async (_pincode: string) => {
  const apiHost: string = getAPIHost();
  const url = `${apiHost}${GET_ADDRESS_API_ENDPOINT}`;
  const payload = new URLSearchParams({
    pincode: _pincode,
    source: 'react',
  });
  try {
    const { data } = await ApiHelper(`${url}`, HttpMethods.POST, payload, additionalHeaders);
    const { status, response } = data;
    if (status !== 'success') {
      throw new Error('Data is not updated for pro user api');
    }
    return transformAddress(_pincode, response);
  } catch (error) {
    logger.error(error, `${ERROR_IN_AUTO_ADDRESS_API} :url=${url}`);
    return null;
  }
};

export const postUserInfo = async (payload: any, device: number, step: number) => {
  const apiHost: string = getAPIHost();
  const url = `${apiHost}${POST_PRO_USER_API_ENDPOINT}`;
  const body = setPayload(payload, device, step);
  const postAdditionHeader = step === 3 ? ({ 'Content-Type': 'multipart/form-data' }) : ({ 'Content-Type': 'application/json' });
  try {
    const { data } = await ApiHelper(`${url}`, HttpMethods.POST, body, postAdditionHeader);
    const { status, response } = data;
    if (status !== 'success') {
      throw new Error('Data is not updated for pro user api');
    }
    return response;
  } catch (error) {
    logger.error(error, `${ERROR_IN_POST_PRO_USER_API} :url=${url}`);
    return null;
  }
};

export const getFile = async (apiUrl: string): Promise<string> => {
  const queryParam: string = apiUrl.split('?')[1];
  const url = `${GET_DOCUMENT_API_ENDPOINT}${queryParam}`;
  try {
    const { data, headers } = await ApiHelper(url, HttpMethods.GET, {}, {
      'Content-Type': 'application/x-www-form-urlencoded',
      responseType: 'arrayBuffer',
    });
    if (!data) {
      throw new Error('Data is not updated for pro user api');
    }
    const blob = new Blob([data], {
      type: headers['content-type'],
    });
    return convertToBase64(blob)
      .then((path: string) => path)
      .catch((err) => {
        logger.error(err, `Error while converting file to base64 :url=${url}`);
        return '';
      });
  } catch (error) {
    logger.error(error, `${ERROR_IN_POST_PRO_USER_API} :url=${url}`);
    return null;
  }
};
