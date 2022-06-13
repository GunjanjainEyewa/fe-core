/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import styled from '../../styles/styled';

import {
  Props,
} from '../types';

import {
  getIcon,
  getHoverStyle,
  getCheckBoxStyle,
  getCheckBoxActiveStyle,
  getActiveStyle,
  getFontStyles,
  getIndeterminateIcon,
} from './helpers';


const Container = styled.div<Props>`
  position: relative;
  display: flex;
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


`;

const CheckBox = styled.div<Props>`
  border-radius:  ${({ theme }) => theme.borders.radius20};
  height: 20px;
  width: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    const {
      theme,
      checked,
      disabled,
      isIndeterminate,
    } = props;

    const style = getCheckBoxStyle({ theme, checked: checked || isIndeterminate, disabled });

    return style;
  }};
  svg path {
    fill: ${(props) => {
    const {
      disabled,
      theme,
    } = props;
    if (disabled) {
      return theme.colors.textDisabled;
    }
    return '';
  }};
  }
  svg rect {
    fill: ${(props) => {
    const {
      disabled,
      theme,
    } = props;
    if (disabled) {
      return theme.colors.textDisabled;
    }
    return '';
  }};
  }
  .state-elem {
    display: none;
  
  }
  &:focus {
    ::after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 6px;
      height:24px;
      width: 24px;
      top: -4px;
      left: -4px;
      border: 2px solid  ${({ theme }) => theme.colors.info};
    }
  }
  
  &:active {
    ${(props) => {
    const {
      theme,
      checked,
      disabled,
      isIndeterminate,
    } = props;

    return getCheckBoxActiveStyle({ theme, checked: checked || isIndeterminate, disabled });
  }};

    .state-elem {
    border-radius:  ${({ theme }) => theme.borders.radius50};
    display: block;
    height:20px;
    width: 20px;
    left: 0;
    top: 0;
    position: absolute;
    ${(props) => {
    const {
      theme,
      checked,
      disabled,
      isIndeterminate,
    } = props;

    return getActiveStyle({ theme, checked: checked || isIndeterminate, disabled });
  }};     
    }

  }
  &:hover {
    .state-elem {
     border-radius:  ${({ theme }) => theme.borders.radius50};
     display: block;
     height:20px;
     width: 20px;
     left: 0;
     top: 0;
     position: absolute;
     ${(props) => {
    const {
      theme,
      checked,
      disabled,
      isIndeterminate,
    } = props;

    return getHoverStyle({ theme, checked: checked || isIndeterminate, disabled });
  }};     
    }
 
   }
`;
const Label = styled.span<Props>`
  margin-left: 14px;
  ${({ disabled, theme }) => {
    const fontStyles = getFontStyles({ disabled, theme });
    return fontStyles;
  }}
`;


const Component = (props :Props) => {
  const {
    checked, disabled, onChangeHandler, label, isIndeterminate,
  } = props;
  const inputRef = useRef(null);
  const changeHandler = () => {
    if (disabled) {
      return;
    }
    const toggled = !checked;
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
  const changedProps = { ...props, checked };
  let icon;
  if (checked) {
    icon = getIcon();
  } else if (isIndeterminate) {
    icon = getIndeterminateIcon();
  }
  return (
    <Container {...changedProps}>
      <CheckBox onClick={onCheckBoxClick} {...changedProps}>
        <div className="state-elem" />
        {icon}
      </CheckBox>
      { (label) && (
      <Label disabled={disabled}>
        {label}
      </Label>
      )}

      <input
        type="checkbox"
        aria-checked={checked}
        checked={checked}
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
