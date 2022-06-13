// libs
import { createSelector } from 'reselect';

// defs
import { SSRExperiment } from './types';

export const experimentVariants = (state: {
  ssrExperiments: SSRExperiment;
}): SSRExperiment => state.ssrExperiments;

export const getSSRExperimentVariants = createSelector(
  [experimentVariants],
  (ssrExperimentVariants: SSRExperiment) => ssrExperimentVariants,
);

export const getSSRExperimentVariant = (
  state: { ssrExperiments: SSRExperiment },
  experimentId: string,
): { isEligible: boolean; variant?: string } => {
  const ssrExperimentVariants = getSSRExperimentVariants(state);
  const variant = ssrExperimentVariants[experimentId];

  if (variant === undefined) {
    return { isEligible: false };
  }

  return { isEligible: true, variant };
};
