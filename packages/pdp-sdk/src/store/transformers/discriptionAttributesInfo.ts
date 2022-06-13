import { ApiResponse, WidgetsData } from '../../types/api';
import { DescAttributesInfo, ProductAttributeInfo } from '../../types/transformer';

const PRODUCT_INFO_SLUGS = {
  COUNTRY_OF_ORIGIN: 'country_of_origin',
  SOLD_BY: 'sold_by',
};

const NYKAA_FASHION = 'nykaa fashion';
const SOLD_BY_NYKAA_FASHION_URL = '/lp/sold-by-nykaa-fashion?src=app';

const getDescriptionAttributesInfo = ({
  wData, platform,
}: ApiResponse): DescAttributesInfo => {
  const extractedData: WidgetsData = wData.find(
    (widget) => widget.wType === 'PRODUCT_DESCRIPTION',
  );

  const data: ProductAttributeInfo[] = extractedData?.dataList;

  data.forEach((attr) => {
    const d = attr;

    // adjust column width
    d.shouldShowAsColumn = d.slug === PRODUCT_INFO_SLUGS.SOLD_BY
      || d.slug === PRODUCT_INFO_SLUGS.COUNTRY_OF_ORIGIN;

    if (
      d.slug === PRODUCT_INFO_SLUGS.SOLD_BY
      && d?.value.toLowerCase().indexOf(NYKAA_FASHION) > -1 && platform === 'fashion'
    ) {
      d.actionUrl = SOLD_BY_NYKAA_FASHION_URL;
    }
  });

  return {
    title: extractedData.wSubTitle,
    list: data,
  };
};

export default getDescriptionAttributesInfo;
