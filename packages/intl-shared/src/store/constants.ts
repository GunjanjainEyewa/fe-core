import langJSON from '../constants/lang.data.json';
import { LangState } from '../types';
import {
  DEFAULT_LANGUAGE, LANG, HIDE_MODALS_PATHS,
} from '../constants';


export const DEFAULT_CONFIG: LangState = {
  // This is the current selected Language, By defualt it is set to DEFAULT_LANGUAGE variable
  [LANG]: DEFAULT_LANGUAGE,
  // Store If user is the part of experiment or not. By default, It's set to false
  isExperimentEnabled: false,
  [HIDE_MODALS_PATHS]: [],
  // Storing languages and all string in strings key, By defualt It's set to defualt strings
  strings: langJSON,
  // using showModal to show the language preference Modal
  showModal: false,
};

export const dummy = () => {};
