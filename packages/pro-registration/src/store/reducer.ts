import { Action, ProRegistrationState } from '../types';
import actionTypes from './actionTypes';
import { initialProState } from './constant';

const proUserInfo = (state = initialProState, action: Action): ProRegistrationState => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_USER_INFO_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_USER_INFO_SUCESS: {
      const {
        personalInfo,
        businessInfo,
        address,
        documents: _document,
        status: _status,
        idFiles,
        certificateFiles,
      } = payload;
      return {
        ...state,
        personalInfo,
        businessInfo: businessInfo || null,
        businessAddress: address?.businessAddress || null,
        savedAddress: address?.allAddress || [],
        documents: _document,
        status: _status,
        loading: false,
        idFiles,
        certificateFiles,
      };
    }
    case actionTypes.FETCH_USER_INFO_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case actionTypes.POST_USER_INFO_INPROGRESS: {
      return {
        ...state,
        isLoadingBasicInfo: true,
      };
    }
    case actionTypes.POST_USER_BASIC_INFO: {
      return {
        ...state,
        ...payload,
        status: 'addressInfo',
        isLoadingBasicInfo: false,
      };
    }

    case actionTypes.POST_USER_ADDRESS_INFO_INPRORESS: {
      return {
        ...state,
        isLoadingAddressInfo: true,
      };
    }

    case actionTypes.POST_USER_ADDRESS_INFO: {
      return {
        ...state,
        businessAddress: payload,
        status: 'businessInfo',
        isLoadingAddressInfo: false,
      };
    }

    case (
      actionTypes.POST_USER_ID_DOCUMENT_UPLOAD || actionTypes.POST_USER_BUSINESS_DOCUMENT_UPLOAD
    ): {
      const { documents } = state;
      return {
        ...state,
        documents: {
          ...documents,
          [payload.fieldName]: payload.url,
        },
        isUploading: false,
      };
    }

    case actionTypes.POST_USER_BUSINESS_INFO_INPROGRESS: {
      return {
        ...state,
        isLoadingBusinessInfo: true,
      };
    }

    case actionTypes.POST_USER_BUSINESS_INFO: {
      const { documents: _documents } = state;
      const {
        idProofName,
        idProofCustomerName,
        idProofCertificateNumber,
        businessCertification,
        businessCertificationCustomerName,
        businessProfileUrl,
      } = payload;
      return {
        ...state,
        documents: {
          ..._documents,
          idProofName,
          idProofCustomerName,
          idProofCertificateNumber,
          businessCertification,
          businessCertificationCustomerName,
          businessProfileUrl,
        },
        isLoadingBusinessInfo: false,
        status: 'tncAccepted',
      };
    }

    case actionTypes.POST_USER_TERM_CONDITION_INPROGRESS: {
      return {
        ...state,
        isLoadingTerms: true,
      };
    }

    case actionTypes.POST_USER_TERM_CONDITION: {
      return {
        ...state,
        status: 'registrationComplete',
        isLoadingTerms: false,
      };
    }
    default:
      return state;
  }
};

export default proUserInfo;
