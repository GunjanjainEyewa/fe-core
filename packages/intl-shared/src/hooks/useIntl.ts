import { useContext } from 'react';
import { Context } from '../context';
import { Intl } from '../types';

const useIntl = ():Intl => useContext(Context);
export default useIntl;
