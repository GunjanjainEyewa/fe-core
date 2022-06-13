import { UnitProps } from '@eyewa/size-chart-shared/types';
import {
  SIZE_CHART_OVERLAY,
  SIZE_CHART_SIDENAV,
  MIN_SIZE_CHART_WIDTH,
  HEADER_COLUMN_WIDTH,
  MAX_COLUMN_WIDTH,
} from '@eyewa/size-chart-shared/constants';


const getWidth = (columns: UnitProps[]) => {
  if (!(columns) || columns?.length === 0) {
    return 0;
  }
  if (columns?.length <= 2) {
    return MIN_SIZE_CHART_WIDTH;
  }
  return (HEADER_COLUMN_WIDTH + (columns.length) * MAX_COLUMN_WIDTH);
};

export const closeSizeChart = (unSelectVariantOncloseChart: () => void) => {
  const sizeChartNav = document?.getElementById(SIZE_CHART_SIDENAV);
  const overlayNode = document?.getElementById(SIZE_CHART_OVERLAY);
  if (sizeChartNav && overlayNode) {
    sizeChartNav.style.minWidth = '0';
    overlayNode.style.display = 'none';
    unSelectVariantOncloseChart();
  }
};

export const openSizeChart = (columns: UnitProps[]) => {
  const sizeChartNav = document?.getElementById(SIZE_CHART_SIDENAV);
  const overlayNode = document?.getElementById(SIZE_CHART_OVERLAY);
  const minWidth = getWidth(columns);
  if (sizeChartNav && overlayNode) {
    sizeChartNav.style.minWidth = `${minWidth}px`;
    overlayNode.style.display = 'block';
  }
};

export default getWidth;
