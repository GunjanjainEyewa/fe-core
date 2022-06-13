import { Dispatch } from 'redux';
import { statusCodes } from '@nykaa/utils/network/constants';
import { logger } from '@nykaa/logger';
import actionTypes from './actionTypes';
import { getFile, getUserInfo, postUserInfo } from './service';
import { AddressInfo, FileInfo, SetDocument } from '../types';

const fetchImages = (files: FileInfo[]) => Promise.all(
  files?.map(async (file) => {
    if (file.filePath) {
      const path = await getFile(file.filePath);
      const newFile = { ...file, filePath: path };
      return newFile;
    }
    return file;
  }),
);

const fetchProUserInfo = () => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.FETCH_USER_INFO_PROGRESS,
  });
  return getUserInfo()
    .then((userInfo: any) => {
      const updatedIdDocs = fetchImages(userInfo.idFiles);
      const updatedCertificates = fetchImages(userInfo.certificateFiles);
      Promise.all([updatedIdDocs, updatedCertificates])
        .then((promises) => {
          dispatch({
            type: actionTypes.FETCH_USER_INFO_SUCESS,
            payload: {
              ...userInfo,
              idFiles: promises[0],
              certificateFiles: promises[1],
            },
          });
          return {
            ...userInfo,
            idFiles: promises[0],
            certificateFiles: promises[1],
          };
        });
    })
    .catch((err) => {
      logger.error(err, 'Error in fetching pro user info action');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response.status) {
        status = err.response.status;
      }
      dispatch({
        type: actionTypes.FETCH_USER_INFO_ERROR,
      });
      return {
        errorCode: status,
      };
    });
};

const setVerifiedUserInfo = (verifiedData: any, device: number) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.POST_USER_INFO_INPROGRESS,
  });
  return postUserInfo(verifiedData, device, 1)
    .then((response: any) => {
      dispatch({
        type: actionTypes.POST_USER_BASIC_INFO,
        payload: verifiedData,
      });
      return response;
    })
    .catch((err) => {
      logger.error(err, 'Error in post pro user info action step 1');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response.status) {
        status = err.response.status;
      }
      dispatch({
        type: actionTypes.POST_USER_INFO_ERROR,
      });
      return {
        errorCode: status,
      };
    });
};

const setAddressInfo = (address: AddressInfo, device: number) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.POST_USER_ADDRESS_INFO_INPRORESS,
  });
  return postUserInfo(address, device, 2)
    .then((response: any) => {
      dispatch({
        type: actionTypes.POST_USER_ADDRESS_INFO,
        payload: address,
      });
      return response;
    })
    .catch((err) => {
      logger.error(err, 'Error in post pro user info action step 2');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response.status) {
        status = err.response.status;
      }
      dispatch({
        type: actionTypes.POST_USER_INFO_ERROR,
      });
      return {
        errorCode: status,
      };
    });
};

const uploadDocument = (postData: SetDocument, device: number) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.POST_USER_ID_DOCUMENT_INPROGRESS,
  });
  return postUserInfo(postData, device, 3)
    .then((res: {
      msg: string,
      url: string
    }) => {
      const { url } = res;
      const { fieldName } = postData;
      dispatch({
        type: actionTypes.POST_USER_ID_DOCUMENT_UPLOAD,
        payload: {
          fieldName,
          url,
        },
      });
      return res;
    })
    .catch((err) => {
      logger.error(err, 'Error in post pro user info action step 2');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response.status) {
        status = err.response.status;
      }
      dispatch({
        type: actionTypes.POST_USER_INFO_ERROR,
      });
      return {
        errorCode: status,
      };
    });
};

const removeDocument = (field: string, device: number) => (
  dispatch: Dispatch,
) => postUserInfo(field, device, 4)
  .then((res: {
    msg: string,
    url: string
  }) => {
    dispatch({
      type: actionTypes.POST_USER_ID_DOCUMENT_REMOVE,
      payload: {
        field,
      },
    });
    return res;
  })
  .catch((err) => {
    logger.error(err, 'Error in post pro user info action step 2');
    let status = statusCodes.ERROR;
    if (err.isAxiosError && err.response.status) {
      status = err.response.status;
    }
    dispatch({
      type: actionTypes.POST_USER_INFO_ERROR,
    });
    return {
      errorCode: status,
    };
  });

const setBusinessInfo = (postData: any, device: number) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.POST_USER_BUSINESS_INFO_INPROGRESS,
  });
  return postUserInfo(postData, device, 5)
    .then((response: any) => {
      dispatch({
        type: actionTypes.POST_USER_BUSINESS_INFO,
        payload: postData,
      });
      return response;
    })
    .catch((err) => {
      logger.error(err, 'Error in fetching pro user info action');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response.status) {
        status = err.response.status;
      }
      dispatch({
        type: actionTypes.POST_USER_INFO_ERROR,
      });
      return {
        errorCode: status,
      };
    });
};

const setTermAndConditions = (device: number) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: actionTypes.POST_USER_TERM_CONDITION_INPROGRESS,
  });
  return postUserInfo(null, device, 6)
    .then((response: any) => {
      dispatch({
        type: actionTypes.POST_USER_TERM_CONDITION,
      });
      return response;
    })
    .catch((err) => {
      logger.error(err, 'Error in fetching pro user info action');
      let status = statusCodes.ERROR;
      if (err.isAxiosError && err.response.status) {
        status = err.response.status;
      }
      dispatch({
        type: actionTypes.POST_USER_INFO_ERROR,
      });
      return {
        errorCode: status,
      };
    });
};

export {
  fetchProUserInfo,
  setVerifiedUserInfo,
  setAddressInfo,
  uploadDocument,
  removeDocument,
  setBusinessInfo,
  setTermAndConditions,
};
