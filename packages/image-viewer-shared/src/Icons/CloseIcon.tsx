import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';


interface CrossIconProps {
  handleCross: () => void;
}
const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 32px;
  left: 32px;
  border-radius: 34px;
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.32)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CloseIcon = ({ handleCross }: CrossIconProps) => (
  <Wrapper onClick={handleCross}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="13" height="13" fill="#fff">
      <title>close icon</title>
      <path d="M284.29 256L506.14 34.14a20 20 0 1 0-28.28-28.28L256 227.72 34.14 5.86A20 20 0 1 0 5.86 34.14L227.7 256 5.87 477.86a20 20 0 0 0 0 28.28A19.94 19.94 0 0 0 20 512a19.94 19.94 0 0 0 14.14-5.86L256 284.3l221.86 221.85c3.9 3.9 9.02 5.86 14.14 5.86s10.24-1.95 14.14-5.86a20 20 0 0 0 0-28.28L284.3 256z" />
    </svg>
  </Wrapper>
);

export default CloseIcon;
