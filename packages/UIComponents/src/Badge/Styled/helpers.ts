import { Theme } from '../../themes/types';
import {
  Props,
} from '../types';
import { hexToRgb } from '../../styles/utils';
import {
  KIND,
  VARIANT,
  VARIANT_SIZE,
  MAX_BORDER_RADIUS,
  MAX_NUMBER,
} from '../constants';

interface SizeProps {
  padding: string;
  width: string;
  height?: string;
}

// this can be refactored, we can make it simpler
type GetStyles = { theme: Theme } & Props;

export const getBackGroundColor = ({ kind, variant, theme }: Partial<GetStyles>) => {
  const {
    info, info50, negative, negative50, textPrimary, surface30,
    positive, positive50, warning, warning50, secondary,
  } = theme.colors;

  switch (kind) {
    case KIND.info:
      return {
        backgroundColor: (variant === VARIANT.hint) ? info : info50,
      };
    case KIND.negative:
      return {
        backgroundColor: (variant === VARIANT.hint) ? negative : negative50,
      };
    case KIND.neutral:
      return {
        backgroundColor:
          variant === VARIANT.hint ? hexToRgb(textPrimary, 0.64) : surface30,
      };
    case KIND.positive:
      return {
        backgroundColor: (variant === VARIANT.hint) ? positive : positive50,
      };
    case KIND.warning:
      return {
        backgroundColor: variant === VARIANT.hint ? warning : warning50,
      };
    default:
      return { backgroundColor: secondary };
  }
};

export const getColor = ({ variant, kind, theme }: Partial<GetStyles>) => {
  if (variant === VARIANT.hint) {
    return null;
  }
  const {
    info, negative, positive, warning, surface, textPrimary,
  } = theme.colors;
  switch (kind) {
    case KIND.info:
      return info;
    case KIND.negative:
      return negative;
    case KIND.neutral:
      return hexToRgb(textPrimary, 0.64);
    case KIND.positive:
      return positive;
    case KIND.warning:
      return warning;
    default:
      return surface;
  }
};

export const getFontStyles = ({ variant, theme, content }: Partial<GetStyles>) => {
  if (variant === VARIANT.hint) {
    return null;
  }
  let lh = '100%';
  if (content > MAX_NUMBER) {
    lh = 'inherit';
  }
  return { ...theme.typography.labelSmall, textTransform: 'uppercase', lineHeight: lh };
};

export const getBorderRadius = ({ variant, theme }: Partial<GetStyles>) => {
  if (variant !== VARIANT.label) {
    // TODO: According to design, radius is 24px which is not available in system
    return { borderRadius: theme.borders.radiusFull };
  }
  return { borderRadius: `${MAX_BORDER_RADIUS}px` };
};

export const getBorder = ({ variant, theme }: Partial<GetStyles>) => {
  const { colors, spacing } = theme;
  if (variant === VARIANT.hint) {
    return { border: `${spacing.spacing10} solid ${colors.surface}` };
  }
  return { border: `1px solid ${colors.surface}` };
};

export const getSizing = ({ variant, theme }: Partial<GetStyles>) => {
  const { spacing0, spacing20, spacing40 } = theme.spacing;
  const sizeStyles: SizeProps = {
    padding: spacing0,
    width: 'fit-content',
  };
  switch (variant) {
    case VARIANT.hint:
      sizeStyles.height = `${VARIANT_SIZE.hint.height}px`;
      sizeStyles.width = `${VARIANT_SIZE.hint.width}px`;
      break;
    case VARIANT.number:
      sizeStyles.height = `${VARIANT_SIZE.numbeer.height}px`;
      sizeStyles.width = `${VARIANT_SIZE.numbeer.width}px`;
      break;
    case VARIANT.label:
      sizeStyles.padding = `${spacing20} ${spacing40}`;
      break;
    default:
      break;
  }
  return sizeStyles;
};
