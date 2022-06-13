
import React from 'react';

import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import {
  SIZE,
  STATE,
} from '../constants';
import { hexToRgb } from '../../styles/utils';

import CloseIcon from './Icons/close';


// this can be refactor we can make it simpler  inherited from button
type GetStyles = { theme: Theme, state: string } & Props ;


export const getHoverStyle = () => {
  const style:any = {};

  return { ...style };
};


export const getSizeStyle = ({ theme, size }: Partial<GetStyles>) => {
  const { spacing60, spacing80 } = theme.spacing;
  // Replace these with tokens, yet to be made by design team
  switch (size) {
    case SIZE.small: {
      return {
        padding: `6px ${spacing60}`,
      };
    }
    case SIZE.medium: {
      return {
        padding: `10px ${spacing80}`,
      };
    }
    case SIZE.large: {
      return {
        padding: `${spacing60} ${spacing80}`,
      };
    }
    default: {
      return {};
    }
  }
};


export const getBorderStyle = ({
  theme, dismissible, selected, disabled,
}: Partial<GetStyles>) => {
  let color = theme.colors.textOutline;
  if ((!disabled) && (dismissible || selected)) {
    color = theme.colors.secondary;
  }

  return ({
    border: `1px solid ${color}`,
  });
};

export const getFontStyle = ({ size, theme }: Partial<GetStyles>) => {
  switch (size) {
    case SIZE.small: {
      return theme.typography.bodyMedium;
    }
    case SIZE.medium: {
      return theme.typography.bodyMedium;
    }
    case SIZE.large: {
      return theme.typography.bodyLarge;
    }
    default: {
      return {};
    }
  }
};

export const getFontColor = ({
  theme, dismissible, disabled, selected,
}: Partial<GetStyles>) => {
  let color = hexToRgb(theme.colors.textPrimary, 0.64);
  if (disabled) {
    color = hexToRgb(theme.colors.textPrimary, 0.36);
  } else if (dismissible || selected) {
    color = theme.colors.secondary;
  }

  return color;
};

export const getIcon = () => <CloseIcon />;

export const getBackGroundColor = ({
  theme, dismissible, state, disabled, selected,
}: Partial<GetStyles>) => {
  if (disabled) {
    return theme.colors.surface30;
  }
  if (!(dismissible || selected || disabled) && state === STATE.hover) {
    return hexToRgb(theme.colors.state, 0.08);
  }
  if (!(dismissible || selected || disabled) && state === STATE.focus) {
    return hexToRgb(theme.colors.state, 0.16);
  }
  if (dismissible || selected) {
    return hexToRgb(theme.colors.secondary, 0.08);
  }
  return theme.colors.surface;
};

export const getIconStyle = ({ theme, dismissible }: Partial<GetStyles>) => {
  if (dismissible) {
    return theme.colors.secondary;
  }
  return '';
};

export const getImageStyle = ({ imgSrc, size }: Partial<GetStyles>) => {
  let margin = 1;
  if (size === SIZE.large) {
    margin = 3;
  }
  return ({
    background: `url(${imgSrc})`,
    'margin-top': `${margin}px`,
  });
};

export const getCloseIconStyle = ({ size }: Partial<GetStyles>) => {
  let margin = 2;
  if (size === SIZE.large) {
    margin = 5;
  }
  return ({
    'margin-top': `${margin}px`,
  });
};

export const getIconMargin = ({ size }: Partial<GetStyles>) => {
  let margin = 0;
  if (size === SIZE.large) {
    margin = 2;
  }
  return ({
    'margin-top': `${margin}px`,
  });
};

export const getCursor = ({ disabled }: Partial<GetStyles>) => (disabled ? 'not-allowed' : 'pointer');
