
import React from 'react';

import TickIcon from './Icons/Tick';
import CircleICon from './Icons/Circle';
import { Theme } from '../../themes/types';
import {
  Props,
  TYPES,
  ALIGN,
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

export const getBackground = ({ theme, disabled }: Partial<GetStyles>) => {
  if (disabled) {
    return hexToRgb(theme.colors.textOutline, 0.16);
  }

  return theme.colors.checkboxCheckedFill;
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

export const getIcon = (type: string) => (type === TYPES.list ? <TickIcon /> : <CircleICon />);

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
  };

  let opacity = 0.16;
  if (disabled) {
    style.background = hexToRgb(theme.colors.textPrimary, opacity);
  }


  if (!checked) {
    if (disabled) {
      opacity = 0.08;
    }
    style.border = `1.5px solid ${hexToRgb(theme.colors.textPrimary, opacity)}`;
    style.background = theme.colors.checkboxUnCheckedFill;
  }
  return { ...style };
};
export const getInverseColor = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  const style:any = {
    background: theme.colors.checkboxUnCheckedFill,
  };

  if (disabled) {
    style.background = theme.colors.textPrimary;
  }


  if (!checked) {
    style.background = theme.colors.checkboxCheckedFill;
  }
  return { ...style };
};


export const getCheckBoxActiveStyle = ({ checked, theme, disabled }: Partial<GetStyles>) => {
  const { textOutline, textSecondary } = theme.colors;
  const { border150 } = theme.borders;
  if (!disabled) {
    let style: {
      borderColor: string,
      background: string,
      boxSizing: string,
    } = {
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

export const getIconStyle = ({ type }: Partial<GetStyles>) => {
  const style:any = {};
  style.position = 'absolute';
  style.top = `${(type === TYPES.list ? '5px' : '7px')}`;
  style.left = `${(type === TYPES.list ? '4px' : '7px')}`;
  return { ...style };
};

export const getDirectionStyle = (align : keyof typeof ALIGN) => {
  const style:any = {};
  style.display = 'flex';
  style['flex-direction'] = `${(align === ALIGN.horizontal ? 'row' : 'column')}`;
  style['justify-content'] = 'space-between';
  return { ...style };
};
