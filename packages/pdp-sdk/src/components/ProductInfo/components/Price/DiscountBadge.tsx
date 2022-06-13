import React from 'react';
import { styled } from '@eyewa/ui-components';


interface DiscountProps {
  discount: string | number;
}
const Discount = styled.text`
  ${({ theme }) => theme.typography.bodyMedium};
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  vertical-align: middle;
`;

const DiscountIcon = ({ discount }: DiscountProps) => (
  <svg width="68" height="20" viewBox="0 0 68 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="MyPath" d="M67.3806 8.50167L60.7142 0.998884C59.9901 0.334821 59.1161 0 58.2082 0H2.17218C0.975782 0 0 0.962611 0 2.14286V17.8571C0 19.0374 0.975782 20 2.17218 20H58.2054C59.119 20 59.9901 19.6652 60.6604 19.0569L67.3636 11.5151C67.7737 11.1105 68 10.572 68 10C68 9.43638 67.7794 8.90625 67.3806 8.50167Z" fill="#10BB52" />
    <Discount x="3" y="15" fill="white">
      {discount}
      % Off
    </Discount>
    <circle cx="60" cy="10" r="2" fill="white" />
  </svg>
);

export default DiscountIcon;
