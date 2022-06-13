import { CTAInfo } from '../../types/transformer';
import { ApiResponse } from '../../types/api';
import { PLATFORM } from '../../constants';


const getDomainName = (platform: string) => {
  switch (platform) {
    case PLATFORM.NYKAA: {
      return 'NYKAA';
    }

    case PLATFORM.FASHION: {
      return 'NYKAA_FASHION';
    }

    case PLATFORM.MEN: {
      return 'MEN';
    }

    default: {
      return platform;
    }
  }
};

const getCTAInfo = ({ wData = [], platform }: ApiResponse): CTAInfo => {
  const extractedData = wData.find((widget) => widget.wType === 'PRODUCT_ATC')?.data;
  const productInfo = wData.find((widget) => widget.wType === 'PRODUCT_PRIMARY_INFO')?.data;
  const shouldShowViewBag = platform === PLATFORM.FASHION;

  return {
    ...extractedData, productId: productInfo.id, domain: getDomainName(platform), shouldShowViewBag,
  };
};

export default getCTAInfo;
