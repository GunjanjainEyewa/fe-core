export interface SampleRate {
  from: number;
  to: number;
}

export interface VariantInfo {
  /** name - variant identifier */
  name: string;
  /** sampleRate - variant segment / bucket - number should be between 0 to 1 */
  sampleRate: SampleRate;
}

export interface ExperimentConfig {
  /** status - experiment is enabled/disabled */
  status: boolean;
  /** sampleRate - percentage of traffic to be targeted for experiment rate, number
   *  should be 0 - 1 */
  sampleRate: SampleRate;
  /** experimentLayer - experiment layer defines experiment audience across multiple experiments */
  experimentLayer: string;
  /** id - unique experiment id for a experiment layer */
  id: string;
  /** variants - list of all variants with their name and sample rate */
  variants: VariantInfo[];
  /** isSSR - whether this experiment is Server Side Rendered */
  isSSR?: boolean;
  /** nykaaUserVariant - allows Nykaa user to explicitily fall into specific variant */
  nykaaUserVariant?: string;
}

export interface ExperimentVariant {
  /** hash - md5 experiment hash */
  hash: string;
  /** experimentLayer - experiment audience layer */
  experimentLayer: string;
  /** isEligible - whether user is eligible for experiment or not */
  isEligible: boolean;
  /** variant - selected experiment variant */
  variant?: string;
}

export interface ExperimentAllVariant {
  [experimentId: string]: ExperimentVariant;
}

export interface ExperimentCache {
  /** uuid - unique user identifier */
  uuid: string;
  /** experiments - object containing experiment id as key and their evaluated variant */
  experiments: ExperimentAllVariant;
  /** version - cache version, required if in future cache object changes */
  version: string;
}
