import { SiblingColorsWidget } from '../../types/transformer';
import { ApiResponse, WidgetsData } from '../../types/api';

const getColorsInfo = ({ wData }: ApiResponse): SiblingColorsWidget => {
  const extractedData: WidgetsData = wData.find(
    (widget) => widget.wType === 'PRODUCT_PRIMARY_INFO',
  );

  return {
    type: 'COLORS',
    data: extractedData?.data?.options?.siblings?.colorOptions,
  };
};

export default getColorsInfo;
