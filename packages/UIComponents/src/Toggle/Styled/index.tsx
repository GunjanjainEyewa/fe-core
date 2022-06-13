/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';


import styled from '../../styles/styled';

import {
  Props,
} from '../types';

import {
  getBackground,
  getSwitchStyle,
  getIcon,
  getHoverStyle,
  getActiveColor,
  getBorderStyle,
} from './helpers';


const Container = styled.div<Props>`
  position: relative;
  width:44px;
  height: 28px;
  opacity: ${({ disabled }: Props) => (disabled ? 0.5 : 1)};
  border-radius: 20px;
  background-color: ${(props) => {
    const {
      theme,
      checked,
      disabled,
    } = props;

    const background = getBackground({ theme, checked, disabled });

    return background;
  }};
  svg path { 
    fill: ${(props) => {
    const {
      theme,
      checked,
      disabled,
    } = props;

    const background = getBackground({ theme, checked, disabled });

    return background;
  }};
  }
  ${(props) => {
    const {
      theme,
      checked,
    } = props;

    const style = getBorderStyle({ theme, checked });

    return style;
  }};


  .checkbox {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1;
    margin: -1;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1;
  }
  &:focus {
    ::after {
      content: '';
      display: block;
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: -3px;
      right: -3px;
      border-radius: 20px;
      border: 2px solid  ${({ theme }) => theme.colors.info};
    }
  }
`;

const Switch = styled.div<Props>`
  border-radius:  ${({ theme }) => theme.borders.radius40};
  background-color:  ${({ theme }) => theme.colors.surface};
  height: 22px;
  width: 22px;
  position: absolute;

  ${(props) => {
    const {
      checked,
      theme,
    } = props;

    const style = getSwitchStyle({ checked, theme });

    return style;
  }};
  text-align: center;

  &:hover {
    &.toggle_btn {
     ${(props) => {
    const {
      theme,
      checked,
      disabled,
    } = props;

    return getHoverStyle({ theme, checked, disabled });
  }};
  }
  }
  &:active {
    &.toggle_btn {
      box-shadow: 0 0 0 5px ${(props) => {
    const {
      theme,
      checked,
    } = props;

    return getActiveColor({ theme, checked });
  }};
  }
  }

`;


const Component = (props :Props) => {
  const {
    checked, disabled, onChangeHandler,
  } = props;
  const [isChecked, setChecked] = useState(checked);
  const inputRef = useRef(null);
  const changeHandler = () => {
    if (disabled) {
      return;
    }
    const toggled = !isChecked;
    setChecked(toggled);
    onChangeHandler(toggled);
  };
  const onCheckBoxClick = () => {
    if (disabled) {
      return;
    }
    if (inputRef && inputRef.current && typeof inputRef.current.click === 'function') {
      inputRef.current.click();
    }
  };
  const changedProps = { ...props, checked: isChecked };
  return (
    <Container {...changedProps} onClick={onCheckBoxClick}>
      <Switch className="toggle_btn" {...changedProps}>
        {
        (isChecked) && getIcon()
      }

      </Switch>
      <input
        type="checkbox"
        role="switch"
        aria-checked={isChecked}
        checked={isChecked}
        disabled={disabled}
        onChange={changeHandler}
        className="checkbox"
        ref={inputRef}
        {...props}
      />
    </Container>


  );
};

export default Component;
