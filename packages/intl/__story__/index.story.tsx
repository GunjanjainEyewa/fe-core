import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Store from '@nykaa/intl-shared/store/reducer';
import { CustomProvider } from '@nykaa/intl-shared';
import Strings from '@nykaa/intl-shared/constants/lang.data.json';
import MultilingualModal from '../src/components/PartialScreens';


const values = {
  lang: 'hi',
  lnExp: true,
  strings: {
    ...Strings,
    hi: {
      TITLE: 'hindi',
      ID: 'hi',
      YES: 'Yes',
      ADD_TO_BAG: 'add to bag'
    }
  },
  modal: MultilingualModal
}

const reducers = combineReducers({ 
  langConfig: Store
});

const store = createStore(reducers);


export const WithCustomProvider = () => {
  return(
    <Router>
      <Provider store={store}>
        <div style={{ height: 2000 }}>
          <CustomProvider config={values}>
            Using CustomProvider
          </CustomProvider>
        </div>
      </Provider>
    </Router>
  )
}

export default {
  title: 'NykaaIntl',
  component: WithCustomProvider,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};
