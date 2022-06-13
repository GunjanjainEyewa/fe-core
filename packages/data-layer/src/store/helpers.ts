import { statusCodes } from '@eyewa/utils/network/constants';
import { FEATURED, NOT_FEATURED } from '../constants';


export const getErrorString = (errorCode: (number|null)) => {
  switch (errorCode) {
    case statusCodes.NOT_FOUND:
      return 'NotFound';

    default:
      return 'Error';
  }
};

export const getFeaturedString = (featured: boolean) => {
  if (featured) {
    return FEATURED;
  }
  return NOT_FEATURED;
};
