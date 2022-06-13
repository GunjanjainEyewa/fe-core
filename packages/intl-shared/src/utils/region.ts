import { Response, Request } from 'express';
import {
  NON_VRN_USER,
  REGION_HEADER,
  REMOTE_CONFIG_KEY_IN_LOCALS,
  ROLL_OUT_ELIGIBLE,
  VRN_REGION_ELIGIBILITY,
  VRN_REGION_ELIGIBILITY_LEVELS,
  VRN_SOURCE,
} from '../constants';
import {
  MAX_COOKIE_AGE,
  REGION_EXPERIMENT_COOKIE,
} from '../constants/cookies';


/**
 * Returns whether user is eligible for Regionalization AB
 *
 * @param {string[]} regionExperimentVariants
 * @param {string} regionExperimentCookie
 * @returns {boolean}
 */
export const checkEligibilty = (
  regionExperimentVariants: string[] = [],
  regionExperimentCookie: string = '',
) => (
  (regionExperimentVariants.indexOf(regionExperimentCookie) > -1)
  || (regionExperimentVariants.indexOf('*') > -1)
);

/**
 * Returns whether user is eligible for Regionalization AB
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {boolean}
 */
export const checkRegionalizationABStatus = (req: Request, res: Response) => {
  /*
    1. collect remote config's 'regionExperimentMap' value
    2. fetch user's region from Cloufront headers
    3. fetch user experiment variant(EXP_VRN_REGION) using user's region and regionExperimentMap
  */
  const {
    configs: { regionExperimentMap = {} },
  } = res.locals[REMOTE_CONFIG_KEY_IN_LOCALS];
  const userRegion = String(req.headers[REGION_HEADER] || '');
  const regionExperimentVariants = regionExperimentMap[userRegion] || [];
  let isEligible = false;
  /*
    1. check if user experiment variant is present
    2. if present, check if variant value matches with 'EXP_VRN_REGION' cookie
    3. also check if region is marked as '*' (meaning applicable for users of the region)
    4. if yes, set VRN experiment as enabled
  */
  if (regionExperimentVariants) {
    const { cookies } = req;
    const regionExperimentCookie = cookies[REGION_EXPERIMENT_COOKIE] || '';

    if (checkEligibilty(regionExperimentVariants, regionExperimentCookie)) {
      res.locals[VRN_REGION_ELIGIBILITY] = VRN_REGION_ELIGIBILITY_LEVELS.ELIGIBLE;
      isEligible = true;
      res.cookie(
        VRN_SOURCE,
        ROLL_OUT_ELIGIBLE,
        {
          httpOnly: false,
          secure: false,
          maxAge: MAX_COOKIE_AGE,
        },
      );
    } else {
      res.locals[VRN_REGION_ELIGIBILITY] = VRN_REGION_ELIGIBILITY_LEVELS.NOT_ELIGIBLE;
      res.cookie(
        VRN_SOURCE,
        NON_VRN_USER,
        {
          httpOnly: false,
          secure: false,
          maxAge: MAX_COOKIE_AGE,
        },
      );
    }
  } else {
    res.locals[VRN_REGION_ELIGIBILITY] = VRN_REGION_ELIGIBILITY_LEVELS.STATE_NOT_COVERED;
    res.cookie(
      VRN_SOURCE,
      NON_VRN_USER,
      {
        httpOnly: false,
        secure: false,
        maxAge: MAX_COOKIE_AGE,
      },
    );
  }

  return isEligible;
};
