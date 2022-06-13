import React from 'react';
import { Global, css } from '@emotion/core';
import normalize from './normalize';

const BaseStyles = () => (
  <Global
    styles={css`
      ${normalize}
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
      }
      :focus {
        outline: 0;
      }
      ol, ul {
        list-style: none;
      }
    `}
  />
);

export default BaseStyles;
