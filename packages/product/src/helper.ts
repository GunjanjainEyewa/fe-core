
import { Theme } from '@eyewa/ui-components/themes/types';
import { SIZE, FONT_NORMAL } from './constants';


type FontProps = {
  size: string;
  theme: Theme;
  kind?: string;
};

interface Objects {
  [key: string]: any;
}

const getFontStyles = ({ size, theme, kind }: FontProps) => {
  const {
    subTitleSmall,
    bodyMedium,
    subTitleMedium,
    subTitleLarge,
    titleXSmall,
    titleSmall,
    titleMedium,
  } = theme.typography;

  switch (size) {
    case SIZE.small_alt:
      if (kind === FONT_NORMAL) {
        return { ...subTitleSmall };
      }
      return {
        ...titleSmall,
      };

    case SIZE.small:
      if (kind === FONT_NORMAL) {
        return { ...subTitleMedium };
      }
      return {
        ...titleXSmall,
      };

    case SIZE.medium:
      if (kind === FONT_NORMAL) {
        return { ...subTitleLarge };
      }
      return {
        ...titleMedium,
      };

    default:
      return {
        ...bodyMedium,
      };
  }
};

const calculateHeight = (
  hasDynamicHeight: boolean,
  cardHeight: string,
  originalHeight: string,
): string => {
  if (hasDynamicHeight && cardHeight) {
    return cardHeight;
  }
  return originalHeight;
};

const generateId = (str: string) => {
  const trimmedString = str?.trim();
  const hyphenString = trimmedString?.replace(/ /g, '-');
  const id = hyphenString?.toLowerCase();
  return String(id);
};

const objectEqualiser = (targetObj: Objects = {}, defaultObj: Objects = {}): Objects => {
  const res: Objects = {};
  const keys = Object.keys(defaultObj);
  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    const value = targetObj[key];
    const defaultValue = defaultObj[key];
    if (!value && defaultValue) {
      res[key] = defaultValue;
    } else {
      res[key] = value;
    }
  }
  return res;
};

export {
  getFontStyles, calculateHeight, generateId, objectEqualiser,
};
