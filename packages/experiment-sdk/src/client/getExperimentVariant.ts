// helpers
import { getCacheExperimentsConfig } from './helpers';

/**
 * Get experiment variant
 * @param {string} experimentId - experiment identifier
 * @returns {object} Experiment Variant for the user if eligible
 */
const getExperimentVariant = (experimentId: string) => {
  // get cached exeriments
  const { experiments = {} } = getCacheExperimentsConfig() || {};

  const experiment = experiments[experimentId];

  // if we have not evaluated experiment or user is not eligible for experiment
  // return isEligible false
  if (experiment === undefined || experiment.isEligible === false) {
    return { isEligible: false };
  }

  return { isEligible: true, variant: experiment.variant };
};

export default getExperimentVariant;
