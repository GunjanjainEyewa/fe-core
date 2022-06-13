
import { FONT_NORMAL, SIZE } from '../constant/cardInfo';
import { FontProps } from '../types/cardInfo';


export const getFontStyles = ({ size, theme, kind }: FontProps) => {
  const {
    subTitleSmall,
    subTitleLarge,
    bodyMedium,
    subTitleMedium,
    titleSmall,
    titleXSmall,
  } = theme.typography;

  switch (size) {
    case SIZE.small:
      if (kind === FONT_NORMAL) {
        return { ...subTitleSmall };
      }
      return {
        ...titleXSmall,
      };
    case SIZE.compact:
      if (kind === FONT_NORMAL) {
        return { ...bodyMedium };
      }
      return {
        ...subTitleMedium,
      };

    case SIZE.medium:
      if (kind === FONT_NORMAL) {
        return { ...subTitleLarge };
      }
      return {
        ...titleSmall,
      };

    default:
      return {
        ...subTitleLarge,
      };
  }
};

export const getFontData = (props: FontProps, kind?: string) => {
  const {
    theme,
    size,
  } = props;
  const fonts = getFontStyles({ theme, size, kind });
  return {
    ...fonts,
  };
};
