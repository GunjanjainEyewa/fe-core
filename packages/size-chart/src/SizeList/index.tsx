import React, { useState, useEffect } from 'react';
import styled from '@eyewa/ui-components/styles/styled';
import { OptionData, UnitProps } from '@eyewa/size-chart-shared/types';
import { getHeaderHeight } from '../utils';
import FirstColumn from './FirstColumn';
import DataColumn from './DataColumn';


const Wrapper = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  display: flex;
  width: 100%;
  overflow: scroll;
  padding-top: 73px;
  height: calc(100vh - 56px);
  position: relative;
  top: 0;
  &.active-stock {
    height: calc(100vh - 181px);
  }
  &.active-out-stock {
    height: calc(100vh - 215px);
  }
`;

interface SizeChartProps {
  options: OptionData[];
  sizeOptions: UnitProps[];
  selectedUnit: string;
  handleClickSizeSelect: (id: string) => void;
  selectedOptionUnit: string
}

const SizeChart = (props: SizeChartProps) => {
  const {
    options, sizeOptions, selectedUnit,
    handleClickSizeSelect,
    selectedOptionUnit,
  } = props;

  const [selectedOption, setSelectedId] = useState(selectedOptionUnit || '');
  const [headerHeight, setHeaderHeight] = useState('');

  useEffect(() => {
    setHeaderHeight(
      getHeaderHeight(),
    );
  }, []);

  const handleSelectSize = (id: string) => {
    setSelectedId(id);
    handleClickSizeSelect(id);
  };

  const getCustomClass = () => {
    let customClass = '';
    if (selectedOption) {
      const optionData = options && options.find((option) => (option.id === selectedOption));
      const optionInStock = optionData && optionData.inStock;
      if (optionInStock) {
        customClass = 'active-stock';
      } else {
        customClass = 'active-out-stock';
      }
    }
    return customClass;
  };

  return (
    <Wrapper className={getCustomClass()}>
      <FirstColumn
        options={options}
        handleSelectSize={handleSelectSize}
        selectedOption={selectedOption}
        headerHeight={headerHeight}
      />
      {(options && sizeOptions) && (
        <DataColumn
          options={options}
          sizeOptions={sizeOptions}
          selectedUnit={selectedUnit}
          handleSelectSize={handleSelectSize}
          selectedOption={selectedOption}
          headerHeight={headerHeight}
        />
      )}
    </Wrapper>
  );
};

export default SizeChart;
