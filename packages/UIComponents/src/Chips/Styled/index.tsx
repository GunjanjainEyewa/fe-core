/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '../../styles/styled';

import {
  Props,
} from '../types';
import {
  STATE,
} from '../constants';
import {
  getSizeStyle,
  getCloseIconStyle,
  getIconMargin, getCursor,
  getBorderStyle, getFontStyle,
  getFontColor, getIcon,
  getBackGroundColor, getImageStyle,
} from './helpers';

const Container = styled.button<Props>`
  position: relative;
  border-radius:  ${({ theme }) => theme.borders.radius50};
  background-color:   ${(props) => {
    const {
      theme, dismissible, disabled, selected,
    } = props;
    return getBackGroundColor({
      theme, dismissible, disabled, selected,
    });
  }};
  display: flex;
  width: fit-content;
  ${(props) => {
    const {
      size, theme, dismissible, selected, disabled,
    } = props;
    const border = getBorderStyle({
      theme, dismissible, selected, disabled,
    });
    const sizeStyle = getSizeStyle({ size, theme });
    return {
      ...border,
      ...sizeStyle,
    };
  }};
  &:hover {
    cursor: ${(props) => {
    const { disabled } = props;
    return getCursor({ disabled });
  }
};
    background-color:  ${(props) => {
    const {
      theme, dismissible, selected, disabled,
    } = props;
    return getBackGroundColor({
      theme, dismissible, disabled, selected, state: STATE.hover,
    });
  }};
    ${(props) => {
    const {
      theme, dismissible, selected, disabled,
    } = props;
    const border = getBorderStyle({
      theme, dismissible, disabled, selected, state: STATE.hover,
    });
    return {
      ...border,
    };
  }};

  }
  &:focus {
    background-color:  ${(props) => {
    const {
      theme, dismissible, disabled, selected,
    } = props;
    return getBackGroundColor({
      theme, dismissible, disabled, state: STATE.focus, selected,
    });
  }};
    ::after {
      content: '';
      display: block;
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: ${({ theme }) => theme.borders.radius50};
      border: 2px solid  ${({ theme }) => theme.colors.info};
    }
  }

`;

const Label = styled.span<Props>`

  padding:0;
  margin: 0;
  color: ${(props) => {
    const {
      theme, dismissible, disabled, selected,
    } = props;
    return getFontColor({
      theme, dismissible, disabled, selected,
    });
  }
};
${(props) => {
    const { size, theme } = props;

    const sizeStyle = getFontStyle({ size, theme });
    return {
      ...sizeStyle,
    };
  }}
`;

const StyledIcon = styled.div<Props>`
  margin-right: 10px;
  height: 11px;
  width: 12px;
  ${(props) => {
    const { theme, size } = props;
    const style = getIconMargin({ theme, size });
    return {
      ...style,
    };
  }};
  

`;
// svg path {
//   fill: ${({
//   theme, dismissible, disabled, selected,
// }) => getFontColor({
//   theme, dismissible, disabled, selected,
// })};
// }

const ClosedIcon = styled.div<Props>`
  margin-left: 9px;
  height: 14px;
  width: 14px;

  svg {
    ${(props) => {
    const { theme, size } = props;
    const style = getCloseIconStyle({ theme, size });
    return {
      ...style,
    };
  }};
  & path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
  }

`;

const StyledImage = styled.div<Props>`
height: 16px;
width: 16px;
margin-right: 8px;
border-radius: 12px;
${(props) => {
    const { imgSrc, theme, size } = props;
    const style = getImageStyle({ theme, imgSrc, size });
    return {
      ...style,
    };
  }};

`;
const Component = (props :Props) => {
  const {
    label,
    icon,
    dismissible,
    imgSrc,

  } = props;

  return (
    <Container {...props}>
      {imgSrc && (<StyledImage {...props} />)}
      {!imgSrc && icon && (<StyledIcon {...props}>{icon}</StyledIcon>)}
      <Label {...props}>{label}</Label>
      {dismissible && (<ClosedIcon {...props}>{getIcon()}</ClosedIcon>)}
    </Container>
  );
};

export default Component;
