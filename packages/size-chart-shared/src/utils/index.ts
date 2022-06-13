import {
  SizeDataProps,
  UnitProps,
  TransformedSizeProps,
} from '../types';
import { SIZE_CHART_LIST, MIN_ROW_HEIGHT } from '../constants';


export const transformedSizeData = ({ sizeData, sizeColumns }: SizeDataProps) => {
  const transformedData: TransformedSizeProps[] = [];
  if (sizeColumns && sizeData) {
    sizeColumns.map((column) => (
      transformedData.push({
        ...column,
        data: sizeData[column.id],
      })
    ));
  }
  return transformedData;
};


export const updateSizeColumns = ({
  sizeData,
  sizeColumns,
  selectedUnit,
}: SizeDataProps) => {
  const updatedColumns: UnitProps[] = [];
  if (sizeColumns && sizeData) {
    sizeColumns.map((column) => {
      const sizeColumn = sizeData[column.id];
      const sizeValue = sizeColumn[selectedUnit];
      if (sizeValue) {
        updatedColumns.push(column);
      }
      return updatedColumns;
    });
  }
  return updatedColumns;
};

export const getDummyRowData = (optionsLength: number) => {
  const offSetTop = document?.getElementById(SIZE_CHART_LIST).offsetTop;
  const clientHeight = window?.innerHeight;
  const sizeChartLength = (offSetTop + (optionsLength) * MIN_ROW_HEIGHT) + 100;
  const emptySpace = clientHeight - sizeChartLength;
  let dummyOptions = [];
  if (emptySpace > 0) {
    const requiredRow = Math.ceil(emptySpace / MIN_ROW_HEIGHT);
    dummyOptions = new Array(requiredRow).fill(0);
  }
  return dummyOptions;
};
