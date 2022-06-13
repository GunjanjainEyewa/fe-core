// utils
import checkForNykaaUser from '@eyewa/utils/user';

// helpers
import {
  generateExperimentHash,
  getExperimentBucket,
  getVariantBucket,
  setCacheExperimentsConfig,
  getCacheExperimentsConfig,
  setExperimentCookie,
  getExperimentUUID,
  clearExperimentCookie,
  isValidSampleRate,
  isValidVariantSampleRate,
  setSSRCacheCookie,
} from './helpers';

// defs
import {
  ExperimentAllVariant,
  ExperimentCache,
  ExperimentConfig,
  ExperimentVariant,
} from '../types';

interface IEvaluateExpVariant {
  uuid: string;
  experimentConfig: ExperimentConfig;
  cachedExperiment?: ExperimentVariant;
  shouldBypassEligibilty?: boolean;
}

interface IEvaluateAllExperiments {
  configs: ExperimentConfig[];
  onExperimentEvaluation: (data: Omit<ExperimentCache, 'version'>) => void;
  canBypassEligibilty?: boolean;
}

/**
 * Evaluate if user is eligible for experiment, if yes than evaluete variant
 * @param {object} data
 * @param {string} data.uuid - User Indentifier
 * @param {object} data.experimentConfig - Experiment Config
 * @param {boolean} data.shouldBypassEligibilty - Bypass elibility check for experiment/variant both
 * @param {object} [data.cachedExperiment] - Cached Experiment Data
 * @returns {object} Experiment Result
 */
const evaluateExperimentVariant = ({
  uuid,
  experimentConfig,
  cachedExperiment,
  shouldBypassEligibilty = false,
}: IEvaluateExpVariant) => {
  const {
    id,
    experimentLayer,
    sampleRate,
    status,
    variants,
    isSSR = false,
  } = experimentConfig;
  const { hash: cachedHash } = cachedExperiment || {};

  // if we have cached md5 hash dont evaluate again
  const expHash = cachedHash || generateExperimentHash(uuid, experimentLayer);

  const expSampleRateHasError = isValidSampleRate(sampleRate) === false;
  const expVariantsHasError = isValidVariantSampleRate(variants) === false;

  // in valid experiment config log errors
  if (expSampleRateHasError || expVariantsHasError) {
    if (expSampleRateHasError) {
      // show invalid experiment config on console
      // eslint-disable-next-line no-console
      console.error('Invalid experiment sampleRate -', id);
    }

    if (expVariantsHasError) {
      // show invalid experiment config on console
      // eslint-disable-next-line no-console
      console.error('Invalid experiment variants -', id);
    }

    clearExperimentCookie(id);

    return {
      id,
      experimentLayer,
      hash: expHash,
      isEligible: false,
    };
  }

  // if experiment is not enabled yet return isEligible false
  if (status === false) {
    clearExperimentCookie(id);

    return {
      id,
      experimentLayer,
      hash: expHash,
      isEligible: false,
    };
  }

  // evaluate the users experiment segment using hash
  const experimentBucket = getExperimentBucket(expHash);
  let isEligible = experimentBucket > sampleRate.from && experimentBucket <= sampleRate.to;

  // if user is not eligible for experiment
  if (isEligible === false && !shouldBypassEligibilty) {
    clearExperimentCookie(id);

    return {
      id,
      experimentLayer,
      isEligible,
      hash: expHash,
    };
  }

  // evaluate the users variant segment using hash
  const variantBucket = getVariantBucket(expHash);
  let selectedVariant: string | undefined;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < variants.length; i++) {
    const variant = variants[i];
    if (
      variantBucket > variant.sampleRate.from
      && variantBucket <= variant.sampleRate.to
    ) {
      selectedVariant = variant.name;
      break;
    }
  }

  if (shouldBypassEligibilty) {
    selectedVariant = experimentConfig.nykaaUserVariant;
    isEligible = true;
  }

  // if experiment is for SSR set the cookie for server rendering
  if (isSSR && selectedVariant !== undefined) {
    setExperimentCookie(id, selectedVariant);
  } else {
    clearExperimentCookie(id);
  }

  return {
    id,
    experimentLayer,
    isEligible,
    hash: expHash,
    variant: selectedVariant,
  };
};

