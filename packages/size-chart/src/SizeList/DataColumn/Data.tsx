import React from 'react';
import styled from '@nykaa/ui-components/styles/styled';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { transformedSizeData } from '@nykaa/size-chart-shared/utils';
import { TransformedSizeProps, OptionData, UnitProps } from '@nykaa/size-chart-shared/types';
import { getMinWidth, getRowHeight } from '../../utils';


interface WrapperProps {
  totalColumns: number;
  height: string;
}

// Replace with new token
const SizeWrapper = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  display: flex;
  min-width: ${({ totalColumns }: WrapperProps) => getMinWidth(totalColumns)};
  height: ${({ height }: WrapperProps) => height};
  &.inStock {
    align-items: center;
  }
  &.fixedWidth {
    width: ${({ totalColumns }: WrapperProps) => getMinWidth(totalColumns)};
  }
  &:focus {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.16)};
  }
  &:active {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.16)};
  }
  &.row {
    &:nth-of-type(odd) {
      background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.04)};
    }
    &.selected {
      background-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.04)};
    }
  }
`;
const RowData = styled.div`
  flex: 1;
  text-align: center;
  padding: 16px 4px 14px;
`;

const SizeData = styled(RowData)`
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  &.fixedWidth {
    width: 64px;
    flex: 0 0 64px;
  }
`;

interface DataColumnProps {
  options: OptionData[];
  sizeOptions: UnitProps[];
  selectedUnit: string;
  handleSelectSize: (id: string) => void;
  selectedOption: string;
  headerHeight: string;
}

const SizeList = (props: DataColumnProps) => {
  const {
    options, sizeOptions, selectedUnit,
    handleSelectSize,
    selectedOption,
  } = props;

  const totalColumns = sizeOptions.length;
  const moreThan3Column = totalColumns > 3;
  const wrapperCustomClass = moreThan3Column ? 'fixedWidth' : '';

  const getCustomClass = (option: OptionData) => {
    let customClass = 'row';
    if (option && option.inStock) {
      customClass += ' inStock';
    }
    if (moreThan3Column) {
      customClass += ' fixedWidth';
    }
    if (option && option.id === selectedOption) {
      customClass += ' selected';
    }
    return customClass;
  };

  return (
    <>
      {options && options.map((option) => {
        const sizeTransformedData = transformedSizeData({
          sizeData: option?.sizeData,
          sizeColumns: sizeOptions,
        });
        if (sizeTransformedData) {
          return (
            <SizeWrapper
              className={getCustomClass(option)}
              onClick={() => handleSelectSize(option.id)}
              totalColumns={totalColumns}
              height={getRowHeight(option.id)}
              key={option.id}
            >
              {sizeTransformedData.map((sizeData: TransformedSizeProps) => (
                <SizeData
                  className={wrapperCustomClass}
                  key={sizeData.id}
                >
                  {sizeData.data[selectedUnit]}
                </SizeData>
              ))}
            </SizeWrapper>
          );
        }
        return null;
      })}
    </>
  );
};

export default SizeList;
