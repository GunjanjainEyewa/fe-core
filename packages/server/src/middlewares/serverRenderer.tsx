// import * as React from 'react';
// import * as express from 'express';
// import { renderToString } from 'react-dom/server';
// import { Frontload, frontloadServerRender } from 'react-frontload';
// import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
// import { StaticRouter as Router, Route, Switch } from 'react-router-dom';
// import { Store } from 'redux';
// import { Provider } from 'react-redux';
// import path from 'path';
// import Nps from 'shared/Nps';
// import User from 'shared/User';

// import { getCanonicalFromRequest, getStatusCode } from 'server/helpers';
// import Html from 'server/components/HTML';
// import App from 'shared/App';
// import statusCodes from 'constants/statusCodes';
// import { STORE_KEY } from 'constants/store';
// import { defaultDataLayer } from 'constants/dataLayer';
// import {
//   PHPSESSID_COOKIE_KEY,
// } from 'server/constants';
// import { favicon } from 'constants/meta';


// const statsFile = path.resolve('./build/client/static/loadable-stats.json');

// const serverRenderer: any = () => async (
//   req: express.Request & { store: Store },
//   res: express.Response,
//   next: express.NextFunction,
// ) => {
//   const extractor = new ChunkExtractor({ statsFile, entrypoints: ['bundle'] });
//   let content;
//   let status = statusCodes.SUCCESS;
//   const currentStore = res.locals[STORE_KEY];
//   const sessionId = res.locals[PHPSESSID_COOKIE_KEY];
//   const context: CustomStaticContext = {
//     ...(currentStore && { storeId: currentStore }),
//     sessionId,
//   };

//   try {
//     content = await frontloadServerRender(() =>
//       renderToString(
//         <ChunkExtractorManager extractor={extractor}>
//           <Router location={req.url} context={context}>
//             <Switch>
//               <Route path="/nps/review">
//                 <Provider store={res.locals.npsStore}>
//                   <Frontload>
//                     <Nps />
//                   </Frontload>
//                 </Provider>
//               </Route>
//               <Route path="/user">
//                 <User store={res.locals.userStore} />
//               </Route>
//               <Route path="*">
//                 <Provider store={res.locals.store}>
//                   <Frontload>
//                     <App />
//                   </Frontload>
//                 </Provider>
//               </Route>
//             </Switch>
//           </Router>
//         </ChunkExtractorManager>
//       )
//     );
//   } catch (err) {
//     // TODO: log error
//     next(err);
//   }

//   if (context.redirect && context.redirectUrl) {
//     // ❔ This logic is needed when we want re-directions from inside the routes.
//     // 💡 Used in search listing pages for brand page re-directions.
//     res.redirect(context.redirectUrl);
//   }

//   const seoData: any = {};
//   seoData.canonical = getCanonicalFromRequest(req);
//   const stateObj = res.locals.store.getState();
//   const npsStateObj = res.locals.npsStore.getState();
//   const userStateObj = res.locals.userStore?.getState();

//   // Removing headers n cookies from initial state
//   const newState = {
//     ...stateObj,
//     // app: {
//     //   ...stateObj.app,
//     //   ssrHeaders: {},
//     //   cookies: {},
//     // },
//   };

//   if (context && context.statusCode) {
//     status = context.statusCode;
//   } else {
//     status = getStatusCode(newState);
//   }

//   const state = JSON.stringify(newState);
//   const npsState = JSON.stringify(npsStateObj);
//   const userState = JSON.stringify(userStateObj);
//   const appData = JSON.stringify({});
//   const jsonLdData = newState.jsonLdData;

//   // move common keys to function
//   const defaultData = defaultDataLayer();
//   const dataLayer = {
//     ...defaultData,
//     ...newState.dataLayer,
//     ...npsStateObj.dataLayer,
//     responseCode: status,
//     storeName: currentStore,
//   };
//   const device = res.locals.client?.device;
//   return res.status(status).send(
//     '<!doctype html>' +
//       renderToString(
//         <Html
//           css={extractor.getStyleElements()}
//           scripts={extractor.getScriptElements({ type: 'text/javascript' })}
//           state={state}
//           appData={appData}
//           dataLayer={JSON.stringify(dataLayer)}
//           seoData={seoData}
//           jsonLdData={jsonLdData}
//           responseCode={status}
//           npsState={npsState}
//           userState={userState}
//           device={device}
//           favicon={favicon[__PLATFORM__]}
//         >
//           {content}
//         </Html>
//       )
//   );
// };

// export default serverRenderer;
