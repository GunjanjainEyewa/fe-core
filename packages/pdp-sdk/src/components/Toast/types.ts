import { TOASTER_TYPES } from './constants';

export interface IToastConfig {
  type: TOASTER_TYPES;
  message: string;
  hideTime?: number;
  afterHide?: VoidFunction;
}
