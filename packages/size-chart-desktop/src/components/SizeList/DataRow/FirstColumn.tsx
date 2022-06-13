import React from 'react';
import Radio from '@eyewa/size-chart-shared/components/RadioButton';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { OptionData } from '@eyewa/size-chart-shared/types';


interface FirstColumnProps {
  option: OptionData;
  handleSelectSize: (id: string) => void;
  selectedOption: string;
}
const FirstColumnSizeData = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
  display: flex;
  align-items: center;
  flex: 0 0 120px;
  padding: ${({ theme }) => theme.spacing.spacing80}
  0 ${({ theme }) => theme.spacing.spacing60};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.72)};
  border-right: solid 1px ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  max-height: 59px;
  label {
    span {
      ${({ theme }) => theme.typography.bodyLarge};
    }
  }
`;
const FirstColumn = ({ option, handleSelectSize, selectedOption }: FirstColumnProps) => (
  <FirstColumnSizeData
    onClick={() => handleSelectSize(option?.id)}
  >
    <Radio
      id={option?.id}
      packSize={option?.packSize}
      isSelected={option?.id === selectedOption}
      inStock={option?.inStock}
    />
  </FirstColumnSizeData>
);

export default FirstColumn;
