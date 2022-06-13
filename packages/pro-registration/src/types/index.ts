export interface PersonalInfo {
  name: string;
  email :string;
  mobile?: string;
}

export interface BusinessInfo {
  organizationName: string;
  businessType: string;
}

export interface AddressInfo {
  city: string;
  state: string;
  pincode: string;
  countryId: string;
  regionId: string;
  mobileNumber?: string;
  firstname?: string;
  lastname?: string;
  street?: string;
  addressId?: string;
}

export interface Address {
  businessAddress: AddressInfo;
  allAddress: AddressInfo[];
}

export interface Documents {
  idProofName: string;
  idProofCustomerName: string;
  idProofCertificateNumber: string;
  idProofDocument: string;
  idProofDocument2: string;
  businessCertification: string;
  businessCertificationCustomerName: string;
  businessCertificationDocument: string;
  businessCertificationDocument2: string;
  businessOnlinePresence: string;
  businessProfileUrl: string;
  businessYoutubeUrl: string;
  businessFacebookUrl: string;
  businessInstagramUrl: string;
  businessLinkedInUrl: string;
}

export interface FetchUserDetail {
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
  address: Address;
  documents: Documents;
  status: string;
}

export interface ProRegistrationState {
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
  businessAddress: AddressInfo;
  savedAddress: AddressInfo[];
  documents: Documents;
  loading: boolean;
  isLoadingBasicInfo: boolean;
  isLoadingAddressInfo: boolean;
  isUploading: boolean;
  isLoadingBusinessInfo: boolean;
  isLoadingTerms: boolean;
  status: 'basicInfo' | 'addressInfo' | 'businessInfo' | 'fileUpload' | 'tncAccepted' | 'registrationComplete';
  idFiles: FileInfo[];
  certificateFiles: FileInfo[];
}

export interface Action {
  type: string;
  payload?: any;
}

export interface PostUserInfo {
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
}


export interface SocialLinks {
  businessYoutubeUrl: string;
  businessFacebookUrl: string;
  businessInstagramUrl: string;
  businessLinkedInUrl: string;
  businessProfileUrl: string;
}

export interface BusinessTypeOptions {
  value: string,
  label: string,
}

export interface FileInfo {
  fieldName: string;
  filePath: string;
}
export interface FileProps {
  files: FileInfo[];
  onUpload?: (file: any, field: string) => void;
  onRemove?: (fileName: string) => void;
}

export interface SetDocument {
  fieldName: string;
  idProofName: string;
  fileName: File;
}
