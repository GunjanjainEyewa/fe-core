import React, { memo } from 'react';
import { Provider } from '../context';
import { Intl } from '../types';


const IntlProvider = (props: Intl) => {
  const {
    locale,
    messages,
    defaultMessages,
    textComponent,
    onError,
    children,
  } = props;

  const intl = {
    locale,
    messages,
    defaultMessages,
    textComponent,
    onError: onError || undefined,
  };
  return <Provider value={intl}>{ children }</Provider>;
};

export default memo(IntlProvider);
