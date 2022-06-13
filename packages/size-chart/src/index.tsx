import React, { useState } from 'react';
import styled from '@eyewa/ui-components/styles/styled';
import { OptionData, UnitProps } from '@eyewa/size-chart-shared/types';
import UnitSwitch from '@eyewa/size-chart-shared/components/UnitSwitch';
import SizeList from './SizeList';


interface SizeChartProps {
  options: OptionData[];
  sizeOptions: UnitProps[];
  units: UnitProps[];
  unitSelectionText: string;
  handleClickSizeSelect: (id: string) => void;
  selectedOption: string
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 56px;
`;

const SizeChart = (props: SizeChartProps) => {
  const {
    sizeOptions,
    options,
    units,
    unitSelectionText,
    handleClickSizeSelect,
    selectedOption,
  } = props;
  const [selectedUnit, setSelectedUnit] = useState(units[0].id || '');
  const handleUnitSwitch = (id: string) => {
    setSelectedUnit(id);
  };
  return (
    <Wrapper>
      <UnitSwitch
        selectedUnit={selectedUnit}
        handleUnitSwitch={handleUnitSwitch}
        unitSelectionText={unitSelectionText}
        units={units}
        borderApplied
      />
      <SizeList
        selectedUnit={selectedUnit}
        sizeOptions={sizeOptions}
        options={options}
        handleClickSizeSelect={handleClickSizeSelect}
        selectedOptionUnit={selectedOption}
      />
    </Wrapper>
  );
};

export default SizeChart;
