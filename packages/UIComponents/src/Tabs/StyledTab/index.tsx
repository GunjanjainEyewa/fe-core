/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '../../styles/styled';

import {
  TabProps,
  HelperProps,
} from '../types';

import {
  getFontStyles,
  getSizing,
  getKindStyles,
  getIconSize,
  getFit,
} from './helpers';

const TabWrapper = styled.div<HelperProps>`
  cursor: pointer;
  text-align: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.textOutline}`};

  ${(props) => {
    const {
      theme,
      size,
      fit,
    } = props;
    const sizing = getFit({ theme, size, fit });

    return {
      ...sizing,
    };
  }}

  &:hover {
    background-color: ${({ theme }) => theme.colors.textDecorative};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.textOutline};
  }
`;

const TabText = styled.div<TabProps & HelperProps>`
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    const {
      theme,
      size,
      selected,
      fit,
      disabled,
    } = props;
    const fonts = getFontStyles({ theme, size });
    const sizing = getSizing({ theme, size, fit });
    const color = getKindStyles({ theme, selected, disabled });

    return {
      ...fonts,
      ...sizing,
      color,
    };
  }}
`;

const StyledIcon = styled.div<HelperProps>`
  display: flex;
  margin-right: 10px;
  ${(props) => {
    const { theme, size } = props;
    const style = getIconSize({ theme, size });
    return {
      ...style,
    };
  }};
  svg path {
    fill: ${(props) => {
    const { theme, selected, disabled } = props;
    const color = getKindStyles({ theme, selected, disabled });
    return color;
  }};
  }
`;

const SelectedStyledBorder = styled.div`
  border-top: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  border-top-right-radius: ${({ theme }) => `${theme.borders.radius20}`};
  border-top-left-radius: ${({ theme }) => `${theme.borders.radius20}`};
  margin-bottom: -2px;
`;

const Component = (props: TabProps & HelperProps) => {
  const {
    id,
    label,
    size,
    fit,
    selected,
    icon,
    changeHandler,
    disabled,
  } = props;

  const onTabClick = () => {
    if (disabled) {
      return {};
    }
    return changeHandler(id);
  };

  return (
    <TabWrapper
      size={size}
      fit={fit}
      selected={selected}
      onClick={() => onTabClick()}
    >
      <TabText
        {...props}
        selected={selected}
      >
        {
          (icon) && <StyledIcon {...props}>{icon}</StyledIcon>
        }
        {label}
      </TabText>
      {selected && <SelectedStyledBorder />}
    </TabWrapper>
  );
};

export default Component;
