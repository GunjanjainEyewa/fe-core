/* eslint-disable react/jsx-props-no-spreading */

import React, { useRef } from 'react';


import styled from '../../styles/styled';
import { hexToRgb } from '../../styles/utils';

import {
  Props,
} from '../types';

import {
  getIcon,
  getHoverStyle,
  getCheckBoxStyle,
  getCheckBoxActiveStyle,
  getActiveStyle,
  getIconStyle,
  getFontStyles,
  getBackground,
} from './helpers';


const Container = styled.div<Props>`
  position: relative;
  display: flex;
  margin: 5px 0 0 5px;
  .radio {
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

const Radio = styled.div<Props>`
  border-radius:  ${({ theme }) => theme.borders.radiusFull};

  height: 20px;
  min-width: 20px;
  text-align: center;
  ${(props) => {
    const {
      theme,
      checked,
      disabled,
    } = props;

    const style = getCheckBoxStyle({ theme, checked, disabled });

    return style;
  }};

  .effect {
    border-radius:  ${({ theme }) => theme.borders.radiusFull};

    
    width: 0px;
    height: 0px;
    top: 50%;
    left: 50%;
   
    position: relative;
    overflow: hidden;
    -webkit-transition-duration: 200ms;
    -webkit-transition-property: all;
    -webkit-transition-timing-function: cubic-bezier(.8, .2, .6, 1);
    &.checked {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
  

      position: relative;
  
    }
    ${({ theme, disabled }) => {
    const background = getBackground({ theme, disabled });

    return {
      background,
    };
  }}

  }
  svg path { 
    fill: ${(props) => {
    const {
      disabled,
      theme,
    } = props;
    if (disabled) {
      const opacity = 0.36;
      return hexToRgb(theme.colors.textPrimary, opacity);
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
      border-radius:  ${({ theme }) => theme.borders.radiusFull};
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
    } = props;

    return getCheckBoxActiveStyle({ theme, checked, disabled });
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
    } = props;

    return getActiveStyle({ theme, checked, disabled });
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
    } = props;

    return getHoverStyle({ theme, checked, disabled });
  }};     
    }
 
   }

   svg {
     
    ${(props) => {
    const {
      type,
    } = props;

    return getIconStyle({ type });
  }};     
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
    checked, disabled, changeHandler, label, name, value, type,
  } = props;

  const inputRef = useRef(null);
  const onCheckBoxClick = (targetVal: string) => {
    if (disabled) {
      return;
    }
    if (inputRef && inputRef.current && typeof (inputRef.current.click === 'function')) {
      inputRef.current.click();
      changeHandler(targetVal);
    }
  };
  const effectClass = checked ? 'effect checked' : 'effect';
  return (
    <Container {...props}>
      <Radio onClick={() => onCheckBoxClick(value)} {...props}>
        <div className="state-elem" />
        <div className={effectClass} />
        {
        (checked) && getIcon(type)
      }
      </Radio>
      { (label) && (
      <Label {...props}>
        {label}
      </Label>
      )}

      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        className="radio"
        name={name}
        ref={inputRef}
        {...props}
      />
    </Container>


  );
};

export default Component;
