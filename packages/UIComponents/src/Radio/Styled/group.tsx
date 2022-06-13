
import React, { useState } from 'react';
import { GroupProps } from '../types';
import styled from '../../styles/styled';
import { getDirectionStyle } from './helpers';

const Container = styled.div`
  ${(props: any) => {
    const {
      align,
    } = props;

    const style = getDirectionStyle(align);

    return style;
  }};`;

const Component = (props :GroupProps) => {
  const {
    changeHandler: onChangeHandler, value,
  } = props;

  const [selectedValue, setSelectedValue] = useState(value);

  const changeHandler = (changedValue: string) => {
    setSelectedValue(changedValue);
    onChangeHandler(changedValue);
  };

  const { children, align, ...rest } = props;
  const changedProps = { ...rest, changeHandler };

  return (
    <Container align={align}>
      {children
        && React.Children.map(children, (child: React.ReactElement) => {
          if (child) {
            return (React.cloneElement(child,
              {
                ...changedProps,
                checked: (child.props.value === selectedValue),
                value: child.props.value,
              }));
          }
          return null;
        })}
    </Container>
  );
};

export default Component;
