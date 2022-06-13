import { Theme } from '@eyewa/ui-components/themes/types';
import { getFontStyles } from '../helper';


interface FontProps {
  theme: Theme;
  size: string;
}
const getFontData = (props: FontProps, kind?: string) => {
  const {
    theme,
    size,
  } = props;
  const fonts = getFontStyles({ theme, size, kind });
  return {
    ...fonts,
  };
};

export default getFontData;
