// import { Response, Request, NextFunction } from 'express';

// import { configureStore } from 'shared/store';
// import { getInitialAppState } from 'store/app/helpers';
// import { getInitialAuthState } from 'store/auth/helper';
// import { STORE_KEY } from 'constants/store';
// import { REMOTE_CONFIG_KEY_IN_LOCALS } from '../constants';
// import { npsStore } from 'Nps/store';
// import { configureUserStore } from 'User/store';
// import { getNpsInitialAppState } from 'shared/Nps/store/app/helpers';
// import { queryStringObjectFromUrl } from 'shared/helpers/utils/url';


// export const addStore = (req: Request, res: Response, next: NextFunction) => {
//   const queryStringObject = queryStringObjectFromUrl(req.url);
//   const npsToken = queryStringObject?.nps_token || '';
//   const remoteConfig = res.locals[REMOTE_CONFIG_KEY_IN_LOCALS];
//   const { cookies: requestCookies } = req;
//   const appReducer = getInitialAppState(res.locals[STORE_KEY], res.locals.client);

//   const auth = getInitialAuthState(requestCookies);

//   const npsAppReducer = getNpsInitialAppState(npsToken);
//   const initialState = {
//     remoteConfig,
//     appReducer,
//     auth,
//   };

//   const npsInitialState = {
//     npsAppReducer,
//   };
//   // * We configure a store with an initial state containing,
//   // * remote config and other info needed for Server-side rendering
//   res.locals.store = configureStore({ initialState });
//   res.locals.npsStore = npsStore({ initialState: npsInitialState });
//   res.locals.userStore = configureUserStore({
//     initialState: { remoteConfig, appReducer },
//   });

//   next();
// };
