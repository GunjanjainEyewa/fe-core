import { ProRegistrationState } from '../types';

export const GET_PRO_USER_API_ENDPOINT: string = '/gateway-api/bulkuser/nykaaProData';
export const POST_PRO_USER_API_ENDPOINT: string = '/gateway-api/bulkuser/nykaaPro';
export const GET_DOCUMENT_API_ENDPOINT: string = '/gateway-api/bulkuser/nykaaProFile?';
export const GET_ADDRESS_API_ENDPOINT: string = '/app-api/index.php/address/autoaddress_servicability';
export const ERROR_IN_FETCH_PRO_USER_API: string = 'Error in fetching get pro user api';
export const ERROR_IN_AUTO_ADDRESS_API: string = 'Error in fetching auto address api';
export const ERROR_IN_POST_PRO_USER_API: string = 'Error in posting data using pro user api';

export const initialProState: ProRegistrationState = {
  personalInfo: null,
  businessInfo: null,
  businessAddress: null,
  savedAddress: [],
  documents: null,
  loading: false,
  status: null,
  isLoadingBasicInfo: false,
  isLoadingAddressInfo: false,
  isLoadingBusinessInfo: false,
  isLoadingTerms: false,
  isUploading: false,
  idFiles: null,
  certificateFiles: null,
};
