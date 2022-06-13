
import React from 'react';

import TickIcon from './Icons/Tick';
import IndeterminateBarIcon from './Icons/IndeterminateBar';
import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import { hexToRgb } from '../../styles/utils';


// this can be refactor we can make it simpler  inherited from button
type GetStyles = { theme: Theme } & Props;

export const getFontStyles = ({ theme, disabled }: Partial<GetStyles>) => {
  const { bodyMedium } = theme.typography;
  const { textPrimary, textDisabled } = theme.colors;
  let color = hexToRgb(textPrimary, 0.92);

  if (disabled) {
    color = textDisabled;
  }

  return { ...bodyMedium, color };
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
    return theme.colors.primary;
  }
  return theme.colors.surface20;
};


export const getTitleStyles = ({ theme }: Partial<GetStyles>) => {
  const {
    type141,

  } = theme.typography;

  return { ...type141 };
};


export const getButtonFontStyles = ({ theme }: Partial<GetStyles>) => {
  const { type142 } = theme.typography;

  return { ...type142 };
};

export const getIcon = () => <TickIcon />;

export const getIndeterminateIcon = () => <IndeterminateBarIcon />;

export const getHoverColor = ({ checked, theme }: Partial<GetStyles>) => {
  if (checked) {
    return hexToRgb(theme.colors.checkboxCheckedFill, 0.08);
  }
  return hexToRgb(theme.colors.state, 0.08);
};

export const getActiveColor = ({ checked, theme }: Partial<GetStyles>) => {
  if (checked) {
    return hexToRgb(theme.colors.checkboxCheckedFill, 0.16);
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
    style.boxShadow = `0 0 0 6px ${getHoverColor({ checked, theme })}`;
    style.background = `${getHoverColor({ checked, theme })}`;
  }
  return { ...style };
};


export const getCheckBoxStyle = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  const style:any = {
    background: theme.colors.checkboxCheckedFill,
  };

  let opacity = 0.16;
  if (disabled) {
    style.background = hexToRgb(theme.colors.textPrimary, opacity);
  }


  if (!checked) {
    style.border = `1.5px solid ${hexToRgb(theme.colors.textPrimary, opacity)}`;
    style.background = theme.colors.checkboxUnCheckedFill;
    if (disabled) {
      opacity = 0.08;
    }
  }
  return { ...style };
};


export const getCheckBoxActiveStyle = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  const { textOutline, textSecondary } = theme.colors;
  const { border150 } = theme.borders;
  if (!disabled) {
    let style:any = {
      ...border150,
      borderColor: textOutline,
      background: theme.colors.checkboxCheckedFill,
      boxSizing: 'border-box',
    };

    if (!checked) {
      style = {
        ...style,
        ...border150,
      };
      style.borderColor = textSecondary;
      style.background = theme.colors.checkboxUnCheckedFill;
      style.boxSizing = 'border-box';
    }
    return { ...style };
  }

  return {};
};

export const getActiveStyle = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  const style:any = {};
  if (!disabled) {
    style.boxShadow = `0 0 0 6px ${getActiveColor({ checked, theme })}`;
    style.background = `${getActiveColor({ checked, theme })}`;
  }
  return { ...style };
};

export const getActiveStyleBox = ({ checked, theme }: Partial<GetStyles>) => {
  const style:any = {};
  if (checked) {
    style.boxShadow = `0 0 0 6px ${getActiveColor({ checked, theme })}`;
    style.background = `${getActiveColor({ checked, theme })}`;
  }
  return { ...style };
};
