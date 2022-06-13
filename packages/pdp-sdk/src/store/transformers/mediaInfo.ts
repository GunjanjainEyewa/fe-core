import { MediaInfo } from '../../types/transformer';
import { ApiResponse } from '../../types/api';

const getMediaInfo = ({ wData = [], platform }: ApiResponse): MediaInfo => {
  const { productMediaList } = wData.find(
    (widget) => widget.wType === 'PRODUCT_PRIMARY_INFO',
  )?.data;

  const [carouselWidth, carouselHeight] = platform === 'fashion' ? [280, 373] : [280, 280];

  return {
    carouselWidth,
    carouselHeight,
    images: productMediaList,
  };
};

export default getMediaInfo;
