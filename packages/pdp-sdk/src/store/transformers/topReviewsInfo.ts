import { TopReviewWidget } from '../../types/transformer';
import { ApiResponse, WidgetsData } from '../../types/api';

const getTopReviewsInfo = ({ wData }: ApiResponse): TopReviewWidget => {
  const extractedData: WidgetsData = wData.find(
    (widget) => widget.wType === 'TOP_REVIEW',
  );

  return {
    type: 'TOP_REVIEW',
    data: extractedData?.data,
  };
};

export default getTopReviewsInfo;
