/* eslint-disable react/jsx-props-no-spreading */
import styled from '../../styles/styled';

import {
  Props,
} from '../types';

import {
  getFontStyles, getBorderStyles, getKindStyles,
  getSizing,
} from './helpers';

const StyledButton = styled.button<Props>`
  position: relative;
  margin: 0;
  border: none;
  text-decoration: none;
  overflow: hidden;
  background: none;
  cursor: pointer;

  ${(props) => {
    const {
      theme,
      fullWidth,
      kind,
      shape,
      size,
      color,
    } = props;
    /**
     * * Other implementation would be get the styles as per attributes
     * * like getColor/getBorder/getTypography etc
     */
    const fonts = getFontStyles({ theme, size });
    const borders = getBorderStyles({
      theme,
      shape,
      kind,
      size,
    });
    const sizing = getSizing({
      kind, theme, size, shape,
    });
    const kindStyles = getKindStyles({ theme, kind, color });

    // ! TODO: Huge refactor is under works
    /*
    const shapeStyles = getShapeStyles({ theme, shape }); */

    return {
      ...fonts,
      ...borders,
      ...sizing,
      ...kindStyles,
      /*
      ...shapeStyles, */
      ...(fullWidth && { width: '100%' }),
    };
  }}

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }
`;

export default StyledButton;
