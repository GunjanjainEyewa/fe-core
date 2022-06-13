
import { Theme } from '@eyewa/ui-components/themes/types';

import {
  SIZE,
  FONT_NORMAL,
  BORDER_BIG,
  BORDER_NORMAL,
} from './constants';


type FontProps = {
  size: string;
  theme: Theme;
  kind?: string;
};

type BorderProps = {
  theme: Theme;
  kind: string;
};

const getFontStyles = ({ size, theme, kind }: FontProps) => {
  const {
    bodySmall,
    subTitleSmall,
    bodyMedium,
    subTitleMedium,
  } = theme.typography;

  switch (size) {
    case SIZE.small:
      if (kind === FONT_NORMAL) {
        return { ...bodySmall };
      }
      return {
        ...subTitleSmall,
      };

    case SIZE.medium:
      if (kind === FONT_NORMAL) {
        return { ...bodyMedium };
      }
      return {
        ...subTitleMedium,
      };

    default:
      return {
        ...subTitleMedium,
      };
  }
};

export const getBorderData = ({ theme, kind }: BorderProps) => {
  const {
    border100,
    border150,
    radius10,
    radius20,
  } = theme.borders;
  switch (kind) {
    case BORDER_NORMAL:
      return {
        ...border100,
        borderRadius: radius10,
      };
    case BORDER_BIG:
      return {
        ...border150,
        borderRadius: radius20,
      };

    default:
      return {
        ...border150,
        borderRadius: radius20,
      };
  }
};

export default getFontStyles;
