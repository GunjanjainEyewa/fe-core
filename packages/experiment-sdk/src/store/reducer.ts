// defs
import { SSRExperiment } from './types';

const DEFAULT_EXPERIMENTS = {};

const experimentsReducer = (state: SSRExperiment = DEFAULT_EXPERIMENTS): SSRExperiment => state;

export default experimentsReducer;
