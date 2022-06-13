// lib
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// defs
import { SSRExperiment } from './types';

const DEFAULT_EXPERIMENTS: SSRExperiment = {};

// we would have more hooks in future so disabling prefer default
// eslint-disable-next-line import/prefer-default-export
export const useSSRExperimentVariant = (experimentId: string) => {
  const ssrExperiments = useSelector(
    (state: { ssrExperiments: SSRExperiment }) => state.ssrExperiments || DEFAULT_EXPERIMENTS,
  );

  return useMemo(() => {
    const variant = ssrExperiments[experimentId] || undefined;

    if (variant === undefined) {
      return { isEligible: false };
    }

    return { isEligible: true, variant };
  }, [experimentId, ssrExperiments]);
};
