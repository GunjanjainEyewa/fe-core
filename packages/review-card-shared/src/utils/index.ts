import { Theme } from '@nykaa/ui-components/themes/types';


type getColorProps = {
  theme: Theme;
  rating: number;
};

const getColor = (props: getColorProps) => {
  const { theme, rating } = props;
  if (rating >= 4) {
    return theme.colors.positive;
  } if (rating >= 3) {
    return theme.colors.warning;
  }
  return theme.colors.negative;
};


export default getColor;
