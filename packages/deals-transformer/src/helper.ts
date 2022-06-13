const SHADE = 'Shade';
const SIZE = 'Size';

export const getTrackingParams = (
  inventoryName :string = '',
  positionInParent:number,
  trackingParam: string,
): string => {
  const params = [];
  params.push(inventoryName.replace('.', ','));
  params.push(positionInParent);
  params.push(trackingParam);
  return params.join(',');
};

export const getUrlWithTrackingParams = (url: string = '', trackingParams: string): string => {
  if (url.indexOf('?') > -1) {
    return `${url}&intcmp=${trackingParams}`;
  }
  return `${url}?intcmp=${trackingParams}`;
};

export const getRoundedDiscount = (discount: number) => {
  const parsedDiscount = Number(discount);

  if (Number.isNaN(parsedDiscount)) {
    return 0;
  }

  const roundedNumber = Math.round(parsedDiscount);
  if (roundedNumber < 0) {
    return 0;
  }

  if (roundedNumber > 100) {
    return 100;
  }

  return roundedNumber;
};

export const getImageUrl = (media: any[]) => {
  let imageUrl = '';

  if (media) {
    imageUrl = media[0].url || '';
  }
  return imageUrl;
};

export const getVariantType = (productTypeFromGludo: string): string => {
  switch (productTypeFromGludo) {
    case 'shade':
      return SHADE;

    case 'weight_configure':
      return SIZE;

    default:
      return ' ';
  }
};
