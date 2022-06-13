// libs
import { v4 as uuidv4 } from 'uuid';
import md5 from 'blueimp-md5';

// helpers
import { setCookie, getCookie } from '@eyewa/utils/cookies';

// constants
import {
  VISITOR_UUID_IDENTIFIER,
  VISITOR_COOKIE_EXPIRY,
  CACHE_KEY,
  EXPERIMENT_SSR_COOKIE_PREFIX,
  EXPERIMENT_COOKIE_EXPIRY,
  EXPERIMENT_CACHE_COOKIE,
  EXPERIMENT_SSR_CACHE_COOKIE_EXPIRY,
} from '../constants';

// defs
import {
  ExperimentAllVariant,
  ExperimentCache,
  SampleRate,
  VariantInfo,
} from '../types';

// cached uuid for a user
let visitorUUID: string | undefined;
let cachedConfig: Omit<ExperimentCache, 'version'> | undefined;

const saveUUIDToCookie = (userUUID: string) => {
  setCookie(VISITOR_UUID_IDENTIFIER, userUUID, VISITOR_COOKIE_EXPIRY);
};

/**
 * Function to generate a random v4 uuid
 * for user/visitor once per visit and store that for all future uses
 * to be consumed in all internal implementations
 * @returns {string} user bcookie
 * */
export const getExperimentUUID = () => {
  // return cached visitor UUID if available
  if (visitorUUID !== undefined) return visitorUUID;

  // check for locally stored visitor uuid from cookie
  const existingUUID = getCookie(VISITOR_UUID_IDENTIFIER);

  // cache the saved uuid and return the same if present
  if (existingUUID !== '') {
    // store in memory
    visitorUUID = existingUUID as string;

    // extending cookie expiry
    saveUUIDToCookie(visitorUUID);
    return visitorUUID;
  }

  // if visitor uuid is not generated
  // generate a random uuid
  const newUUID = uuidv4();

  // store in memory
  visitorUUID = newUUID;

  // save UUID in cookie
  saveUUIDToCookie(visitorUUID);
  return visitorUUID;
};

/**
 * Generates hash for user given visitor uuid and experiment id
 * @param {string} UUID unique user id
 * @param {string} expID experiment identifier
 * @returns {string} md5 hash
 */
export const generateExperimentHash = (uuid: string, expID: string) => md5(uuid + expID);

/**
 * Parse first 8 bits of hash to generate user eligiblity pseudo random number
 * @param {string} experimentHash experiment md5 hash
 * @returns {number}
 * */
export const getExperimentBucket = (experimentHash: string) => {
  const eligibilitySubString = experimentHash.substr(0, 8);
  // 0xffffffff is (2^32)-1 i.e 4294967295 in decimal notation
  return parseInt(eligibilitySubString, 16) / 0xffffffff;
};

/**
 * Parse 8 to 16 chars of hash to generate user variant identifier pseudo random number
 * @param {string} experimentHash experiment md5 hash
 * @returns {number}
 * */
export const getVariantBucket = (experimentHash: string): number => {
  const variantDecidingNum = experimentHash.substr(8, 8);
  // 0xffffffff is (2^32)-1 i.e 4294967295 in decimal notation
  return parseInt(variantDecidingNum, 16) / 0xffffffff;
};

/**
 * Function to cache experiment evaluations
 * @param {object} experiments - all experiments with their hash, whether user isEligible and
 *  selected variant
 */
export const setCacheExperimentsConfig = (
  experiments: ExperimentAllVariant,
) => {
  try {
    cachedConfig = { uuid: getExperimentUUID(), experiments };
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(cachedConfig));
  } catch {
    /** DO NOTHING */
  }
};

/**
 * Function to get cached all experiments variants
 * @returns {object | undefined} all experiments variants
 */
export const getCacheExperimentsConfig = () => {
  // if we have in memory config use it
  if (cachedConfig !== undefined) {
    return cachedConfig;
  }

  // try and read from localStorage
  try {
    const cacheConfig = window.localStorage.getItem(CACHE_KEY);

    if (cacheConfig === null) {
      return undefined;
    }

    // set in memory cache
    cachedConfig = JSON.parse(cacheConfig) as Omit<ExperimentCache, 'version'>;
    visitorUUID = cachedConfig.uuid;
    return cachedConfig;
  } catch {
    // fallback return
    return undefined;
  }
};

/**
 * Set experiment cookie for SSR experiments
 * @param {string} experimentId - experiment identifier
 * @param {string} selectedVariant - selected experiment variant
 */
export const setExperimentCookie = (
  experimentId: string,
  selectedVariant: string,
) => {
  setCookie(
    EXPERIMENT_SSR_COOKIE_PREFIX + experimentId,
    selectedVariant,
    EXPERIMENT_COOKIE_EXPIRY,
  );
};

/**
 * Function clear experiment cookie
 * @param {string} experimentId - Experiment Identifier
 * */
export const clearExperimentCookie = (experimentId: string) => {
  setCookie(EXPERIMENT_SSR_COOKIE_PREFIX + experimentId, '', 0);
};

/**
 * Validate sample rate
 * @param {object} sampleRate
 * @returns {boolean} isValid - whether sample rate is valid or not
 */
export const isValidSampleRate = (sampleRate: SampleRate) => {
  // check if sampleRate is well defined
  if (
    sampleRate === undefined
    || sampleRate.from === undefined
    || sampleRate.to === undefined
  ) {
    return false;
  }

  // sampleRate "from" and "to" should be valid numbers
  if (Number.isNaN(sampleRate.from) || Number.isNaN(sampleRate.to)) {
    return false;
  }

  // sampleRate "to" should always be greater than "from"
  if (sampleRate.to <= sampleRate.from) {
    return false;
  }

  return true;
};

/**
 * Check if variants sample rate are valid and not overlapping
 * @param {object} variants
 * @returns {boolean} isValid - whether variant sample rate is valid or not
 */
export const isValidVariantSampleRate = (variants: VariantInfo[]) => {
  // check if any of the variant has in valid sample rate
  const hasInvalidSampleRate = variants.some(
    (variant) => isValidSampleRate(variant.sampleRate) === false,
  );

  if (hasInvalidSampleRate) {
    return false;
  }

  // sort variants in ascending order
  const sortedVariants = variants.sort(
    (variantA, variantB) => variantA.sampleRate.from - variantB.sampleRate.from,
  );

  const hasOverlappingVariant = sortedVariants.some((variant, index) => {
    if (index === 0) {
      return false;
    }

    const lastVariant = sortedVariants[index - 1];

    // check if last variant sampleRate overlaps with current variant
    return lastVariant.sampleRate.to > variant.sampleRate.from;
  });

  if (hasOverlappingVariant) {
    return false;
  }

  return true;
};


export const setSSRCacheCookie = (ssrExperiments: string[]) => {
  if (ssrExperiments.length === 0) {
    // clearing the SSR experiment cookie as no experiments
    setCookie(EXPERIMENT_CACHE_COOKIE, '', 0);
    return;
  }

  const ssrExperimentHash = md5(ssrExperiments.sort().join(';'));

  setCookie(EXPERIMENT_CACHE_COOKIE, ssrExperimentHash, EXPERIMENT_SSR_CACHE_COOKIE_EXPIRY);
};
