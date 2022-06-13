// libs
import React, { memo, useState } from 'react';

// components
import Toast from './components/Toast';

// contexts
import ToastContext from './ToastContext';

// defs
import { IToastConfig } from './types';

interface IToastProps {
  children: React.ReactNode;
}

function ToastWrapper({ children }: IToastProps) {
  const [toastConfigs, setToastConfigs] = useState<IToastConfig[]>([]);

  const onHide = (idx: number) => {
    setToastConfigs((configs) => [...configs.slice(0, idx), ...configs.slice(idx + 1)]);
  };

  const showToast = ({ afterHide, ...config }: IToastConfig) => {
    setToastConfigs((configs) => [...configs, config]);
    if (afterHide) {
      afterHide();
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toastConfigs.map((config, idx) => (
        <Toast
          type={config.type}
          message={config.message}
          onHide={() => onHide(idx)}
          hideTime={config.hideTime}
          key={`toast_${idx + 1}`}
        />
      ))}
    </ToastContext.Provider>
  );
}

export default memo(ToastWrapper);
