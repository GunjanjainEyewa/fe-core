import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';

import { deleteCookie } from '@nykaa/utils/cookies';
import Provider from './Provider';
import { CustomProviderProps as Props, RequiredKeys } from '../types';
import {
  DEFAULT_FEEDBACK,
  DEFAULT_TRANSLATE,
  DEFAULT_LANGUAGE,
  DEFAULT_VALUES,
} from '../constants';
import { shownPageLang } from '../utils/trackingEvents';


function CustomProvider({ config = DEFAULT_VALUES, children }: Props) {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const {
    lang: language,
    isExperimentEnabled,
    strings,
    modal: Modal,
    pathsToHideModals,
    autoPopUpSwitch = false,
  } = config;
  const [showModal, setShowModal] = useState(false);
  const showExperiment = isExperimentEnabled || false;
  const lang: string = showExperiment && language ? language : DEFAULT_LANGUAGE;

  const hideModals = (pathsToHideModals && pathsToHideModals?.includes(location?.pathname));

  const getModalData = () => {
    const langs = Object.keys(strings || {});
    const res:RequiredKeys[] = [];
    langs.forEach((langKey) => {
      const {
        ID = langKey,
        TITLE,
        YES = 'yes',
        CLOSE = 'close',
        TRANSLATE_TEXT = DEFAULT_TRANSLATE,
        FEEDBACK_TEXT = DEFAULT_FEEDBACK,
      } = strings[langKey];

      const formattedObj = {
        ID, TITLE, CLOSE, TRANSLATE_TEXT, FEEDBACK_TEXT, YES,
      };
      res.push(formattedObj);
    });
    return res;
  };

  useEffect(() => {
    if (showExperiment) {
      shownPageLang({ lang: lang || DEFAULT_LANGUAGE });
    } else {
      deleteCookie('lang');
    }
    setLoading(false);
  }, [lang]);

  useEffect(() => {
    const modalStatus = (showExperiment && Modal && !hideModals && !isLoading);
    setShowModal(modalStatus);
  }, [showExperiment, Modal, hideModals, isLoading]);

  return (
    <Provider
      locale={lang}
      messages={strings[lang]}
      defaultMessages={strings[DEFAULT_LANGUAGE]}
    >
      {/* Setting html lang */}
      <Helmet htmlAttributes={{ lang }} />
      {/* Nested Components */}
      { children }
      { showModal && (
        <Modal
          lang={lang}
          values={getModalData()}
          autoPopupEnabled={autoPopUpSwitch}
        />
      ) }
    </Provider>
  );
}

export default CustomProvider;
