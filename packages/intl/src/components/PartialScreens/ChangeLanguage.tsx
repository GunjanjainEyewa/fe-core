import React, { useState, useEffect } from 'react';
import { styled } from '@nykaa/ui-components';
import { updatePathname } from '@nykaa/intl-shared';
import { useDispatch } from 'react-redux';
import { setCookie } from '@nykaa/utils/cookies';
import { DEFAULT_TRANSLATE, LN_EXPERIMENT } from '@nykaa/intl-shared/constants';
import { RequiredKeys } from '@nykaa/intl-shared/types';
import LanguagePreference from '@nykaa/intl-shared/components/LangPreference';
import { actionOnLangPref } from '@nykaa/intl-shared/utils/trackingEvents';
import { CLOSED } from '@nykaa/intl-shared/constants/trackingEvents';
import { removeURLParameter as removeQuery } from '@nykaa/intl-shared/utils';
import {
  LANGUAGE_COOKIE,
  HAS_SEEN_LANG_PREF,
} from '@nykaa/intl-shared/constants/cookies';
import { appendQueryStringToUrl } from '@nykaa/utils/urls';
import { toggleLanguageModal } from '@nykaa/intl-shared/store/action';
import Title from './Title';
import View from './View';
import {
  SIX_MONTHS_COOKIE_AGE, YES, CLOSE,
} from '../../constants';


interface Props {
  close: () => void;
  isHidden?: boolean;
  values: RequiredKeys[];
  lang: string
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Adjusted font-weight from 700 to 600
const Button = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 16px;
  color: white;
  ${({ theme }) => theme.typography.titleSmall};
`;

function ChangeLanguage({
  close = null,
  isHidden = true,
  values = [],
  lang,
}: Props) {
  // Filter languages with ID
  const langsWithID: RequiredKeys[] = values?.filter((tempLang) => tempLang.ID);
  if (!langsWithID.length) {
    return null;
  }
  const langIds = langsWithID.map((tempLang: RequiredKeys) => tempLang.ID);

  const preSelectedLang = (languages: string[]) => {
    for (let index = 0; index < languages.length; index += 1) {
      const id = languages[index];
      if (id === lang) {
        return Number(index);
      }
    }
    return null;
  };

  const dispatch = useDispatch();

  // Local State Setup for options
  const [option, setOption] = useState<number>(preSelectedLang(langIds) || 0);
  const closeText:string = values[option].CLOSE || CLOSE;
  const customText: string = values[option].TRANSLATE_TEXT || DEFAULT_TRANSLATE;

  const handleClose = (hasTakenAction?: boolean):void => {
    if (!hasTakenAction) {
      // Tracking
      actionOnLangPref(CLOSED);
    }
    toggleLanguageModal()(dispatch);
    setCookie(HAS_SEEN_LANG_PREF, true, SIX_MONTHS_COOKIE_AGE);
    close();
  };

  const reloadPage = (languages: string[], customURL: string) => {
    const { pathname, search } = window.location;
    const lnRemovedPath = updatePathname((customURL || pathname), languages);
    const urlWithQueries = `${lnRemovedPath}${search}`;
    const lnRemovedURL = removeQuery(urlWithQueries, LN_EXPERIMENT);
    window.location.href = lnRemovedURL;
  };

  const hasChangedLanguage = (oldLang: string, newLanguage: string) => {
    const userAction = `${oldLang}_change_to_${newLanguage}`;
    const queryStringExists = (window.location.href.indexOf('perfAction') > -1);
    let customURL = window.location.href;
    const query = `perfAction=${userAction}`;
    if (queryStringExists) {
      const regex = /perfAction=([a-z|_]*)/ig;
      customURL = customURL.replace(regex, query);
    } else {
      customURL = appendQueryStringToUrl(window.location.href, query);
    }
    handleClose(true);
    reloadPage(langIds, customURL);
  };

  const noLangChange = () => {
    const userAction = `${lang}_continue`;
    handleClose(true);
    actionOnLangPref(userAction);
  };

  const handleLanguageChange = (languages: RequiredKeys[]) => {
    const newLanguage: string = languages[option].ID;
    setCookie(LANGUAGE_COOKIE, newLanguage, SIX_MONTHS_COOKIE_AGE);
    if (newLanguage !== lang) {
      hasChangedLanguage(lang, newLanguage);
    } else if (lang === newLanguage) {
      noLangChange();
    }
  };

  useEffect(() => {
    setOption(preSelectedLang(langIds));
  }, [isHidden]);

  return (
    <View showModal={!isHidden} onClose={() => handleClose()} closeText={closeText}>
      <Title text={customText} />
      <Wrapper>
        <LanguagePreference
          options={langsWithID}
          defaultSelected={option}
          onChange={(index: number):void => setOption(index)}
        />
        <Button onClick={() => handleLanguageChange(langsWithID)}>
          { langsWithID[option]?.YES || YES }
        </Button>
      </Wrapper>
    </View>
  );
}

export default ChangeLanguage;
