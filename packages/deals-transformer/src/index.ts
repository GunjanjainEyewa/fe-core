import { inventoryTransformer } from './inventory';

const getTransformedData = (
  data: any[],
  isDesktop: boolean,
): any => {
  if (!data || data.length < 1) {
    return [];
  }
  const transformedData = data.map((item) => inventoryTransformer(item, isDesktop));


  return { widgets: transformedData, styles: {} };
};

export default getTransformedData;
