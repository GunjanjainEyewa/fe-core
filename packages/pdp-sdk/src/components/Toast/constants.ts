export enum TOASTER_TYPES {
  SUCCESS,
  WARNING,
  ERROR,
  INFO,
}

export const TOASTER_CLASSES = {
  [TOASTER_TYPES.SUCCESS]: 'success',
  [TOASTER_TYPES.WARNING]: 'warning',
  [TOASTER_TYPES.ERROR]: 'error',
  [TOASTER_TYPES.INFO]: 'info',
};
