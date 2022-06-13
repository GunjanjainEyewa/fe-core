import React, { useState } from 'react';
import styled from '@nykaa/ui-components/styles/styled';
import { OptionData, UnitProps } from '@nykaa/size-chart-shared/types';
import UnitSwitch from '@nykaa/size-chart-shared/components/UnitSwitch';
import { SIZE_CHART_LIST } from '@nykaa/size-chart-shared/constants';
import SizeList from './SizeList';


interface SizeChartProps {
  options: OptionData[];
  sizeOptions: UnitProps[];
  units: UnitProps[];
  unitSelectionText: string;
  selectedOption: string;
  handleClickSizeSelect: (id: string) => void;
}

const Wrapper = styled.div`
  position: relative;
  height: 90%;
`;

const SizeChart = (props: SizeChartProps) => {
  const {
    sizeOptions,
    options,
    units,
    unitSelectionText,
    selectedOption,
    handleClickSizeSelect,
  } = props;
  const [selectedUnit, setSelectedUnit] = useState(units[0]?.id || '');
  const handleUnitSwitch = (id: string) => {
    setSelectedUnit(id);
  };
  return (
    <Wrapper id={SIZE_CHART_LIST}>
      <UnitSwitch
        selectedUnit={selectedUnit}
        handleUnitSwitch={handleUnitSwitch}
        unitSelectionText={unitSelectionText}
        units={units}
        borderApplied={false}
      />
      <SizeList
        selectedUnit={selectedUnit}
        sizeOptions={sizeOptions}
        options={options}
        handleClickSizeSelect={handleClickSizeSelect}
        selectedOption={selectedOption}
      />
    </Wrapper>
  );
};

export default SizeChart;
