import { Theme } from '../../themes/types';

import {
  BarLoaderProps,
  SpinnerProps,
} from '../types';
import {
  SIZE,
  SPOT_LOADER_SIZE,
  BAR_LOADER_WIDTH,
  TWO_PI,
  SPINNER_CONTAINER_SIZE,
  SPINNER_RADIUS,
  SPINNER_LOGO_SIZE,
} from '../constants';

type GetStyles = { theme: Theme, state: string } & BarLoaderProps & SpinnerProps;

export const getFontStyle = ({ size, theme }: Partial<GetStyles>) => {
  const { subTitleSmall, subTitleMedium, subTitleLarge } = theme.typography;
  switch (size) {
    case SIZE.small: {
      return subTitleSmall;
    }
    case SIZE.medium: {
      return subTitleSmall;
    }
    case SIZE.large: {
      return subTitleMedium;
    }
    case SIZE.xLarge: {
      return subTitleLarge;
    }
    default: {
      return {};
    }
  }
};

// Helpers for Spinner Loader
export const getSpinnerSizeStyle = ({ size }: Partial<GetStyles>) => {
  const {
    small, medium, large, xLarge,
  } = SPINNER_CONTAINER_SIZE;
  let dimensions = large;
  switch (size) {
    case SIZE.small:
      dimensions = small;
      break;
    case SIZE.medium:
      dimensions = medium;
      break;
    case SIZE.large:
      dimensions = large;
      break;
    case SIZE.xLarge:
      dimensions = xLarge;
      break;
    default:
      break;
  }

  return { height: `${dimensions}px`, width: `${dimensions}px` };
};

export const getSpinnerRadius = ({ size }: Partial<GetStyles>) => {
  const {
    small, medium, large, xLarge,
  } = SPINNER_RADIUS;
  let radius = large;
  switch (size) {
    case SIZE.small:
      radius = small;
      break;
    case SIZE.medium:
      radius = medium;
      break;
    case SIZE.large:
      radius = large;
      break;
    case SIZE.xLarge:
      radius = xLarge;
      break;
    default:
      break;
  }

  return { r: radius };
};

export const getSpinnerLogoSize = ({ size }: Partial<GetStyles>) => {
  const {
    small, medium, large, xLarge,
  } = SPINNER_LOGO_SIZE;
  let width = large;
  switch (size) {
    case SIZE.small:
      width = small;
      break;
    case SIZE.medium:
      width = medium;
      break;
    case SIZE.large:
      width = large;
      break;
    case SIZE.xLarge:
      width = xLarge;
      break;
    default:
      break;
  }

  return { width: `${width}px` };
};

// Circumference is 2 pi r
export const getDasharray = ({ size }: Partial<GetStyles>) => (
  getSpinnerRadius({ size }).r * TWO_PI
);

export const getDashoffset = ({ value, size }: Partial<GetStyles>) => {
  const circumference = getSpinnerRadius({ size }).r * TWO_PI;
  const filledPart = circumference - ((value / 100) * circumference);
  return `${filledPart}px`;
};

// Helpers for Bar Loader
export const getBarLoaderWidth = ({ fullScreen, width }: Partial<GetStyles>) => {
  if (fullScreen) {
    return 'inherit';
  }

  return width || BAR_LOADER_WIDTH;
};

// Helpers for spot loader
export const getSpotSize = ({ theme, size }: Partial<GetStyles>) => {
  let dimensions: number = SPOT_LOADER_SIZE.large;
  switch (size) {
    case SIZE.small:
      dimensions = SPOT_LOADER_SIZE.small;
      break;
    case SIZE.medium:
      dimensions = SPOT_LOADER_SIZE.medium;
      break;
    case SIZE.large:
      dimensions = SPOT_LOADER_SIZE.large;
      break;
    case SIZE.xLarge:
      dimensions = SPOT_LOADER_SIZE.xLarge;
      break;
    default:
      break;
  }

  return {
    border: `${dimensions}px solid ${theme.colors.primary}`,
    marginRight: `${dimensions}px`,
  };
};
