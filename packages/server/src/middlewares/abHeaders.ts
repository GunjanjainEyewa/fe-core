// import { Response, Request, NextFunction } from 'express';
// import { COOKIE_MAX_AGE } from 'constants/requestHeaders';
// import { REMOTE_CONFIG_KEY_IN_LOCALS } from 'server/constants';


// interface Redirection {
//   name: string,
//   status: boolean,
//   userPercentage: number,
//   cookieName: string,
// };


// const abHeaders = (req: Request, res: Response, next: NextFunction) => {
//   const remoteConfig = res.locals[REMOTE_CONFIG_KEY_IN_LOCALS];
//   const { switches } = remoteConfig || {};
//   const { redirectionList } = switches || {};
//   if (redirectionList && redirectionList.length > 0) {
//     const assignedNumber = res.locals.ran;
//     redirectionList.forEach((redirection: Redirection) => {
//       if (redirection.userPercentage && redirection.cookieName) {
//         const isEligible = assignedNumber <= redirection.userPercentage;
//         const cookieName = redirection.cookieName;
//         res.cookie(
//           cookieName,
//           isEligible,
//           { httpOnly: false, secure: false, maxAge: COOKIE_MAX_AGE },
//         );
//       }
//     });
//   }
//   next();
// };

// export default abHeaders;
