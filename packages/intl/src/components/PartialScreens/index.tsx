import React, { memo, useState, useEffect } from 'react';
import { RequiredKeys, State } from '@eyewa/intl-shared/types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguageModal } from '@eyewa/intl-shared/store/action';
import { DEFAULT_FEEDBACK } from '@eyewa/intl-shared/constants';
import { shownLangPrefAutoPopup } from '@eyewa/intl-shared/utils/trackingEvents';
import { HAS_SEEN_LANG_PREF } from '@eyewa/intl-shared/constants/cookies';
import { getCookie } from '@eyewa/utils/cookies';
import Feedback from './Feedback';
import ChangeLanguage from './ChangeLanguage';
import { CLOSE } from '../../constants';

interface Props {
  values: RequiredKeys[],
  lang: string,
  autoPopupEnabled?: boolean,
}
const MultilingualModal = ({ values = [], lang, autoPopupEnabled = false }: Props): JSX.Element => {
  const isValidLang = values?.find((langObj) => langObj?.ID === lang);
  if (!isValidLang) {
    return null;
  }

  const [isHidden, setIsHidden] = useState(true);

  const dispatch = useDispatch();
  const toggleModal = useSelector((state: State) => state?.langConfig?.showModal);

  const selectedLangObj = values.find((val: RequiredKeys) => val.ID === lang);
  const customFeedback: string = selectedLangObj?.FEEDBACK_TEXT || DEFAULT_FEEDBACK;
  const customClose: string = selectedLangObj?.CLOSE || CLOSE;

  useEffect(() => {
    setIsHidden(!toggleModal);
  }, [toggleModal]);

  useEffect(() => {
    // Check if User has already seen the Language Preference popup
    const hasSeenLangPref = Boolean(getCookie(HAS_SEEN_LANG_PREF));
    if (!hasSeenLangPref && autoPopupEnabled) {
      setIsHidden(false);
      shownLangPrefAutoPopup();
      toggleLanguageModal()(dispatch);
    }
  }, []);

  return (
    <>
      <ChangeLanguage
        isHidden={isHidden}
        close={() => setIsHidden(true)}
        lang={lang}
        values={values}
      />
      <Feedback
        customTitle={customFeedback}
        customClose={customClose}
        lang={lang}
      />
    </>
  );
};

export default memo(MultilingualModal);
