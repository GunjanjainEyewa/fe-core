import React, { useState } from 'react';

import { TabsProps, TabsContainer } from '../types';
import styled from '../../styles/styled';

const Container = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    height: 0;
  }
`;

const TabList = styled.div<TabsContainer>`
  width: ${(props) => (props.fitted ? '' : 'max-content')};
  display: flex;
`;

const Groups = (props: TabsProps) => {
  const {
    changeHandler: handleChange, selected, fitted,
  } = props;

  const [selectedValue, setSelectedValue] = useState(selected);

  const changeHandler = (changedValue: string) => {
    setSelectedValue(changedValue);
    handleChange(changedValue);
  };

  const { children, ...rest } = props;
  const changedProps = { ...rest, changeHandler };

  return (
    <>
      <Container>
        <TabList fitted={fitted}>
          {children
            && React.Children.map(children, (child) => (
              React.cloneElement(child,
                {
                  ...changedProps,
                  selected: (child.props.id === selectedValue),
                  fit: (fitted ? children.length : 0),
                })
            ))}
        </TabList>
      </Container>
      {children
        && React.Children.map(children, (child) => {
          if (child.props.id !== selectedValue) return null;
          return (
            child.props.children
          );
        })}
    </>
  );
};

export default Groups;
