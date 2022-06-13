
import React from 'react';

import TickIcon from './Icons/Tick';
import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import { hexToRgb } from '../../styles/utils';


// this can be refactor we can make it simpler  inherited from button
type GetStyles = { theme: Theme } & Props;

export const getFontStyles = ({ theme }: Partial<GetStyles>) => {
  const { type140 } = theme.typography;

  return { ...type140, color: theme.colors.textInversePrimary };
};

export const getBorderStyles = ({ theme }: Partial<GetStyles>): any => {
  const border = theme.borders.border100;


  const borderRadius = theme.borders.radius30;

  return {
    ...border,
    borderRadius,
  };
};

export const getBackground = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  if (checked) {
    if (disabled) {
      return theme.colors.surface50;
    }
    return theme.colors.secondary;
  }
  return theme.colors.surface20;
};


export const getTitleStyles = ({ theme }: Partial<GetStyles>) => {
  const {
    type141,

  } = theme.typography;

  return { ...type141 };
};

export const getSwitchStyle = ({ checked }: Partial<GetStyles>) => {
  const style = {
    right: '3px',
    top: '3px',
  };

  if (!checked) {
    return {
      left: '1.5px',
      top: '1.5px',
      boxShadow: '0px 2px 3px rgba(0, 19, 37, 0.16)',
    };
  }
  return { ...style };
};

export const getButtonFontStyles = ({ theme }: Partial<GetStyles>) => {
  const { type142 } = theme.typography;

  return { ...type142 };
};

export const getIcon = () => <TickIcon />;

export const getHoverColor = ({ checked, theme }: Partial<GetStyles>) => {
  if (checked) {
    return hexToRgb(theme.colors.secondary, 0.16);
  }
  return hexToRgb(theme.colors.state, 0.08);
};

export const getActiveColor = ({ checked, theme }: Partial<GetStyles>) => {
  if (checked) {
    return hexToRgb(theme.colors.secondary, 0.24);
  }
  return hexToRgb(theme.colors.state, 0.16);
};

export const getBorderStyle = ({ checked, theme }: Partial<GetStyles>) => {
  const style: any = {
  };

  if (!checked) {
    style.border = `1.5px solid ${hexToRgb(theme.colors.textPrimary, 0.16)}`;
  }
  return { ...style };
};

export const getHoverStyle = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  const style:any = {};
  if (!disabled) {
    style.boxShadow = `0 0 0 10px ${getHoverColor({ checked, theme })}`;
  }
  return { ...style };
};