/**
 * Function to evaluate all provided experiments
 * @param {object} data.configs - List of all provided Experiments config
 * @param {Function} data.onExperimentEvaluation - callback on experiment evaluation
 * @param {boolean} data.canBypassEligibilty - possibility to bypass eligibilities
 *
 * - This function on first pass just reads the cache and sets it for the experiments.
 *   This part is syncronous
 * - We use requestAnimationFrame to lazy evaluate the experiment segment
 *   for user and set it in cache
 * - Provides eligibility bypass check to 'evaluateExperimentVariant'.
 *   Union of 'canBypassEligibilty' and existence of 'nykaaUserVariant' in experiment config
 *
 */
const evaluateAllExperiments = ({
  configs = [],
  onExperimentEvaluation,
  canBypassEligibilty = false,
} : IEvaluateAllExperiments) => {
  // read the experiment cache and use it if we have
  const { uuid: cachedUUID, experiments = {} } = getCacheExperimentsConfig() || {};

  // read UUID from cache if available or read from cookie if available or generate it
  const uuid = cachedUUID || getExperimentUUID();

  const experimentInfo: ExperimentAllVariant = {};
  let experimentInterator = 0;
  const ssrExperimentInfo: string[] = [];

  try {
    const generatorRAf = () => {
      // evaluate each experiment using requestAnimationFrame
      window.requestAnimationFrame(() => {
        // if all experiment evaluations are done
        // update the cache for future reads
        if (experimentInterator === configs.length) {
          const cacheConfig = { uuid, experiments: experimentInfo };
          setCacheExperimentsConfig(experimentInfo);
          onExperimentEvaluation(cacheConfig);
          setSSRCacheCookie(ssrExperimentInfo);
          return;
        }

        const config = configs[experimentInterator];

        const experimentResult = evaluateExperimentVariant({
          uuid,
          experimentConfig: config,
          cachedExperiment: experiments[config.id],
          shouldBypassEligibilty: (canBypassEligibilty && !!(config.nykaaUserVariant)),
        });

        experimentInterator += 1;

        if (experimentResult !== undefined) {
          const { id, ...experimentVariant } = experimentResult;
          experimentInfo[id] = experimentVariant;

          // store any SSR experiment value - as we need to finaly set the SSR experiment
          // cache cookie vector for cloudfront
          if (config.isSSR && experimentVariant.isEligible && experimentVariant.variant) {
            ssrExperimentInfo.push(`${id}:${experimentVariant.variant}`);
          }
        }

        // recursively call the generator RAf till we evaluate all experiments
        generatorRAf();
      });
    };

    generatorRAf();
  } catch (err) {
    // show invalid experiment config on console
    // eslint-disable-next-line no-console
    console.error('Error occurred while setting up experiments', err);
    // send the cached experiment info, using setTimeout to queue the callback
    window.setTimeout(() => {
      onExperimentEvaluation({ uuid, experiments });
    }, 0);
  }
};

/**
 * Function to initialize experiments
 * @param {object} configs - List of all Experiments config
 * @param {Function} onExperimentEvaluation - callback on experiment evaluation
 *
 * - This function relies on 'evaluateAllExperiments' function for all processing/evaluation.
 *   Provides all experiments for evaluation
 *
 */
const initializeExperiment = (
  configs: ExperimentConfig[] = [],
  onExperimentEvaluation: (data: Omit<ExperimentCache, 'version'>) => void,
) => {
  evaluateAllExperiments({
    configs,
    onExperimentEvaluation,
  });
};

/**
 * Function to re-initialize experiments for nykaa users
 * @param {object} configs - List of all Experiments config
 * @param {Function} onExperimentEvaluation - callback on experiment evaluation
 * @param {string} customerEmail - contains logged in user's email
 *
 * - This function relies on 'evaluateAllExperiments' function for all processing/evaluation.
 *   Provides all experiments for evaluation with addtional boolean to bypass eligiblity
 *   for experiments with 'nykaaUserVariant' set as valid value
 *
 * - This function only continues if customerEmail param is Nykaa user
 *
 */
export const reInitializeForNykaaUsers = (
  configs: ExperimentConfig[] = [],
  onExperimentEvaluation: (data: Omit<ExperimentCache, 'version'>) => void,
  customerEmail?: string,
) => {
  // Check if user is Nykaa user or not
  if (customerEmail && checkForNykaaUser(customerEmail)) {
    let shouldReInitialize = false;
    for (let idx = 0; idx < configs.length; idx += 1) {
      if (configs[idx].nykaaUserVariant) {
        shouldReInitialize = true;
        break;
      }
    }

    // Re-Initialize only if there exists an experiment where 'nykaaUserVariant' is set
    if (shouldReInitialize) {
      evaluateAllExperiments({
        configs,
        onExperimentEvaluation,
        canBypassEligibilty: true,
      });
    }
  }
};

export default initializeExperiment;
