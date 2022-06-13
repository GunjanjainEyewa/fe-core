// import { AxiosRequestConfig } from 'axios';
// import { STATES, SESSION_KEY, ERROR_ACTION } from 'shared/constants/visitorPrioritization';
// import { getUserNumber } from 'shared/helpers/utils/user';


// export const VP = (requestConfig: AxiosRequestConfig, store) => {
//   if (__SERVER__) {
//     return requestConfig;
//   }
//   const throwVisitorError = () => {
//     store.dispatch({
//       type: ERROR_ACTION,
//       payload: {
//         flag: true,
//       },
//     });
//    throw new Error('');
//   };

//   let vpConfigs = store.getState()?.VP?.configs;

//   if (!vpConfigs.web_apis ) {
//     const dataFromSessionStorage = sessionStorage.getItem(SESSION_KEY);
//     if (dataFromSessionStorage) {
//       vpConfigs = JSON.parse(dataFromSessionStorage);
//     }
//   }
//   const {
//     web_apis: webApi,
//     block_percentage: blockPercentage,
//     state,
//     resestTimeInMinutes: expiryMins,
//     ruleID,
//     webEnable,
//   } = vpConfigs;
//   if (state && webEnable) {
//    const assignedUserNumber = parseInt(getUserNumber(ruleID, expiryMins), 10) || 100;

//     if ((blockPercentage >= assignedUserNumber) && (webApi)) {
//       if (state === STATES.BLOCK_ALL) {
//         throwVisitorError();
//       }
//       const blockedAPIArray = webApi;
//       blockedAPIArray.forEach((blockedApi: string[]) => {
//         if (requestConfig.url.indexOf(blockedApi) > -1) {
//           throwVisitorError();
//           return;
//         }
//       });
//     }
//   }
//   return requestConfig;
// };
