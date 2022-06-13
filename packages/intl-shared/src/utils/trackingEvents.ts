import { pushEvent, pushData } from '@nykaa/data-layer/utils';
import { DEFAULT_LANGUAGE } from '../constants';
import {
  LANG_PREF_ACTION,
  LANG_FEEDBACK_RATING,
  SHOW_LANGUAGE_FEEDBACK,
  PAGE_LANG,
  CLOSE_LN_FEEDBACK_MODAL,
} from '../constants/trackingEvents';
import {
  FeedbackClick,
  ShownFeedback,
  ShownPageLang,
} from '../types/trackingEvents';

export const feedbackClick = ({ rating, lang }: FeedbackClick) => {
  pushEvent(LANG_FEEDBACK_RATING, {
    langFeedbackRating: rating,
    feedbackRequestLang: lang,
  });
};

export const shownFeedback = ({ lang, status }: ShownFeedback) => {
  pushEvent(SHOW_LANGUAGE_FEEDBACK, {
    feedbackRequestLang: lang,
    langFeedbackShown: status,
  });
};

export const actionOnLangPref = (value: string) => {
  pushEvent(LANG_PREF_ACTION, { langSelectPopupAction: value });
};

export const shownLangPrefAutoPopup = () => {
  pushData({ langPerfAutoPopup: 1 });
};

export const closeFeedback = () => {
  pushEvent(CLOSE_LN_FEEDBACK_MODAL, { lnFeedbackClosed: 1 });
};

export const shownPageLang = ({ lang }: ShownPageLang) => {
  pushEvent(PAGE_LANG, { pageLang: lang || DEFAULT_LANGUAGE });
};
