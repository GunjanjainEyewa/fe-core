const FORMAT = /(tr[:])(.*)(,cm[-]pad[_]resize)/;

interface ImageOverlay {
  type:string;
}

interface ImageDetails {
  overlay: ImageOverlay[];
}

interface Overlay {
  image: string;
  w: number;
  x:number;
  h:number;
  y:number;
  type: string;
}

interface Default {
  overlay: Overlay[];
  width: number;
  height: number;
}

interface ConciousLogo {
  imageData: {
    url: string;
    imageDetails: ImageDetails[];
  };
  imageDeviceDetails: {
    default: Default[];
  };
  imageDimension: {
    imageWidth: number,
    imageHeight: number
  };
}

export const scaleImage = (
  { url, width, height }: { url: string, width?: number, height?: number},
): string => {
  let qs = '';

  let newUrl = `${url}`;
  if (width || height) {
    if (url.indexOf('?') === -1) {
      qs = '?';
    }
    qs += 'tr=';
    if (width) {
      qs += `w-${width},`;
    }
    if (height) {
      qs += `h-${height},`;
    }
    qs += 'cm-pad_resize';
  }

  newUrl += qs;

  return newUrl;
};

export const scaleImageInUri = (
  { url, width, height }: { url: string, width?: number, height?: number},
): string => {
  let requiredFormat = '';
  let separator = '';
  if (width) {
    requiredFormat += `w-${width}`;
    separator = ',';
  }
  if (height) {
    requiredFormat += `${separator}h-${height}`;
  }
  if ((width || height) && url.match(FORMAT)) {
    return url.replace(FORMAT, `$1${requiredFormat}$3`);
  }
  return url;
};

export const hack = true;

export const getConciousLogoUrl = (data: ConciousLogo) => {
  const { imageData, imageDeviceDetails, imageDimension } = data;
  const { url, imageDetails = [] } = imageData;
  if (url && imageDeviceDetails && imageDetails && imageDimension) {
    const { imageWidth, imageHeight } = imageDimension;
    const { overlay = [], width, height } = imageDeviceDetails?.default[0];
    const { type } = imageDetails[0]?.overlay[0];
    const logo = overlay?.find((types: any) => types.type === type);
    const { x, y, w } = logo;
    const logoName = logo?.image?.split('logox_')[1];
    const dimentionX = (x / width) * imageWidth;
    const dimentionY = (y / height) * imageHeight;
    const dimentioW = (w / x) * dimentionX;
    return `${url}?tr=w-${imageWidth},h-${imageHeight},pr-true:oi-@@media@@consc@@logox_${logoName},ox-${dimentionX},oy-${dimentionY},ow-${dimentioW}`;
  }
  return url || '';
};
