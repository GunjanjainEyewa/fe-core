/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import styled from '../../styles/styled';
import Portal from '../../Portal';

import {
  Props,
} from '../types';

import {
  getFontStyles, getBorderStyles,
  getSizing, getKindStyles,
  getMessageStyle, getButtonFontStyles,
} from './helpers';

import Timer from './timer';
import { VARIANT } from '../constants';


const Container = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 15px;
  left: 0;
  right: 0;
  background: transparent;

  &.close {
    display:none;
  }
`;

const StyledMessage = styled.div<Props>`
  font: inherit;
  ${(props) => {
    const {
      timer,
      icon,
      isChildren,
    } = props;

    const style = getMessageStyle(!!timer && !!icon && isChildren);


    return {
      ...style,
    };
  }}
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  right: 0px;

  button {
    color: ${({ theme }) => theme.colors.secondaryInverse};
  }
`;

const StyledIcon = styled.div<Props>`
  margin-right: 10px;
  height: 17px;
  width: 17px;
  svg path {
    fill: ${({ theme }) => theme.colors.textInversePrimary};
  }
  svg {
    vertical-align: ${({ variant }) => ((variant === VARIANT.multi) ? 'middle' : '')};
  }
`;
const Styled = styled.div<Props>`
  position: relative;
  margin: 0;
  border: none;
  text-decoration: none;
  overflow: hidden;
  background: none;
  display: flex;
  align-items: center;

  ${(props) => {
    const {
      theme,
      icon,
      variant,
      isChildren,
      timer,
    } = props;
    /**
     * * Other implementation would be get the styles as per attributes
     * * like getColor/getBorder/getTypography etc
     */
    const fonts = getFontStyles({ theme });
    const borders = getBorderStyles({ variant, theme });
    const sizing = getSizing({
      variant, theme,
    });
    const kindStyles = getKindStyles({
      theme, variant, icon, isChildren, timer,
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
    background-color:unset;
    vertical-align: ${({ variant }) => ((variant === VARIANT.multi) ? 'middle' : '')};
    ${(props) => {
    const {
      theme,
    } = props;

    const fonts = getButtonFontStyles({ theme });

    return {
      ...fonts,
    };
  }}

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
    icon, message, children, timer, onDismiss,
  } = props;
  const [isVisible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
    if (typeof onDismiss === 'function') {
      onDismiss();
    }
  };

  if (!isVisible) {
    return <></>;
  }

  return (
    <Portal>
      <Container>
        <Styled {...props}>
          {
        (icon && !timer) && <StyledIcon {...props}>{icon}</StyledIcon>
      }
          {
        (timer) && <Timer timer={timer} onDismiss={handleDismiss} />
      }
          <StyledMessage {...props}>
            {message}
          </StyledMessage>
          <ChildrenWrapper>
            { children }
          </ChildrenWrapper>

        </Styled>
      </Container>

    </Portal>


  );
};

export default Component;
