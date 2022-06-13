import useIntl from './useIntl';
import { handleDynamicValues } from '../utils';
import { Template } from '../types';

// This hook take the ID and Other Parameters & returns It's Correspondence value
const useFormatMessage = (id: string = '', defaultMessage?: string, values?: Template): string => {
  const { messages: translationStrings = {}, defaultMessages = {} } = useIntl();
  const props = {
    id,
    defaultTranslationString: defaultMessage,
    values,
    translationStrings,
  };
  let msg = handleDynamicValues(props);
  if (!msg) {
    msg = defaultMessages?.[id];
  }
  return msg;
};

export default useFormatMessage;
