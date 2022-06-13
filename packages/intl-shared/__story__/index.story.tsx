import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Strings from '../constants/lang.data.json';
import IntlProvider from '../src/components/Provider';
import Store from '../store/reducer';
import { CustomProvider, FormattedMessage, useStringFromId } from '../src';
import LangPreference from '../src/components/LangPreference';
import { State, RequiredKeys, LanguageKeys, GetTranslationWithoutHook } from '../src/types';
import { DEFAULT_FEEDBACK, DEFAULT_TRANSLATE} from '../src/constants';
import { toggleLanguageModal } from '../store/action';
import Modal from '../../intl/src/components/PartialScreens';
import { getTranslationWithoutHook } from '../src/utils';

const ReduxToToggle = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    toggleLanguageModal()(dispatch);
  }

  return(
    <button
      onClick={()=> handleChange()}
      style={{ padding: 10, border: '1px solid black', cursor: 'pointer' }}
    >
      Toggle Modal
    </button>
  )
}
const Component = () => {
  const TEXT = useStringFromId('ADD_TO_BAG');

  return (
    <div>
      <div>
        <strong> FormattedMessage </strong>
        <br/>
        <FormattedMessage id="DYNAMIC_DELIVERY_EST"
          values={{
            est: 4
          }}
        />
      </div>
      <br />
      <div>
        <p>
          <strong>
            Using useStringFromId Hook
          </strong>
        </p>
        <span>
          {TEXT || typeof useStringFromId}
        </span>
      </div>
    </div>
  )
}

const reducers = combineReducers({ 
  langConfig: Store
});

const store = createStore(reducers);

const values = {
  lang: 'hi',
  isExperimentEnabled: true,
  strings: {
    ...Strings,
    hi: {
      TITLE: "हिन्दी",
      ID: "hi",
      YES: "हां",
      CLOSE: "बंद करे",
      TRANSLATE_TEXT: "क्या आप इस पेज को इस भाषा में अनुवाद करना चाहते हैं",
      FEEDBACK_TEXT: "हमें स्टार देकर अपना अनुभव बताएं",
      ADD_TO_BAG: "बैग में जोड़ें",
      DYNAMIC_DELIVERY_EST: "इसे पाने के लिए अभी ऑर्डर करें {est}",
    }
  },
  modal: Modal,
  autoPopUpSwitch: false,
}

const { lang, strings } = values;

export const Index = () => {
  return(
    <Router>
      {/* Using Redux because MultilingualModal is using it */}
      <Provider store={store}>
        <div style={{ height: 8000 }}>
          <CustomProvider config={values}>
            This is using CustomProvider Without Redux
            <Component />
            <ReduxToToggle />
          </CustomProvider>
        </div>
      </Provider>
    </Router>
  )
}

const IntlComponent = () => {
  const TEXT = useStringFromId('ADD_TO_BAG');
  return(
    <>
      Using FormattedMessage
      <br/>
      <FormattedMessage id="TITLE" />
      <hr/>
      using useStringFromId hook
      <br/>
      { TEXT }
    </>
  );
}

export const WithIntlProvider = () => {
  const messages = strings[lang];
  return(
    <IntlProvider
      locale={lang}
      messages={messages}
      defaultMessages={strings['en']}
    >
      <IntlComponent />
      <FormattedMessage
        id='DYNAMIC_DELIVERY_EST'
        values={{
          est: 40
        }}
      />
    </IntlProvider>
  );
}

export const FuntionWithoutHook = () => {
  const params: GetTranslationWithoutHook = {
    id: 'DYNAMIC_DELIVERY_EST',
    translationStrings: values.strings.hi,
    defaultTranslationString: 'DELIVERY {est} DEFAULT',
    values: {
      est: "20"
    }
  }
  const str = getTranslationWithoutHook(params);
  return(
    <>{str}</>
  );
}

const LanguagePref = () => {
  const [option, setOption] = useState(0);
  
  const getLanguagesWithDetails = () => {
    const langs = Object.keys(strings || {});
    const res:RequiredKeys[] = [];
    langs.forEach((langKey) => {
      const {
        ID = langKey,
        TITLE,
        YES = 'yes',
        CLOSE = 'Close',
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

  return(
    <>
      <LangPreference
        options={getLanguagesWithDetails()}
        defaultSelected={option}
        onChange={(i:number):void => setOption(i)}
      />
      Selected Option { option }
    </>
  )
}

export const Radio = () => {
  return(
    <Router>
      {/* Using Redux because MultilingualModal is using it */}
      <Provider store={store}>  
        <CustomProvider config={values}>
          <LanguagePref />
        </CustomProvider>
      </Provider>
    </Router>
  )
}

export default {
  title: 'Nykaa Intl Utils',
  component: CustomProvider,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};
