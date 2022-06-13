// defs
import { Request } from 'express';
import { ExperimentConfig } from '../../types';

// constants
import { EXPERIMENT_SSR_COOKIE_PREFIX } from '../../constants';

// we would have more helpers in future so disabling prefer default
// eslint-disable-next-line import/prefer-default-export
export const getInitialSSRExperimentState = (
  req: Request,
  experimentConfig: ExperimentConfig[],
) => {
  const { cookies } = req;

  const experimentVariants: { [id: string]: string } = {};

  experimentConfig.forEach((config) => {
    if (
      config.status === false
      || cookies[`${EXPERIMENT_SSR_COOKIE_PREFIX}${config.id}`] === undefined
    ) {
      return;
    }
    experimentVariants[config.id] = cookies[`${EXPERIMENT_SSR_COOKIE_PREFIX}${config.id}`];
  });

  return experimentVariants;
};
