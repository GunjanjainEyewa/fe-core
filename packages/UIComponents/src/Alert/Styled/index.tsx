/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '../../styles/styled';

import {
  Props,
} from '../types';

import {
  getFontStyles, getBorderStyles, getIcon,
  getSizing, getKindStyles, getTitleStyles,
  getMessageStyle,
} from './helpers';

import Dismissible from './dismissible';
import { VARIANT } from '../constants';

const StyledMessage = styled.div<Props>`
  font: inherit;
  ${(props) => {
    const {
      dismissible,
    } = props;

    const style = getMessageStyle(dismissible);


    return {
      ...style,
    };
  }}
`;

const StyledTitled = styled.div`
  margin-bottom: 4px;
  ${(props) => {
    const {
      theme,
    } = props;

    const style = getTitleStyles({ theme });


    return {
      ...style,
    };
  }}
`;

const StyledIcon = styled.div`
margin-right: 14.5px;
`;
const Styled = styled.div<Props>`
  position: relative;
  margin: 0;
  border: none;
  text-decoration: none;
  overflow: hidden;
  background: none;
  display: flex;
 

  ${(props) => {
    const {
      theme,
      kind,
      variant,
      withIcon,
      dismissible,
    } = props;
    /**
     * * Other implementation would be get the styles as per attributes
     * * like getColor/getBorder/getTypography etc
     */
    const fonts = getFontStyles({ variant, kind, theme });
    const borders = getBorderStyles({ variant, kind, theme });
    const sizing = getSizing({
      variant, kind, theme,
    });
    const kindStyles = getKindStyles({
      theme, kind, variant, withIcon, dismissible,
    });

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
      // ...(fullWidth && { width: '100%' }),
    };
  }}

  button {
    padding: ${({ theme }) => `${theme.spacing.spacing60} ${theme.spacing.spacing10}`};
    background-color:unset;
  }

  // &:focus {
  //   outline: none;
  // }

  // &:disabled {
  //   cursor: default;
  // }
`;

const Component = (props :Props) => {
  const {
    withIcon, kind, message, title, variant, children,
  } = props;

  return (

    <Styled {...props}>
      {
        (withIcon) && <StyledIcon>{getIcon(kind)}</StyledIcon>
      }
      <StyledMessage {...props}>
        {
        ((variant === VARIANT.multi) && (title))
          && (<StyledTitled>{title}</StyledTitled>)
          }
        {message}
        {' '}
        <div>
          {
        (variant === VARIANT.multi && children) && children

      }
        </div>
      </StyledMessage>

      <Dismissible {...props} />

    </Styled>

  );
};

export default Component;
