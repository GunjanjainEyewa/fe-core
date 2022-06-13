
import React from 'react';

import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import {
  STATE,
  VARIANT,
} from '../constants';
import { hexToRgb } from '../../styles/utils';
import NegativeIcon from './Icons/negative';

import PositiveIcon from './Icons/positive';


// this can be refactor we can make it simpler  inherited from button
type GetStyles = { theme: Theme } & Props;

export const getIcon = (state:keyof typeof STATE) => {
  switch (state) {
    case STATE.error: {
      return <NegativeIcon />;
    }
    case STATE.success: {
      return <PositiveIcon />;
    }
    default: {
      return <></>;
    }
  }
};

export const getStyles = (
  {
    state,
    variant,
    theme,
    disabled,
  } : Partial<GetStyles>,
) => {
  let color = theme.colors.surface20;
  if (!disabled && (state === STATE.error)) {
    color = hexToRgb(theme.colors.negative, 0.08);
  } else if ((!disabled) && (state === STATE.success)) {
    color = hexToRgb(theme.colors.positive, 0.08);
  }
  const height = (variant === VARIANT.compact) ? '40px' : '48px';
  return {
    'min-width': '280px', height, 'border-radius': theme.borders.radiusPrimary, background: color,
  };
};
export const getHoverStyle = ({
  state,
  theme,
  disabled,
} : Partial<GetStyles>) => {
  let color = theme.colors.textDecorative;
  if (!disabled && (state === STATE.error)) {
    color = hexToRgb(theme.colors.negative, 0.16);
  } else if ((!disabled) && (state === STATE.success)) {
    color = hexToRgb(theme.colors.positive, 0.16);
  }
  return color;
};


export const getBottomLineStyles = ({ state, theme, disabled }: Partial<GetStyles>) => {
  if (disabled) {
    return {
      background: theme.colors.textOutline,
      height: '2px',
    };
  }
  switch (state) {
    case STATE.focus: {
      return {
        background: theme.colors.primary,
        height: '2px',
      };
    }
    case STATE.error: {
      return {
        background: theme.colors.negative,
        height: '2px',
      };
    }
    case STATE.success: {
      return {
        background: theme.colors.positive,
        height: '2px',
      };
    }
    default: {
      return {
        background: theme.colors.textOutline,
        height: '1px',
      };
    }
  }
};

export const getLabelStyles = ({
  state, theme, variant, disabled,
}: Partial<GetStyles>) => {
  const color = (disabled) ? (theme.colors.textDisabled) : (theme.colors.textSecondary);
  if (variant === VARIANT.compact) {
    return {
      ...theme.typography.bodyXSmall,
      color,
    };
  }
  switch (state) {
    case STATE.focus: {
      return {
        position: 'absolute',
        top: 0,
        ...theme.typography.bodyXSmall,
        color,
        transition: '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      };
    }
    default: {
      return {
        position: 'absolute',
        ...theme.typography.bodyLarge,
        color,
        top: '50%',
        transform: 'translateY(-50%)',
        transition: '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      };
    }
  }
};

export const getTextStyles = ({ theme, disabled }: Partial<GetStyles>) => ({
  ...theme.typography.bodyLarge,
  color: disabled ? (theme.colors.textDisabled) : (theme.colors.textPrimary),
  background: 'inherit',
  border: 'none',
});
export const getPreTextStyles = ({ theme, disabled }: Partial<GetStyles>) => ({
  ...theme.typography.bodyLarge,
  color: disabled ? (theme.colors.textDisabled) : theme.colors.textSecondary,
  'margin-right': '4px',
});

export const getSuffixTextStyles = ({ theme, disabled }: Partial<GetStyles>) => ({
  ...theme.typography.bodyLarge,
  color: disabled ? (theme.colors.textDisabled) : theme.colors.textSecondary,
  bottom: 0,
  right: 0,
  position: 'absolute',
});

export const getContainerStyles = ({ icon }: Partial<GetStyles>) => {
  if (icon) {
    return {
      'margin-left': 0,
    };
  }
  return {
  };
};

export const getSupportiveTextStyles = ({ state, theme, disabled }: Partial<GetStyles>) => {
  let color = theme.colors.textSecondary;
  if (state === STATE.error) {
    color = theme.colors.negative;
  } else if (state === STATE.success) {
    color = theme.colors.positive;
  }
  if (disabled) {
    color = theme.colors.textSecondary;
  }
  return {
    ...theme.typography.bodySmall,
    color,
  };
};


export const getPlaceholderStyle = ({ theme }: Partial<GetStyles>) => ({
  color: theme.colors.textDisabled,
});
