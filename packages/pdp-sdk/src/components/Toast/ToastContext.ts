// libs
import { createContext, useContext } from 'react';

// defs
import { IToastConfig } from './types';

interface IToastContext {
  showToast: (config: IToastConfig) => void;
}

const EMPTY_FUNC = () => {};

const initialValue: IToastContext = {
  showToast: EMPTY_FUNC,
};

const ToastContext = createContext(initialValue);

export const useToastContext = () => useContext(ToastContext);

export default ToastContext;
