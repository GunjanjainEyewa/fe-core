export interface KeyStringObj {
  [key: string]: string
}

export interface GetTranslationWithoutHook {
  id: string,
  translationStrings: KeyStringObj,
  defaultTranslationString?: string,
  values?: KeyStringObj,
}

export interface LanguageKeys {
  TITLE: string,
  ID: string,
  [key: string]: string
}

export interface Template {
  [key: string]: string | number;
}

export interface Intl {
  locale: string;
  messages: {
    [key: string]: string;
  };
  defaultMessages?: {
    [key:string]: string
  };
  textComponent?: any;
  children?: React.ReactNode;
  onError?: () => void;
}

export interface Message {
  id?: string;
  defaultMessage?: string;
  description?: string;
  tagName?: any;
  className?: string;
  values? : {
    [key:string]: string | number
  }
}

export interface LangOptions {
  [key: string]: LanguageKeys;
}

export interface LangState {
  lang: string;
  isExperimentEnabled: boolean;
  strings: LangOptions;
  showModal?: boolean;
  pathsToHideModals?: string[];
}

export interface State {
  langConfig: LangState,
  [key: string]: LangState | object
}

export interface QueryParamsObject {
  [key: string]: string;
}
export interface ProviderValues {
  lang: string;
  isExperimentEnabled: boolean;
  strings: LangOptions;
  pathsToHideModals?: string[];
  modal?: React.FC<{values: RequiredKeys[], lang: string, autoPopupEnabled: boolean}>;
  autoPopUpSwitch: boolean;
}
export interface CustomProviderProps {
  children: React.ReactNode,
  config: ProviderValues
}

export interface RequiredKeys {
  ID: string,
  TITLE: string,
  CLOSE: string,
  TRANSLATE_TEXT: string,
  FEEDBACK_TEXT: string,
  YES: string,
}

export interface DynamicStringConfigs {
  id: string;
  translationStrings: KeyStringObj;
  defaultTranslationString: string;
  values: Template | undefined;
}
