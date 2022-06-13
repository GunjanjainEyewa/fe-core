import React from 'react';
import styled from '@eyewa/ui-components/styles/styled';
import { updateSizeColumns } from '@eyewa/size-chart-shared/utils';
import { OptionData, UnitProps } from '@eyewa/size-chart-shared/types';
import { getMinWidth } from '../../utils';
import SizeList from './Data';
import Header from './Header';


interface WrapperProps {
  totalColumns: number;
}

const RightWrapper = styled.div`
  width: 100%;
  .size-chart-wrapper {
    min-width: ${({ totalColumns }: WrapperProps) => getMinWidth(totalColumns)};

    &.fixedWidth {
      width: ${({ totalColumns }: WrapperProps) => getMinWidth(totalColumns)};
    }
  }
`;

interface DataColumnProps {
  options: OptionData[];
  sizeOptions: UnitProps[];
  selectedUnit: string;
  headerHeight: string;

  handleSelectSize: (id: string) => void;
  selectedOption: string;
}

const DataColumn = (props: DataColumnProps) => {
  const {
    options, sizeOptions, selectedUnit,
    headerHeight,
    handleSelectSize,
    selectedOption,
  } = props;

  const updatedSizeOptions = updateSizeColumns({
    sizeData: options[0]?.sizeData,
    sizeColumns: sizeOptions,
    selectedUnit,
  });
  const totalColumns = updatedSizeOptions.length;
  const moreThan3Column = totalColumns > 3;
  const wrapperCustomClass = moreThan3Column ? 'fixedWidth' : '';
  return (
    <RightWrapper totalColumns={totalColumns}>
      <div className={`size-chart-wrapper ${wrapperCustomClass}`}>
        <Header
          sizeOptions={updatedSizeOptions}
          headerHeight={headerHeight}
        />
        {(options && updatedSizeOptions) && (
          <SizeList
            options={options}
            sizeOptions={updatedSizeOptions}
            selectedOption={selectedOption}
            selectedUnit={selectedUnit}
            handleSelectSize={handleSelectSize}
            headerHeight={headerHeight}
          />
        )}
      </div>
    </RightWrapper>
  );
};

export default DataColumn;
