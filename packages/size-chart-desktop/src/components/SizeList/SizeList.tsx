import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { updateSizeColumns } from '@eyewa/size-chart-shared/utils';
import { OptionData, UnitProps } from '@eyewa/size-chart-shared/types';
import HeaderRow from './HeaderRow';
import DataRow from './DataRow';


interface SizeListProps {
  selectedUnit: string;
  selectedOption: string;
  options: OptionData[];
  sizeOptions: UnitProps[];
  handleClickSizeSelect: (id: string) => void;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  border-top: solid 1px ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
`;
const SizeList = (props: SizeListProps) => {
  const {
    selectedUnit,
    selectedOption,
    options,
    sizeOptions,
    handleClickSizeSelect,
  } = props;
  const handleSelectSize = (id: string) => {
    handleClickSizeSelect(id);
  };
  const firstRowData = options[0]?.sizeData;
  const updatedSizeOptions = updateSizeColumns(
    {
      sizeData: firstRowData,
      sizeColumns: sizeOptions,
      selectedUnit,
    },
  );
  return (
    <Wrapper>
      <HeaderRow
        sizeOptions={updatedSizeOptions}
      />
      <DataRow
        options={options}
        sizeOptions={sizeOptions}
        selectedUnit={selectedUnit}
        handleSelectSize={handleSelectSize}
        selectedOption={selectedOption}
      />
    </Wrapper>
  );
};
export default SizeList;
