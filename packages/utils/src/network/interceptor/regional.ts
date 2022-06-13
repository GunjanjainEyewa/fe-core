import { AxiosRequestConfig } from 'axios';


const REGION_HEADER = 'cloudfront-viewer-country-region';
const REGION_HEADER_COUNTRY = 'cloudfront-viewer-country';

const regional = (
  requestConfig: AxiosRequestConfig,
  regionalHeader: string,
  countryHeader: string,
) => {
  // eslint-disable-next-line no-param-reassign
  requestConfig.headers[REGION_HEADER] = regionalHeader;
  if (countryHeader) {
    // eslint-disable-next-line no-param-reassign
    requestConfig.headers[REGION_HEADER_COUNTRY] = countryHeader;
  }
  return requestConfig;
};

export default regional;
