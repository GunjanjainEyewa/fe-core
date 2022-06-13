import { AxiosRequestConfig } from 'axios';

import customHeaders from '../constants/headers';
import { RequestConfig } from '..';


export const csrfHeader = (requestConfig: AxiosRequestConfig) => {
  const { headers } = requestConfig;
  if (headers.CSRF) {
    const formKey = RequestConfig.getFormKey();
    if (formKey) {
      headers[customHeaders.CSRF_TOKEN] = formKey;
    }
  }
  delete headers.CSRF;

  return requestConfig;
};

export const dummy = true;
