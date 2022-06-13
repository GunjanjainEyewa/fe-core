import { queryStringObjectFromUrl } from '@nykaa/utils/urls';
import {
  PRODUCT_IMAGE_MAGNIFY,
} from '../constants';


export const extractVideoId = (mediaUrl: string) => {
  let doesVideoIdExists = false;
  let videoId = '';
  if (mediaUrl.indexOf('?') >= 0) {
    const params = queryStringObjectFromUrl(mediaUrl);
    videoId = params?.v;
    doesVideoIdExists = true;
  } else {
    const urlArray = mediaUrl.split('/');
    if (Array.isArray(urlArray) && (urlArray.length > 1)) {
      videoId = urlArray?.slice(-1)[0];
      doesVideoIdExists = true;
    }
  }
  return { doesVideoIdExists, videoId };
};

export const onLoadLargeImage = (wrapperHeight: number, wrapperWidth: number) => {
  const magnifierImageRef = document?.querySelector<HTMLElement>(`.${PRODUCT_IMAGE_MAGNIFY}`);
  setTimeout(() => {
    const height = wrapperHeight || 520;
    const width = wrapperWidth || 610;
    const left = magnifierImageRef?.clientWidth || 0;
    if (magnifierImageRef) {
      magnifierImageRef.style.width = `${width}px`;
      magnifierImageRef.style.left = `${(left) + 5}px`;
      magnifierImageRef.style.height = `${height}px`;
    }
  }, 100);
};
