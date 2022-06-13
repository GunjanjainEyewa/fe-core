import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import { transformedSizeData } from '@nykaa/size-chart-shared/utils';
import {
  OptionData,
  UnitProps,
  SizeData,
} from '@nykaa/size-chart-shared/types';
import FirstColumn from './FirstColumn';
import DummyRows from './DummyRows';


interface DataRowProps {
  selectedUnit: string;
  selectedOption: string;
  options: OptionData[];
  sizeOptions: UnitProps[];
  handleSelectSize: (id: string) => void;
}

const RowWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    width: 2px;
  }
`;
const DataRowWrapper = styled.div<{ selected: boolean; }>`
  display: flex;
  cursor: pointer;
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.surface20};
  }
  &:active {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.2)};
  }
  &:focus {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.2)};
  }
  ${({ selected, theme }) => (selected) && (
    `background: ${hexToRgb(theme.colors.primary, 0.1)} !important;
    color: ${theme.colors.primary};`
  )}
`;

const SizeWrapper = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  display: flex;
  justify-content: center;
  width: calc(100% - 120px);
  cursor: pointer;
`;
const SizeDataRow = styled.div<{ selected: boolean; }>`
  ${({ theme }) => theme.typography.bodyLarge};
  flex: 1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.spacing80}
  0 ${({ theme }) => theme.spacing.spacing60};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  ${({ selected }) => (
    (selected) && (
      'width: 100px; flex: 0 0 100px;'
    )
  )}
`;

const DataRow = (props: DataRowProps) => {
  const {
    options,
    sizeOptions,
    handleSelectSize,
    selectedUnit,
    selectedOption,
  } = props;
  const totalColumns = sizeOptions?.length;
  const moreThan3Column = totalColumns > 3;
  return (
    <RowWrapper>
      {options?.map((option) => {
        const sizeData: SizeData = option?.sizeData || {};
        const sizeTransformedData = transformedSizeData({ sizeData, sizeColumns: sizeOptions });
        return (
          <DataRowWrapper key={`DataRow ${option?.id}`} selected={(option?.id === selectedOption)}>
            <FirstColumn
              option={option}
              handleSelectSize={handleSelectSize}
              selectedOption={selectedOption}
            />
            <SizeWrapper
              onClick={() => handleSelectSize(option?.id)}
              key={`${option?.id}-sizeWrapper`}
            >
              {sizeTransformedData?.map((sizeTransformData) => (
                <SizeDataRow
                  selected={moreThan3Column}
                  key={sizeTransformData?.id}
                >
                  {sizeTransformData?.data[selectedUnit]}
                </SizeDataRow>
              ))}
            </SizeWrapper>
          </DataRowWrapper>
        );
      })}
      <DummyRows options={options} />
    </RowWrapper>
  );
};

export default DataRow;
