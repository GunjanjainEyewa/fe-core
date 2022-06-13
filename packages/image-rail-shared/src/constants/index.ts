import { DefaultStateProps } from '../types';


export const REVIEW_PHOTOS_REQUEST_PATH = 'products/@{productId}/reviews/images';

export const PAGE_SIZE = 20;

export const REVIEW_DATA_FETCH_ERROR = 'something went wrong with API, message:';

export const NO_DATA_FOUND_IN_API = 'No data in apiResponseData';

export const API_DATA_NOT_AN_OBJECT = '"apiResponseData" should be an object';

export const RATE_TEXT = 'rate';

export const REVIEW_TEXT = 'write a review about';

export const defaultState: DefaultStateProps = {
  images: [],
  imagesWithInfo: [],
  productId: null,
  totalImagesAvailable: 0,
  loading: false,
  isNotFound: false,
  isFetchingError: false,
};
