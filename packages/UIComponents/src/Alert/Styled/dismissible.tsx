
import React from 'react';
import CloseIcon from './Icons/close';

import styled from '../../styles/styled';

import {
  Props,
} from '../types';
import {
  VARIANT,
} from '../constants';

const Wrapper = styled.div`
  margin-left: 15px;
  position: absolute;
  right: 10px;
`;

const Component = ({ variant, dismissible, onDismiss }: Props) => {
  if (!dismissible || !onDismiss) {
    return null;
  }
  switch (variant) {
    case VARIANT.multi:
    case VARIANT.single: {
      return (
        <Wrapper onClick={onDismiss}>
          <CloseIcon />
        </Wrapper>
      );
    }
    default: {
      return null;
    }
  }
};

export default Component;
