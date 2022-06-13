import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';


interface DateInfoProps {
  createdOnText: string;
}
const Date = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  float: right;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.52)};
  margin-top: ${({ theme }) => theme.spacing.spacing20};
`;

const DateInfo = (props: DateInfoProps) => {
  const { createdOnText } = props;
  return (
    <Date>
      {createdOnText}
    </Date>
  );
};

export default DateInfo;
