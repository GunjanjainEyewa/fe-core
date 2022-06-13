import { SizesWidget } from '../../types/transformer';
import { ApiResponse, WidgetsData } from '../../types/api';

const getSizesInfo = ({ wData = [] }: ApiResponse): SizesWidget => {
  const extractedData: WidgetsData = wData.find(
    (widget) => widget.wType === 'PRODUCT_PRIMARY_INFO',
  );

  return {
    type: 'SIZES',
    data: extractedData?.data?.options?.child?.sizeOptions,
  };
};

export default getSizesInfo;
