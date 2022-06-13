import { ProviderValues } from '../types';
import LangStrings from './lang.data.json';

export const DEFAULT_CTX_VALUE = {
  locale: '',
  messages: {},
  defaultMessages: {},
  textComponent: 'span',
  onError: () => { },
};

export const BODY_OVERFLOW_FOR_MODAL = 'overflow-hidden';

export const CACHE_KEY = 'LANG_CONFIG';
export const DEFAULT_LANGUAGE = 'en';
export const LN_EXPERIMENT = 'ln_exp';
export const HIDE_MODALS_PATHS = 'pathsToHideModals';
export const GET_LANG_CONFIG_URL = ():string => process.env.LANG_CONFIG_URL || '';
export const DEFAULT_FEEDBACK = 'Rate your experience by giving us stars';
export const DEFAULT_TRANSLATE = 'Do you want to translate this page into';
// langConfig Reducers Keys
export const LANG = 'lang';
export const LANG_CONFIG = 'langConfig';
export const REGION_HEADER = 'cloudfront-viewer-country-region';
export const REMOTE_CONFIG_KEY_IN_LOCALS = 'remoteConfig';
export const VRN_REGION_ELIGIBILITY = 'vrnRegionEligibility';
export const VRN_REGION_ELIGIBILITY_LEVELS = {
  ELIGIBLE: 'Eligible',
  NOT_ELIGIBLE: 'Not_eligible',
  STATE_NOT_COVERED: 'State_not_covered',
  ALREADY_ON_EXPERIMENT: 'Experiment_User',
};

// define it on the component file only
export const FEEDBACK_MODAL_VISIBLE_PIXEL = 100000;

export const DEFAULT_VALUES: ProviderValues = {
  lang: DEFAULT_LANGUAGE,
  strings: LangStrings,
  isExperimentEnabled: false,
  autoPopUpSwitch: false,
};

export const VRN_SOURCE = 'vernac_source';
export const EXP_USER = 'exp';
export const NON_VRN_USER = 'nonvernac';
export const ROLL_OUT_ELIGIBLE = 'eligible';
