import { Documents, FetchUserDetail, SocialLinks } from '../types';
import { AddressInfo, FileInfo } from '../types';
import PinCode from '../types/pinCode';
import { sanitizeSocialLogin, getDevice } from '../utils';

const getDocumentFieldName = (key: string): string => {
  switch (key) {
    case 'idProofDocument':
      return 'id_proof_document';
    case 'idProofDocument2':
      return 'id_proof_document2';
    case 'businessCertificationDocument':
      return 'business_certification_document';
    case 'businessCertificationDocument2':
      return 'business_certification_document2';
    default:
      return '';
  }
};

const generateCertificateFiles = (documents: Documents): FileInfo[] => {
  const certificateFiles: FileInfo[] = [{
    fieldName: 'businessCertificationDocument',
    filePath: '',
  }];
  if (documents?.businessCertificationDocument && !documents?.businessCertificationDocument2) {
    certificateFiles.length = 0;
    certificateFiles.push({
      fieldName: 'businessCertificationDocument',
      filePath: documents?.businessCertificationDocument,
    });
    certificateFiles.push({
      fieldName: 'businessCertificationDocument2',
      filePath: '',
    });
  }
  if (!documents?.businessCertificationDocument && documents?.businessCertificationDocument2) {
    certificateFiles.length = 0;
    certificateFiles.push({
      fieldName: 'businessCertificationDocument2',
      filePath: documents?.businessCertificationDocument2,
    });
    certificateFiles.push({
      fieldName: 'businessCertificationDocument',
      filePath: '',
    });
  }
  if (documents?.businessCertificationDocument && documents?.businessCertificationDocument2) {
    certificateFiles.length = 0;
    certificateFiles.push({
      fieldName: 'businessCertificationDocument',
      filePath: documents?.businessCertificationDocument,
    });
    certificateFiles.push({
      fieldName: 'businessCertificationDocument2',
      filePath: documents?.businessCertificationDocument2,
    });
  }
  return certificateFiles;
};

const generateIdFiles = (documents: Documents): FileInfo[] => {
  const idFiles: FileInfo[] = [{
    fieldName: 'idProofDocument',
    filePath: '',
  }];
  if (documents?.idProofDocument && !documents?.idProofDocument2) {
    idFiles.length = 0;
    idFiles.push({
      fieldName: 'idProofDocument',
      filePath: documents?.idProofDocument,
    });
    idFiles.push({
      fieldName: 'idProofDocument2',
      filePath: '',
    });
  }
  if (!documents?.idProofDocument && documents?.idProofDocument2) {
    idFiles.length = 0;
    idFiles.push({
      fieldName: 'idProofDocument2',
      filePath: documents?.idProofDocument2,
    });
    idFiles.push({
      fieldName: 'idProofDocument',
      filePath: '',
    });
  }
  if (documents?.idProofDocument && documents?.idProofDocument2) {
    idFiles.length = 0;
    idFiles.push({
      fieldName: 'idProofDocument',
      filePath: documents?.idProofDocument,
    });
    idFiles.push({
      fieldName: 'idProofDocument2',
      filePath: documents?.idProofDocument2,
    });
  }
  return idFiles;
};

export const setPayload = (payload: any, device: number, step: number) => {
  const postData = {
    registrationStep: '',
    regPlatform: getDevice(device),
  };
  const formData = new FormData();
  switch (step) {
    case 1:
      return {
        ...postData,
        registrationStep: 'basicInfo',
        personalInfo: { mobileNumber: payload.personalInfo.mobile },
        businessInfo: { businessType: payload.businessInfo.businessType },
      };
    case 2:
      return {
        ...postData,
        address: payload,
        registrationStep: 'addressInfo',
      };
    case 3:
      formData.append('registrationStep', 'fileUpload');
      formData.append('regPlatform', getDevice(device));
      formData.append('fieldName', getDocumentFieldName(payload.fieldName));
      formData.append('fileName', payload.fileName);
      if (payload.fieldName === 'idProofDocument' || payload.fieldName === 'idProofDocument2') {
        formData.append('idProofName', payload.idProofName);
      } else {
        formData.append('businessCertification', payload.idProofName);
      }
      return formData;
    case 4:
      return {
        ...postData,
        registrationStep: 'fileRemove',
        document: {
          fieldName: getDocumentFieldName(payload),
        },
      };
    case 5:
      return {
        ...postData,
        idProofInfo: {
          idProofName: payload.idProofName,
          idProofCustomerName: payload.idProofCustomerName,
          idProofCertificateNumber: payload.idProofCertificateNumber,
        },
        businessCertificateInfo: {
          businessCertification: payload.businessCertification,
          businessCertificationCustomerName: payload.businessCertificationCustomerName,
          businessProfileUrl: payload.businessProfileUrl,
          businessFacebookUrl: payload.businessFacebookUrl,
          businessInstagramUrl: payload.businessInstagramUrl,
          businessYoutubeUrl: payload.businessYoutubeUrl,
          businessLinkedInUrl: payload.businessLinkedInUrl,
        },
        registrationStep: 'businessInfo',
      };
    case 6:
      return {
        ...postData,
        registrationStep: 'tncAccepted',
      };
    default:
      return {};
  }
};

export const transformAddress = (_pincode: string, response: PinCode): AddressInfo => {
  const { city: _city, state: _state, country } = response;
  return {
    pincode: _pincode,
    city: _city,
    state: _state,
    countryId: country,
    regionId: '0',
  };
};

export const transformUserInfo = async (data: FetchUserDetail) => {
  const { documents } = data;
  if (!documents) {
    return data;
  }
  const idFiles = generateIdFiles(documents);
  const certificateFiles = generateCertificateFiles(documents);
  const SocialUrls: SocialLinks = sanitizeSocialLogin(documents?.businessOnlinePresence);
  return ({
    ...data,
    idFiles,
    certificateFiles,
    documents: { ...documents, ...SocialUrls },
  });
};


export const dummy = () => {};
