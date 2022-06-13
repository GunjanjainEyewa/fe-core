import React from 'react';
import styled from '@nykaa/ui-components/styles/styled';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import Radio from '@nykaa/size-chart-shared/components/RadioButton';
import { OptionData, HeightOption } from '@nykaa/size-chart-shared/types';


const LeftWrapper = styled.div`
  flex: 0 0 120px;
`;


const RowData = styled.div`
  flex: 1;
  padding: 16px 0 14px;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.titleXSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  border-bottom: solid 1px ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
  height: ${({ headerHeight }: HeightOption) => headerHeight};
  text-align: center;
  border-right: solid 1px ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SizeData = styled(RowData)`
  ${({ theme }) => theme.typography.bodyMedium};
  line-height: 24px;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  border-right: solid 1px ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
  &.fixedWidth {
    width: 64px;
    flex: 0 0 64px;
  }
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.04)};
  }
  &:active {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.16)};
  }
  &:focus {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.16)};
  }
  &.selected {
    background-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.04)};
    color: ${({ theme }) => theme.colors.primary40}
  }
`;

interface LeftColumnProps {
  options: OptionData[];
  headerHeight: string;

  handleSelectSize: (id: string) => void;
  selectedOption: string;
}

const LeftColumn = (props: LeftColumnProps) => {
  const {
    options,
    headerHeight,
    handleSelectSize,
    selectedOption,
  } = props;

  return (
    <LeftWrapper>
      <Text
        headerHeight={headerHeight}
      >
        Size
      </Text>
      {options && options.map((option) => (
        <SizeData
          className={`row-wrapper-${option.id} ${(option.id === selectedOption) ? 'selected' : ''}`}
          onClick={() => handleSelectSize(option.id)}
          key={option.id}
        >
          <Radio
            id={option.id}
            packSize={option.packSize}
            isSelected={option.id === selectedOption}
            inStock={option.inStock}
          />
        </SizeData>
      ))}
    </LeftWrapper>
  );
};

export default LeftColumn;
