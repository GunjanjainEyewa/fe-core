import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';


const IconPath = styled.g`
  fill: ${({ theme }) => hexToRgb(theme.colors.state, 0.92)};
`;
const InfoIcon = () => (
  <svg height="18px" version="1.1" viewBox="0 0 20 20" width="18px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title />
    <desc />
    <defs />
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><IconPath id="Core" transform="translate(-86.000000, -296.000000)"><g id="info-outline" transform="translate(86.000000, 296.000000)"><path d="M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z M9,7 L11,7 L11,5 L9,5 L9,7 L9,7 Z" id="Shape" /></g></IconPath></g>
  </svg>
);

export default InfoIcon;
